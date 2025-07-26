<?php

namespace portfolio;

include "$_SERVER[DOCUMENT_ROOT]/app/solarday/index.php";

use \Exception;
use \DateTime;
use \League\CommonMark\CommonMarkConverter;
use GuzzleHttp\Client;
use \portfolio;
use \DOMDocument;
use function file_get_contents;
use \Imagick;



header('X-Frame-Options: *');
header_remove("Expect-CT");
define("CDN", "https://cdn.markonikolic98.com/");
define("API_HOST", "https://api.eronelit.com/app&id=A03429468246&blog=");
define("ROOT", "$_SERVER[DOCUMENT_ROOT]/app/");
define("HOST", "$_SERVER[DOCUMENT_ORIGIN]");
if (!empty($_GET['p'])) {
    if ($_GET['p'] == "blog") {
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
    }
}

if (!empty($_GET['api'])) {
    if ($_GET['api'] == "avatar") {
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header("Content-Type: image/png");
        @readfile("$_SERVER[DOCUMENT_ROOT]/app/img/slika314.jpg");
        exit();
    }
}

if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $redirect);
    exit();
}


/**
 * Summary of HtmlModifier
 */
class HtmlModifier
{

    private function replaceUrlInTag(string $type, string $htmlContent, string $oldUrlToFind, string $newUrl): string
    {
        $attribute = '';
        $tag = '';
        $isInlineContent = false;

        switch (strtolower($type)) {
            case 'link':
                $tag = 'link';
                $attribute = 'href';
                break;
            case 'script':
                $tag = 'script';
                $attribute = 'src';
                break;
            case 'img':
                $tag = 'img';
                $attribute = 'src';
                break;
            case 'video':
                $tag = 'video';
                $attribute = 'src';
                break;
            case 'inline_script':
                $tag = 'script';
                $isInlineContent = true;
                break;
            case 'inline_style':
                $tag = 'style';
                $isInlineContent = true;
                break;
            default:
                trigger_error("Nepodržan tip taga: '$type'. Podržani tipovi su 'link', 'script', 'img', 'video', 'inline_script', 'inline_style'.", E_USER_WARNING);
                return $htmlContent;
        }

        if ($isInlineContent) {
            $pattern = '/(<' . $tag . '[^>]*>)(.*?)(<\/' . $tag . '>)/is';

            $replacedContent = preg_replace_callback(
                $pattern,
                function ($matches) use ($oldUrlToFind, $newUrl) {
                    $tagStart = $matches[1];
                    $content = $matches[2];
                    $tagEnd = $matches[3];

                    $modifiedContent = str_replace($oldUrlToFind, $newUrl, $content);

                    return $tagStart . $modifiedContent . $tagEnd;
                },
                $htmlContent
            );
        } else {
            $pattern = '/(<' . $tag . '[^>]*?' . $attribute . '=["\'])' . preg_quote($oldUrlToFind, '/') . '(["\'][^>]*>)/i';

            $replacedContent = preg_replace_callback(
                $pattern,
                fn($matches) => $matches[1] . $newUrl . $matches[2],
                $htmlContent
            );
        }

        return $replacedContent;
    }


    /**
     * Summary of updateHtml
     * @param string $type
     * @param string $htmlContent
     * @param string $oldUrlToFind
     * @param string $newUrl
     * @return string
     */
    public function updateHtml(string $type, string $htmlContent, string $oldUrlToFind, string $newUrl): string
    {
        return $this->replaceUrlInTag($type, $htmlContent, $oldUrlToFind, $newUrl);
    }

    /**
     * Summary of updateExternalFileContent
     * @param string $filePath
     * @param string $oldString
     * @param string $newString
     * @return bool
     */
    public function updateExternalFileContent(string $filePath, string $oldString, string $newString): bool
    {
        if (!file_exists($filePath)) {
            trigger_error("Fajl ne postoji: '$filePath'.", E_USER_WARNING);
            return false;
        }

        if (!is_readable($filePath)) {
            trigger_error("Fajl nije čitljiv: '$filePath'. Proverite dozvole.", E_USER_WARNING);
            return false;
        }

        $fileContent = file_get_contents($filePath);
        if ($fileContent === false) {
            trigger_error("Greška pri čitanju fajla: '$filePath'.", E_USER_WARNING);
            return false;
        }

        $modifiedContent = str_replace($oldString, $newString, $fileContent);

        if ($modifiedContent === $fileContent) {
            return true;
        }

        if (!is_writable($filePath)) {
            trigger_error("Fajl nije pisiv: '$filePath'. Proverite dozvole.", E_USER_WARNING);
            return false;
        }

        $result = file_put_contents($filePath, $modifiedContent);

        if ($result === false) {
            trigger_error("Greška pri pisanju u fajl: '$filePath'.", E_USER_WARNING);
            return false;
        }

        return true;
    }

}

/**
 * Summary of RSS
 * RSS PARSER
 */
