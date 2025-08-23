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
define("ROOTcontacts", $_SERVER['DOCUMENT_ROOT'] . "/../markonikolic98");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");


header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");



/**
 * Summary of portfolio_marko
 * @author marko <info@markonikolic98.com>
 * GitHub: https://github.com/Marko9827/marko9827.github.io 
 * @version 6.8.0
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
        $protocol = "",
        $nonce_f = "",
        $conf = [
            "url" => "https://api.markonikolic98.com/app&id=A03429468246&t2=static",
            //"https://api.localhost/app&id=A03429468246&json=all",
            "token" => "32M052k350QaeofkaeopfF"
        ],
        $defined = [
            "source_URL" => "",
            "SITE_HOST_DOMAIN" => "",
            "SITE_HOST" =>  "",
            "API_KEY" =>  "",
            "API_URL" =>   "",
            "SOUND_API",
            "CDN",
            "SERVER_AJAXS" =>  ""
        ];




    public function __construct()
    {

        $this->defined = [
            "source_URL" => (string) "$_SERVER[HTTP_HOST]",
            "SITE_HOST_DOMAIN" => $this->defined['source_URL'],
            "SITE_HOST" => (string) $this->protocol . $this->defined['source_URL'],
            "API_KEY" => "LMV419-516MLE-KTSJPL-AMT492-1MLZMQ",
            "API_URL" => "https://api.markonikolic98.com/",
            "SOUND_API" => "",
            "CDN" => "",
            "SERVER_AJAXS" => (string) $this->protocol . $this->defined['source_URL']
        ];

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
        $host = "https://$_SERVER[HTTP_HOST]";
        $this->csp = (string) "
        default-src 'none';
            script-src  'strict-dynamic' static.cloudflareinsights.com $host/assets/static/js/hls.js $host/mainc $host/feedjson $host/assets/static/js/jscode.js 'nonce-$this->nonce'  http: https:; 
            style-src 'self' 'unsafe-inline' blob: data:    $this->fonts;
            img-src  'self' *.markonikolic98.com blob: data:;
            media-src 'self' *.markonikolic98.com  blob: data:;
            font-src 'self' data:  $this->fonts;
            connect-src 'self' www.google-analytics.com *.markonikolic.com  data: blob:; 
            frame-src 'self';
            object-src 'none';
            manifest-src 'self';
            base-uri 'self'; 
            form-action 'self';
            worker-src 'self' blob: data:;  
            upgrade-insecure-requests; 
            block-all-mixed-content;
            require-trusted-types-for 'script';
            trusted-types default;";
        //"default-src * data: blob:  $cdn_urls; script-src 'self'";


        /*
  $this->csp = "require-trusted-types-for 'script'; 
  trusted-types default; script-src ".$this->nonce_f."   
  $host/assets/static/js/hls.js $host/mainc $host/feedjson $host/assets/static/js/jscode.js; worker-src 'self' object-src 'none';
base-uri 'self';";*/
        $this->csp = "";
        if ($this->csp !== "") {
            header("Content-Security-Policy:   $this->csp");
        }
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
            'https://beta.markonikolic98.com',
            'https://betav2.markonikolic98.com',
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
    private function getClientIPv4()
    {
        $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
        if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
            return $ip;
        }
        return '0.0.0.0';
    }
    private array $stack = ["104.28.202.1"];

    /**
     * Summary of contact
     * @return void
     */
    private function contact()
    {

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


        $fn = isset($_POST["fn"]) ? base64_decode($_POST["fn"]) : null;
        $fe = isset($_POST["fe"]) ? base64_decode($_POST["fe"]) : null;
        $fm = isset($_POST["fm"]) ? base64_decode($_POST["fm"]) : null;
        $ft = isset($_POST["ft"]) ? base64_decode($_POST["ft"]) : null;

        echo json_encode($fn, $fe, $fm);
        if ($fn && $fe && $fm && $ft) {
            if (!is_dir(ROOTcontacts . "/data_s/data_f/")) {
                mkdir(ROOTcontacts . "/data_s/data_f/", 0777, true);
            }

            $rand = time() . rand();
            $filename = date('m_d_Y_h_i_sa', time()) . "-$rand-$fe-contact.json";

            $r = [
                (object) [
                    'name' => $fn,
                    'message' => $fm,
                    'type' => $ft,
                    'email' => $fe
                ]
            ];

            $far = base64_encode(json_encode($r));
            $success = file_put_contents(ROOTcontacts . "/data_s/data_f/$filename", $far);

            echo $success ? "yes" : "no";
        }
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
    private function run(string $page = "home")
    {

        if (!in_array(self::getClientIPv4(), $this->stack)) {
            #  self::error_page(404);
            #exit();
        }
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
            case "contact":

                self::contact();
                exit;
                break;
            case "message":
                self::ALLOW();
                header("X-Robots-Tag: noindex, nofollow", true);
                header("Content-Type: image/svg+xml");
                include "$_SERVER[DOCUMENT_ROOT]/pages/message.php";
                break;
            case "loader":
                header('Content-Type: image/svg+xml');
                $f = '<svg class="Vjideo_sjpinner Vjideo_sjpinner_center" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 50 50" style=" width: 60px; height: 60px; "><style xmlns="http://www.w3.org/2000/svg" type="text/css">.Vjideo_sjpinner { -webkit-animation: rotate 2s linear infinite; transition: .3s; animation: rotate 2s linear infinite; z-index: 23333333; position: fixed; top: 35px; left: 35px; margin: -35px 0 0 -35px; width: 50px; height: 50px; pointer-events: none !important } .Vjideo_sjpinner .path { stroke: white; stroke-linecap: round; -webkit-animation: dash 1.5s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite; -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)) !important; enable-background: new 0 0 512 512 !important } @-webkit-keyframes rotate { 100% { transform: rotate(360deg) } } @keyframes rotate { 100% { transform: rotate(360deg) } } @-webkit-keyframes dash { 0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0 } 50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35 } 100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124 } } @keyframes dash { 0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0 } 50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35 } 100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124 } }</style><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg> 
';

                echo $f;


                break;
            case "font":
                switch ($_GET['type']) {
                    case "woff":
                        header("Content-Type: font/woff");
                        @readfile($_SERVER['DOCUMENT_ROOT'] . "/assets/static/fonts/d3.woff");
                        break;
                    case "woff2":
                        header("Content-Type: font/woff2");
                        @readfile($_SERVER['DOCUMENT_ROOT'] . "/assets/static/fonts/d3.woff2");
                        break;
                    default:
                        self::error_page(404);
                }
                break;
            case "sw.js":
                echo file_get_contents(__DIR__ . './');
                break;
            case "avatar":
                header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
                header("Cache-Control: post-check=0, pre-check=0", false);
                header("Pragma: no-cache");
                header("Content-Type: image/png");
                @readfile("$_SERVER[DOCUMENT_ROOT]/assets/static/img/avatar.jpg");
                break;
            case "":

                break;
            case "feedjson":
                self::ALLOW();



                $r = $this->get_data([
                    "url" => $this->conf['url'],
                    "type" => "GET",
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
                echo "var portfolio =  $r;  \n \n";
                if (strpos($_SERVER['HTTP_HOST'], ".localhost")) {
                    echo "portfolio.host = 'https://api.localhost'; \n \n";
                }

                $css = file_get_contents(__DIR__ . '/../assets/static/css/style.css');

                echo "const mainss_import = `$css`;";
                exit();
                break;
            case "new":
            case "news":
            case "socialnew":
                if (!empty($_GET['og_social'])) {
                    switch ($_GET['og_social']) {
                        case "static":
                            header("Content-Type: text/javascript");
                            include $_SERVER['DOCUMENT_ROOT'] . '/assets/static/js/social.js';
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


                        $data = [];

                        header("Content-type: text/html");

                        ob_start(function ($b) {
                            return self::minifyHtmlCss($b);
                        });



                        include "$_SERVER[DOCUMENT_ROOT]/pages/news.php";


                        break;
                    case "social":
                        include "$_SERVER[DOCUMENT_ROOT]/pages/social.php";
                        break;
                    case "home":
                        header("Content-Type: text/html charset=utf-8");
                        include "$_SERVER[DOCUMENT_ROOT]/pages/page.php";
                        break;
                    default:
                        break;
                }
                exit();
            }

            private function minifyHtmlCss(string $htmlCss): string
            {
                $htmlCss = preg_replace('#/\*[\s\S]*?\*/#', '', $htmlCss);
                $htmlCss = preg_replace('#<!--[\s\S]*?-->#', '', $htmlCss);
                $htmlCss = str_replace(["\r\n", "\r", "\n", "\t"], ' ', $htmlCss);
                $htmlCss = preg_replace('/\s+/', ' ', $htmlCss);
                $htmlCss = preg_replace('/>\s+</', '><', $htmlCss);
                return trim($htmlCss);
            }
            private  function minifyCSS($css)
            {
                $css = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css);
                $css = str_replace(': ', ':', $css);

                $css = str_replace(["\r\n", "\r", "\n", "\t", '  ', '    ', '    '], '', $css);

                return $css;
            }
            private   function minifyJS($js)
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
            /**
             * Summary of GET
             * @param mixed $d
             * @return void
             */
            private function GET($d = ["url" => "", "headers" => []])
            {
                $ch = curl_init();

                curl_setopt($ch, CURLOPT_URL, $d['url']);

                curl_setopt($ch, CURLOPT_HTTPHEADER, $d['headers']);

                $response = curl_exec($ch);

                if (curl_errno($ch)) {
                    echo "cURL Error: " . curl_error($ch);
                } else {
                    echo $response;
                }
                curl_close($ch);
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
                    "type" => "POST",
                    "headers" => []
                ],
                $testMode = true
            ) {

                # return file_get_contents(__DIR__ . "/../data/feed.json");

                $ch = curl_init($r['url']);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_REFERER, "$_SERVER[HTTP_HOST]");
                if ($r['url'] == "POST" || $r['url'] == "post") {
                    curl_setopt($ch, CURLOPT_POST, true);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $r['data']);
                }
                curl_setopt($ch, CURLOPT_HTTPHEADER, $r['headers']);


                $response = curl_exec($ch);

                if (curl_errno($ch)) {
                    $error = curl_error($ch);
                    curl_close($ch);
                    $response = file_get_contents(__DIR__ . "/../data/feed.json");
                }
                curl_close($ch);

                return $response;
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
  <link href="/favicon.ico" rel="icon" type="image/x-icon">
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