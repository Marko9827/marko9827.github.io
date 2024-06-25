<?php

namespace portfolio;

use \Exception;
use \League\CommonMark\CommonMarkConverter;

header('X-Frame-Options: *');
header_remove("Expect-CT");
define("CDN", "https://cdn.eronelit.com/");
define("ROOT", "$_SERVER[DOCUMENT_ROOT]/app/");
define("HOST", "$_SERVER[DOCUMENT_ORIGIN]");
if (!empty($_GET['p'])) {
    if ($_GET['p'] == "blog") {
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
    }
}

if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $redirect);
    exit();
}
//  header("Access-Control-Allow-Origin: *"); 
class portfolio_marko
{

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

    function minifyJS($inputFile)
    {
        // Read the JavaScript file
        $jsContent = $inputFile;

        // Remove single-line comments
        $jsContent = preg_replace('/\/\/.*?\n/', '', $jsContent);

        // Remove multi-line comments
        $jsContent = preg_replace('/\/\*.*?\*\//s', '', $jsContent);

        // Remove leading and trailing white spaces
        $jsContent = trim($jsContent);

        // Write minified JS to output file
        // file_put_contents($outputFile, $jsContent);
        return $jsContent;
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
            include_once ("$_SERVER[DOCUMENT_ROOT]/app/visitcard/ff_FA/cv_pdf/index.php");
            $pages_base64 = base64_encode(utf8_decode(ob_get_contents()));
            ob_get_clean();
        }
        if ($h == "visitcard") {
            $pages_base64 = base64_encode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/visitcard/index1.php"));
        }
        return $pages_base64;
    }
    function Pages($h = "home")
    {
        if ($h == "home") {
            ob_start(function ($b) {
                return $b; // return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
            });
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
    function MetaTags()
    {
        $person = json_decode(file_get_contents(ROOT . "/data_s/blog/blgd.json"), true);
        $data = null;


        if (!empty($_GET['id']) || !empty($_GET['blog'])) {
            $off = false;

            foreach ($person as $key => $value) {
                if ("$value[id]" == "$_GET[id]") {
                    $data = $value;
                }
            }
            $c_category_get = "";
            if (!empty($_GET['c'])) {
                $c_category_get = " $_GET[c] ";
            }

            echo '<title >';


            $title = "Blog > $c_category_get $data[title] | Marko Nikolić";
            echo $title;
            ?>
            </title>
            <link rel="icon" href="/?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />
            <meta name="description" content="<?php echo "$data[title]"; ?> | Is my personal website. ">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable='no'">
            <meta name="author" content="Marko Nikolic">
            <meta name="keywords" content="<?php
            /*$t = "";
foreach($data->keywords as $index => $v){
echo $v .",";
}*/
            $faf = $data["keywords"];
            $c = count($data["keywords"]);
            $ci = 0;
            foreach ($faf as $v) {
                echo $v;
                if ($ci < $c) {
                    echo ",";
                }
                $ci++;
            }
            ?>">

            <meta name="theme-color" content="#333">
            <meta property="og:type" content="website" />
            <meta name="author" content="Marko Nikolic">
            <link rel="manifest" href="/manifest.webmanifest">

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@markoni62595164" />
            <meta name="twitter:creator" content="@markoni62595164" />
            <meta property="og:url" content="<?php echo SITE_HOST . $_SERVER['REQUEST_URI']; ?>" />
            <meta property="og:title" content="<?php echo $title; ?>" />
            <meta property="og:description" content="Is my personal website." />
            <meta property="og:image" content="<?php echo SITE_HOST . $data["thumbail"]; ?>&for=og&v=<?php echo time(); ?>" />
            <meta property="og:image:url" content="<?php echo SITE_HOST . $data["thumbail"]; ?>&for=og&v=<?php echo time(); ?>" />
            <meta property="og:image:secure_url"
                content="<?php echo SITE_HOST . $data["thumbail"]; ?>&for=og&v=<?php echo time(); ?>" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1024">
            <meta property="og:image:height" content="630">
            <meta property="og:locale" content="en_GB" />
            <?php



        } else {
            ?>
            <title>
                <?php
                if (!empty($_GET['p'])) {
                    if ($_GET['p'] == "cv-pdf") {
                        echo "Marko Nikolić > CV";
                    } else if ($_GET['p'] == "visitcard") {
                        echo "Marko Nikolić > Visitcard";
                    } else if ($_GET['p'] == "Projects") {
                        echo "Marko Nikolić > Projects";
                    } else if ($_GET['p'] == "blog") {
                        if (!empty($_GET['c'])) {
                            echo "Blog > $_GET[c] > Marko Nikolić";
                        }
                    } else {
                        echo "Marko Nikolić";
                    }
                } else {
                    echo "Marko Nikolić";
                }
                ?>
            </title>
            <link rel="icon" href="/?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />
            <meta name="description" content="Is my personal website. ">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable='no'">
            <meta name="author" content="Marko Nikolic">

            <meta name="theme-color" content="#333">
            <meta property="og:type" content="website" />
            <meta name="author" content="Marko Nikolic">
            <link rel="manifest" href="/manifest.webmanifest">

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@markoni62595164" />
            <meta name="twitter:creator" content="@markoni62595164" />
            <meta property="og:url" content="<?php echo SITE_HOST . $_SERVER['REQUEST_URI']; ?>" />
            <meta property="og:title" content="Marko Nikolić" />
            <meta property="og:description" content="Is my personal website." />
            <meta property="og:image" itemprop="image" content="<?php echo SITE_HOST; ?>/?mnps=image_og&v=<?php echo time(); ?>" />
            <meta property="og:image" itemprop="image" content="<?php echo SITE_HOST; ?>/?mnps=image_og&v=<?php echo time(); ?>" />
            <meta property="og:image:url" itemprop="image"
                content="<?php echo SITE_HOST; ?>/?mnps=image_og&v=<?php echo time(); ?>" />
            <meta property="og:image:secure_url" content="<?php echo SITE_HOST; ?>/?mnps=image_og&v=<?php echo time(); ?>" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1024">
            <meta property="og:image:height" content="630">
            <meta property="og:locale" content="en_GB" />
            <?php
        }


    }
    function error_page($status)
    {


        $codes = array(
            403 => array('403 Forbidden', 'The server has refused to fulfill your request.'),
            404 => array('404 Not Found', 'was not found on this server.'),
            405 => array('405 Method Not Allowed', 'The method specified in the Request-Line is not allowed for the specified resource.'),
            408 => array('408 Request Timeout', 'Your browser failed to send a request in the time allowed by the server.'),
            500 => array('500 Internal Server Error', 'The request was unsuccessful due to an unexpected condition encountered by the server.'),
            502 => array('502 Bad Gateway', 'The server received an invalid response from the upstream server while trying to fulfill the request.'),
            504 => array('504 Gateway Timeout', 'The upstream server failed to send a request in the time allowed by the server.')
        );



        $title = $codes[$status][0];
        $message = $codes[$status][1];


        $actual_link = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $actual_link2 = $_SERVER['REQUEST_URI'];


        #$message = substr($message, 0, +3);
        #header("HTTP/1.1 200 OK");
        #   header("robots: noindex, nofollow");

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
    function sitemapGenerator()
    {
        header("content-type: application/xml");
        $array = json_decode(file_get_contents(ROOT . "/data_s/blog/blgd.json"), true);
        $array2 = file_get_contents(ROOT . "/data_s/blog/blgd.json");
        $generated = "";
        $rplc = file_get_contents("https://blog.eronelit.com/sitemap.xml");
        $rplc = str_replace("<?xml version='1.0' encoding='UTF-8'?>", "", $rplc);
        $rplc = str_replace('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', "", $rplc);
        $rplc = str_replace("</urlset>", "", $rplc);

        foreach ($array as $index => $element) {
            $d2 = strtotime($element["time"]);
            $d = date('Y-m-d h:i:s ', $d2);
            // date_format($d2,"Y/m/d  H:i:s");
            $generated .= " 
            <url>
                <loc>https://portfolio.eronelit.com/?p=blog&id=$element[id]</loc>
                <lastmod>$d</lastmod>
            </url>\n
            $rplc
            ";
        }
        $generated = str_replace("&", "&amp;", $generated);
        echo "
       
<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
        $generated
        </urlset>
        ";
        exit();
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
        $url = "https://api.localhost/graph";
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
                        <link rel="preload" as="font" href="<?php echo CDN; ?>
/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3" type="font/woff2">
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
            } else if (file_exists("$url$_GET[blog].mp4")) {
                if ($_GET['t'] == "v") {
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
                                    poster="/?blog=<?= $_GET['blog'] ?>00" data-setup="{}">
                                    <source src="/?blog=<?= $_GET['blog'] ?>" type="video/mp4" />
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
                                    }
                                </script>
                                <script src="<?= CDN ?>/node_modules/video.js/dist/video.min.js"></script>
                            </body>

                            </html>
                    <?php
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
                include ROOT . "Scripts/pdf_viewer.php";
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
                include ROOT . "welcomer_f.js";
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

                    /*
                    if (file_exists("$url$_GET[thumb].png")) {
                        header("content-type: image/png");
                        $this->ServefThumb("$url$_GET[thumb].png", 640, ROOT . "data_s/data_wlp/thumb/$_GET[thumb]", "");
                        #   readfile("$url$_GET[img].png"); 
                    } else if (file_exists("$url$_GET[thumb].jpg")) {
                        header("content-type: image/jpeg");
                        $this->ServeTfhumb("$url$_GET[thumb].png", 640, ROOT . "data_s/data_wlp/thumb/$_GET[thumb]", "");
                        #  readfile("$url$_GET[img].jpg"); 
                    } else if (file_exists("$url$_GET[thumb].jpeg")) {
                        header("content-type: image/jpeg");
                        $this->ServeThfumb("$url$_GET[thumb].png", 640, ROOT . "data_s/data_wlp/thumb/$_GET[thumb]", "");
                        #  readfile("$url$_GET[thumb].jpeg");

                    } else {
                        $url = ROOT . "data_s/data_wlp/";
                        if (file_exists("$url$_GET[thumb].png")) {
                            header("content-type: image/png");

                            readfile("$url$_GET[thumb].png");

                        } else if (file_exists("$url$_GET[img].jpg")) {
                            header("content-type: image/jpeg");

                            readfile("$url$_GET[thumb].jpg");
                        } else if (file_exists("$url$_GET[thumb].jpeg")) {
                            header("content-type: image/jpeg");

                            readfile("$url$_GET[thumb].jpeg");

                        } else {
                            $this->error_page(404);
                        }
                    }*/

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
                        include_once ("https://fonts.gstatic.com/" . $_GET['FPCARGOsourceG0F1']);
                    } else {
                        return false;
                    }
                }
            } else if (strpos($_GET['mnps'], "javascript-no-13") !== false) {
                header("Content-type: application/javascript");

                include ROOT . "Scripts/jquery.mousewheel.min.php";
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
                $this->Pages("home");
            }
        } else {
            $this->Pages("home");
        }
    }
}