class RSS
{
    /**
     * Summary of getOgImage
     * @param mixed $url
     * @return string
     */
    public function getOgImage($url)
    {
        $html = @file_get_contents($url);
        if (!$html)
            return "";

        $doc = new DOMDocument();
        @$doc->loadHTML($html);

        $tags = $doc->getElementsByTagName('meta');
        foreach ($tags as $tag) {
            if ($tag->getAttribute('property') === 'og:image') {
                return $tag->getAttribute('content');
            }
        }
        return "";
    }
    /**
     * Summary of RSS
     * @param mixed $rss_feeds
     * @return bool|string
     */
    public function RSS($rss_feeds = [])
    {
        $rss_feeds = [
            "NASA" => "https://www.nasa.gov/rss/dyn/breaking_news.rss",
            "BBC" => "http://feeds.bbci.co.uk/news/rss.xml",
            "CNN" => "http://rss.cnn.com/rss/edition.rss"
        ];
        $forbidden_words = [
            "porno",
            "seks",
            "adult",
            "xxx",
            "nasilje",
            "ubistvo",
            "krv",
            "rat",
            "violence",
            "murder",
            "blood",
            "war",
            "terror",
            "kill",
            "death",
            "gun",
            "weapon",
            "abuse",
            "violence",
            "meurtre",
            "sang",
            "guerre",
            "terreur",
            "tuer",
            "mort",
            "arme",
            "abus",
            "crime",
            "gewalt",
            "mord",
            "blut",
            "krieg",
            "terror",
            "töten",
            "tod",
            "waffe",
            "missbrauch",
            "verbrechen",
            "насилие",
            "убийство",
            "кровь",
            "война",
            "террор",
            "убить",
            "смерть",
            "оружие",
            "преступление",
            "жестокость"
        ];
        $news = [];

        foreach ($rss_feeds as $source => $url) {
            $rss = simplexml_load_file($url);
            if ($rss) {
                foreach ($rss->channel->item as $item) {
                    $title = (string) $item->title;
                    $description = (string) $item->description;
                    $link = (string) $item->link;
                    $pubDate = (string) $item->pubDate;
                    $formattedDate = date("Y-m-d H:i:s", strtotime($pubDate));

                    $is_forbidden = false;
                    foreach ($forbidden_words as $word) {
                        if (stripos($title, $word) !== false || stripos($description, $word) !== false) {
                            $is_forbidden = true;
                            break;
                        }
                    }
                    if ($is_forbidden)
                        continue;

                    $og_image = self::getOgImage($link);

                    $news[] = [
                        "source" => $source,
                        "title" => $title,
                        "link" => $link,
                        "image" => $og_image,
                        "date" => $formattedDate
                    ];
                }
            }
        }
        usort($news, fn($a, $b) => strtotime($b["date"]) - strtotime($a["date"]));
        return json_encode($news, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
    /**
     * Summary of RSSFEED
     * @param mixed $rss_url
     * @return array[]|array{description: string, entries: array, link: string, title: string}
     */
    public function RSSFEED($rss_url = "")
    {
        $rss_content = file_get_contents($rss_url);
        if ($rss_content === false) {
            echo json_encode([]);
        }
        $xml = simplexml_load_string($rss_content, "SimpleXMLElement", LIBXML_NOCDATA);
        if ($xml === false) {
            echo json_encode([]);
            exit();
        }
        $json_data = [
            "title" => (string) $xml->channel->title,
            "link" => (string) $xml->channel->link,
            "description" => (string) $xml->channel->description,
            "preview" => (string) self::getOgImage($xml->channel->link),
            "entries" => []
        ];
        foreach ($xml->channel->item as $item) {
            $json_data["entries"][] = [
                "title" => (string) $item->title,
                "link" => (string) $item->link,
                "published" => (string) $item->pubDate,
                "summary" => (string) $item->description,
                "preview" => (string) self::getOgImage($item->link),

            ];
        }
        return $json_data;
    }


    /**
     */
    public function __construct()
    {
    }
}

//  header("Access-Control-Allow-Origin: *"); 
/**
 * Summary of portfolio_marko
 */
class portfolio_marko
{
    /**
     * Summary of serveVideo
     * @param mixed $filePath
     * @return never
     */
    public function serveVideo($filePath)
    {
        if (!file_exists($filePath)) {
            header("HTTP/1.1 404 Not Found");
            exit("File not found.");
        }

        $fileSize = filesize($filePath);
        $mimeType = mime_content_type($filePath);
        $range = $_SERVER['HTTP_RANGE'] ?? null;

        header("Content-Type: $mimeType");
        header("Accept-Ranges: bytes");

        if ($range) {
            // Parse the Range header
            [$range] = explode('=', $range, 2);
            [$start, $end] = explode('-', $range);

            $start = intval($start);
            $end = ($end === "") ? ($fileSize - 1) : intval($end);
            $length = $end - $start + 1;

            header("HTTP/1.1 206 Partial Content");
            header("Content-Range: bytes $start-$end/$fileSize");
            header("Content-Length: $length");

            $file = fopen($filePath, "rb");
            fseek($file, $start);
            $bufferSize = 8192;

            while (!feof($file) && ($start <= $end)) {
                $chunkSize = min($bufferSize, $end - $start + 1);
                $data = fread($file, $chunkSize);
                echo $data;
                flush();
                $start += $chunkSize;
            }

            fclose($file);
        } else {
            header("Content-Length: $fileSize");
            readfile($filePath);
        }


        exit;
    }
    public function fetchUrlData($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $response = curl_exec($ch);
        if ($response === false) {
            $error = curl_error($ch);
            curl_close($ch);
            return "cURL Error: $error";
        }
        curl_close($ch);
        return $response;
    }
    function streamVideo($filePathf)
    {
        $filePath = "$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/image/$filePathf";
        $filePath = str_replace("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/image/$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/image/", "$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/image/", $filePath);

        $size = filesize($filePath);
        $length = $size;
        $start = 0;
        $end = $size - 1;

        if (isset($_SERVER['HTTP_RANGE'])) {
            $range = $_SERVER['HTTP_RANGE'];
            $range = str_replace('bytes=', '', $range);
            $range = explode('-', $range);

            if (count($range) === 2) {
                $start = $range[0];
                $end = $range[1] ? $range[1] : $size - 1;
            } else {
                $start = $range[0];
            }

            $length = ($end - $start) + 1;

            header("HTTP/1.1 206 Partial Content");
            header("Content-Range: bytes $start-$end/$size");
        } else {
            header("HTTP/1.1 200 OK");
        }

        $f = @fopen($filePath, 'rb');

        if (!$f) {
            header("HTTP/1.1 500 Internal Server Error");
            exit;
        }

        // Set headers
        header("Content-Type: video/mp4");
        header("Content-Length: $length");
        header("Accept-Ranges: bytes");

        // Seek to the requested start position
        fseek($f, $start);

        // Send the file content in chunks
        $chunkSize = 1024 * 1024; // 1MB per chunk

        while (!feof($f) && ($pos = ftell($f)) <= $end) {
            if (connection_aborted())
                break;

            $remaining = $end - $pos + 1;
            $chunk = min($chunkSize, $remaining);

            echo fread($f, $chunk);
            flush();
        }

        fclose($f);
    }



    function get_BUILD($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPGET, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            echo $response;
        } else {
            echo "EMPTY.";
        }
        curl_close($ch);
    }
    public function __construct($root = "")
    {
        $fullUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        if (strpos($fullUrl, '.php') !== false || strpos($fullUrl, '.html') !== false || strpos($fullUrl, '.aspx') !== false) {
            $this->error_page(404);
        } else {
            $this->RUN();
        }
    }
    function iframeProbe($id, $date)
    {

        $ar = "
        <style type='text/css'>
        .page {
            page-break-after: always;
        }
        
        .table-of-contents li{
            list-style-type: initial;
        }
        
        .embed_posts {
            border: 2px solid white;
            border-radius: 6px;
            background: rgb(0 0 0 / 74%);
            display: block;
        }
        
        .embed_posts iframe {
            margin: 0px !important;
        }
        
        .embed_posts p {
            margin: 0px;
            background: white;
            color: black !important;
            padding: 10px;
            display: block;
        }
        
        .embed_posts p .a_icon {
            font-family: 'bootstrap-icons' !important;
            color: black !important;
            padding-bottom: 2px !important;
            float: right;
            }
            * {
                outline: none !important;
            }
        </style>
        <div class='embed_posts'> 
        <p>Conected post <a 
        class='a_icon bi bi-box-arrow-up-right'
        title='Open in new tab' href='/?p=blog&id=$id' target='_blank'></a> </p>
        
        <iframe src='/?blog=$date' preload='none'  
        height='825' 
         width='504' frameborder='0'
        allowfullscreen='' title='Embedded post'></iframe>
        
         
            </div>";
        return $ar;
    }
    function get_by_curl($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://$_SERVER[HTTP_HOST]/?pages=$url");


        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            echo 'Curl error: ' . curl_error($ch);
        }
        curl_close($ch);
        echo "https://$_SERVER[HTTP_HOST]/?pages=$url";
    }
    function Pages_base64($h = "home")
    {
        header('Content-Type: text/html; charset=utf-8');

        if ($h == "home") {

            $aer = file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/welcomer.php");
            $pages_base64 = base64_encode($aer);
        }
        if ($h == "cv-pdf") {

            ob_start();
            include_once("$_SERVER[DOCUMENT_ROOT]/app/visitcard/ff_FA/cv_pdf/index.php");
            $pages_base64 = base64_encode(utf8_decode(ob_get_contents()));
            ob_get_clean();
        }
        if ($h == "visitcard") {
            $pages_base64 = base64_encode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/visitcard/index1.php"));
        }
        return $pages_base64;
    }
    /**
     * Summary of getOpenGraphData
     * @param mixed $url
     * @return string[]|null
     */
    public function getOpenGraphData($url)
    {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36',
            CURLOPT_TIMEOUT => 10,
        ]);
        $html = curl_exec($ch);
        curl_close($ch);

        if (!$html)
            return null;

        libxml_use_internal_errors(true);
        $doc = new DOMDocument();
        @$doc->loadHTML($html);

        $tags = $doc->getElementsByTagName('meta');
        $ogData = [];

        foreach ($tags as $tag) {
            if ($tag->hasAttribute('property') && strpos($tag->getAttribute('property'), 'og:') === 0) {
                $property = str_replace('og:', '', $tag->getAttribute('property'));
                $content = $tag->getAttribute('content');
                $ogData[$property] = $content;
            }
        }

        return $ogData;
    }
    public function get_data(
        $r = [
            "data" => [],
            "url" => "",
            "headers" => []
        ],
        $testMode = true
    ) {
        return file_get_contents("$_SERVER[DOCUMENT_ROOT]/temp.json");
        $ch = curl_init($r['url']);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
        curl_setopt($ch, CURLOPT_TIMEOUT, 6); // Set a timeout for fast response
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false); // Follow redirects if necessary
        curl_setopt($ch, CURLOPT_POST, true);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

        curl_setopt($ch, CURLOPT_HTTPHEADER, $r['headers']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $r['data']);
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            //    echo json_encode([]);
            echo curl_error($ch);
        } else {
            return $response;
        }

        curl_close($ch);
        /*
        if ($_SERVER['HTTP_HOST'] == "portfolio.localhost") {
            return file_get_contents("$_SERVER[DOCUMENT_ROOT]/temp.json");
        } else {
            $ch = curl_init($r['url']);

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
            curl_setopt($ch, CURLOPT_TIMEOUT, 6); // Set a timeout for fast response
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false); // Follow redirects if necessary
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $r['headers']);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $r['data']);
            $response = curl_exec($ch);
            if (curl_errno($ch)) {
                echo json_encode([]);
            } else {
                return $response;
            }

            curl_close($ch);
        }*/
    }
    function minifyHtmlCss(string $htmlCss): string
    {
        $htmlCss = preg_replace('#/\*[\s\S]*?\*/#', '', $htmlCss);
        $htmlCss = preg_replace('#<!--[\s\S]*?-->#', '', $htmlCss);
        $htmlCss = str_replace(["\r\n", "\r", "\n", "\t"], ' ', $htmlCss);
        $htmlCss = preg_replace('/\s+/', ' ', $htmlCss);
        $htmlCss = preg_replace('/>\s+</', '><', $htmlCss);
        return trim($htmlCss);
    }
    function minifyCSS($css)
    {
        $css = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css);
        $css = str_replace(': ', ':', $css);

        $css = str_replace(["\r\n", "\r", "\n", "\t", '  ', '    ', '    '], '', $css);

        return $css;
    }
    function minifyJS($js)
    {
        preg_match_all('/https?:\/\/[^\s"\']+/', $js, $matches);
        $links = $matches[0];
        $placeholders = array_map(function ($index) {
            return "___LINK_PLACEHOLDER_" . $index . "___";
        }, array_keys($links));
        $js = str_replace($links, $placeholders, $js);
        $js = preg_replace('~/\*[^*]*\*+([^/][^*]*\*+)*/~', '', $js);
        $js = preg_replace('~//.*~', '', $js);
        $js = preg_replace('/\s*([{}|:;,])\s*/', '$1', $js);
        $js = preg_replace('/\s\s+/', ' ', $js);
        $js = trim($js);
        $js = str_replace($placeholders, $links, $js);
        return $js;
    }
    function minifyJSFile($inputFile)
    {
        if (file_exists($inputFile)) {
            $js = file_get_contents($inputFile);
            $minifiedJs = $this->minifyJS($js);
            return $minifiedJs;
        } else {
            echo "";
        }
    }
    function Getbearer()
    {
        $headers = null;
        if (isset($_SERVER['Authorization'])) {
            $headers = trim($_SERVER["Authorization"]);
        } elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
        } elseif (function_exists('apache_request_headers')) {
            $requestHeaders = apache_request_headers();
            if (isset($requestHeaders['Authorization'])) {
                $headers = trim($requestHeaders['Authorization']);
            }
        }
        if (!empty($headers) && preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
            return $matches[1];
        }
        return null;
    }
    private function minifySVG($svg)
    {
        $svg = preg_replace('/<!--.*?-->/s', '', $svg);
        $svg = preg_replace('/>\s+</', '><', $svg);
        $svg = preg_replace('/\s+/', ' ', $svg);
        $svg = preg_replace('/\s*(=|>|<)\s*/', '$1', $svg);

        return trim($svg);
    }
    function fetchJsonData(string $url): ?string
    {
        // pokušaj file_get_contents
        $json = @file_get_contents($url);
        if ($json !== false) {
            return $json;
        }
        // fallback na cURL
        if (function_exists('curl_init')) {
            $ch = curl_init($url);
            curl_setopt_array($ch, [
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_TIMEOUT => 10,
            ]);
            $json = curl_exec($ch);
            curl_close($ch);
            return $json !== false ? $json : null;
        }
        return null;
    }

    private function getAuthorizationHeader()
    {
        $rls = null;
        if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $rls = trim($_SERVER["HTTP_AUTHORIZATION"]);

        } elseif (function_exists('getallheaders')) {
            $headers = getallheaders();
            if (isset($headers['Authorization'])) {
                $rls = trim($headers['Authorization']);
            }
        }

        return $rls;
    }

    private function getBearerToken()
    {
        $authHeader = self::getAuthorizationHeader();
        if ($authHeader && preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            return $matches[1];
        }
        return null;
    }

    private function xor_encrypt($text, $key)
    {
        $text_bytes = mb_convert_encoding($text, 'UTF-8');
        $key_bytes = mb_convert_encoding($key, 'UTF-8');
        $result = '';
        for ($i = 0, $j = 0; $i < strlen($text_bytes); $i++, $j++) {
            if ($j >= strlen($key_bytes))
                $j = 0;
            $result .= $text_bytes[$i] ^ $key_bytes[$j];
        }
        return $result;
    }



    private function js_to_dna($text)
    {
        $binary = '';
        foreach (str_split($text) as $c) {
            $binary .= sprintf('%08b', ord($c));
        }

        $dna = '';
        for ($i = 0; $i < strlen($binary); $i += 2) {
            $pair = substr($binary, $i, 2);
            switch ($pair) {
                case '00':
                    $dna .= 'A';
                    break;
                case '01':
                    $dna .= 'C';
                    break;
                case '10':
                    $dna .= 'G';
                    break;
                case '11':
                    $dna .= 'T';
                    break;
            }
        }

        return $dna;
    }

    private function format_dna_array($dna, $line_length = 60)
    {
        $lines = str_split($dna, $line_length);
        $quoted = array_map(fn($l) => '"' . $l . '"', $lines);
        return "[\n  " . implode(",\n  ", $quoted) . "\n]";
    }

    public function protect_js_dna($js_code)
    {
        $js_code = $this->minifyJS_code($js_code);
        $dna = $this->js_to_dna($js_code);

        return <<<JS
    (function(){
      "use strict";
      try {
        const dna = "$dna";
        const bin = dna.match(/.{1}/g).map(l => {
          return {"A":"00","C":"01","G":"10","T":"11"}[l];
        }).join("");
        const bytes = bin.match(/.{8}/g).map(b => parseInt(b, 2));
        const decoded = new TextDecoder().decode(new Uint8Array(bytes));
        (1,eval)(decoded);
      }catch(ex){}
    })();
    JS;
    }

    private function protect_js($js_code)
    {

        return self::protect_js_dna($js_code);

        $js_code = self::minifyJS_code($js_code);

        $host = $_SERVER['HTTP_HOST'];

        $encrypted = self::xor_encrypt($js_code, $host);
        $b64 = base64_encode($encrypted);

        $parts = str_split($b64, rand(20, 40));
        $joined = implode('"+ "', $parts);

        return <<<JS
(function(){
  "use strict";   
  try {
    const _0x4f2 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
    const __ = h => new TextEncoder().encode(h);
    const $$ = (arr, key) => arr.map((v, i) => v ^ key[i % key.length]);
    const ___ = bin => new TextDecoder().decode(bin);
    const _b64 = "$joined";
    const _bin = _0x4f2(_b64);
    const _key = __(location.host);
    const _dec = $$(_bin, _key);
    const _src = ___(_dec);
    (1,eval)(_src); 
  } catch(e) {
    console.log("⛔️", e.message);
    window.stop?.();
  }
})();
JS;
    }
    private function minifyJS_code($code = "")
    {


        $code = preg_replace('#/\*.*?\*/#s', '', $code);
        $lines = explode("\n", $code);
        foreach ($lines as &$line) {
            $quote_open = false;
            $escaped = false;
            $out = '';
            for ($i = 0; $i < strlen($line); $i++) {
                $char = $line[$i];
                if ($char === '"' || $char === "'") {
                    if (!$escaped && (!$quote_open || $quote_open === $char)) {
                        $quote_open = $quote_open === $char ? false : $char;
                    }
                }

                if (!$quote_open && substr($line, $i, 2) === '//' && !preg_match('#https?:\/\/#', substr($line, 0, $i + 2))) {
                    break;
                }

                $escaped = ($char === '\\' && !$escaped);
                $out .= $char;
            }
            $line = rtrim($out);
        }

        return implode("\n", $lines);
    }


    private function readLargeFile($path)
    {
        $handle = fopen($path, "rb");
        if (!$handle) {
            throw new Exception(self::error_page(404));
        }

        $content = '';
        while (!feof($handle)) {
            $content .= fread($handle, 1024 * 1024);
        }
        fclose($handle);
        return $content;
    }

    private function get_SVSG()
    {
        $svg = file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/sf.xml");


        $xml = simplexml_load_string($svg);
        $xml->registerXPathNamespace('svg', 'http://www.w3.org/2000/svg');

        $symbols = $xml->xpath('//svg:symbol');

        $output = [];

        foreach ($symbols as $symbol) {
            $id = (string) $symbol['id'];
            $viewBox = isset($symbol['viewBox']) ? (string) $symbol['viewBox'] : null;

            $paths = [];
            foreach ($symbol->path as $path) {
                $paths[] = [
                    'd' => (string) $path['d']
                ];
            }

            $output[] = [
                'id' => self::cleanId($id),
                'viewBox' => $viewBox,
                'paths' => $paths
            ];
        }

        return json_encode($output);

    }

    /**
     * Summary of gnerateJS
     * @return string 
     */
    private function gnerateJS()
    {
        $js_static = "";

        $f = $_SERVER['DOCUMENT_ROOT'] . '/app/build/minimain.js';
        $js_static .= "(function initWhenReady() { \"use strict\"; \n\n/* " . time() . " */\n";

        $js_static .= "const version = function(){
            return '" . time() . "';
        };";

        $js_static .= "const stmp = '" . base64_encode("$_SERVER[HTTP_HOST]") . "';";


        # $js_static .=  
        $js_static .= file_get_contents(ROOT . "s.js");
        $dir = dirname($f);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }
        // $data = self::protect_js_dna($js_static);
        $data =  self::minifyJS_code($js_static) ;
        unlink($f);
        file_put_contents($f, $data);
        header("Content-Type: application/javascript");
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        ob_start();
        return $data;
    }

    private function cleanId($id)
    {

        $id = preg_replace('/^\d+-/', '', $id);      // skida npr. 0- sa početka
        $id = str_replace(['bi-', 'bi'], '', $id);
        return $id;
    }

    private function ALLOW($file_or_string = false)
    {
        $allowedReferers = [
            'https://portfolio.localhost',
            'https://markonikolic98.com',
            'https://ark.markonikolic98.com',
        ];

        $referer = $_SERVER['HTTP_REFERER'] ?? '';

        $allowed = false;

        foreach ($allowedReferers as $allowedHost) {
            if (strpos($referer, $allowedHost) === 0) {
                $allowed = true;
                break;
            }
        }

        if (!$allowed) {
            self::error_page(404);
            exit();
        }
        $file_or_string = false;
        if ($file_or_string) {
            $lastModified = filemtime($file_or_string);

            header('Content-Type: application/javascript');
            header('Cache-Control: public, max-age=31536000');
            header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 31536000) . ' GMT');
            header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $lastModified) . ' GMT');

            if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE'])) {
                $ifModifiedSince = strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']);
                if ($ifModifiedSince >= $lastModified) {
                    header('HTTP/1.1 304 Not Modified');
                    exit;
                }
            }
        }
    }

    private function Pages($h = "home")
    {
        session_start();

        if ($h == "games") {

        } else if ($h == "demo") {
            header("X-Robots-Tag: noindex, nofollow");
            if (!empty($_GET['id'])) {
                $f = "$_SERVER[DOCUMENT_ROOT]/app/demos/$_GET[id].html";
                $fv = "$_SERVER[DOCUMENT_ROOT]/app/demos/$_GET[id].php";
                if (!empty($_GET['hangar'])) {
                    $file = "$_SERVER[DOCUMENT_ROOT]/app/demos/hangar/$_GET[id]/$_GET[hangar]";


                    $extension = '';

                    if (file_exists("$file.js")) {
                        $extension = 'js';
                    } elseif (file_exists("$file.jpg") || file_exists("$file.png")) {
                        $extension = 'png';
                    }
                    switch ($extension) {
                        case 'js':
                            header("Content-Type: text/javascript");
                            @readfile("$file.js");
                            exit();
                        case 'css':
                            header("Content-Type: text/javascript");
                            @readfile("$file.js");
                            exit();
                        case 'png':
                            header("content-type: image/png");
                            @readfile("$file.png");
                            // echo "$file.png";
                            exit();
                        default:
                            header("HTTP/1.0 404 Not Found");
                            echo "File not found.";
                            exit();
                    }
                } else {
                    if (file_exists($f)) {
                        header("Content-Type: text/html; charset=utf-8");
                        include "$_SERVER[DOCUMENT_ROOT]/app/demos/$_GET[id].html";
                        exit();
                    } else if (file_exists($fv)) {
                        header("Content-Type: text/html; charset=utf-8");
                        include "$_SERVER[DOCUMENT_ROOT]/app/demos/$_GET[id].php";
                        exit();
                    } else {
                        $this->error_page(404);
                        exit();
                    }
                }
            }
        }
        if ($h == "null") {
            $this->error_page(404);
            exit();
        }
        if ($h == "GM213-3LOC4SE24") {
            header("Content-Type: text/plain");
            exit();
        }
        if ($h == "mains") {


            $fileT = "$_SERVER[DOCUMENT_ROOT]/app/mainas.css";
            header("Content-Type: text/css");
            exit();
            header('Content-Length' . filesize($fileT));

            // header("Content-type: " . image_type_to_mime_type($mime_type));

            echo $this->minifyCSS(file_get_contents($fileT));

            exit();
        }
        if ($h == "demoidS3503hangarmain") {
        }
        if ($h == "jsjquery") {
            header("content-type: text/javascript");
            header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
            header("Cache-Control: post-check=0, pre-check=0", false);
            header("Pragma: no-cache");
            @readfile("$_SERVER[DOCUMENT_ROOT]/app/jquery.min.js");
            exit();
        }
        if ($h == "sitemap.xml") {
            self::sitemapGenerator();
            exit();
        }
        if ($h == "test") {
            header("content-type: text/html");
            @readfile("$_SERVER[DOCUMENT_ROOT]/app/index.html");
            exit();
        }

        if ($h == "socialnew" || $h == "social") {

            if (!empty($_GET['og_social'])) {
                switch ($_GET['og_social']) {
                    case "static":
                        header("Content-Type: text/javascript");
                        include $_SERVER['DOCUMENT_ROOT'] . '/app/demos/social/main.js';
                        break;
                    case "grid":
                        header("Content-type: image/svg+xml");

                        ?><svg xmlns='http://www.w3.org/2000/svg' opacity="0.4" width='200' height='200'
                            viewBox='0 0 800 800'>
                            <g fill='none' stroke='#455f647d' stroke-width='2.4'>
                                <path
                                    d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63' />
                                <path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764' />
                                <path
                                    d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880' />
                                <path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382' />
                                <path
                                    d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269' />
                            </g>
                            <g fill='#455f64'>
                                <circle cx='769' cy='229' r='10' />
                                <circle cx='539' cy='269' r='10' />
                                <circle cx='603' cy='493' r='10' />
                                <circle cx='731' cy='737' r='10' />
                                <circle cx='520' cy='660' r='10' />
                                <circle cx='309' cy='538' r='10' />
                                <circle cx='295' cy='764' r='10' />
                                <circle cx='40' cy='599' r='10' />
                                <circle cx='102' cy='382' r='10' />
                                <circle cx='127' cy='80' r='10' />
                                <circle cx='370' cy='105' r='10' />
                                <circle cx='578' cy='42' r='10' />
                                <circle cx='237' cy='261' r='10' />
                                <circle cx='390' cy='382' r='10' />
                            </g>
                        </svg><?php
                        break;
                    case "vk":
                        header("Content-type: image/svg+xml");
                        echo '<svg  viewBox="0 0 48 48" style="background: #0077ff;" fill="#0077ff" xmlns="http://www.w3.org/2000/svg">
<path d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z" fill="#0077FF"/>
<path d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z" fill="white"/>
</svg>
';
                        break;
                    case 'deviantart':
                        header("Content-type: image/svg+xml");
                        echo '
<svg viewBox="0 0 100 166.61" xmlns="http://www.w3.org/2000/svg" >
<path d="M100 0H71.32l-3.06 3.04-14.59 27.85-4.26 2.46H0v41.62h26.4l2.75 2.75L0 133.36v33.25l28.7-.01 3.07-3.05 14.62-27.86 4.17-2.41H100v-41.6H73.52L70.84 89 100 33.33" fill="#00e59b"/></svg>';
                        break;
                    default:
                        header("Content-Type: image/png");
                        @readfile("$_SERVER[DOCUMENT_ROOT]/app/og_social.png");

                        break;
                }
                exit();

            }

            $data = [

            ];

            header("Content-type: text/html");

            ob_start(function ($b) {
                return self::minifyHtmlCss($b);
            });


            if ($h == "socialnew" || $h == "new" || $h == "news") {
                include __DIR__ . '/demos/social/news.php';
            }
            if ($h == "social") {
                include __DIR__ . '/demos/social/social.php';
            }

            exit();
        }
        if ($h == "socialnew" || $h == "new" || $h == "news") {
            header("Content-type: text/html");

            ob_start(function ($b) {
                return self::minifyHtmlCss($b);
            });
            include __DIR__ . '/demos/social/news.php';

            exit();
        }

        if ($h == "mainss") {
            header("Content-Type: text/css");
            ob_start(function ($b) {
                return self::minifyHtmlCss($b);
            });
            #  include "$_SERVER[DOCUMENT_ROOT]/app/mainas.css";
            $file = __DIR__ . '/build/style_minifed.css';
            $cst = self::minifyHtmlCss(file_get_contents(__DIR__ . '/build/style.css'));

            if (!file_exists($file)) {
                file_put_contents($file, $cst);
            }
            header("Content-Type: text/css");
            include $file;
            exit();
        }
        if ($h == "video") {
            if (!$_SERVER['HTTP_REFERER'] == "/news" || !$_SERVER['HTTP_REFERER'] == "/socialnew") {
                self::error_page(404);
            }
            header("Content-Type: video/mp4");
            @readfile("$_SERVER[DOCUMENT_ROOT]/cinematic_MainMenu.mp4");
            exit();
        }
        if ($h == "feedjsont") {


        }

        if ($h == "pdf_viewer_logo") {
            header("Content-Type: image/svg+xml");

            ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45" fill="none" class="bi bi-square" viewBox="0 0 150 150"
                style="background: transparent;
-webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
">
                <mask id="myMask">
                    <circle cx="50" cy="50" r="30" fill="lightgray" stroke="#333" stroke-width="2" />

                </mask>
                <path
                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />


                <mask id="myMask">
                    <circle cx="50" cy="50" r="30" fill="lightgray" stroke="#333" stroke-width="2" />

                </mask>
                <svg id="logo_backscr" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                    style="background: rgb(169 169 169) !important;" preserveAspectRatio="xMidYMid slice">

                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <!-- Circle with a border -->
                        <circle cx="50" cy="50" r="35" fill="rgba(0, 0, 0, 0.639)" stroke="#fff" stroke-width="2" />
                        <foreignObject x="0" y="0" width="90" height="90">
                            <svg mask="url(#myMask)" id="logo_backscr" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                                style="background: rgb(169 169 169) !important;" preserveAspectRatio="xMidYMid slice">


                                <style type="text/css">
                                    * {
                                        margin: 0px;
                                        padding: 0px;

                                    }

                                    body {
                                        background: rgb(169 169 169) !important;

                                    }

                                    svg {
                                        position: fixed;
                                        left: 0px;
                                        top: 0px;
                                        width: 100%;
                                        height: 100%;
                                    }
                                </style>
                                <defs>
                                    <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                                        <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                                        <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
                                        <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
                                    </radialGradient>
                                    <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                                        <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite">
                                        </animate>
                                        <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
                                        <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
                                    </radialGradient>
                                    <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                                        <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite">
                                        </animate>
                                        <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
                                        <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
                                    </radialGradient>
                                    <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
                                        <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                                        <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
                                        <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
                                    </radialGradient>
                                    <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
                                        <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite">
                                        </animate>
                                        <stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
                                        <stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
                                    </radialGradient>
                                    <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
                                        <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite">
                                        </animate>
                                        <stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
                                        <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
                                    </radialGradient>
                                </defs>
                                <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)"
                                    transform="rotate(334.41 50 50)">
                                    <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
                                    <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s"
                                        repeatCount="indefinite"></animateTransform>
                                </rect>
                                <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)"
                                    transform="rotate(255.072 50 50)">
                                    <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                                    <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50"
                                        dur="12s" repeatCount="indefinite"></animateTransform>
                                </rect>
                                <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)"
                                    transform="rotate(139.903 50 50)">
                                    <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                                    <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s"
                                        repeatCount="indefinite"></animateTransform>
                                </rect>
                            </svg>
                        </foreignObject>
                    </svg>
                </svg>
            </svg><?php

            exit();
        }

        if ($h == "pdf_extractor") {

        }

        if ($h == "editor") {
            header("Content-Type: text/html");
            include __DIR__ . "/editor.php";
            exit();
        }

        if ($h == "mask") {
            header("Content-Type: image/png");
            @readfile("$_SERVER[DOCUMENT_ROOT]/app/build/mask.png");
            exit();
        }

        if ($h == "feedjson") {

            self::ALLOW();

            $r = $this->get_data([
                "url" => "https://api.markonikolic98.com/app&id=A03429468246&json=all",
                "headers" => [
                    'Content-Type: application/json',
                    'Authorization: Bearer 32M052k350QaeofkaeopfF',
                ]
            ]);

            header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
            header("Cache-Control: post-check=0, pre-check=0", false);
            header("Pragma: no-cache");

            header("content-type: text/javascript");

            #  echo "window.portfolio = $r;";
            # header("content-type: text/javascript");
            echo "var portfolio = $r; \n \n";
            if (strpos($_SERVER['HTTP_HOST'], ".localhost")) {
                echo "portfolio.host = 'https://api.localhost'; \n \n";
            }

            $css = file_get_contents(__DIR__ . '/build/style_minifed.css');

            echo "const mainss_import = `$css`;";
            exit();
        }
        if ($h == "sbct") {


            $file = __DIR__ . '/build/style_minifed.css';
            $cst = self::minifyHtmlCss(file_get_contents(__DIR__ . '/build/style.css'));

            unlink($file);
            file_put_contents($file, $cst);

            $icons = $_SERVER['DOCUMENT_ROOT'] . '/app/build/minimain_icon.json';

            unlink($icons);
            file_put_contents($icons, " window.svg_paths = " . self::get_SVSG() . ";");


            self::gnerateJS();
            echo time();
        }
        if ($h == "mainc") {
            

            $f = $_SERVER['DOCUMENT_ROOT'] . '/app/build/minimain_icon.json';
            if (!file_exists($f)) {
                file_put_contents($f, self::protect_js_dna(self::get_SVSG()));
            }
            self::ALLOW($f);
            header('Content-Type: application/javascript');
            include $f;
            exit();

        }
        if ($h == "main") {

            self::ALLOW();

            $f = $_SERVER['DOCUMENT_ROOT'] . '/app/build/minimain.js';

            $dir = dirname($f);
            if (!file_exists($f)) {
                self::gnerateJS();
            }

            header('Content-Type: application/javascript');
            include $f;
            exit();
        }
        if ($h == "icons") {
            /*
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                header('Content-Type: text/html; charset=utf-8');
                $this->error_page(405);
                exit();
            }
            if (base64_decode(self::getBearerToken()) !== "$_SERVER[HTTP_HOST]") {
                http_response_code(401);
                echo json_encode(["error" => "Unauthorized"]);
                exit();
            }*/
            $svg = file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/sf.xml");

            $xml = simplexml_load_string($svg);
            $xml->registerXPathNamespace('svg', 'http://www.w3.org/2000/svg');

            $symbols = $xml->xpath('//svg:symbol');

            $output = [];

            foreach ($symbols as $symbol) {
                $id = (string) $symbol['id'];
                $viewBox = isset($symbol['viewBox']) ? (string) $symbol['viewBox'] : null;

                $paths = [];
                foreach ($symbol->path as $path) {
                    $paths[] = [
                        'd' => (string) $path['d']
                    ];
                }

                $output[] = [
                    'id' => self::cleanId($id),
                    'viewBox' => $viewBox,
                    'paths' => $paths
                ];
            }
            header('Content-Type: application/json');
            echo json_encode($output, JSON_PRETTY_PRINT);
            exit();
        }
        if ($h == "contact") {


            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                header('Content-Type: text/html; charset=utf-8');
                $this->error_page(405);
                exit();
            }

            if (empty($_POST)) {
                $input = json_decode(file_get_contents("php://input"), true);
                if (json_last_error() === JSON_ERROR_NONE && is_array($input)) {
                    $_POST = $input;
                }
            }

            if (base64_decode(self::getBearerToken()) !== $_SERVER['HTTP_HOST']) {
                # exit();
            }

            header('Content-Type: text/plain');

            define("ROOTcontacts", $_SERVER['DOCUMENT_ROOT'] . "/../markonikolic98");

            $fn = isset($_POST["fn"]) ? base64_decode($_POST["fn"]) : null;
            $fe = isset($_POST["fe"]) ? base64_decode($_POST["fe"]) : null;
            $fm = isset($_POST["fm"]) ? base64_decode($_POST["fm"]) : null;

            echo json_encode($fn, $fe, $fm);
            if ($fn && $fe && $fm) {
                if (!is_dir(ROOTcontacts . "/data_s/data_f/")) {
                    mkdir(ROOTcontacts . "/data_s/data_f/", 0777, true);
                }

                $rand = time() . rand();
                $filename = date('m_d_Y_h_i_sa', time()) . "-$rand-$fe-contact.json";

                $r = [
                    (object) [
                        'name' => $fn,
                        'message' => $fm,
                        'email' => $fe
                    ]
                ];

                $far = base64_encode(json_encode($r));
                $success = file_put_contents(ROOTcontacts . "/data_s/data_f/$filename", $far);

                echo $success ? "yes" : "no";
            }
            exit;

        }
        if ($h == "buildd") {
            self::build();
        }
        if ($h == "video") {
            if (!empty($_GET['id'])) {
                header('Content-Type: text/html; charset=utf-8');
                ob_start(function ($b) {
                    $comments_pattern = "#/\*[^(\*/)]*\*/#";
                    $comm_JS = "/(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:)\/\/.*))/";
                    # return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s', '/[\r\n]*/', '/\//', $comm_JS], ['>', '<', '\\1', '','', ''], $b);

                    $html = preg_replace('/<!--(?!\[if|\<!\[endif).*?-->/', '', $b);
                    $html = preg_replace('/>\s+</', '><', $html);
                    $html = preg_replace('/^\s+|\s+$/m', '', $html);
                    $html = preg_replace('/\s{2,}/', ' ', $html);
                    $html = preg_replace('/[\r\n]/', '', $html);
                    return $html; // preg_replace(['/(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:|\\\|\')\/\/.*))/', '/[\r\n]/'], ['', ''], $b);
                });

                ?>

                <html>

                <head>
                    <link href="<?= CDN ?>/node_modules/video.js/dist/video-js.min.css" rel="stylesheet" />
                    <style>
                        * {
                            margin: 0px;
                            padding: 0px;
                        }

                        div#my-video {
                            position: fixed;
                            left: 0px;
                            top: 0px;
                            width: 100%;
                            height: 100%;
                        }
                    </style>
                </head>

                <body onload="f();">
                    <video id="my-video" class="video-js" controls preload="auto" width="640" height="264"
                        poster="<?php echo "https://api.eronelit.com/app&id=$_GET[id]&blog=$_GET[b]"; ?>00" data-setup="{}">
                        <source src="<?php echo "https://api.eronelit.com/app&id=$_GET[id]&blog=$_GET[b]"; ?>" type="video/mp4" />
                        <p class="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a
                            web browser that supports HTML5 video.
                        </p>
                    </video>
                    <script async type="text/javascript">
                        f = function () {
                            document.addEventListener("contextmenu", function (e) {
                                e.preventDefault();
                                return false;
                            });
                            document.addEventListener("selectstart", function (e) {
                                e.preventDefault();
                                return false;
                            });
                            document.addEventListener("dragstart", function (e) {
                                e.preventDefault();
                                return false;
                            });
                            document.querySelectorAll("script").forEach(function (res) {
                                res.remove();
                                console.clear();
                            });
                            document.addEventListener('keydown', function (event) {
                                if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                                    event.preventDefault();

                                }
                                if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
                                    event.preventDefault();

                                }
                            });
                        }
                    </script>
                    <script src="<?= CDN ?>/node_modules/video.js/dist/video.min.js"></script>
                </body>

                </html>

                <?php
                exit();
            } else {
                $this->error_page(404);
                exit();
            }
        }
        if ($h == "build2") {
            exit();
            if (!is_dir("$_SERVER[DOCUMENT_ROOT]/build")) {
                mkdir("$_SERVER[DOCUMENT_ROOT]/build");
            }
            header("Content-Type: text/plain;");
            echo shell_exec("curl -X GET https://$_SERVER[DOCUMENT_ROOT]");
            exit();
            file_put_contents("$_SERVER[DOCUMENT_ROOT]/build/index.html", $this->get_BUILD("https://$_SERVER[HTTP_HOST]/"));
            exit();
        }

        if ($h == "build_static") {
            if ($_GET['f']) {
                $dir = "$_SERVER[DOCUMENT_ROOT]/build";

                "$dir/$_GET[f]";
            } else {
                self::build();
            }
        }
        if ($h == "solarday") {
            $r = new solarday();
            exit();
        }
        if ($h == "solarmap") {
            header("X-Frame-Options: SAMEORIGIN");
            if (isset($_SERVER['HTTP_REFERER'])) {
                if (!$_SERVER['HTTP_REFERER'] == "https://$_SERVER[HTTP_HOST]/?p=blog&c=astronomy") {
                    $this->error_page(404);
                    exit();
                }
            } else {
                $this->error_page(404);
                exit();
            }
            header('Content-Type: text/html; charset=utf-8');

            ?>
            <style type="text/css">
                * {
                    margin: 0px;
                    padding: 0px;
                    cursor: none !important;
                }
            </style>
            <div id="root" class="solarsystem"></div>
            <script type="module" src="/demo&id=S3503&hangar=main" nonce="<?php echo $nonce; ?>"></script>
            <?php exit();
        }
        if ($h == "controls_plus") {
            header('Content-Type: image/svg+xml');
            ob_start();
            ?>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>

            <?php $b = ob_get_clean();
            echo self::minifySVG($b);
            exit();
        }
        if ($h == 'test') {
            include "$_SERVER[DOCUMENT_ROOT]/app/index1.php";
        }
        if ($h == 'controls_close') {
            header('Content-Type: image/svg+xml');
            ob_start();
            ?>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#b14747" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
            <?php $b = ob_get_clean();
            echo self::minifySVG($b);
            exit();
        }
        if ($h == "controls_minus") {
            header('Content-Type: image/svg+xml');
            ob_start();
            ?>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
            </svg>

            <?php $b = ob_get_clean();
            echo self::minifySVG($b);
            exit();
        }
        if ($h == "loader") {
            header('Content-Type: image/svg+xml');
            ob_start();
            ?>

            <svg class="Vjideo_sjpinner Vjideo_sjpinner_center" xmlns="http://www.w3.org/2000/svg" height="50" width="50"
                viewBox="0 0 50 50" style="
    width: 60px;
    height: 60px;
     
">
                <style xmlns="http://www.w3.org/2000/svg" type="text/css">
                    .Vjideo_sjpinner {
                        -webkit-animation: rotate 2s linear infinite;
                        transition: .3s;
                        animation: rotate 2s linear infinite;
                        z-index: 23333333;
                        position: fixed;
                        top: 35px;
                        left: 35px;
                        margin: -35px 0 0 -35px;
                        width: 50px;
                        height: 50px;
                        pointer-events: none !important
                    }

                    .Vjideo_sjpinner .path {
                        stroke: white;
                        stroke-linecap: round;
                        -webkit-animation: dash 1.5s ease-in-out infinite;
                        animation: dash 1.5s ease-in-out infinite;
                        -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)) !important;
                        enable-background: new 0 0 512 512 !important
                    }



                    @-webkit-keyframes rotate {
                        100% {
                            transform: rotate(360deg)
                        }
                    }

                    @keyframes rotate {
                        100% {
                            transform: rotate(360deg)
                        }
                    }

                    @-webkit-keyframes dash {
                        0% {
                            stroke-dasharray: 1, 150;
                            stroke-dashoffset: 0
                        }

                        50% {
                            stroke-dasharray: 90, 150;
                            stroke-dashoffset: -35
                        }

                        100% {
                            stroke-dasharray: 90, 150;
                            stroke-dashoffset: -124
                        }
                    }

                    @keyframes dash {
                        0% {
                            stroke-dasharray: 1, 150;
                            stroke-dashoffset: 0
                        }

                        50% {
                            stroke-dasharray: 90, 150;
                            stroke-dashoffset: -35
                        }

                        100% {
                            stroke-dasharray: 90, 150;
                            stroke-dashoffset: -124
                        }
                    }
                </style>
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
            <?php
            $b = ob_get_clean();
            echo self::minifySVG($b);
            exit();
        }
        if ($h == "rss") {
            $SL = new RSS();

            header('Content-Type: application/json');
            #  echo json_encode($SL->RSSFEED("https://www.nasa.gov/feed/"), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            echo $SL->RSS();
            exit();
        }
        if ($h == "logo_nasa") {
            header('Content-Type: image/svg+xml');
            ?>
            <svg height="92" viewBox="0 0 110 92" width="110" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50.049" cy="45" fill="#0b3d91" r="40.14" />
                <g fill="#fff">
                    <circle cx="47.679" cy="12.57" r=".45" />
                    <circle cx="52.299" cy="13.17" r=".45" />
                    <circle cx="58.359" cy="21.33" r=".45" />
                    <circle cx="25.119" cy="63.33" r=".45" />
                    <circle cx="26.289" cy="66.93" r=".45" />
                    <circle cx="20.709" cy="63.87" r=".337" />
                    <circle cx="39.009" cy="70.942" r=".338" />
                    <circle cx="67.711" cy="64.98" r=".337" />
                    <circle cx="76.052" cy="55.92" r=".338" />
                    <circle cx="35.169" cy="23.962" r=".337" />
                    <circle cx="44.349" cy="17.22" r=".337" />
                    <circle cx="43.352" cy="16.56" r=".337" />
                    <circle cx="42.452" cy="15.9" r=".337" />
                    <circle cx="36.609" cy="25.703" r=".337" />
                    <circle cx="50.131" cy="8.16" r=".337" />
                    <circle cx="52.352" cy="17.88" r=".337" />
                    <circle cx="48.849" cy="15.982" r=".337" />
                    <circle cx="42.849" cy="18.563" r=".337" />
                    <circle cx="69.309" cy="73.883" r=".337" />
                    <circle cx="24.549" cy="65.61" r=".338" />
                    <circle cx="48.009" cy="69.96" r=".338" />
                    <circle cx="31.531" cy="65.34" r=".338" />
                    <circle cx="34.449" cy="70.103" r=".338" />
                    <circle cx="55.929" cy="67.103" r=".337" />
                    <circle cx="67.771" cy="60.42" r=".337" />
                    <circle cx="76.749" cy="64.522" r=".337" />
                    <circle cx="79.809" cy="66.48" r=".337" />
                    <circle cx="80.312" cy="61.14" r=".337" />
                    <circle cx="35.671" cy="53.58" r=".337" />
                    <circle cx="35.799" cy="61.32" r=".45" />
                    <circle cx="38.499" cy="67.02" r=".45" />
                    <circle cx="70.839" cy="61.08" r=".45" />
                    <circle cx="82.479" cy="60.42" r=".45" />
                    <circle cx="76.719" cy="57.96" r=".45" />
                    <circle cx="70.839" cy="58.2" r=".45" />
                    <path
                        d="M58.71 12.288l1.119-.107-1.117-.063c-.035-.216-.208-.385-.426-.413l-.107-1.114-.064 1.123c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.061-1.146C58.507 12.651 58.671 12.492 58.71 12.288z" />
                    <path
                        d="M39.824 24.746l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.123c-.203.045-.358.214-.383.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C39.622 25.11 39.786 24.95 39.824 24.746z" />
                    <path
                        d="M81.659 57.684l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.123c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C81.456 58.048 81.62 57.889 81.659 57.684z" />
                    <path
                        d="M36.044 74.906l1.119-.107-1.117-.063c-.035-.216-.208-.385-.426-.413l-.107-1.113-.063 1.122c-.203.045-.358.214-.383.424l-1.144.104 1.152.062c.042.193.198.345.394.38l.104 1.148.062-1.146C35.841 75.27 36.006 75.11 36.044 74.906z" />
                    <path
                        d="M78.104 66.506l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.122c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C77.901 66.87 78.066 66.71 78.104 66.506z" />
                    <path
                        d="M59.568 35.385c-4.667 1.814-9.219 3.433-13.06 4.635-7.805 2.444-29.16 9.06-42.06 17.4l1.08.42c7.86-4.44 12.969-5.835 17.88-7.38 5.34-1.68 22.603-5.72 30.42-7.92 2.641-.743 5.734-1.716 9.01-2.9-.762-1.063-1.566-2.129-2.412-3.193C60.143 36.088 59.856 35.734 59.568 35.385zM65.27 43.244c-1.13.763-2.077 1.372-2.74 1.756-3.84 2.22-22.561 15-26.82 17.94s-16.08 14.1-19.56 17.34l-.12 1.319c11.22-10.08 14.74-12.566 19.2-15.959 5.52-4.2 16.939-11.97 20.82-14.46 3.71-2.38 7.056-4.569 10.059-6.572-.049-.082-.098-.164-.147-.247C65.736 43.99 65.505 43.618 65.27 43.244zM82.809 24.72c-5.466 3.204-14.081 7.071-22.439 10.352.2.245.399.492.597.741.934 1.176 1.815 2.36 2.644 3.545 6.57-2.42 13.779-5.668 19.499-9.599-2.725 2.582-11.734 9.315-17.227 13.068.283.461.557.922.822 1.381 8.322-5.569 13.922-9.668 17.185-12.409 4.5-3.78 14.76-12.24 18.66-23.58C95.709 16.92 87.621 21.899 82.809 24.72z"
                        fill="#fc3d21" />
                    <path
                        d="M44.884 54.939c-.885-1.114-2.109-2.606-3.028-3.763-1.229-1.547-2.366-3.11-3.408-4.671-.34.085-.679.17-1.018.255 1.258 1.963 2.655 3.923 4.177 5.839 1.112 1.4 2.123 2.527 2.641 3.228.105.142.313.456.594.874.324-.22.651-.442.981-.666C45.504 55.688 45.189 55.323 44.884 54.939zM51.344 60.803c-.727-.688-2.49-1.837-4.325-3.561-.405.278-.814.56-1.224.844 1.185 1.67 2.799 3.721 4.063 4.319C51.762 63.307 52.275 61.685 51.344 60.803zM60.967 35.813c-10.492-13.206-23.309-20.461-28.835-16.07-4.292 3.41-2.53 13.376 3.386 23.845.306-.105.609-.208.909-.31-5.971-10.2-7.605-19.679-3.557-22.896 5.087-4.042 17.37 3.241 27.558 16.064 2.109 2.654 3.963 5.318 5.533 7.915 6.012 9.95 7.857 18.948 3.703 22.621-1.271 1.124-5.155 1.565-10.243-.725-.071.089.043.33.132.389 4.392 1.766 8.599 2.439 10.723.752C75.38 63.342 71.459 49.019 60.967 35.813z" />
                    <path
                        d="M15.969 37.38h6.72l5.64 9.57c0 0 0-6.93 0-7.47 0-.84-1.065-1.935-1.44-2.1.45 0 4.38 0 4.65 0-.285.075-1.2 1.185-1.2 2.1 0 .45 0 10.5 0 10.98 0 .675.975 1.605 1.44 1.965h-6.48l-5.73-9.615c0 0 0 7.17 0 7.56 0 .75.735 1.47 1.5 2.085h-4.95c.705-.3 1.38-1.245 1.44-1.995s0-10.425 0-10.845C17.559 38.7 16.674 37.95 15.969 37.38z" />
                    <path
                        d="M77.439 52.425h8.94c-.495-.12-1.05-.705-1.35-1.485-.3-.78-5.04-13.56-5.04-13.56H76.59c-.964.694-1.997 1.426-3.1 2.197-.003.028-.006.056-.011.083-.148.9-2.808 10.534-2.97 11.01-.225.66-1.38 1.395-1.845 1.785h4.815c-.48-.54-.87-1.065-.78-1.665.09-.6.36-1.8.36-1.8h4.98c.225.6.393 1.139.48 1.65C78.624 51.255 77.994 51.945 77.439 52.425zM73.509 47.07l1.68-5.49 2.22 5.49H73.509zM72.752 37.928c.247-.182.495-.365.742-.548h-1.305C72.319 37.5 72.534 37.689 72.752 37.928z" />
                    <path
                        d="M38.559 50.79c.09-.6.36-1.8.36-1.8h4.98c.225.6.393 1.139.48 1.65.105.615-.525 1.305-1.08 1.785h7.871c.164-.11.327-.22.49-.329-.305-.27-.586-.675-.771-1.156-.3-.78-5.04-13.56-5.04-13.56h-7.8c.375.345 1.455 1.275 1.29 2.28-.147.9-2.808 10.534-2.97 11.01-.225.66-1.38 1.395-1.845 1.785h4.815C38.859 51.915 38.469 51.39 38.559 50.79zM41.049 41.58l2.22 5.49h-3.9L41.049 41.58z" />
                    <path
                        d="M65.748 44.848c-1.468.978-3.017 1.999-4.649 3.065.732.355 1.315.801 1.371 1.377.104 1.082-2.07 1.605-4.035 1.38-.393-.045-.779-.148-1.147-.286-.408.263-.82.528-1.238.796-.425.273-.941.609-1.53.997v1.553c.39-.765 1.243-1.45 1.905-1.485.285-.015 1.275.9 5.355.675 1.98-.109 5.805-2.22 5.745-4.65C67.489 46.834 66.739 45.714 65.748 44.848zM54.519 48.6v1.582c.361-.241.717-.478 1.066-.709C55.036 49.091 54.647 48.734 54.519 48.6zM64.353 43.855c-.38-.225-.765-.422-1.134-.596-1.92-.9-3.93-1.065-4.35-2.28-.296-.857.54-1.65 2.58-1.62 2.04.03 3.93 1.245 4.44 1.68v-3.87c-.15.15-.808.905-1.41.78-1.155-.24-3.12-.553-5.37-.54-2.58.015-4.8 2.009-4.875 4.53-.105 3.525 2.715 4.485 4.305 5.04.164.057.351.118.554.183 1.525-.992 2.731-1.756 3.437-2.163C63.004 44.726 63.625 44.334 64.353 43.855z" />
                </g>
            </svg>

            <?php
            exit();
        }
        if ($h == "svg_logo_backscr_img" || $h == "svg_logo_backscr_img.svg") {
            header('Content-Type: image/svg+xml');
            ?>
            <svg id="logo_backscr_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice">
                <defs>
                    <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                        <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
                        <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
                    </radialGradient>
                    <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                        <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
                        <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
                    </radialGradient>
                    <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                        <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
                        <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
                    </radialGradient>
                    <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                        <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
                        <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
                    </radialGradient>
                    <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                        <stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
                        <stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
                    </radialGradient>
                    <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                        <stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
                        <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
                    </radialGradient>
                </defs>
                <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
                    <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)"
                    transform="rotate(255.072 50 50)">
                    <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
                    <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
            </svg>
            <?php
            exit();
        }
        if ($h == "garph_preview") {
            $this->get_data([
                "url" => "https://api.eronelit.com/graph",
                "headers" => [


                    'Authorization: Bearer 32M052k350QaeofkaeopfF',
                ],
                "data" => [
                    "urlf" => $_GET['url']
                ]
            ]);
        }
        if ($h == "big_image") {

        }
        if ($h == "bagdes") {
            $color = "white";
            if (!empty($_GET['color'])) {
                $color = $_GET['color'];
            }
            switch ($_GET['name']) {
                case "text":
                    header("Content-Type: image/svg+xml");
                    echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"150\" height=\"150\" fill=\"$color\" class=\"bi bi-file-text-fill\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1\"/>\r\n</svg>";
                    break;
                default:
                    self::error_page(404);
            }
            exit();
        }
        if ($h == "feed") {
            #   $r = file_get_contents("$_SERVER[DOCUMENT_ROOT]/temp.json");

            #  if ($this->Getbearer() == $_SESSION['Bearer_token_temp']) {
            $r = [];
            $data = json_decode(file_get_contents("php://input"), true);


            if (isset($data['type'])) {
                if ($data['type'] == "f") {
                    $r = $this->get_data([
                        "url" => "https://api.eronelit.com/app&id=A03429468246&json=all",
                        "headers" => [
                            'Content-Type: application/json',
                            'Authorization: Bearer 32M052k350QaeofkaeopfF',
                        ]
                    ]);
                    header("Content-Type: text/json");
                    echo $r;
                    exit();
                }
                if ($data['type'] == "s") {
                    $r = $this->get_data([
                        "url" => "https://api.eronelit.com/graph",
                        "headers" => [


                            'Authorization: Bearer 32M052k350QaeofkaeopfF',
                        ],
                        "data" => [
                            "urlf" => $_POST['urlf']
                        ]
                    ]);
                    header("Content-Type: text/json");
                    echo $r;
                    exit();
                }
            } else {
                $this->error_page(404);
                exit();
            }
            /*
                        } else {
                            http_response_code(403);

                            $this->error_page(403);
                            exit();
                        }*/
            exit();
        }
        if ($h == "home") {
            #  session_start();
            $_SESSION['Bearer_token_temp'] = bin2hex(random_bytes(30 / 2));
            include "$_SERVER[DOCUMENT_ROOT]/app/welcomer.php";
        }
        if ($h == "cv-pdf") {
            include "$_SERVER[DOCUMENT_ROOT]/app/visitcard/ff_FA/cv_pdf/index.php";
        }
        if ($h == "visitcard") {
            include "$_SERVER[DOCUMENT_ROOT]/app/visitcard/index1.php";
        }
        exit();
    }
    function ServeThumb($uploadedFile, $size = 1200, $path = "", $fullname = "")
    {

        # ob_start();
        if (3000 < $size) {
            $size = 3000;
        }
        $jpg = true;
        // = "",$name = ""){//$uploadDir,$uploadedFile,$name){
        $sourceImage = imagecreatefromjpeg($uploadedFile);

        if (!$sourceImage) {
            $jpg = false;
            $sourceImage = imagecreatefrompng($uploadedFile);
        }
        $targetWidth = $size;
        $targetHeight = $size / 2;
        $originalWidth = imagesx($sourceImage);
        $originalHeight = imagesy($sourceImage);

        if ($originalWidth > $originalHeight) {
            $newWidth = $targetWidth;
            $newHeight = ($originalHeight / $originalWidth) * $targetWidth;
        } else {
            $newHeight = $targetHeight;
            $newWidth = ($originalWidth / $originalHeight) * $targetHeight;
        }

        $resizedImage = imagecreatetruecolor($newWidth, $newHeight);

        imagecopyresampled($resizedImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);

        #   unlink("$path/$fullname");
        #  header('Content-Type: image/jpeg');
        #file_put_contents("$path/$fullname",$resizedImage);

        /*
     header('Content-Type: image/jpeg');
        if(!imagejpeg($resizedImage,"$path$fullname")){
            imagepng($resizedImage,"$path$fullname");

        };*/
        ob_start();
        imagejpeg($resizedImage); //, "$path.jpg");
        if ($jpg) {
            imagejpeg($resizedImage); //, "$path.jpg");
        } else {
            imagepng($resizedImage); //, "$path.png");
        }
        #  $obas = ob_get_clean();
        #  file_put_contents("$path$fullname",$resizedImage);
        imagedestroy($sourceImage);
        imagedestroy($resizedImage);

        $img = ob_get_clean();
        if (!empty(($resizedImage))) {
            echo $img;
        } else {
            @readfile($uploadedFile);
        }
    }
    function metaTag_Generator($id, $specific = "title")
    {
        $array = json_decode(file_get_contents(ROOT . ROOT . "data_s/blog/blgd.json"), true);
        $array2 = file_get_contents(ROOT . "/data_s/blog/blgd.json");

        if (!empty($id)) {
            foreach ($array as $index => $element) {
                if ($element['id'] == $id) {
                }
            }
        }
    }

    function include($hmm)
    {
        include ROOT . "$hmm";
    }

    function file_force_contents($dir, $contents)
    {
        $parts = explode('/', $dir);
        $file = array_pop($parts);
        $dir = '';
        foreach ($parts as $part)
            if (!is_dir($dir .= "/$part"))
                mkdir($dir);
        file_put_contents("$dir/$file", $contents);
    }
    function Curl_getURL($url)
    {
        exit();
        $ch = curl_init($url);

        // Set cURL options
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

        // Execute cURL session and get the response
        $response = curl_exec($ch);

        // Check if the request was successful
        if ($response === false) {
            die('Failed to fetch data from the URL');
        }

        // Close cURL session
        curl_close($ch);

        // Process $response as needed
        return $response;
    }
    /**
     * Summary of getRSSFeed
     * @return never
     */
    function getRSSFeed()
    {
        header("Content-type: application/rss+xml; charset=utf-8");

        // GitHub repository information
        $repo_owner = 'marko9827';
        $repo_name = 'marko9827.github.io';

        // GitHub API URL to fetch commits
        $api_url = $this->Curl_getURL("https://api.github.com/repos/{$repo_owner}/{$repo_name}/commits");


        // Make a request to the GitHub API
        $response = file_get_contents($api_url);

        // Check if the request was successful
        if ($response === false) {
            die('Failed to fetch commit information from GitHub API.');
        }

        // Decode the JSON response
        $commits = json_decode($response, true);

        // Start building the RSS feed
        $rss_feed = '<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>Git Commit History Feed</title>
        <link>https://github.com/{$repo_owner}/{$repo_name}</link>
        <description>Git commit history feed for the {$repo_owner}/{$repo_name} repository.</description>
';

        // Add each commit to the RSS feed
        foreach ($commits as $commit) {
            $commit_date = date('D, d M Y H:i:s O', strtotime($commit['commit']['author']['date']));
            $rss_feed .= "
        <item>
            <title>{$commit['commit']['message']}</title>
            <description>{$commit['sha']}</description>
            <link>{$commit['html_url']}</link>
            <guid>{$commit['sha']}</guid>
            <pubDate>{$commit_date}</pubDate>
        </item>";
        }

        // Close the RSS feed
        $rss_feed .= '
    </channel>
</rss>';

        // Output the RSS feed
        echo $rss_feed;
        exit();
    }

    public function MetaTags()
    {
        $title = "Marko Nikolić";
        $description = "Is my personal website.";
        $keywords = "Marko Nikolić, IT, developer, blog, portfolio";
        $ogImage = SITE_HOST . "/?mnps=image_og&v=" . time();
        $canonicalUrl = SITE_HOST . $_SERVER['REQUEST_URI'];

        // Dohvati podatke sa API-ja
        $r = json_decode($this->get_data([
            "url" => "https://api.eronelit.com/app&id=A03429468246&json=all",
            "headers" => [
                'Content-Type: application/json',
                'Authorization: Bearer 32M052k350QaeofkaeopfF',
            ]
        ]), true);

        $page = $_GET['p'] ?? null;
        $id = $_GET['id'] ?? null;
        $album = $_GET['album'] ?? null;
        $cat = $_GET['c'] ?? "";

        if ($page) {
            switch ($page) {
                case 'cv-pdf':
                    $title = "Marko Nikolić > CV";
                    break;

                case 'visitcard':
                    $title = "Marko Nikolić > Visitcard";
                    break;

                case 'Projects':
                    $title = "Marko Nikolić > Projects";
                    break;

                case 'gallery':
                    $title = "Gallery | Marko Nikolić";
                    $gallery = $r['data']['gallery']['gallery'] ?? [];

                    if ($album) {
                        foreach ($gallery as $value) {
                            if ((string) $value['name'] === (string) $album) {
                                foreach ($value as $val) {
                                    if (is_array($val) && isset($val['title'])) {
                                        $data = $val;
                                        $title = "{$val['title']} - Gallery | Marko Nikolić";
                                        $description = "{$val['title']} | Marko Nikolić IT. Is my personal website.";
                                        $ogImage = $val['thumb'] ?? $ogImage;

                                        if ((string) $val['id'] === (string) $id) {
                                            break 2;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;

                case 'blog':
                    $blogItems = $r['data']['blog'] ?? [];

                    foreach ($blogItems as $value) {
                        if ((string) $value['id'] === (string) $id) {
                            $data = $value;
                            $title = "Blog > $cat {$value['title']} | Marko Nikolić";
                            $description = "{$value['title']} | Marko Nikolić IT. Is my personal website.";
                            $keywords = implode(",", $value['keywords'] ?? []);
                            $ogImage = "{$value['thumbail']}&for=og&v=" . time();
                            break;
                        }
                    }

                    if (empty($data)) {
                        $title = "Blog > $cat | Marko Nikolić";
                    }

                    break;
            }
        }
        ?>

        <title><?= htmlspecialchars($title) ?></title>
        <link rel="icon" href="/?mnps=image-favicon?<?= time(); ?>" type="image/ico" />
        <meta name="description" content="<?= htmlspecialchars($description); ?>">
        <meta name="keywords" content="<?= htmlspecialchars($keywords); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable='no'">
        <meta name="author" content="Marko Nikolic">
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="<?= htmlspecialchars($canonicalUrl); ?>" />
        <meta name="theme-color" content="#333">

        <!-- Open Graph -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="<?= htmlspecialchars($canonicalUrl); ?>" />
        <meta property="og:title" content="<?= htmlspecialchars($title); ?>" />
        <meta property="og:description" content="<?= htmlspecialchars($description); ?>" />
        <meta property="og:image" content="<?= $ogImage; ?>" />
        <meta property="og:image:secure_url" content="<?= $ogImage; ?>" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Marko Nikolić" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@markoni62595164" />
        <meta name="twitter:creator" content="@markoni62595164" />
        <meta name="twitter:title" content="<?= htmlspecialchars($title); ?>" />
        <meta name="twitter:description" content="<?= htmlspecialchars($description); ?>" />
        <meta name="twitter:image" content="<?= $ogImage; ?>" />

        <link rel="manifest" href="/manifest.webmanifest">

        <script type="application/ld+json">
                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                        "@context": "https://schema.org",
                                                                                                                                                                                                                                                        "@type": "WebSite",
                                                                                                                                                                                                                                                        "url": "https://<?= SITE_HOST; ?>",
                                                                                                                                                                                                                                                        "name": "Marko Nikolić",
                                                                                                                                                                                                                                                        "author": {
                                                                                                                                                                                                                                                            "@type": "Person",
                                                                                                                                                                                                                                                            "name": "Marko Nikolić"
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "description": "<?= htmlspecialchars($description); ?>",
                                                                                                                                                                                                                                                        "inLanguage": "en-GB"
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                </script>
        <?php
    }



    function error_page($status)
    {


        $codes = [
            401 => ['403 Forbidden', 'The server has refused to fulfill your request.'],
            403 => ['403 Forbidden', 'The server has refused to fulfill your request.'],
            404 => ['404 Not Found', 'was not found on this server.'],
            405 => ['405 Method Not Allowed', 'The method specified in the Request-Line is not allowed for the specified resource.'],
            408 => ['408 Request Timeout', 'Your browser failed to send a request in the time allowed by the server.'],
            500 => ['500 Internal Server Error', 'The request was unsuccessful due to an unexpected condition encountered by the server.'],
            502 => ['502 Bad Gateway', 'The server received an invalid response from the upstream server while trying to fulfill the request.'],
            504 => ['504 Gateway Timeout', 'The upstream server failed to send a request in the time allowed by the server.']
        ];



        $title = $codes[$status][0];
        $message = $codes[$status][1];


        $actual_link = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $actual_link2 = $_SERVER['REQUEST_URI'];


        #$message = substr($message, 0, +3);
        #header("HTTP/1.1 200 OK");
        #   header("robots: noindex, nofollow");
        http_response_code((int) $status);
        die('
    <!DOCTYPE html>
    <html lang=en>
      <meta charset=utf-8>
      <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
      <title>' . $title . ' - ' . $actual_link2 . '</title>
      <link href="/favicon.svg" rel="icon" type="image/x-icon">
        <meta name="theme-color" content="#607d8b" />
      <style type="text/css"> * { color: #607D8B; /* pointer-events:none;  */ user-select:none; margin: 0; padding: 0 } html, code { font: 15px/22px arial, sans-serif } html { background: #fff; color: #222; padding: 15px } body { margin: 7% auto 0; max-width: 390px; min-height: 180px; padding: 30px 0 15px } *>body { padding-right: 205px } p { margin: 11px 0 22px; overflow: hidden } ins {     color: #607D8B;
        text-decoration: none;
        font-weight: bold; } a img { border: 0 } @media screen and (max-width:772px) { body { background: none; margin-top: 0; max-width: none; padding-right: 0 } } #logo { background: url() no-repeat; margin-left: -5px } @media only screen and (min-resolution:192dpi) { #logo { background: url() no-repeat 0% 0%/100% 100%; -moz-border-image: url() 0 } } @media only screen and (-webkit-min-device-pixel-ratio:2) { #logo { background: url() no-repeat; -webkit-background-size: 100% 100% } } #logo { display: inline-block; height: 54px; width: 150px } button { transition: .3s; 
        background: #607D8B;
        color: white;
        border: 0px;
        padding: 8px;
        font-size: 15px;
        margin-top: 10px;
        border-radius: 4px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, .2), 0 6px 90px 0 rgba(0, 0, 0, .1);
        min-width: 150px;
        user-select: unset !important; border: 2px solid #607D8B; outline:none; font-weight: bold;
     } button:hover { background: white;  border: 2px solid #607D8B; color:#607D8B; }  </style>
      <a <a style="
        margin-left: -45px;
    "><svg id=logo aria-hidden="true" focusable="false"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" role="img">
        <g transform="translate(0,109) ">
            <path d="M84,-39.203125L80.5,-35L46.921875,-35L43,-39.203125L43,-68.9375L46.921875,-72L80.5,-72L81.375,-71.015625L67.515625,-57.3125Q65.4375,-59,63.5,-59Q58,-59,58,-53.515625Q58,-48,63.5,-48Q69,-48,69,-53.421875Q69,-54.875,68.28125,-56.03125L82.3125,-70.375L84,-68.9375L84,-68.359375L84,-39.203125ZM94,-85.71875L93.40625,-85L77.5625,-85L77,-85.71875L77,-90L77.5625,-90L86.625,-92L86.625,-92L85.90625,-92L77.5625,-92L77,-92L77,-94L51,-94L51,-92L50.21875,-92L41.328125,-92L40.796875,-92L40.796875,-90.671875L50.234375,-90.671875L51,-90L51,-85.71875L50.21875,-85L34.53125,-85L34,-85.71875L34,-99L43.15625,-109L50.21875,-109L51,-108.484375L51,-102L58,-102L58,-104L53.578125,-104L53,-104.640625L53,-108.484375L53.578125,-109L74.3125,-109L75,-108.484375L75,-104.640625L74.3125,-104L70,-104L70,-102L77,-102L77,-108.484375L77.5625,-109L84,-109L94,-99L94,-98.421875L94,-85.71875ZM94,-8L84,1L77.5625,1L77,0.40625L77,-6L70,-6L70,-4L74.3125,-4L75,-3.484375L75,0.484375L74.3125,1L53.578125,1L53,0.484375L53,-3.484375L53.5625,-4L58,-4L58,-6L51,-6L51,0.484375L50.21875,1L43.15625,1L34,-8L34,-22L34.578125,-22L50.21875,-22L51,-21.6875L51,-17L50.21875,-17L41.28125,-16L41.28125,-16L41.859375,-16L50.21875,-16L51,-15.640625L51,-14L77,-14L77,-15.640625L77.5625,-16L85.796875,-16L86.53125,-15.640625L86.53125,-16.484375L77.578125,-16.484375L77,-17L77,-22L77.578125,-22L94,-22L94,-21.421875L94,-8ZM42,-46.875L41.859375,-46.296875L31,-35.46875L31,-11.9375Q31,-11.078125,30.40625,-11.078125Q30.265625,-11.078125,29.96875,-11.359375L17,-24.171875L17,-29L15,-29L15,-24.828125L14.40625,-24L9.75,-24L9,-24.828125L9,-34.265625L9.75,-35L14.40625,-35L15,-34.265625L15,-31L17,-31L17,-34.265625L17.59375,-35L22.40625,-35L23,-34.265625L23,-23.078125L24,-23.078125L24,-38.796875L34.671875,-48.171875L22.84375,-38L9.75,-38L9,-38.40625L9,-47.15625L9.75,-48L14.40625,-48L15,-47.15625L15,-40L17,-40L17.15625,-41.5L28.3125,-53.203125L41.328125,-53.203125L42,-52.65625L42,-46.875ZM41.328125,-54.671875L28.3125,-54.671875L17.15625,-66.484375L17,-68L15,-68L15,-60.21875L14.40625,-59.609375L9.75,-59.609375L9,-60.21875L9,-70L9.734375,-70L22.84375,-70L34.40625,-59.15625L24,-69.40625L24,-84L23,-84L23,-72.71875L22.40625,-72L17.59375,-72L17,-72.71875L17,-76L15,-76L15,-72.71875L14.40625,-72L9.75,-72L9,-72.71875L9,-82.328125L9.75,-83L14.40625,-83L15,-82.328125L15,-78L17,-78L17,-82.828125L29.96875,-95.640625Q30.265625,-95.9375,30.40625,-95.9375Q31,-95.9375,31,-95.078125L31,-71.875L42,-61.140625L42,-55.3125L41.328125,-54.671875ZM119,-85.71875L117.734375,-85L113.65625,-85L113,-85.71875L113,-90L110.828125,-90L110.828125,-87.578125Q110.828125,-87,110.40625,-86.859375L110.109375,-86.71875Q109.96875,-86.71875,109.6875,-87L89.234375,-107.828125Q88.9375,-108.109375,88.9375,-108.546875Q89.09375,-109,89.8125,-109L110.109375,-109L110.828125,-108.484375L110.828125,-102L113,-102L113,-108.484375L113.65625,-109L117.734375,-109L119,-108.484375L119,-98.421875L118.390625,-97.859375L113.65625,-97.859375L113,-98.421875L113,-100L110.828125,-100L110.828125,-92L113,-92L113,-95.375L113.65625,-96L117.734375,-96L119,-95.375L119,-85.71875ZM18.15625,-86.96875L17.578125,-86.6875Q17,-86.6875,17,-87.546875L17,-90L15,-90L15,-85.71875L14.40625,-85L9.75,-85L9,-85.71875L9,-95.375L9.75,-96L14.40625,-96L15,-95.375L15,-92L17,-92L17,-100L15,-100L15,-98.421875L14.40625,-97.859375L9.75,-97.859375L9,-98.421875L9,-108.484375L9.75,-109L14.40625,-109L15,-108.484375L15,-102L17,-102L17,-108.484375L17.59375,-109L38.140625,-109Q38.578125,-109,38.859375,-108.546875L38.859375,-108.25Q38.859375,-108.109375,38.578125,-107.8125L18.15625,-86.96875ZM118,0.484375L117.5,1L113.65625,1L113,0.484375L113,-5L110.828125,-5L110.828125,0.484375L110.109375,1L89.515625,1Q88.640625,1,88.640625,0.4375L88.9375,-0.140625L109.671875,-20.09375Q109.953125,-20.390625,110.09375,-20.390625L110.40625,-20.390625Q110.828125,-20.09375,110.828125,-19.65625L110.828125,-17L113,-17L113,-21.6875L113.65625,-22L118,-22L118,-21.4375L118,-11.9375L117.734375,-11L113.65625,-11L113,-11.9375L113,-15L110.828125,-15L110.828125,-7L113,-7L113,-8.5625L113.65625,-9.140625L118,-9.140625L118,-8.59375L118,0.484375ZM38.484375,-0.140625Q38.765625,0.703125,38.765625,0.5625Q38.765625,1,38.046875,1L17.59375,1L17,0.4375L17,-5L15,-5L15,0.484375L14.40625,1L9.75,1L9,0.484375L9,-8.5625L9.75,-9.140625L14.40625,-9.140625L15,-8.5625L15,-7L17,-7L17,-15L15,-15L15,-11.9375L14.40625,-11L9.75,-11L9,-11.9375L9,-21.6875L9.75,-22L14.40625,-22L15,-21.40625L15,-17L17,-17L17,-19.65625Q17,-19.953125,17.3125,-20.234375L17.59375,-20.390625Q17.890625,-20.390625,18.171875,-20.09375L38.484375,-0.140625ZM18.15625,-45.21875Q17.734375,-44.796875,17.4375,-44.796875Q17,-44.796875,17,-45.65625L17,-53L15,-53L15,-50.765625L14.40625,-50.0625L9.75,-50.0625L9,-50.765625L9,-56.859375L9.75,-57.625L14.40625,-57.625L15,-56.859375L15,-55L17,-55L17,-62.65625Q17,-63.375,17.4375,-63.375Q17.296875,-63.375,18.15625,-63.078125L26.6875,-54.359375Q26.96875,-54.140625,26.96875,-53.9375Q26.96875,-53.84375,26.6875,-53.625L18.15625,-45.21875Z" fill="#607D8B"/>
        </g> 
    </svg>
    
      </a>
      <p><b style="color:#607D8B;">' . $title . '</br> <ins></ins>
      <p>The requested URL <code style="
        color: rgb(255 0 0 / 72%);
    ">' . $actual_link . '</code> ' . $message . ' </br> 
    ');
    }
    private function reformat_fd($input)
    {
        $months = [
            'jan' => '01',
            'feb' => '02',
            'february' => '02',
            'ferb' => '02',
            'febr' => '02',
            'mar' => '03',
            'march' => '03',
            'mart' => '03',
            'apr' => '04',
            'april' => '04',
            'may' => '05',
            'jun' => '06',
            'jul' => '07',
            'avg' => '08',
            'sep' => '09',
            'sept' => '09',
            'okt' => '10',
            'nov' => '11',
            'dec' => '12'
        ];
        $input = str_replace(["AM", "PM"], ["", ""], $input);
        $output = preg_replace_callback(
            '/(\d{2})\.(\w{3,})\.(\d{4}) (\d{2}):(\d{2})/',
            function ($matches) {

                $month = $months[strtolower($matches[2])] ?? null;
                if (!$month) {
                    return $matches[0];
                }

                return "$matches[3]-$month-$matches[1] $matches[4]:$matches[5]";
            },
            $input
        );
        $r = array_merge(range('a', 'z'), range('A', 'Z'));

        foreach ($months as $key => $val) {
            $output = str_replace($key, $val, $output);
            $output = str_replace('.', '-', $output);
            /*$r = array_merge(range('a', 'z'), range('A', 'Z'));
            foreach ($r as $val) {
                $output = str_replace($val, "", $output);
            }*/

            $output = str_replace('--', '-', $output);
        }

        $output = preg_replace('/[a-zA-Z]/', '', $output);

        return $output;
    }
    private function validateSitemap($sitemapUrl)
    {

        if (!file_exists($sitemapUrl)) {
            echo "Sitemap file not found!";
            return false;
        }
        libxml_use_internal_errors(true);
        $xml = simplexml_load_file($sitemapUrl);

        if (!$xml) {
            echo "Error: Invalid XML format!\n";
            foreach (libxml_get_errors() as $error) {
                echo "\t", $error->message;
            }
            return false;
        }

        if ($xml->getName() !== 'urlset') {
            echo "Error: Sitemap must have a root <urlset> element!\n";
            return false;
        }

        foreach ($xml->url as $url) {
            if (!isset($url->loc) || !filter_var((string) $url->loc, FILTER_VALIDATE_URL)) {
                echo "Invalid <loc> URL: " . (string) $url->loc . "\n";
                return false;
            }

            if (isset($url->lastmod) && !strtotime((string) $url->lastmod)) {
                echo "Invalid <lastmod> date: " . (string) $url->lastmod . "\n";
                return false;
            }

            if (isset($url->changefreq) && !in_array((string) $url->changefreq, ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'])) {
                echo "Invalid <changefreq> value: " . (string) $url->changefreq . "\n";
                return false;
            }

            if (isset($url->priority) && !is_numeric((string) $url->priority)) {
                echo "Invalid <priority> value: " . (string) $url->priority . "\n";
                return false;
            }
        }

        echo "Sitemap is valid!\n";
        return true;
    }
    private function get_data_build(
        $r = [
            "data" => [],
            "url" => "",
            "type" => "GET",
            "headers" => []
        ],
        $testMode = true
    ) {


        $ch = curl_init("$r[url]");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 6);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);

        if ($r['type'] == "POST") {
            curl_setopt($ch, CURLOPT_POST, true);
        }

        curl_setopt($ch, CURLOPT_HTTPHEADER, $r['headers']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $r['data']);
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            echo curl_error($ch);
        } else {
            return $response;
        }
        curl_close($ch);
    }
    private function emptyFolder($folderPath, $ignore_dirs = true, $dirs = [])
    {
        if (!is_dir($folderPath)) {
            return false;
        }
        $files = array_diff(scandir($folderPath), ['.', '..']);

        foreach ($files as $file) {
            $filePath = $folderPath . DIRECTORY_SEPARATOR . $file;

            if (is_dir($filePath)) {
                if (in_array($filePath, $dirs)) {
                    continue;
                }
                self::emptyFolder($filePath);
                rmdir($filePath);
            } else {
                unlink($filePath);
            }
        }

        return true;
    }
    private function C_GET($url)
    {

        $options = [
            'http' => [
                'method' => 'GET',
                'header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n"
            ]
        ];

        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        return $response;
    }
    private function getFromBuild(string $resource = "")
    {
        $dir = "$_SERVER[DOCUMENT_ROOT]/build";
        $resourceis_static = false;
        $data = json_decode(file_get_contents("$dir/data.json"), true);
        $ext = "txt";
        foreach ($data['static'] as $val) {
            if (!$val['name'] == $resource) {
                continue;
            }
            $ext = $val['ext'];
        }


    }

    private function replaceLink(string $type, string $htmlContent, string $oldLinkToFind, string $newLink): string
    {
        $pattern = '/(<link[^>]*?href=["\'])' . preg_quote($oldLinkToFind, '/') . '(["\'][^>]*>)/i';

        $replacedContent = preg_replace_callback($pattern, fn($matches) => "$matches[1]$newLink$matches[2]", $htmlContent);

        return $replacedContent;
    }
    private function copyDirectory(string $source, string $destination): bool
    {
        if (!is_dir($source)) {
            echo "Error: Source directory '$source' does not exist.\n";
            return false;
        }

        if (!is_dir($destination)) {
            if (!mkdir($destination, 0777, true)) { // 0777 is permissive, adjust as needed
                echo "Error: Could not create destination directory '$destination'.\n";
                return false;
            }
        }

        $dir = opendir($source);
        if ($dir === false) {
            echo "Error: Could not open source directory '$source'.\n";
            return false;
        }

        while (($file = readdir($dir)) !== false) {
            if ($file === '.' || $file === '..') {
                continue;
            }

            $sourcePath = $source . DIRECTORY_SEPARATOR . $file;
            $destinationPath = $destination . DIRECTORY_SEPARATOR . $file;

            if (is_dir($sourcePath)) {
                if (!self::copyDirectory($sourcePath, $destinationPath)) {
                    closedir($dir);
                    return false;
                }
            } else {
                // If it's a file, copy it
                if (!copy($sourcePath, $destinationPath)) {
                    echo "Error: Could not copy file '$sourcePath' to '$destinationPath'.\n";
                    closedir($dir);
                    return false;
                }
            }
        }

        closedir($dir);
        return true;
    }


    /**
     * Summary of build
     * @return never
     */
    private function build()
    {

        #  header("Content-Type: text/plain");
        #  echo "Passed!";
        #  exit();

        $modifer = new HtmlModifier();

        header("Content-Type: text/plain");
        $dir = "$_SERVER[DOCUMENT_ROOT]/pwa/static/";
        if (is_dir($dir)) {
            self::emptyFolder($dir, true, [
                "node_modules",
                "assets/static/plugins/pdfjs",
                ".git"
            ]);
        } else {
            mkdir($dir);
        }
        $dir_builder = [
            (string) $dir,
            "$dir/data",
            "$dir/backend",
            "$dir/assets",
            "$dir/assets/static",
            "$dir/assets/static/js",
            "$dir/assets/static/css",
            "$dir/assets/static/img",
            "$dir/assets/static/ui/img",
            "$dir/assets/static/ui/img/bagdes",
            "$dir/assets/static/img/logo",
            "$dir/assets/static/plugins",
            "$dir/assets/static/plugins/pdfjs",
            "$dir/media",
            "$dir/pages"
        ];
        foreach ($dir_builder as $val) {
            if (!is_dir($val)) {
                mkdir($val, 0777, true);
            }
        }

        $created = time();
        $data = null;
        $data['version'] = time();
        $data['static'] = [];

        array_push($data['static'], [
            "name" => "style",
            "time" => $created,
            "source" => "static",
            "ext" => "css"
        ]);
        $css_static = "";
        $js_static = "";
        $css_static .= file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/mainas.css");
        $css_static .= file_get_contents(__DIR__ . '/style.php');
        //
        array_push($data['static'], [
            "name" => "jscode",
            "time" => $created,
            "source" => "static",
            "ext" => "js"
        ]);
        $js_static .= "\"use strict\"; \n\n/* " . time() . " */\n";

        $js_static .= "const version = function(){
            return '" . time() . "';
        };";

        $r = $this->get_data([
            "url" => "https://api.eronelit.com/app&id=A03429468246&json=all",
            "headers" => [
                'Content-Type: application/json',
                'Authorization: Bearer 32M052k350QaeofkaeopfF',
            ]
        ]);

        $js_static .= "window.stmp = '$_SESSION[Bearer_token_temp]';";
        $js_static .= file_get_contents(ROOT . "welcomer_f.js");

        // ob_start();
        // $_SESSION['Bearer_token_temp'] = bin2/hex(random_bytes(30 / 2));
        // include ROOT . "wlcomer_home.php";
        $response = file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/build/page.php");



        $updates = [
            [
                'tag' => 'link',
                'search_string' => "/mainss",
                'replace_string' => "./assets/static/css/style.css"
            ],
            [
                'tag' => 'script',
                'search_string' => "/main",
                'replace_string' => "./assets/static/js/jscode.js"
            ],
            [
                'tag' => 'script',
                'search_string' => "https://portfolio.localhost/main",
                'replace_string' => "./assets/static/js/jscode.js"
            ],
            [
                'tag' => 'link',
                'search_string' => "/svg_logo_backscr_img",
                'replace_string' => "./favicon.svg"
            ],
            [
                'tag' => 'link',
                'search_string' => "/?mnps=image-favicon?1751370364",
                'replace_string' => "./favicon.svg"
            ]
        ];

        foreach ($updates as $update) {
            $response = $modifer->updateHtml(
                $update['tag'],
                $response,
                $update['search_string'],
                $update['replace_string']
            );
        }


        $js_minifed = self::minifyJS($js_static);

        file_put_contents("$dir/assets/static/js/jscode.js", $js_static);
        file_put_contents("$dir/assets/static/css/style.css", file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/app/build/style.css'));
        file_put_contents("$dir/data/data.json", json_encode($data));
        file_put_contents("$dir/data/feed.json", file_get_contents("$_SERVER[DOCUMENT_ROOT]/temp.json"));
        file_put_contents("$dir/pages/page.php", $response);
        // file_put_contents("$dir/pages/page.php", file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/build/page.php"));
        // file_put_contents("$dir/index.html", $response);
        file_put_contents("$dir/assets/static/img/logo.anim.svg", file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/build/logo.anim.svg"));
        file_put_contents("$dir/favicon.svg", file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/build/logo.anim.svg"));
        file_put_contents("$dir/assets/static/img/logo/nasa.svg", file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/build/nasa.svg"));
        file_put_contents("$dir/manifest.webmanifest", file_get_contents("$_SERVER[DOCUMENT_ROOT]/manifest.webmanifest"));
        file_put_contents("$dir/.htaccess", file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/build/.htaccess"));
        file_put_contents("$dir/package.json", file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/package.json"));
        file_put_contents("$dir/package-lock.json", file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/package-lock.json"));
        file_put_contents("$dir/assets/static/ui/img/loader.svg", file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/app/build/loader.svg"));
        file_put_contents("$dir/assets/static/ui/img/bagdes/text.svg", file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/build/bagdes/text.svg"));

        $modifer->updateExternalFileContent(
            "$dir/assets/static/js/jscode.js",
            "/svg_logo_backscr_img.svg",
            "/assets/static/img/logo.anim.svg"
        );
        $modifer->updateExternalFileContent(
            "$dir/assets/static/js/jscode.js",
            "/?svc=logo_plain",
            "/assets/static/img/logo.anim.svg"
        );

        $modifer->updateExternalFileContent(
            "$dir/assets/static/css/style.css",
            "/logo_nasa",
            "/assets/static/img/logo/nasa.svg",
        );
        $modifer->updateExternalFileContent(
            "$dir/assets/static/js/jscode.js",
            "/svg_logo_backscr_img",
            "/assets/static/img/logo.anim.svg"
        );
        $modifer->updateExternalFileContent(
            "$dir/assets/static/js/jscode.js",
            "/loader",
            "/assets/static/ui/img/loader.svg"
        );
        $modifer->updateExternalFileContent(
            "$dir/assets/static/css/style.css",
            "/loader",
            "/assets/static/ui/img/loader.svg"
        );

        $modifer->updateExternalFileContent(
            "$dir/assets/static/js/jscode.js",
            "/bagdes&name=text",
            "/assets/static/ui/img/bagdes/text.svg"
        );


        if (!is_dir("$dir/node_modules")) {
            self::copyDirectory("$_SERVER[DOCUMENT_ROOT]/node_modules", "$dir/node_modules");
        }
        if (!is_dir("$dir/pwa")) {
            self::copyDirectory("$_SERVER[DOCUMENT_ROOT]/pwa", "$dir/pwa");
        }
        self::copyDirectory("$_SERVER[DOCUMENT_ROOT]/app/build/component", "$dir/backend");
        self::copyDirectory("$_SERVER[DOCUMENT_ROOT]/static/plugins/pdfjs", "$dir/assets/static/plugins/pdfjs");
        self::copyFile("$_SERVER[DOCUMENT_ROOT]/app/build/core.php", "$dir/backend/core.php");
        self::copyFile("$_SERVER[DOCUMENT_ROOT]/app/build/index.php", "$dir/index.php");
        // self::copyFile("$_SERVER[DOCUMENT_ROOT]/app/build/page.php","$dir/pages/page.php");


        exit();
    }
    /**
     * Summary of copyFile
     * @param mixed $source
     * @param mixed $destination
     * @throws Exception
     * @return bool
     */
    private function copyFile($source, $destination)
    {
        if (!file_exists($source)) {
            throw new Exception("Source file does not exist: $source");
        }

        if (!is_dir(dirname($destination))) {
            mkdir(dirname($destination), 0777, true);
        }

        if (!copy($source, $destination)) {
            throw new Exception("Failed to copy file from $source to $destination");
        }

        return true;
    }
    public function loader_static()
    {

    }
    public function sitemapGenerator()
    {
        if (empty($_GET['f']) && empty($_POST)) {

            #   self::error_page(404);
            #   exit();
        }
        $host = "markonikolic98.com";
        $r = $this->get_data([
            "url" => "https://api.eronelit.com/app&id=A03429468246&json=all",
            "headers" => [
                'Content-Type: application/json',
                'Authorization: Bearer 32M052k350QaeofkaeopfF',
            ]
        ]);
        $r2 = json_decode($r, true);
        $array = $r2['data']['blog'];

        # $array2 = file_get_contents(ROOT . "/data_s/blog/blgd.json");
        $generatedv2 = "";
        $generated = "";
        /* $rplc = file_get_contents("https://$host/sitemap.xml");
         $rplc = str_replace("<?xml version='1.0' encoding='UTF-8'?>", "", $rplc);
         $rplc = str_replace('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', "", $rplc);
         $rplc = str_replace("</urlset>", "", $rplc);
         */
        $top_ulrs = [
            "https://$host",
            "https://$host/?p=cv-pdf",
            "https://$host/?p=projects",
            "https://$host/?p=blog",
            "https://$host/?p=gallery"
        ];
        foreach ($r2['data']['gallery']['gallery'] as $v) {
            array_push($top_ulrs, (string) "https://$host/?p=gallery&album=$v[name]");
        }

        foreach ($top_ulrs as $index => $element) {

            $d = date('Y-m-d h:i:s ', time());
            // date_format($d2,"Y/m/d  H:i:s");
            $generated .= " 
            <url>
                <loc>$element</loc>
                <lastmod>2013-01-26 07:19:22</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
            </url>\n 
            ";
        }
        header("Content-Type: text/plain");
        foreach ($array as $index => $element) {
            $d2 = strtotime($element["time"]);
            # $d = date('Y-m-d h:i:s ', $d2);
            #   $dt = date_format($d2,"Y/m/d  H:i:s");
            $date = $element["time"];

            #  $dateObj = DateTime::createFromFormat('d.M.Y H:iA', $date);

            // Format the DateTime object to the desired format
            #    $date = $dateObj->format('Y-m-d H:i:s');
            $date = self::reformat_fd($element['time']);

            // $d = $element["time"];
            $generated .= " 
            <url>
                <loc>https://$host/?p=blog&id=$element[id]</loc>
                <lastmod>$date</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.1</priority>
            </url>\n";
        }

        $generated = str_replace("&", "&amp;", $generated);

        $generatedv2 .= "<?xml version='1.0' encoding='UTF-8'?>\n";
        $generatedv2 .= "<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>";
        $generatedv2 .= (string) $generated;
        $generatedv2 .= "</urlset>";

        #file_put_contents("$_SERVER[DOCUMENT_ROOT]/sitemap.xml", $generatedv2);

        #  $file = "$_SERVER[DOCUMENT_ROOT]/sitemap.xml";
        if (!empty($_SERVER['HTTP_USER_AGENT'])) {
            header('Content-Type: application/xml');
            header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
            header("Pragma: no-cache");
            header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
            echo $generatedv2;
        }
        exit;
    }
    function readJsonFile($filename)
    {
        $jsonContent = file_get_contents($filename);
        return json_decode($jsonContent, true);
    }
    function sharedUlrF($aerea)
    {
        $url = "https://api.eronelit.com/graph";
        $token = "32M052k350QaeofkaeopfF";
        $data = [
            'token' => '32M052k350QaeofkaeopfF',
            'key' => '3402340234239J939592369',
            'type' => 'share_validator',
            'shared' => $aerea
        ];
        $ch = curl_init($url);
        $r = "";
        $jsonData = json_encode($data);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $jsonData,
            CURLOPT_HTTPHEADER => [
                "Authorization: Bearer $token",
                "Content-Type: application/json"
            ],
        ]);
        $response = curl_exec($ch);

        if (curl_errno($ch)) {
        } else {
            $r = $response;
        }
        curl_close($ch);
        return $r;
    }
    function sharedUlr($aerea)
    {
        $url = "https://api.eronelit.com/graph";
        $postData = [
            'token' => '32M052k350QaeofkaeopfF',
            'key' => '3402340234239J939592369',
            'type' => 'share_validator',
            'shared' => $aerea
        ];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/x-www-form-urlencoded',
            'Authorization: Bearer 32M052k350QaeofkaeopfF'
        ]);
        $response = curl_exec($ch);

        if (curl_errno($ch)) {
        } else {
            echo $response;
        }
        curl_close($ch);
    }
    function get_page_by_pln_thumb($img)
    {
        $r = ROOT . "data_s/blog/image/$img.png";
        ob_start();
        #$image_data = file_get_contents($r);
        @readfile($r);
        $image_data = ob_get_clean();
        $image_base64 = base64_encode($image_data);

        $data_url = "data:image/png;base64,$image_base64";
        return $data_url;
    }
    /**
     * Removes all <style> tags from an HTML string.
     *
     * @param string $html The HTML content to process.
     * @return string The processed HTML content without <style> tags.
     */
    function removeStyleTags($html)
    {
        // Use a regular expression to find and remove all <style> tags and their content
        $html = preg_replace('/<style\b[^>]*>(.*?)<\/style>/is', '', $html);
        return $html;
    }
    function get_page_by_pln($id, $r, $all = array())
    {
        #ob_start();

        $css = file_get_contents(ROOT . "/Scripts/md_viewer.css");
        $js = file_get_contents(ROOT . "/Scripts/md_viewer.js");
        $css_viewer = file_get_contents(ROOT . "/Scripts/link_preview.css");



        $response = "";


        $currentUrl = $_SERVER['REQUEST_URI'];
        $urlParts = explode('/', $currentUrl)[2];
        $dataAfterSlash = $urlParts;

        $response .= self::removeStyleTags(file_get_contents(ROOT . "data_s/blog/$id.html"));
        $response .= "
                 <dnm_footer>Last modified: $r</dnm_footer>" .

            "<style type='text/css'>
            @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
         </style>" .
            "<script type='text/javascript'>$js </script>" .
            '<div class="cursor " style="opacity: 0;"></div>
           
            </div>';

        return $response; //htmlspecialchars_decode($response);
    }

    /* <!--
            <br_box>
            <div class="bra"><img class="img_background_rljs" src="/?blog=02_jun_2024_22_10/3423413441" alt="Blog > Marko Nikolić" loading="lazy"></div><pe>Detected links in post:</pe><br_aer class="snaped"><baer>
            <img src="/?blog=02_jun_2024_22_10/3423413441"><ber_f>
            <bar_t><img src="/?blog=02_jun_2024_22_10/3423413441" class="favicon" height="16" width="16"><span>What is it ..aeraera e.r .ae.</span></bar_t><span>domain.com
            </span>
            </ber_f>
            </baer><baer>
            <img src="/?blog=02_jun_2024_22_10/3423413441"><ber_f>
            <bar_t><img src="/?blog=02_jun_2024_22_10/3423413441" class="favicon" height="16" width="16"><span>What is it ..aeraera e.r .ae.</span></bar_t><span>domain.com
            </span>
            </ber_f>
            </baer><baer>
            <img src="/?blog=02_jun_2024_22_10/3423413441"><ber_f>
            <bar_t><img src="/?blog=02_jun_2024_22_10/3423413441" class="favicon" height="16" width="16"><span>What is it ..aeraera e.r .ae.</span></bar_t><span>domain.com
            </span>
            </ber_f>
            </baer><baer>
            <img src="/?blog=02_jun_2024_22_10/3423413441"><ber_f>
            <bar_t><img src="/?blog=02_jun_2024_22_10/3423413441" class="favicon" height="16" width="16"><span>What is it ..aeraera e.r .ae.</span></bar_t><span>domain.com
            </span>
            </ber_f>
            </baer>
            </br_aer></br_box> -->
            */
    // Function to get an item by ID from JSON data
    function getItemById($filename, $id)
    {
        $jsonContent = file_get_contents($filename);
        $jsonData = json_decode($jsonContent, true);
        foreach ($jsonData as $item) {
            if ($item['id'] == $id) {
                return $item;
            }
        }
        return null; // Item with the specified ID not found
    }

    function wlcomer_headers_arr()
    {
    }

    function RUN()
    {
        if (!empty($_GET['data'])) {
            if ($_GET['data'] == "sitemap") {
                $this->sitemapGenerator();
            }
            if ($_GET['data'] == "") {
            }
        } else if (!empty($_GET['blog'])) {
            $url = ROOT . "data_s/blog/image/";
            $array = json_decode(file_get_contents(ROOT . "/data_s/blog/blgd.json"), true);
            $file = ROOT . "data_s/blog/$_GET[blog].html";
            $fl = false;
            if (file_exists(ROOT . "data_s/blog/$_GET[blog].php")) {
                $file = ROOT . "data_s/blog/$_GET[blog].php";
            }
            if (file_exists($file)) {
                header("content-type: text/html");
                if (file_exists($file) && !empty($_POST['id'])) {
                    $css = file_get_contents(ROOT . "/Scripts/md_viewer.css");
                    $js = file_get_contents(ROOT . "/Scripts/md_viewer.js");

                    if ($fl) {
                        include_once $file;
                    } else {
                        echo file_get_contents($file);
                    } ?>
                        <link rel="preload" href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/bootstrap-icons.css" as="style">
                        <link rel="preload" href="<?php echo CDN; ?>/node_modules/jquery/dist/jquery.min.js" as="script">
                        <link rel="preload" href="<?php echo CDN; ?>/node_modules/ez-plus/src/jquery.ez-plus.js" as="script">
                        <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js" as="script">
                        <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/js/bootstrap.min.js" as="script">
                        <link rel="preload" as="font"
                            href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3"
                            type="font/woff2">
                        <link
                            href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                            rel="stylesheet">
                        <link
                            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                            rel="stylesheet">
                        <?php
                        $currentUrl = $_SERVER['REQUEST_URI'];
                        $urlParts = explode('/', $currentUrl)[2];
                        $dataAfterSlash = $urlParts;
                        $r = $this->getItemById("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json", $_POST['id']);
                        echo "<dnm_footer>Last modified: $dataAfterSlash " . $r["time"] . "</dnm_footer>";
                        echo "<style type='text/css'>$css</style>";
                        echo "<script type='text/javascript'>$js </script>";
                        echo '<div class="cursor " style="opacity: 0;></div>';
                        exit();
                } else {
                    $this->error_page(404);
                }
                // 23_jul_2023_09_26/1690103453287
            } else if (!empty($_GET['t'])) {
                if ($_GET['t'] == "v") {
                    $parsed_url = parse_url($_SERVER['HTTP_REFERER']);
                    $host = $parsed_url['host'];
                    if ($host == "$_SERVER[HTTP_HOST]") {
                        ?>

                                <html>

                                <head>
                                    <link href="<?= CDN ?>/node_modules/video.js/dist/video-js.min.css" rel="stylesheet" />
                                    <style>
                                        * {
                                            margin: 0px;
                                            padding: 0px;
                                        }

                                        div#my-video {
                                            position: fixed;
                                            left: 0px;
                                            top: 0px;
                                            width: 100%;
                                            height: 100%;
                                        }
                                    </style>
                                </head>

                                <body onload="f();">
                                    <video id="my-video" class="video-js" controls preload="auto" width="640" height="264"
                                        poster="<?php echo API_HOST . "&blog=$_GET[blog]"; ?>00" data-setup="{}">
                                        <source src="<?php echo API_HOST . "&blog=$_GET[blog]"; ?>" type="video/mp4" />
                                        <p class="vjs-no-js">
                                            To view this video please enable JavaScript, and consider upgrading to a
                                            web browser that supports HTML5 video.
                                        </p>
                                    </video>
                                    <script async type="text/javascript">
                                        f = function () {
                                            document.addEventListener("contextmenu", function (e) {
                                                e.preventDefault();
                                                return false;
                                            });
                                            document.addEventListener("selectstart", function (e) {
                                                e.preventDefault();
                                                return false;
                                            });
                                            document.addEventListener("dragstart", function (e) {
                                                e.preventDefault();
                                                return false;
                                            });
                                            document.querySelectorAll("script").forEach(function (res) {
                                                //     res.remove();
                                                console.clear();
                                            });
                                            document.addEventListener('keydown', function (event) {
                                                if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                                                    event.preventDefault();

                                                }
                                                if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
                                                    event.preventDefault();

                                                }
                                            });
                                        }
                                    </script>
                                    <script src="<?= CDN ?>/node_modules/video.js/dist/video.min.js"></script>
                                </body>

                                </html>

                        <?php
                    } else {
                        $this->error_page(404);
                    }
                    exit();
                } else {
                    $this->streamVideo("$url$_GET[blog].mp4");
                }
            } else if (file_exists("$url$_GET[blog].png")) {
                if (!empty($_GET['for'])) {
                    if ($_GET['for'] == "og") {
                        header("content-type: image/png");
                        $this->ServeThumb("$url$_GET[blog].png", 600);
                    }
                } else if (!empty($_GET['thumb'])) {
                    if ($_GET['thumb'] == "true") {
                        header("content-type: image/png");
                        $this->ServeThumb("$url$_GET[blog].png");
                    }
                } else {
                    header("content-type: image/png");
                    readfile("$url$_GET[blog].png");
                }
            } else if (file_exists("$url$_GET[blog].jpg")) {
                if (!empty($_GET['for'])) {
                    if ($_GET['for'] == "og") {
                        header("content-type: image/png");
                        $this->ServeThumb("$url$_GET[blog].jpg", 500);
                    }
                } else {
                    header("content-type: image/jpeg");
                    readfile("$url$_GET[blog].jpg");
                }
            } else if (file_exists("$url$_GET[blog].jpeg")) {
                header("content-type: image/jpeg");
                readfile("$url$_GET[blog].jpeg");
            } else if ($_GET['blog'] == "all") {
                header("content-type: text/json");
                $array = json_decode(file_get_contents(ROOT . "/data_s/blog/blgd.json"), true);
                $array2 = file_get_contents(ROOT . "/data_s/blog/blgd.json");

                if (!empty($_GET['id'])) {
                    $off = false;
                    foreach ($array as $index => $element) {
                        if ($element['id'] == $_GET['id']) {
                            echo json_encode($element);
                        }
                    }
                    if ($off) {
                    }
                } else if (!empty($_GET['rss'])) {
                    if ($_GET['rss'] == "versions") {
                        $this->getRSSFeed();
                    }
                } else {
                    echo $array2;
                }
                exit();
            } else if ($_GET['blog'] == "search") {
                // $found_key = array_search('blue', $colors);
                if (!empty($_GET['q'])) {
                    header("content-type: text/json");
                    $arrayF = json_decode(file_get_contents(ROOT . "/data_s/blog/blgd.json"), true);
                    $searchKey = "title";
                    $searchValue = $_GET['q'];
                    $arrayLM = array();
                    $i = 0;

                    foreach ($arrayF as $element) {
                        if (strpos("$element[title]", "$searchValue") !== false) {

                            //  echo "Element found: " . $element["name"] . " (Age: " . $element["age"] . ")" . PHP_EOL;
                            $arrayLM[$i]->id = $element['id'];
                            $arrayLM[$i]->title = $element['title'];
                            $arrayLM[$i]->time = $element['time'];
                            $arrayLM[$i]->source = $element['source'];
                            $arrayLM[$i]->thumbail = $element['thumbail'];

                            $i++;
                        }
                    }
                    echo json_encode($arrayLM);
                }
            } else if ($_GET['blog'] > 0) {
                header("content-type: text/json");
                $array = json_decode(file_get_contents(ROOT . "/data_s/blog/blgd.json"), true);

                $array2 = file_get_contents(ROOT . "/data_s/blog/blgd.json");
                $off = "true";
                foreach ($array as $index => $element) {

                    if ($element['id'] == $_GET['blog']) {
                        echo json_encode($element);
                        $off = "false";
                    }
                }
                if ($off == "true") {
                    header("contnet-type: text/plain");
                    echo "NO";
                    exit();
                }
            } else {
                include ROOT . "ERROR_PG.php";
            }
            exit();
        } else if (!empty($_GET['pdf_file'])) {
            $file = ROOT . "data_s/blog/image/$_GET[id].pdf";
            if ($_GET['pdf_file'] == "view") {
                $this->error_page(404);
                exit();
                include ROOT . "views/pdf_viewer.php";
                # include ROOT . "Scripts/pdf_viewer.php";
            } else if ($_GET['pdf_file'] == "file") {
                if (!empty($_GET['id'])) {
                    if (file_exists($file)) {
                        header("content-type: application/pdf");
                        readfile($file);
                    }
                }
            } else {
            }
            exit();
        } else if (!empty($_GET['mnps'])) {

            $img_background_3_jpg = ROOT . "img/background-3.jpg";
            $img_background_1_jpg = ROOT . "img/background-1.jpg";
            //





            if (strpos($_GET['mnps'], 'javascript-15') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/words.php";
            } else if (strpos($_GET['mnps'], 'welcomer-pl-js') !== false) {
                header("Content-type: application/javascript");
                header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
                header("Cache-Control: post-check=0, pre-check=0", false);
                header("Pragma: no-cache");
                $f = time() . rand();
                echo " /* $f */ ";
                $r = $this->get_data([
                    "url" => "https://api.eronelit.com/app&id=A03429468246&json=all",
                    "headers" => [
                        'Content-Type: application/json',
                        'Authorization: Bearer 32M052k350QaeofkaeopfF',
                    ]
                ]);

                // echo "<script type='text/javascript'  charset='UTF-8' id='json_feed'> window.portfolio = $r;</script>";
                echo "const portfolio = $r; \n";
                include "$_SERVER[DOCUMENT_ROOT]/app/Scripts/jquery3.6.0.min.js \n";
                echo file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/Scripts/jquery.min.js");
                @readfile(ROOT . "welcomer_f.js");
            } else if (strpos($_GET['mnps'], 'blog-rss') !== false) {
                header("Content-type: text/plain");
                if (!empty($_POST['what'])) {
                    if ($_POST['what'] == "blog") {
                        $url = "https://blog.eronelit.com/feeds/posts/default";
                        $fileContents = file_get_contents($url);
                        $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
                        $fileContents = trim(str_replace('"', "'", $fileContents));
                        $simpleXml = simplexml_load_string($fileContents);
                        $json = json_encode($simpleXml);
                        // echo $json; 
                        echo trim(base64_encode($json), " ");
                    } else {
                    }
                } else {
                }
                exit();
            } else if (strpos($_GET['mnps'], 'javascript-14') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/f3924.php";
            } else if (strpos($_GET['mnps'], 'javascript-13') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/301F942.php";
            } else if (strpos($_GET['mnps'], 'javascript-no-12') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/map.php";
            } else if (strpos($_GET['mnps'], 'javascript-12') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/contact-me.php";
            } else if (strpos($_GET['mnps'], 'javascript-11') !== false) {

                include "js/js_s/jquery.mb.YTPlayer.php";
                header("Content-type: application/javascript");
            } else if (strpos($_GET['mnps'], 'javascript-10') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.mCustomScrollbar.php";
            } else if (strpos($_GET['mnps'], 'javascript-9') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.swipebox.php";
            } else if (strpos($_GET['mnps'], 'javascript-8') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/dialogFx.php";
            } else if (strpos($_GET['mnps'], 'javascript-7') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/classie.php";
            } else if (strpos($_GET['mnps'], 'javascript-6') !== false) {
                header("Content-type: application/javascript");
                include "js/js_s/jquery.pagepiling.php";
            } else if (strpos($_GET['mnps'], 'javascript-5') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/bootstrap.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-4') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.easings.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-3') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/jquery.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-2') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/modernizr.custom.php";
            } else if (strpos($_GET['mnps'], 'javascript-rb') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/rb/rb.php";
            } else if (strpos($_GET['mnps'], 'javascript-mr-m') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "Scripts/tmp/1query/m.php";
            } else if (strpos($_GET['mnps'], 'javascript-mr-h_old') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "js/js_s/holder.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-jq-slm') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "Scripts/tmp/1query/jquery-slim.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-jq-slm3') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "Scripts/tmp/1query/jquery-3.3.1.slim.min.php";
            } else if (strpos($_GET['mnps'], 'javascript-in-F_9') !== false) {
                header("Content-type: application/javascript");

                include "js/js_s/popper.min.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-9') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/style1f.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-8') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/bootstrap.min.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-7') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/animate.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-6') !== false) {
                header("Content-type: text/css");
                ob_start(function ($b) {
                    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
                });
                include "css/swipebox.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-5') !== false) {
                header("Content-type: text/css");
                include "js/js_s/jquery.pagepiling.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-4') !== false) {
                header("Content-type: application/javascript");
                include "js/js_s/jquery.mCustomScrollbar.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-in-3') !== false) {
                header("Content-type: text/css");
                include "css/style_album.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-8') !== false) {
                header("Content-type: text/css");
                include "css/album.php";
            } else if (strpos($_GET['mnps'], 'stylesheet-7') !== false) {
                header("Content-type: text/css");
                include "css/modal_ostalo.php";
            } else if (strpos($_GET['mnps'], 'fgae-stylesheet') !== false) {
                header("Content-type: text/css");
                include "Scripts/tmp/1query/bootstrap.min.css";
            }
            // Scripts/tmp/1query/bootstrap.min.css
            // projct >
            // ?mnps=image-in-pr-img&image-in-pr-img-s-png=
            else if (strpos($_GET['mnps'], 'image-in-pr-img') !== false) {
                if (!empty($_GET['image-in-pr-img-s-png'])) {
                    header('Content-type: image/png');
                    header('Content-disposition: inline; filename="Eronelit background"');
                    readfile("img/" . $_GET['image-in-pr-img-s-png'] . ".png");
                } else if (!empty($_GET['image-in-pr-img-s-jpg'])) {
                    header('Content-type: image/jpeg');
                    header('Content-disposition: inline; filename="Eronelit background"');
                    readfile("img/" . $_GET['image-in-pr-img-s-jpg'] . ".jpg");
                } else {
                }
            }

            // projct >
            else if (strpos($_GET['mnps'], 'image-in-background-3') !== false) {
                header('Content-type: image/jpeg');
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("img/background-3.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-3-2') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("img/background-3-2.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-2') !== false) {
                header("content-type: image/jpg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile("img/background-2.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-6') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/background-6.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-4') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/background-4.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-5') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/background-5.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-7') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/background-7.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-8') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/background-8.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-background-9') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/background-9.jpg");
            }
            // - -- ---
            else if (strpos($_GET['mnps'], 'image-in-prjt-1') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/AI1.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-2') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/dd1.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-3') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/ftpimage.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-4') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/ftpimage.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-5') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/home_experiments.png");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-6') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/img_fae.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-prjt-7') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/galaxy_slider2.jpg");
            }
            // - -- ---
            else if (strpos($_GET['mnps'], 'image-3140') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/slika314.jpg");
            } else if (strpos($_GET['mnps'], 'image_og') !== false) {
                header("Content-type: image/png");
                header('Content-disposition: inline; filename="Eronelit background"');
                // readfile("$_SERVER[DOCUMENT_ROOT]/README_files/readme_part1.png");
                $this->ServeThumb("$_SERVER[DOCUMENT_ROOT]/README_files/readme_part1.png", 1000);
            } else if (strpos($_GET['mnps'], 'image-mask') !== false) {
                header("Content-type: text/html");
                include ROOT . "css/mask.php";
            } else if (strpos($_GET['mnps'], 'image-s-mask') !== false) {
                header("Content-type: image/svg+xml");
                readfile(ROOT . "/img/svg_bckr_mask.svg");
            } else if ($_GET['mnps'] == 'pdf-d-cv') {
                $file_url = ROOT . "cv-pdf.pdf";
                header('Content-Type: application/octet-stream');
                header("Content-Transfer-Encoding: Binary");
                header("Content-disposition: attachment; filename=\"" . basename($file_url) . "\"");
                readfile($file_url);
            } else if ($_GET['mnps'] == 'blog') {

                if (!empty($_GET['f'])) {
                    header("content-type: text/html");
                    $file = ROOT . "data_s/blog/$_GET[f].html";
                    if (file_exists($file)) {
                        $css = file_get_contents(ROOT . "/Scripts/md_viewer.css");
                        $js = file_get_contents(ROOT . "/Scripts/md_viewer.js");


                        echo file_get_contents($file);
                        ?>
                                                                                                                                                                                                                                                                <link rel="preload" href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/bootstrap-icons.css" as="style">
                                                                                                                                                                                                                                                                <link rel="preload" href="<?php echo CDN; ?>/node_modules/jquery/dist/jquery.min.js" as="script">
                                                                                                                                                                                                                                                                <link rel="preload" href="<?php echo CDN; ?>/node_modules/ez-plus/src/jquery.ez-plus.js" as="script">
                                                                                                                                                                                                                                                                <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js" as="script">
                                                                                                                                                                                                                                                                <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/js/bootstrap.min.js" as="script">
                                                                                                                                                                                                                                                                <link rel="preload" as="font"
                                                                                                                                                                                                                                                                    href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3"
                                                                                                                                                                                                                                                                    type="font/woff2">
                                                                                                                                                                                                                                                                <link
                                                                                                                                                                                                                                                                    href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                                                                                                                                                                                                                                                                    rel="stylesheet">
                                                                                                                                                                                                                                                                <link
                                                                                                                                                                                                                                                                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                                                                                                                                                                                                                                                                    rel="stylesheet">
                            <?php
                            $currentUrl = $_SERVER['REQUEST_URI'];
                            $urlParts = explode('/', $currentUrl);

                            $urlParts = array_filter($urlParts);

                            $dataAfterSlash = end($urlParts);
                            $r = $this->getItemById("$_SERVER[DOCUMENT_ROOT]/app/data_s/blog/blgd.json", $dataAfterSlash);
                            echo "<dnm_footer>Last modified: " . $r["time"] . "</dnm_footer>";
                            echo "<style type='text/css'>$css</style>";
                            echo "<script type='text/javascript'>$js </script>";

                            exit();
                    } else {
                        $this->error_page(404);
                    }
                } else if (!empty($_GET['q'])) {
                    if ($_GET['q'] == "all") {
                        header("content-type: text/json");
                        $array = json_decode(file_get_contents(ROOT . "/data_s/blog/blgd.json"), true);
                        $array2 = file_get_contents(ROOT . "/data_s/blog/blgd.json");

                        if (!empty($_GET['id'])) {
                            foreach ($array as $index => $element) {
                                if ($element['id'] == $_GET['id']) {
                                    echo json_encode($element);
                                }
                            }
                        } else {
                            echo $array2;
                        }
                        exit();
                    }
                } else {
                    $this->error_page(404);
                }
            } else if ($_GET['mnps'] == 'gallery') {

                $arr = array();
                if (!empty($_GET['img'])) {
                    $url = ROOT . "data_s/data_wlp/";
                    if (!empty($_GET["blog"])) {
                        $url = ROOT . "data_s/blog/image/";
                    }


                    if (file_exists("$url$_GET[img].png")) {
                        header("content-type: image/png");
                        if (!file_exists(ROOT . "data_s/data_wlp/thumb/$_GET[img].png")) {
                            #  $this->SerfveThumb("$url$_GET[img].png", 640, ROOT."data_s/data_wlp/thumb/$_GET[img]","png");
                        }
                        readfile("$url$_GET[img].png");
                    } else if (file_exists("$url$_GET[img].jpg")) {
                        header("content-type: image/jpeg");
                        if (!file_exists(ROOT . "data_s/data_wlp/thumb/$_GET[img].jpg")) {
                            #   $this->ServfeThumb("$url$_GET[img].png", 640, ROOT."data_s/data_wlp/thumb/$_GET[img]","");
                        }
                        readfile("$url$_GET[img].jpg");
                    } else if (file_exists("$url$_GET[img].jpeg")) {
                        header("content-type: image/jpeg");
                        if (!file_exists(ROOT . "data_s/data_wlp/thumb/$_GET[img].jpeg")) {
                            # $this->ServefThumb("$url$_GET[img].png", 640, ROOT."data_s/data_wlp/thumb/$_GET[img]","");
                        }
                        readfile("$url$_GET[img].jpeg");
                    } else if (file_exists("$url$_GET[img].mp4")) {
                        streamVideo("$url$_GET[img].mp4");
                    } else if (file_exists("$url$_GET[img].svg")) {
                        header("content-type: image/svg+xml");
                        if (!file_exists(ROOT . "data_s/data_wlp/thumb/$_GET[img].jpeg")) {
                            # $this->ServefThumb("$url$_GET[img].png", 640, ROOT."data_s/data_wlp/thumb/$_GET[img]","");
                        }
                        include "$url$_GET[img].svg";
                    } else {
                        $this->error_page(404);
                    }
                } else if (!empty($_GET['thumb'])) {
                    $url = ROOT . "data_s/data_wlp/";
                    $fileList = glob(ROOT . 'data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE);
                    $i = 0;
                    header("content-type: image/jpeg");
                    foreach ($fileList as $filename) {
                        $nmx = pathinfo($filename, PATHINFO_FILENAME);
                        $n = pathinfo($filename, PATHINFO_BASENAME);
                        $nmxext = pathinfo($filename, PATHINFO_EXTENSION);
                        if (strpos($filename, "$_GET[thumb].$nmxext") !== false) {
                            header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
                            header("Cache-Control: post-check=0, pre-check=0", false);
                            header("Pragma: no-cache");
                            header("content-type: image/png");
                            // @readfile($filename);
                            if (!empty($_GET['thumb_or'])) {
                                @readfile($filename);
                            } else {
                                $this->ServeThumb("$filename", 640);
                            }
                            exit();
                        }
                    }



                    exit();
                } else {

                    $fileList = glob(ROOT . 'data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE);
                    $i = 0;
                    foreach ($fileList as $filename) {
                        // rename("/tmp/tmp_file.txt", "/home/user/login/docs/my_file.txt");
                        $path_parts = pathinfo($filename);
                        $IamNumberic = time() . rand();
                        if (!is_numeric("$path_parts[filename]")) {
                            rename(ROOT . "data_s/data_wlp/$path_parts[filename].$path_parts[extension]", "data_s/data_wlp/$IamNumberic.$path_parts[extension]");
                            $arr[$i]->img = "/?mnps=gallery&img=$IamNumberic";
                            if (!file_exists(ROOT . "data_s/data_wlp/thumb/$IamNumberic.$path_parts[extension]")) {
                                #  $this->SerzveThumb("$filename", 640, ROOT."data_s/data_wlp/thumb/","$IamNumberic.$path_parts[extension]");
                            }
                            $arr[$i]->thumb = "/?mnps=gallery&thumb=$IamNumberic";
                        } else {
                            $arr[$i]->img = "/?mnps=gallery&img=$path_parts[filename]";

                            $arr[$i]->thumb = "/?mnps=gallery&thumb=$path_parts[filename]";
                        }
                        // $arr[$i]->img = "data:image/png;base64,".base64_encode(file_get_contents($filename));
                        $arr[$i]->title = "-";
                        $arr[$i]->description = "-";

                        // "data:image/png;base64,".base64_encode(file_get_contents($filename));// "/?mnps=gallery&img=$path_parts[filename]";
                        $arr[$i]->href = "-";
                        $arr[$i]->type = true;
                        $i++;
                    }
                    header("content-type: text/json");
                    echo json_encode($arr);
                    exit();
                }
            } else if (strpos($_GET['mnps'], 'svg_bckr_mask') !== false) {
                header("Content-type: image/svg+xml");
                // header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/svg_bckr_mask.svg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-1') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/vertical-gallery-1.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-2') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/vertical-gallery-2.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-3') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/vertical-gallery-3.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-4') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/vertical-gallery-4.jpg");
            } else if (strpos($_GET['mnps'], 'image-in-g-background-5') !== false) {
                header("Content-type: image/jpeg");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/img/vertical-gallery-5.jpg");
            } else if (strpos($_GET['mnps'], 'image-favicon') !== false) {
                header("Content-type: image/x-icon");
                header('Content-disposition: inline; filename="Eronelit background"');
                readfile(ROOT . "/logo.ico");
            } else if (strpos($_GET['mnps'], "fonts-D3") !== false) {
                header('Content-type: font/woff');
                header('Content-disposition: inline; filename="Eronelit font"');
                readfile(ROOT . "/fonts/D3/DRF.woff");
            } else if (strpos($_GET['mnps'], "fonts-D32") !== false) {
                header('Content-type: font/woff2');
                header('Content-disposition: inline; filename="Eronelit font"');
                readfile(ROOT . "/fonts/D3/DRF2.woff2");
            } else if (strpos($_GET['mnps'], "stylesheet-fai") !== false) {
                header("Content-type: text/css");
                include ROOT . "fonts/D3/D3.php";
            }
            // old
            else if (strpos($_GET['mnps'], "portfolio-v3-old-s-h") !== false) {
                include ROOT . "old_portfolio/index.php";
            } else if (strpos($_GET['mnps'], "portfolio-v3-old-s-s-stylesheet") !== false) {
                header("Content-type: text/css");
                include ROOT . "old_portfolio/css.php";
            } else if (strpos($_GET['mnps'], "portfolio-v3-old-s-s-script") !== false) {
                header("Content-type: application/javascript");
                include ROOT . "old_portfolio/script.php";
            }
            // old
            else if (strpos($_GET['mnps'], "stylesheet-3") !== false) {
                header("Content-type: text/css");
            } else if (strpos($_GET['mnps'], "stylesheet-js-fai") !== false) {
                header("Content-type: application/javascript");

                include ROOT . "Scripts/js_font_awesommme.php";
            } else if (strpos($_GET['mnps'], "jquery-2.2.4") !== false) {
                header("Content-type: application/javascript");
                include ROOT . "Scripts/jquery-2.2.4.min.php";
            }
            // -- arial font
            else if (strpos($_GET['mnps'], "arial_font") !== false) {

                if (!empty($_GET['FGC_source'])) {
                    header('Content-type: application/ttf');
                    header('Content-disposition: inline; filename="Eronelit font"');
                    readfile(ROOT . "/fonts/D4/" . $_GET['FGC_source'] . ".ttf");
                } else {
                    return false;
                }



                // -- arial font



                // -
            } else if (strpos($_GET['mnps'], "stylesheet-gg-fai") !== false) {
                header("Content-type: text/css");
                include ROOT . "fonts/BX/BX.php";
            } else if (strpos($_GET['mnps'], "stylesheet-js-fai") !== false) {
                header("Content-type: application/javascript");
                include ROOT . "Scripts/js_font_awesommme.php";
            } else if (strpos($_GET['mnps'], "js-feaie") !== false) {
                header("Content-type: application/javascript");
                include ROOT . "visitcard/ff_FA/cv_pdf/html2canvas.min.php";
            }

            // - 
            else if (strpos($_GET['mnps'], "FPCARGOsourceG") !== false) {


                if (!empty($_GET['FPCARGOsourceG0F1'])) {

                    header('Content-type: application/woff2');
                    header('Content-disposition: inline; filename="Eronelit font"');
                    if (readfile("https://fonts.gstatic.com/" . $_GET['FPCARGOsourceG0F1'])) {
                        include_once("https://fonts.gstatic.com/" . $_GET['FPCARGOsourceG0F1']);
                    } else {
                        return false;
                    }
                }
            } else if (strpos($_GET['mnps'], "javascript-no-13") !== false) {
                header("Content-type: application/javascript");

                #  include ROOT . "Scripts/jquery.mousewheel.min.php";
            } else if (strpos($_GET['mnps'], "javascript-nfo-13") !== false) {
                header("Content-type: application/javascript");
                include ROOT . "visitcard/html2canvas.php";
            } else if (strpos($_GET['mnps'], 'source_099925') !== false) {


                include ROOT . "projct.php";
            } else if (strpos($_GET['mnps'], 'media_source') !== false) {
                $ppath = "$_SERVER[DOCUMENT_ROOT]/cinematic_3/cinematic_MainMenu.mp4";
                $reqpath = $ppath;
                header("Content-Type: video/mp4"); #Optional if you'll only load it from other pages
                header('Accept-Ranges: bytes');
                header('Content-Length:' . filesize($reqpath));
                @readfile($reqpath);
                exit();
            }
            // - visitcard
            else if (strpos($_GET['mnps'], 'visitcard') !== false) {
                include ROOT . "visitcard/index1.php";
            } else if (strpos($_GET['mnps'], 'source_934285_stylesheet') !== false) {
                header("Content-type: text/css");
                include ROOT . "visitcard/333234/style.php";
            } else if (strpos($_GET['mnps'], 'source_9342805_javascript') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/333234/style.php";
            } else if (strpos($_GET['mnps'], 'source_visitcard_FA032') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/html2canvas.php";
            } else if (strpos($_GET['mnps'], 'source_visitcard_FV032') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/html2canvas.min.php";
            } else if (strpos($_GET['mnps'], 'source_visitcard_FH032') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/jquery-3.3.1.min_js.php";
            } else if ($_GET['mnps'] == "contacts") {
                header("content-type: text/json");
                define("ROOTcontacts", "$_SERVER[DOCUMENT_ROOT]/../markonikolic98");
                if (!empty($_POST["fm"]) || !empty($_POST['fe']) || !empty($_POST["fn"])) {
                    if (!is_dir(ROOTcontacts)) {
                        mkdir(ROOTcontacts);
                    }
                    if (!is_dir(ROOTcontacts . "/data_s")) {
                        mkdir(ROOTcontacts . "/data_s");
                    }
                    if (!is_dir(ROOTcontacts . "/data_s/data_f/")) {
                        mkdir(ROOTcontacts . "/data_s/data_f/");
                    }
                    $rand = time() . rand();
                    $to = date('m_d_Y_h_i_sa', time()) . "-$rand-$_POST[fe]-contact.json";
                    $subject = $_POST['fn'];
                    $message = $_POST['fm'];
                    $headers = 'From: ' . $_POST['fe'] . '' . "\r\n" .
                        'X-Mailer: eronelit.com';

                    // $r = json_encode($_POST);
                    $r = array();
                    $r[0]->name = $subject;
                    $r[0]->message = "$_POST[fm]";
                    $r[0]->email = "$_POST[fe]";
                    // $r = json_encode("{ 'name':'$subject', 'message':'$_POST[fm]', 'email':'$_POST[fe]' }");
                    $far = base64_encode(json_encode($r));

                    $ff = file_put_contents(ROOTcontacts . "/data_s/data_f/$to", "$far");
                    if ($ff) {
                        //mail($to, $subject, $message, $headers)){
                        echo "yes";
                    } else {
                        echo "no";
                    }
                } else {
                }
                exit();
            } else if ($_GET['mnps'] == 'dbe') {
                if (!empty($_GET['q'])) {
                    if (strpos($_GET['q'], ".png") !== false) {
                        header("Content-type: image/png");
                    } elseif (strpos($_GET['q'], ".svg") !== false) {
                        header("Content-type: image/svg+xml");
                    } else {
                    }
                    readfile("$_SERVER[DOCUMENT_ROOT]/app/rdlv/$_GET[q]");
                }
            } else if (strpos($_GET['mnps'], 'source_9342805_generated_qr') !== false) {
                header("Content-type: image/svg+xml");

                include ROOT . "visitcard/qr-portfolio-erone.php";
            }

            // - visitcard

            // - CV ?pages=cv-pdf



            // - CV

            // - pdf version
            else if (strpos($_GET['mnps'], 'pdf-cs1') !== false) {
                header("Content-type: text/css");
                include ROOT . "visitcard/ff_FA/cv_pdf/style.php";
            }

            // - pdf version
            else {
                $this->error_page(404);
            }
        } else if (!empty($_GET['pages'])) {
            if (strpos($_GET['pages'], 'visitcard') !== false) {
                $this->Pages("visitcard");
            } else if (strpos($_GET['pages'], 'vc-js-1') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/html2canvas.php";
            } else if (strpos($_GET['pages'], 'portfolio-v3-old-s-h') !== false) {
                include ROOT . "old_portfolio/index.php";
            } else if (strpos($_GET['pages'], 'vc-js-2') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/html2canvas.min.php";
            } else if (strpos($_GET['pages'], 'vc-js-3') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/jquery-3.3.1.min_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-4') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/jquery-1.9.1_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-5') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/jspdf.debug_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-6') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/333234/all_js.php";
            } else if (strpos($_GET['pages'], 'vc-js-7') !== false) {
                header("Content-type: application/javascript");

                include ROOT . "visitcard/333234/all_js_f.php";
            } else if (strpos($_GET['pages'], 'pdf-954385472') !== false) {
                $filename = '.\visitcard\333234\printed.pdf';
                header("Content-type:application/pdf");
                header("Content-Disposition:inline;filename='$filename");
                readfile($filename);
            } else if (strpos($_GET['pages'], 'pdf-x-954385472') !== false) {
                //$filename = 'https://v2.convertapi.com/convert/web/to/pdf?secret=&download=attachment&url=http://192.168.56.1.xip.io/other/portfoliof/?pages=visitcard';
                $filename = '.\visitcard\333234\printed.pdf';

                header("Content-type:application/pdf");
                header("Content-Disposition:inline;filename='$filename");
                readfile($filename);
            } else if (strpos($_GET['pages'], 'source_9528') !== false) {
                header("Content-type: image/svg+xml");

                include ROOT . "visitcard/333234/font_aw.php";
            } else if (strpos($_GET['pages'], 'source_9524') !== false) {
                header("Content-type: image/svg+xml");

                include ROOT . "visitcard/333234/serbia.php";
            } else if (strpos($_GET['pages'], 'source_9524') !== false) {
                header("Content-type: image/svg+xml");

                include ROOT . "visitcard/333234/serbia.php";
            }

            //-- test F130
            else if (strpos($_GET['pages'], 'source_F3429524') !== false) {
                include ROOT . "Content/302/index.php";
            } else if (strpos($_GET['pages'], 'source_FJ03249') !== false) {
                header("Content-type: application/javascript");
                include ROOT . "Content/302/three.min.php";
            } else if (strpos($_GET['pages'], 'source_FJ13249') !== false) {
                header("Content-type: application/javascript");
                include ROOT . "Content/302/trackball_ctrl_r62.php";
            } else if (strpos($_GET['pages'], 'source_FS03249') !== false) {
                header("Content-type: text/css");
                include ROOT . "Content/302/style.php";
            }
            //-- test F130
            else if (strpos($_GET['pages'], 'email-send') !== false) {
                include ROOT . "mail.php";
            } else if (strpos($_GET['pages'], 'portfolio-2') !== false) {
            }
            // --
            else if (strpos($_GET['pages'], 'cv-pdf') !== false) {
                //    include  ROOT."visitcard/333234/serbia.php";
                $this->Pages("cv-pdf");
            } else if (strpos($_GET['pages'], 'cv-pdf-cv') !== false) {
                //    include  ROOT."visitcard/333234/serbia.php";
                include ROOT . "visitcard/ff_FA/cv_pdf/ind.php";
            } else if (strpos($_GET['pages'], 'cv-png') !== false) {
                //    include  ROOT."visitcard/333234/serbia.php";
                $file = ROOT . 'visitcard/ff_FA/cv_pdf/png_cv.png';
                /*      header('Content-Transfer-Encoding: binary');
                echo '<head><title>Page Title</title></head>';

                header("Content-Disposition:inline; filename=cv-markonikolic-pdf-generated");
                readfile("$filename");

        */
                $fp = fopen($file, "r");
                $myFileName = 'cv-markonikolic-png-generated';
                header("Cache-Control: maxage=1");
                header("Pragma: public");
                header("Content-type: image/png");
                header("Content-Disposition: inline; filename=" . $myFileName . "");
                header("Content-Description: Website to PDF Generated Data. Widtch Eronelit API");
                header("Content-Transfer-Encoding: binary");
                header('Content-Length:' . filesize($file));
                ob_clean();
                flush();
                while (!feof($fp)) {
                    $buff = fread($fp, 1024);
                    print $buff;
                }
                exit;
            } else if (strpos($_GET['pages'], 'cv-fpdf') !== false) {
                //    include  ROOT."visitcard/333234/serbia.php";
                include ROOT . "visitcard/ff_FA/cv_pdf2/index.php";
            } else if (strpos($_GET['pages'], 'tg_feed') !== false) {
                //    include  ROOT."visitcard/333234/serbia.php";
                $token = '';

                // ID of the channel or group
                $channelId = '';
                $url = "https://api.telegram.org/bot$token/getUpdates";

                // Initialize cURL session
                $ch = curl_init();

                // Set cURL options
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disabling SSL verification for simplicity, consider enabling in production

                // Execute cURL request
                $response = curl_exec($ch);

                // Check for errors
                if ($response === false) {
                    echo 'cURL Error: ' . curl_error($ch);
                    curl_close($ch);
                    exit;
                }

                // Close cURL session
                curl_close($ch);

                // Decode JSON response

                echo $response;
                exit();
                $data = json_decode($response, true);

                // Check if request was successful
                if ($data['ok']) {
                    // Start creating RSS feed
                    $rss = '<?xml version="1.0" encoding="UTF-8" ?>
                    <rss version="2.0">
                        <channel>
                            <title>Telegram Feed</title>
                            <link>https://t.me/YOUR_CHANNEL_OR_GROUP</link>
                            <description>Latest messages from Telegram</description>';

                    // Iterate through messages
                    foreach ($data['result'] as $message) {
                        $messageText = $message['content'];
                        $messageDate = date("r", $message['date']);
                        $messageLink = "https://t.me/c/$chatId/{$message['id']}";

                        // Add message to RSS feed
                        $rss .= "
                            <item>
                                <title><![CDATA[$messageText]]></title>
                                <link>$messageLink</link>
                                <pubDate>$messageDate</pubDate>
                                <description><![CDATA[$messageText]]></description>
                            </item>";
                    }

                    // Close RSS feed
                    $rss .= '
                        </channel>
                    </rss>';

                    // Set content type and output RSS feed
                    header('Content-Type: application/rss+xml; charset=utf-8');
                    echo $rss;
                } else {
                    // Handle error if request fails
                    echo "Error fetching messages from Telegram.";
                }
                exit();
            } else if (strpos($_GET['pages'], 'cv-markonikolic-pdf') !== false) {

                // header("Content-type:application/pdf");

                $file = './visitcard/ff_FA/cv_pdf/cv_pdf.pdf';
                /*      header('Content-Transfer-Encoding: binary');
                echo '<head><title>Page Title</title></head>';

                header("Content-Disposition:inline; filename=cv-markonikolic-pdf-generated");
                readfile("$filename");

        */
                $fp = fopen($file, "r");
                $myFileName = 'cv-markonikolic-pdf-generated';
                header("Cache-Control: maxage=1");
                header("Pragma: public");
                header("Content-type: application/pdf");
                header("Content-Disposition: inline; filename=" . $myFileName . "");
                header("Content-Description: Website to PDF Generated Data. Widtch Eronelit API");
                header("Content-Transfer-Encoding: binary");
                header('Content-Length:' . filesize($file));
                ob_clean();
                flush();
                while (!feof($fp)) {
                    $buff = fread($fp, 1024);
                    print $buff;
                }
                exit;
            } else {
                if (!empty($_GET['api'])) {
                    $this->Pages("$_GET[api]");
                } else {
                    $this->Pages("home");
                }
            }
        } else {
            if (!empty($_GET['api'])) {
                $this->Pages("$_GET[api]");
            } else {
                $this->Pages("home");
            }
        }
    }
}

/*
<editor-sdk style="
    position: fixed;
    left: 0px;
    top: 0px;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 33333;
    background: black;
    border: 2px solid white;
    right: 10px;
"></editor-sdk>
*/
