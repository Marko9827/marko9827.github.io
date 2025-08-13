<?php

session_start();
$protocol = "https://";
define("source_URL", (string) "$_SERVER[HTTP_HOST]");
define("SITE_HOST_DOMAIN", source_URL);
define("SITE_HOST", (string) $protocol . source_URL);
define("API_KEY", "LMV419-516MLE-KTSJPL-AMT492-1MLZMQ");
define("API_URL", "https://api.markonikolic98.com/");
define("SITEURL", API_URL);
define("CDN", "https://cdn.markonikolic98.com/");
define("SOUND_API", "");
define("SERVER_AJAXS", (string) $protocol . source_URL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");



/**
 * Summary of portfolio_marko
 * @author marko <info@markonikolic98.com>
 */
class portfolio_marko
{

    private $data = "",
        $urlCdn = "",
        $rand = "",
        $cdn_urls = "",
        $fonts = "",
        $nonce_h = "",
        $nonce = null,
        $createScripts = [],
        $script_nonce = null,
        $csp,
        $nonce_f = "",
        $conf = [
            "url" => "https://api.localhost/app&id=A03429468246&json=all",
            "token" => "32M052k350QaeofkaeopfF"
        ];

    public function __construct()
    {
        $_SESSION["Bearer_token_temp"] = self::generate_nonce();
        $_SESSION['Bearer_token_temp'] = $this->nonce_h;
        define("NONCE", $_SESSION['Bearer_token_temp']);
        $this->data = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/data/data.json"), true);
        $this->urlCdn = "";
        $this->rand = "";
        $this->cdn_urls = self::createScriptElements_array();
        $this->fonts = " fonts.gstatic.com   api.eronelit.com cdn.markonikolic98.com api.markonikolic98.com cdn.eronelit.com api.eronelit.com fonts.googleapis.com";
        $this->nonce_h = base64_encode(random_bytes(16));
        $this->nonce = $this->nonce_h;
        $this->createScripts = [];
        $this->script_nonce = $this->nonce_h;
        $this->nonce_f = "'nonce-$this->nonce_h'";

        $this->csp = (string) "
        default-src 'none';
            script-src   $this->cdn_urls 'nonce-$this->nonce'   'unsafe-inline' http: https:; 
            style-src 'self' 'unsafe-inline' blob: data:  $this->cdn_urls   $this->fonts;
            img-src  'self' $this->cdn_urls blob: data:;
            media-src 'self'   $this->cdn_urls blob: data:;
            font-src 'self' data:  $this->fonts;
            connect-src 'self' www.google-analytics.com *.eronelit.com *.localhost  data:; 
            frame-src 'self';
            object-src 'none';
            manifest-src 'self';
            base-uri 'none'; 
            form-action 'self' *.eronelit.com;
            worker-src 'self'  *.eronelit.com;  
            upgrade-insecure-requests; 
            block-all-mixed-content;";
        //"default-src * data: blob:  $cdn_urls; script-src 'self'";
        $this->csp = "";
        header("Content-Security-Policy:   $this->csp");
    }
    public function page(string $page = "home")
    {
        header("Content-Type: text/html; charset=UTF-8");
        self::run($page);
    }
    private function ALLOW($file_or_string = false)
    {

        $allowedReferers = [
            'https://portfolio.localhost',
            'https://portfolio2.localhost',
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



            if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE'])) {
                $ifModifiedSince = strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']);
                if ($ifModifiedSince >= $lastModified) {
                    header('HTTP/1.1 304 Not Modified');
                    exit;
                }
            }
        }
    }
    private function run(string $page = "home")
    {
        if (!empty($_GET['api'])) {
            $page = $_GET['api'];
        }
        switch ($page) {
            case "mainc":
                $f = __DIR__ . '/icons.json';
                self::ALLOW($f);
                header('Content-Type: application/javascript');
                include $f;
                break;
            case "feedjson":
                self::ALLOW();

                $r = $this->get_data([
                    "url" => $this->conf['token'],
                    "headers" => [
                        'Content-Type: application/json',
                        'Authorization: Bearer ' . $this->conf['token'],
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

                $css = file_get_contents(__DIR__ . '/../assets/static/css/style.css');

                echo "const mainss_import = `$css`;";
                exit();
                break;
            case "home":
                include "$_SERVER[DOCUMENT_ROOT]/pages/page.php";
            default:
                break;
        }
        exit();
    }
    private function generate_nonce()
    {
        return bin2hex(random_bytes(16));
    }

    /**
     * Summary of createScriptElements_array
     * @return string
     */
    private function createScriptElements_array()
    {
        $data = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/json_data.json"), true);

        $scripts = $data['scripts'];
        $new = [
            "https://" . source_URL . "/jsjquery",
            "https://" . source_URL . "/feedjson",
            "https://" . source_URL . "/main"
        ];
        $createScripts = "";
        foreach ($scripts as $script) {
            if (empty($script['src'])) {
                continue;
            }

            $createScripts .= " $script[src] ";
            // }
        }
        foreach ($new as $script2) {
            $createScripts .= " $script2 ";
        }
        return $createScripts;
    }

    private function generateCSP($data)
    {
        $directives = [];

        $addSource = function ($source, $type = 'script-src') use (&$directives) {
            if (!isset($directives[$type])) {
                $directives[$type] = [];
            }
            $directives[$type][] = $source;
        };
        foreach ($data['preloadLinks'] as $link) {
            $addSource($link['href'], 'preload-src');
        }
        foreach ($data['allLinks'] as $link) {
            if ($link['rel'] === 'stylesheet') {
                $addSource($link['href'], 'style-src');
            }
        }
        foreach ($data['scripts'] as $script) {
            $addSource($script['src'], 'script-src');
        }
        $csp = [];
        foreach ($directives as $directive => $sources) {
            $csp[] = $directive . ' ' . implode(' ', $sources);
        }

        return implode('; ', $csp);
    }

    /**
     * Summary of createLinkElements
     * @param mixed $links
     * @return void
     */
    private function createLinkElements($links)
    {
        global $nonce_h;
        foreach ($links as $link) {
            $rel = htmlspecialchars($link['rel']);
            $href = htmlspecialchars($link['href']);
            $as = !empty($link['as']) ? ' as="' . htmlspecialchars($link['as']) . '"' : '';
            $type = !empty($link['type']) ? ' type="' . htmlspecialchars($link['type']) . '"' : '';
            $crossorigin = !empty($link['crossorigin']) ? ' crossorigin="' . htmlspecialchars($link['crossorigin']) . '"' : '';
            echo "<link rel=\"$rel\" nonce=\"$nonce_h\" href=\"$href\"  $type crossorigin=\"anonymous\" $as>\n";
        }
    }

    /**
     * Summary of createScriptElements
     * @param mixed $scripts
     * @return void
     */
    private function createScriptElements($scripts)
    {
        global $nonce_h, $createScripts;
        foreach ($scripts as $script) {
            $src = htmlspecialchars($script['src']);
            $type = !empty($script['type']) ? ' type="' . htmlspecialchars($script['type']) . '"' : '';
            $async = $script['async'] ? ' async' : '';
            $defer = $script['defer'] ? ' defer' : '';
            $text = file_get_contents($src);
            $sha384Hash = "sha256-" . hash('sha256', $text);
            $crossorigin = !empty($script['crossorigin']) ? ' crossorigin="' . htmlspecialchars($script['crossorigin']) . '"' : '';
            echo "<script  nonce=\"$nonce_h\"  
         src=\"$src\" $type $async $defer></script>\n";
            array_Push($createScripts, $sha384Hash);
        }
    }
    /**
     * Summary of createScriptElementsCSP
     * @return string
     */
    private function createScriptElementsCSP(): string
    {
        $data = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/json_data.json"), true);
        $scripts = $data['scripts'];
        $sah = "";
        foreach ($scripts as $script) {
            $src = htmlspecialchars($script['src']);
            $text = file_get_contents($src);
            $sha384Hash = "sha256-" . hash('sha256', $text);
            $sah .= "$sha384Hash ";
        }
        return $sah;
    }
    /**
     * Summary of ScriptCalcHash
     * @return void
     */
    private function ScriptCalcHash()
    {
        $data = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/json_data.json"), true);
        foreach ($data['scripts'] as $val) {
        }
    }
    /**
     * Summary of ob_f
     * @param mixed $b
     * @return array|string|null
     */
    private function ob_f($b)
    {
        $comments_pattern = "#/\*[^(\*/)]*\*/#";
        $comm_JS = "/(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:)\/\/.*))/";
        # return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s', '/[\r\n]*/', '/\//', $comm_JS], ['>', '<', '\\1', '','', ''], $b);

        $html = preg_replace('/<!--(?!\[if|\<!\[endif).*?-->/', '', $b);
        $html = preg_replace('/>\s+</', '><', $html);
        $html = preg_replace('/^\s+|\s+$/m', '', $html);
        $html = preg_replace('/\s{2,}/', ' ', $html);
        $html = preg_replace('/[\r\n]/', '', $html);
        return $html; // preg_replace(['/(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:|\\\|\')\/\/.*))/', '/[\r\n]/'], ['', ''], $b);
    }

    public function get_data(
        $r = [
            "data" => [],
            "url" => "",
            "headers" => []
        ],
        $testMode = true
    ) {
        return file_get_contents("$_SERVER[DOCUMENT_ROOT]/data/feed.json");

        $ch = curl_init($r['url']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 6);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
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

    public function MetaTags()
    {
        $title = "Marko Nikolić";
        $description = "Is my personal website.";
        $keywords = "Marko Nikolić, IT, developer, blog, portfolio";
        $ogImage = SITE_HOST . "/?mnps=image_og&v=" . time();
        $canonicalUrl = SITE_HOST . $_SERVER['REQUEST_URI'];

        $r = json_decode($this->get_data([
            "url" => $this->conf['url'],
            "headers" => [
                'Content-Type: application/json',
                'Authorization: Bearer ' . $this->conf['token'],
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

                case 'gallery':
                    $title = "Gallery | Marko Nikoić";
                    if (!empty($_GET['album'])) {
                        $title = "Gallery > $_GET[album] | Marko Nikoić";
                        if (!empty($_GET['id'])) {
                            $gallery_tijemp = [];
                            foreach ($r['data']['gallery']['gallery'] as $gallery_name) {
                                if ($gallery_name['name'] == $_GET['album']) {

                                    foreach ($gallery_name['gallery'] as $ider) {
                                        if ($ider['ID'] == $_GET['id']) {

                                            $title = "Gallery: $ider[title] - $_GET[album] | Marko Nikolić";
                                            $description = "$ider[title] from $_GET[album] from my Gallery | Marko Nikolić IT, Scientist theories/news, Writing books... Is my personal website.";
                                            $keywords = "Marko Nikolić, IT, developer, blog, portfolio, gallery, $_GET[albumb], $ider[title]";
                                            $ogImage = "$ider[thumb]&for=og";
                                        } else {
                                            continue;
                                        }
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
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
        <meta name="twitter:site" content="@MarkoMakiN74384" />
        <meta name="twitter:creator" content="@MarkoMakiN74384" />
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



    public function error_page($status)
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
}
?>