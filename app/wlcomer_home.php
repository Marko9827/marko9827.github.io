<?php
session_start();
$protocol = "https://";
define("SITE_HOST_DOMAIN", $_SERVER['HTTP_HOST']);
define("SITE_HOST", "$protocol$_SERVER[HTTP_HOST]");
define("API_KEY", "LMV419-516MLE-KTSJPL-AMT492-1MLZMQ");
define("API_URL", "https://api.eronelit.com/");
define("SITEURL", API_URL);

define("CDN", "https://cdn.eronelit.com/"); //SITE_HOST);//"https://cdn.eronelit.com");
define("SOUND_API", "");
define("SERVER_AJAXS", "$protocol$_SERVER[HTTP_HOST]"); //https://tree.localhost");
function generate_nonce()
{
    return bin2hex(random_bytes(16));
}
$_SESSION["Bearer_token_temp"] = generate_nonce();
define("NONCE", "$_SESSION[Bearer_token_temp]");



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");


if (substr_count($_SERVER["HTTP_ACCEPT_ENCODING"], "gzip")) {
    ob_start("ob_gzhandler");
} else {
    ob_start();
}

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
$urlCdn = "";

$data = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/json_data.json"), true);
if (json_last_error() !== JSON_ERROR_NONE) {
    #die("Greška u JSON-u: " . json_last_error_msg());
}

function createScriptElements_array()
{
    $data = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/json_data.json"), true);

    $scripts = $data['scripts'];
    $new = [
        "https://$_SERVER[HTTP_HOST]/jsjquery",
        "https://$_SERVER[HTTP_HOST]/feedjson",
        "https://$_SERVER[HTTP_HOST]/main"
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

$cdn_urls = createScriptElements_array();

//"api.eronelit.com   cdn.eronelit.com api.localhost https:";
$fonts = " fonts.gstatic.com   api.eronelit.com cdn.eronelit.com api.localhost fonts.googleapis.com";
$nonce_h = base64_encode(random_bytes(16));
$nonce = $nonce_h;
$script_nonce = $nonce_h;
$_SESSION['Bearer_token_temp'] = $nonce_h;
$nonce_f = "'nonce-$nonce_h'";
function generateCSP($data)
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

function createLinkElements($links)
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
$createScripts = [];
function createScriptElements($scripts)
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
function createScriptElementsCSP(): string
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
function ScriptCalcHash()
{
    $data = json_decode(file_get_contents("$_SERVER[DOCUMENT_ROOT]/app/json_data.json"), true);
    foreach ($data['scripts'] as $val) {

    }
}

/* 
 script-src 'self' 'nonce-$nonce' $cdn_urls;
    script-src-elem 'self'    $cdn_urls ;
 */
#     script-src $cdn_urls  'nonce-$nonce' ; 

/*
'strict-dynamic' 'nonce-rAnd0m123' 'unsafe-inline' http: https:;

$csp = (string) "
   script-src 'nonce-$nonce' 'unsafe-inline' 'unsafe-eval' $cdn_urls 'unsafe-inline' https: 'report-sample' 'wasm-unsafe-eval';
   */

$POLIFY = "";

$csp = (string) "
    // script-src 'nonce-$nonce'   $cdn_urls 'strict-dynamic' 'unsafe-inline' 'unsafe-eval'  'report-sample' 'wasm-unsafe-eval';
    // script-src-elem 'nonce-$nonce' https://$_SERVER[HTTP_HOST] $cdn_urls 'strict-dynamic' 'report-sample' 'wasm-unsafe-eval' ;
   script-src 'report-sample'   'nonce-$nonce' $cdn_urls https://$_SERVER[HTTP_HOST]/main ;
  script-src  'strict-dynamic' 'nonce-$nonce' $POLIFY $cdn_urls https://$_SERVER[HTTP_HOST]/main 'unsafe-inline'  'wasm-unsafe-eval' https:;

    ";
$csp = "
default-src 'none';
    script-src   $cdn_urls 'nonce-$nonce'   'unsafe-inline' http: https:; 
    style-src 'self' 'unsafe-inline' blob: data: $cdn_urls  $fonts;
    img-src  'self' $cdn_urls blob: data:;
    media-src 'self'  $cdn_urls blob: data:;
    font-src 'self' data: $fonts;
    connect-src 'self' www.google-analytics.com *.eronelit.com *.localhost  data:; 
    frame-src 'self';
    object-src 'none';
    manifest-src 'self';
    base-uri 'none';
    frame-ancestors 'self' ;
    form-action 'self' *.eronelit.com;
    worker-src 'self'  *.eronelit.com;  
    upgrade-insecure-requests; 
    block-all-mixed-content;";
//"default-src * data: blob:  $cdn_urls; script-src 'self'";
  $csp = "";
  header("Content-Security-Policy:  $csp");



header("X-Frame-Options: *.eronelit.com");
header("Access-Control-Allow-Origin: *.eronelit.com");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: no-referrer");
$rand = time();
#ob_start();
header('Content-Type: text/html; ');
if ($_SERVER['REQUEST_METHOD'] !== 'GET' || isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {

    header('HTTP/1.1 405 Method Not Allowed');
    header('Allow: GET');
    echo 'Method Not Allowed';
    exit;
}

?>
<!DOCTYPE html>
<html id="themes_html" lang="en" class="no-js" prefix="og: https://ogp.me/ns#" data-rand="<?php echo $rand; ?>">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <?php
    self::MetaTags();

    if (!empty($csp)) {

        ?>
        <!-- <meta name="trusted-types" content="script-src-attr 'none'; require-trusted-types-for 'script'; trusted-types 'allow-duplicates' default jSecure highcharts dompurify" data-disposition="enforce" data-sanitizer="jSecure"  > -->

        <meta http-equiv="Content-Security-Policy" content="<?php echo $csp; ?>">
    <?php } ?>
    <link rel='dns-prefetch' href='https://fonts.googleapis.com' crossorigin="use-credentials" />
    <link rel='dns-prefetch' href='https://cdn.eronelit.com' />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.eronelit.com" crossorigin> 
    <meta name="google" content="notranslate">
    <meta name="referrer" content="origin">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="msapplication-tap-highlight" content="no">

<link rel="canonical" href="<?php echo "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
        integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    <script src="<?php echo $POLIFY; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script src="<?php echo "https://$_SERVER[HTTP_HOST]/feedjson"; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script async src="<?php echo "https://$_SERVER[HTTP_HOST]/main"; ?>" nonce="<?php echo $nonce; ?>"></script>
    <?php /*<script    nonce="<?php echo $nonce_h; ?>"  crossorigin="anonymous" src="https://cdn.eronelit.com/node_modules/jquery3.6.0/dist/jquery.min.js"></script>

<?php
*/
    #    createLinkElements($data['preloadLinks']);
    createLinkElements($data['allLinks']);
    createScriptElements($data['scripts']);

    /*
    <link rel="stylesheet" href="<?php echo SITE_HOST; ?>/?svc=aet" nonce="<?php echo $nonce_h; ?>">

 
    <link rel="preload" href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/bootstrap-icons.css" as="style">
    <link rel="preload" href="<?php echo CDN; ?>/node_modules/jquery/dist/jquery.min.js" as="script">
    <link rel="preload" href="<?php echo CDN; ?>/node_modules/ez-plus/src/jquery.ez-plus.js" as="script">
    <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js" as="script">
    <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/js/bootstrap.min.js" as="script">
    <!--  -->
    <link rel="preload" href="https://cdn.eronelit.com//node_modules/video.js/dist/video-js.min.css" as="style">
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/codemirror.min.js" as="script">
    <link rel="preload" href="https://cdn.eronelit.com/node_modules/video.js/dist/video.min.js" as="script">
    <!--  -->
    <link rel="preload" href="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js" as="script">
    <script src="https://cdn.jsdelivr.net/npm/jquery.ez-plus@1.1.15/dist/jquery.ez-plus.min.js"></script>

    <?php
    echo '<link rel="preload" as="font" href="' . CDN . '/node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3"
        type="font/woff2"> 

    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" nonce="' . $nonce_h . '">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" nonce="' . $nonce_h . '">
    <link href="' . CDN . '/node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet" nonce="' . $script_nonce . '">
    <link href="' . CDN . '/node_modules/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" nonce="' . $script_nonce . '" >
    <script nonce="' . $script_nonce . '"  src="' . CDN . '/node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="' . CDN . '/portfolio/node_modules/bootstrap/dist/css/bootstrap.min.css" nonce="' . $script_nonce . '">
    <script nonce="' . $script_nonce . '" async  src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1/codemirror.min.js"></script>
    <script nonce="' . $script_nonce . '" src="https://cdn.eronelit.com/node_modules/video.js/dist/video.min.js"></script>';


    //    exit();
    */
    $token = bin2hex(random_bytes(64));
    echo '<meta content="' . $token . '" name="csrf-param" />
<meta content="' . $token . '" name="csrf-token" />';
    $_SESSION['AuthV2-token'] = $token;



    /* ?>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' *.googlesyndication.com *.eronelit.com;
script-src 'self' *.eronelit.com 'unsafe-inline';
style-src  'self' *.eronelit.com 'unsafe-inline';
object-src 'self';
frame-src *;
base-uri 'self';
connect-src 'self';
font-src 'self' fonts.gstatic.com *.eronelit.com;
frame-src 'self';
img-src 'self' data: blob:;
manifest-src 'self';
media-src 'self';" />
*f/ ?>
    <link rel="preload" href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css"
        as="style" />
    <!-- <link rel="preload" href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/loader.js" as="script" /> -->
    <link rel="stylesheet" nonce="<?php echo $script_nonce; ?>"  href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css" />
    <link rel="preload" href="/?svc=jsc" as="script" nonce="<?php echo $script_nonce; ?>" />
    <link rel="preload" href="/demo&id=S3503&hangar=main" as="module" nonce="<?php echo $script_nonce; ?>" />

    <script type="module"   nonce="<?php echo $script_nonce; ?>" src="/demo&id=S3503&hangar=main"></script>

    <?php

    ?>

    <script nonce="<?php echo $script_nonce; ?>" defer
        src="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/loader.js"></script>
    <link rel="preload" href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/loader.js" as="script" />

    <script nonce="<?php echo $script_nonce; ?>"
        src="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script nonce="<?php echo $script_nonce; ?>"
        src="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <?php if ($_GET['p'] == "editor") { ?>
        <script nonce="<?php echo $script_nonce; ?>"
            src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
    <?php } ?>
    <script nonce="<?php echo $script_nonce; ?>" async
        src="<?php echo CDN; ?>/node_modules/ez-plus/src/jquery.ez-plus.js" type="text/javascript"></script>
    <script nonce="<?php echo $script_nonce; ?>" defer async src="/?svc=jsc">
    </script>
    <link rel="stylesheet" nonce="<?php echo $script_nonce; ?>"
        href="<?php echo CDN; ?>/node_modules/video.js/dist/video-js.min.css" />

        */ ?>


    <?php if (!empty($_GET['tp'])) {
        if ($_GET['tp'] == "m") {
            ?>
            <style type="text/css" nonce="<?php echo $script_nonce; ?>">
                * {
                    pointer-events: none !important;
                    transition: .3s !important
                }

                body *:not(canvas) {
                    display: none;
                }
            </style>
        <?php }
    } ?>
    <style type="text/css" nonce="<?php echo $script_nonce; ?>">
        <?php
        include "$_SERVER[DOCUMENT_ROOT]/app/fx_new.css";
        ?>
        .zoomContainer:not(:hover, :focus) * {
            left: 0px !important;
            top: 0px !important;
            width: 100% !important;
            height: 100% !important;
            background-size: contain !important;
            background-position: center !important;
            margin: 0px !important;
            background-repeat: no-repeat !important;
        }


        video.wallpaperVideo {
            position: fixed;
            left: 0px;
            right: 0px;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            -o-object-fit: scale-fit;
            object-fit: scale-fit;
            background: black;
            -webkit-transition: .3s !important;
            -o-transition: .3s !important;
            transition: .3s !important;
            opacity: 0.5;
        }

        div#content_Space {
            background-color: transparent;
            background-image: -webkit-gradient(linear, left bottom, left top, color-stop(9%, transparent), color-stop(10%, rgba(255, 255, 255, .2)), color-stop(12%, rgba(255, 255, 255, .2)), color-stop(13%, transparent), color-stop(29%, transparent), color-stop(30%, rgba(255, 255, 255, .1)), color-stop(31%, rgba(255, 255, 255, .1)), color-stop(32%, transparent), color-stop(49%, transparent), color-stop(50%, rgba(255, 255, 255, .1)), color-stop(51%, rgba(255, 255, 255, .1)), color-stop(52%, transparent), color-stop(69%, transparent), color-stop(70%, rgba(255, 255, 255, .1)), color-stop(71%, rgba(255, 255, 255, .1)), color-stop(72%, transparent), color-stop(89%, transparent), color-stop(90%, rgba(255, 255, 255, .1)), color-stop(91%, rgba(255, 255, 255, .1)), color-stop(92%, transparent), to(transparent)), -webkit-gradient(linear, left top, right top, color-stop(9%, transparent), color-stop(10%, rgba(255, 255, 255, .2)), color-stop(12%, rgba(255, 255, 255, .2)), color-stop(13%, transparent), color-stop(29%, transparent), color-stop(30%, rgba(255, 255, 255, .1)), color-stop(31%, rgba(255, 255, 255, .1)), color-stop(32%, transparent), color-stop(49%, transparent), color-stop(50%, rgba(255, 255, 255, .1)), color-stop(51%, rgba(255, 255, 255, .1)), color-stop(52%, transparent), color-stop(69%, transparent), color-stop(70%, rgba(255, 255, 255, .1)), color-stop(71%, rgba(255, 255, 255, .1)), color-stop(72%, transparent), color-stop(89%, transparent), color-stop(90%, rgba(255, 255, 255, .1)), color-stop(91%, rgba(255, 255, 255, .1)), color-stop(92%, transparent), to(transparent));
            height: 100%;
            background-size: 50px 50px;
            opacity: 0.3;
            position: fixed;
            left: 0px;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            top: 0px;
            z-index: 3;
            pointer-events: none;
        }

        html.anim_djenerated div#clavs {
            background: transparent !important;
        }

        html.anim_djenerated p-c,
        html.anim_djenerated p.p-c,
        html.anim_djenerated hh_anim_start {
            -webkit-transition: .3s !important;
            -o-transition: .3s !important;
            transition: .3s !important;
            opacity: 1;
        }

        .disable_pointer {
            pointer-events: none !important;
        }

        html.anim_djenerated p-c,
        p-c,
        html.anim_djenerated hh_anim_start,
        html.anim_djenerated p.p-c {
            opacity: 0 !important;
            pointer-events: none !important
        }

        p.p-c {
            position: fixed;
            left: 10px;
            top: 10px;
            color: var(--white);
            opacity: 0.5;
            font-size: 15px;
            pointer-events: none;
        }


        @media only screen and (max-width: 700px) {

            p.p-c {
                left: 0px;
                right: 0px;
                text-align: center;
                font-size: 10px;
            }

            video.wallpaperVideo {
                -o-object-fit: cover;
                object-fit: cover;
            }
        }

        div_header,
        iframe.Ignoring_me_iframe.blog_style {
            background: var(--black-trasparent-color) !important;
        }

        .zoomContainer .zoomWindowContainer div {
            background-position: center !important;
            background-size: contain !important;
        }


        /*  */
        section[data-ui-type="slider"] {
            transition: .3s !important;
        }

        section[data-ui-type="slider"] * {
            box-sizing: border-box;

        }

        section[data-ui-type="slider"] div-echatv {
            width: -webkit-fill-available;
            height: 100% !important;

        }

        section[data-ui-type="slider"] div-echatv dh {
            height: -webkit-fill-available !important;
            display: flex;
            margin: 10px !important;
            width: -webkit-fill-available !important;
        }

        section[data-ui-type="slider"] div-echatv .img {
            border-radius: 10px !important;
            width: 100% !important;
            margin: auto !important;
        }

        section[data-ui-type="slider"] div-echatv {
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            width: -webkit-fill-available;
            height: -webkit-fill-available !important;
            margin: 0px !important;
        }


        section[data-ui-type="slider"] .catascrollEchatTv {
            top: unset;
            bottom: unset;
            margin: auto;
        }

        section[data-ui-type="slider"] .catascrollEchatTv {
            position: fixed;
            bottom: 0px;
            z-index: 33333333;
            color: white;
            left: 39px;
            font-size: 35px;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
            enable-background: new 0 0 512 512 !important;
            margin: 0px;
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
            opacity: 0.7;
            padding: 4px;
            margin-bottom: -109px;
            margin: auto;
            right: 5px;
            left: unset;
            top: unset !important;
            bottom: unset !important;
            display: block;
            margin: auto !important;
            top: 0px;
            bottom: 0px !important;
            height: -webkit-fill-available;
            top: 0px !important;
            display: flex;
            align-items: center;
        }

        section[data-ui-type="slider"] .catascrollEchatTv:not(.catascrollEchatTv_right) {
            left: 5px !important;
            right: unset !important;
        }

        section[data-ui-type="slider"] {
            display: flex;
            align-items: center;
            align-content: center;
            position: fixed;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            z-index: 44444444;
            background: var(--black-trasparent-color);
        }


        section[data-ui-type="slider"] div-echatv .img {
            height: -moz-fit-content;
            height: fit-content;
            object-fit: scale-down;
            background: transparent !important;
            width: -moz-fit-content;
            width: fit-content !important;
            max-width: -webkit-fill-available !important;
            max-height: -webkit-fill-available !important;
            width: fit-content !important;
            opacity: 1;
        }

        section[data-ui-type="slider"] div-echatv i,
        section[data-ui-type="slider"] div-echatv .img {
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            enable-background: new 0 0 512 512 !important;
        }


        section[data-ui-type="slider"] div-echatv iframe.img {
            height: -webkit-fill-available !important;
        }

        section[data-ui-type="slider"] {
            border: 2px solid var(--primary_light) !important;
            margin: 6px;
            border-radius: 10px;
        }


        .hidden_omega {
            opacity: 0 !important;
            pointer-events: none !important;
        }


        section[data-ui-type="slider"] div-echatv {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            overflow: overlay;
            padding: 10px 0px;
            position: absolute;
            left: 0px;
            right: 0px;
            width: -webkit-fill-available;
            top: unset;
            margin-top: 35px
        }

        section[data-ui-type="slider"] div-echatv dh:first-child {
            margin-left: 0px
        }

        section[data-ui-type="slider"] div-echatv dh:last-child {
            margin-right: 0px
        }

        section[data-ui-type="slider"] div-echatv dh {
            margin: 0px 10px;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
            enable-background: new 0 0 512 512 !important;
            border-radius: 6px
        }

        section[data-ui-type="slider"] div-echatv dh iframe,
        section[data-ui-type="slider"] div-echatv dh .iframeImg {
            border-radius: 6px;
            border: 0px
        }

        section[data-ui-type="slider"] div-echatv dh {
            height: 245px
        }

        section[data-ui-type="slider"] div-echatv dh iframe,
        section[data-ui-type="slider"] div-echatv dh .iframeImg {
            height: 240px;
            width: 120px;
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1)
        }

        section[data-ui-type="slider"] div-echatv {
            overflow-x: scroll;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            overflow-x: auto !important;
            -ms-scroll-snap-type: x mandatory;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            -webkit-transition: margin-left 0.5s;
            -o-transition: margin-left 0.5s;
            scroll-behavior: smooth;
            transition: margin-left 0.5s;
            margin-bottom: 75px;
            height: 278px;
            /* -webkit-mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 10%, white 93%, transparent 100%); */
            /* mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 10%, white 93%, transparent 100%); */
            margin: 5px !important;
        }

        section[data-ui-type="slider"] div-echatv dh img {
            object-fit: scale-down;
        }

        section[data-ui-type="slider"] div-echatv::-webkit-scrollbar {
            width: 0px;
            height: 0;
        }

        section[data-ui-type="slider"] div-echatv dh {
            scroll-snap-align: center;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            border-radius: 10px;
            -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
            transform-origin: center center;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            transition: -webkit-transform 0.5s;
            -webkit-transition: -webkit-transform 0.5s;
            -o-transition: transform 0.5s;
            transition: transform 0.5s;
            transition: transform 0.5s, -webkit-transform 0.5s;
            position: relative;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        section.hide_buttons[data-ui-type="slider"] .catascrollEchatTv {
            transform: scale(0) !important;
        }

        section[data-ui-type="slider"] dhn {
            position: absolute;
            left: 5px;
            bottom: 0px;
            z-index: 333333;
            color: white;
            background: var(--black-trasparent-color);
            padding: 4px 10px;
            border: 1px solid var(--hard_white);
            border-radius: 4px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
            enable-background: new 0 0 512 512 !important;
        }

        section[data-ui-type="slider"] div-echatv * {
            transition: .3s;
        }


        section[data-ui-type="editor"] {
            opacity: 1;
            position: fixed;
            z-index: 333;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            background: red;
        }

        section[data-ui-type="editor"],
        section[data-ui-type="editor"] * {
            box-sizing: border-box !important;
        }


        section[data-ui-type="editor"] iframe {
            background: white;
        }

        section[data-ui-type="editor"] {
            background: #333;
        }

        section[data-ui-type="editor"] iframe#preview-container {
            border: 0px !important;
            border-left: 2px solid #333 !important;
        }

        section[data-ui-type="editor"] #editor-container {
            flex: 1;
        }

        section[data-ui-type="editor"] #preview-container {
            flex: 1;
            border: 1px solid #ccc;
        }

        section[data-ui-type="editor"] div#editor-container,
        section[data-ui-type="editor"] .monaco-editor {
            position: fixed;
            left: 0px;
            right: 0px;
            top: 0px;
            width: 40% !important;
            height: -webkit-fill-available !important;
        }

        section[data-ui-type="editor"] iframe#preview-container {
            position: fixed;
            bottom: 0px;
            right: 0px;
            left: 0px;
            height: -webkit-fill-available;
            width: 50vh;
            /* border-top: solid white !important; */
        }


        section[data-ui-type="editor"] div#editor-container,
        section[data-ui-type="editor"] .monaco-editor {
            top: 50px;
            left: 0px;
            bottom: 0px !important;
            height: -webkit-fill-available !important;
            border-radius: 6px !important;
        }

        section[data-ui-type="editor"] div#editor-container {}

        section[data-ui-type="editor"] {
            background: #333 !important;
        }

        section[data-ui-type="editor"] div#editor-container {}

        section[data-ui-type="editor"] iframe#preview-container {
            left: unset;
            width: 60%;
            top: 50px;
        }



        section[data-ui-type="editor"] svg#logo_backscr_img {
            border: 2px solid var(--cdn_primary);
            width: 36px;
            height: 36px;
            border-radius: 50px;
            padding: 4px;
            position: absolute;
            top: 7px;
            opacity: 1 !important;
            left: 7px;
        }

        section[data-ui-type="editor"] div#editor-container,
        section[data-ui-type="editor"] div#editor-container * {
            font-family: Consolas, "Courier New", monospace !important;
        }

        /*  */
        section[data-ui-type="editor"] div#resizer-container {
            position: fixed;
            top: 50px;
            background: black;
            width: 5px;
            height: -webkit-fill-available;
            bottom: 0px;
            left: 40%;
            z-index: 33;
        }

        section[data-ui-type="editor"] i.celvon {
            border-right: 2px solid var(--primary_light);
            padding-right: 10px;
            margin-right: 2px;
        }

        section[data-ui-type="editor"] btns_r i:hover {
            background: var(--primary_light);
            border-radius: 4px;
            border-color: transparent;
        }

        section[data-ui-type="editor"] btns_r i {
            width: 45px;
            text-align: center;
            padding: 0px 10px !important;
        }

        section[data-ui-type="editor"] div_header {
            background: black !important;
        }

        section[data-ui-type="editor"] div_header span.editor_t {
            display: none;
        }

        @media only screen and (max-width: 530px) {
            section[data-ui-type="editor"] div_header span:not(.editor_t) {
                display: none !important;
            }

            section[data-ui-type="editor"] div_header span.editor_t {
                display: block;
            }

            section[data-ui-type="editor"] div#editor-container {
                left: 0px;
                right: 0px;
                width: -webkit-fill-available !important;
                top: 0px;
                bottom: unset;
                height: 50vh !important;
            }

            section[data-ui-type="editor"] iframe#preview-container {
                position: to;
                top: unset;
                bottom: 0px !important;
                height: 50vh !important;
                left: 0px;
                width: -webkit-fill-available;
            }

            section[data-ui-type="editor"] div#resizer-container {
                top: 50vh;
                left: 0px;
                width: -webkit-fill-available;
                height: 3px;
                right: 0px;
                pointer-events: none;
            }
        }

        section[data-ui-type="editor"] editor-wrapper.resize_mode div#editor-container,
        section[data-ui-type="editor"] editor-wrapper.resize_mode iframe#preview-container {
            pointer-events: none !important;
            filter: grayscale(1) !important;
        }

        section[data-ui-type="editor"] div#resizer-container {
            border: none !important;
            padding: 0px;
            margin: 0px;
            cursor: e-resize !important;

            user-select: none !important;
        }

        editor-history-rp {
            position: fixed;
            top: 50px;
            bottom: 0px;
            width: 40%;
            left: unset;
            right: 0px;
            z-index: 3333;
            background: rgb(0 0 0 / 87%);
            display: grid;
            transition: .3s;
            transform: translateX(100%);
            padding: 10px;
            overflow: auto;
        }

        editor-history-rp if_div {
            border: 1px solid var(--hard_white);
            margin: 4px 0px;
            border-radius: 6px;
            height: 170px;
        }

        editor-history-rp if_div:first-child {
            margin-top: 0px;
        }

        editor-history-rp if_div:last-child {
            margin-bottom: 0px;
        }

        editor-history-rp preview_dom {}

        editor-history-rp {
            position: fixed;
            top: 50px;
            bottom: 0px;
            width: 40%;
            left: unset;
            right: 0px;
            z-index: 3333;
            background: rgb(0 0 0 / 87%);
            display: grid;
            transition: .3s;
            transform: translatefX(100%);
            padding: 10px;
            overflow: auto;
        }

        editor-history-rp if_div {
            border: 1px solid var(--hard_white);
            margin: 4px 0px;
            border-radius: 6px;
            height: 170px;
            display: flex;
        }

        editor-history-rp if_div:first-child {
            margin-top: 0px;
        }

        editor-history-rp if_div:last-child {
            margin-bottom: 0px;
        }

        editor-history-rp preview_dom,
        editor-history-rp iframe.preview_dom {
            position: relative;
            width: -webkit-fill-available;
            height: 131px;
            background: white;
            pointer-events: none !important;
            border: none;
            margin-left: 2px;
            margin-top: 2px;
            margin-right: 2px;
            border-radius: 4px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        editor-history-rp p {
            position: absolute;
            left: 10px;
            right: 10px;
            text-align: center;
            margin-top: 135px;
            background: white;
            color: black;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            padding: 5px;
        }

        /*  */
        <?php include ROOT . "css/document_root.css"; ?>
        div#clavs br_ta {
            position: sticky;
            background: var(--black-trasparent-color);
            top: 51.1px;
            color: var(--hard_white);
            width: -webkit-fill-available;
            right: 0px;
            overflow: auto;
            z-index: 3;
            display: inline-block;
            padding: 10px 5px;
            backdrop-filter: blur(1px);
            height: fit-content;
        }



        div#clavs br_ta ta_f {
            margin: 0px 4px;
            padding: 6px;
            border-radius: 6px;
            color: var(--hard_white);
            background: var(--black-trasparent-color);
        }

        div#clavs br_ta ta_f.active,
        div#clavs br_ta ta_f:hover {
            background: var(--hard_white);
            color: var(--black-trasparent-color);
        }


        div#clavs br_ta {
            overflow-x: scroll;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            overflow-x: auto !important;
            -ms-scroll-snap-type: x mandatory;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            -webkit-transition: margin-left 0.5s;
            -o-transition: margin-left 0.5s;
            scroll-behavior: smooth;
            transition: margin-left 0.5s;

            /* -webkit-mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 10%, white 93%, transparent 100%); */
            /* mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 10%, white 93%, transparent 100%); */

        }


        div#clavs br_ta::-webkit-scrollbar {
            width: 0px !important;
            height: 0px !important;
        }

        div#clavs br_ta ta_f {
            scroll-snap-align: center;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
            transform-origin: center center;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            transition: -webkit-transform 0.5s;
            -webkit-transition: -webkit-transform 0.5s;
            -o-transition: transform 0.5s;
            transition: transform 0.5s;
            transition: transform 0.5s, -webkit-transform 0.5s;
            position: relative;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;

            align-items: center
        }



        #clavs grider_viewer {
            padding-top: 65px !important;
        }

        div#clavs br_ta {
            transition: .3s;
        }

        div#clavs br_ta.active_scr {
            transform: translateY(-50px);
            opacity: 0;
        }

        div#clavs br_ta,
        div#clavs br_ta ta_f {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
        }

        iframe {
            border: none;
        }

        body[data-url-id="/?p=blog"] i.pdf_download {
            display: none;
        }

        #clavs iframe[src="about:blank"]:not(.iframe_mask) {
            pointer-events: none !important
        }

        if_div iframe {
            position: unset !important;
        }

        /* aef
 */
        a[data-iam-hidden="yes"] {
            display: none !important;
        }

        body.open_f #logo_backscr_img.logo_backscr_img_cnt {
            max-width: 25px !important;
            min-width: 25px !important;
            width: 25px !important;

            max-height: 25px !important;
            min-height: 25px !important;
            height: 25px !important;
        }

        div.contanct_frm.open.yes fotter {

            transform: none !important;
            background: var(--black-trasparent-color);

        }


        div.contanct_frm.open.yes form {
            padding-bottom: 60px;
        }

        div.contanct_frm.open .h5_div {
            display: flex;
            align-content: center;
        }

        .h5_div img {
            height: 25px;
            width: 25px;
            margin-right: 10px;
            border-radius: 30px;
            border: 2px solid white;
            padding: 3px;
        }

        * {
            cursor: unset !important;
        }

        body:not([data-url-id*="?pages=tg_channel"]) .Ignoring_me_iframe.shadow_root:not(.opened),
        i.tg_button {
            display: none !important;
        }

        .Ignoring_me_iframe.shadow_root {
            position: absolute;
            top: 50px;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: -webkit-fill-available;
            border: none;
            background: var(--cdn_primary);
            -webkit-transition: -webkit-filter .3s;
            transition: -webkit-filter .3s;
            -o-transition: filter .3s;
            transition: filter .3s;
            transition: filter .3s, -webkit-filter .3s;
            overflow: auto;
        }

        /* body[data-url-id*="?pages=tg_channel"] #clavs iframe:not(.iframe_mask):not([id=*"telegram-post"]) {
            display: none !important;
        }*/

        body[data-url-id*="?pages=tg_channel"] .Ignoring_me_iframe.shadow_root div iframe {
            display: block !important;
            border: 2px solid #33afed !important;
            margin: 10px !important;
            width: -webkit-fill-available !important;
            position: unset !important;
            height: 80vh !important;
            padding: 10px;

            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
            -webkit-transition: .3s !important;
            border-radius: 10px;
        }

        body[data-url-id*="?pages=tg_channel"] iframe {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
            -webkit-transition: .3s !important;
            border-radius: 10px;
        }

        body[data-url-id*="?pages=tg_channel"] i.tg_button {
            display: block !important;
        }


        body[data-url-id*="?pages=tg_channel"] i.bi.bi-share {
            display: none;
        }

        iframe {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
            transition: .3s !important;
            -webkit-transition: .3s !important;
            border-radius: 10px;
        }

        body[data-url-id*="?pages=tg_channel"] i.tg_button {
            display: block !important;
        }


        body[data-url-id*="?pages=tg_channel"] i.bi.bi-share {
            display: none;
        }

        body[data-url-id*="?pages=tg_channel"] div_header {
            background: #24A1DE !important;
        }


        body[data-url-id*="?pages=tg_channel"] .Ignoring_me_iframe.shadow_root div iframe[data-src] {
            background-image: url(<?= "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iVmppZGVvX3NqcGlubmVyIFZqaWRlb19zanBpbm5lcl9jZW50ZXIiIA0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogIGhlaWdodD0iNTAiDQogIHdpZHRoPSI1MCINCg0Kdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iDQogICAgd2lkdGg6IDYwcHg7DQogICAgaGVpZ2h0OiA2MHB4Ow0KICAgICANCiI+IA0KPHN0eWxlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHlwZT0idGV4dC9jc3MiPg0KLlZqaWRlb19zanBpbm5lciB7DQogICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7DQogICAgdHJhbnNpdGlvbjogLjNzOw0KICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTsNCiAgICB6LWluZGV4OiAyMzMzMzMzMzsNCiAgICBwb3NpdGlvbjogZml4ZWQ7DQogICAgdG9wOiAzNXB4Ow0KICAgIGxlZnQ6IDM1cHg7DQogICAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7DQogICAgd2lkdGg6IDUwcHg7DQogICAgaGVpZ2h0OiA1MHB4Ow0KICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQNCn0NCg0KLlZqaWRlb19zanBpbm5lciAucGF0aCB7DQogICAgc3Ryb2tlOiB3aGl0ZTsNCiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7DQogICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpKSAhaW1wb3J0YW50Ow0KICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXcgMCAwIDUxMiA1MTIgIWltcG9ydGFudA0KfQ0KDQogDQoNCkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUgew0KICAgIDEwMCUgew0KICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpDQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIHJvdGF0ZSB7DQogICAgMTAwJSB7DQogICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykNCiAgICB9DQp9DQoNCkAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHsNCiAgICAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDANCiAgICB9DQoNCiAgICA1MCUgew0KICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1DQogICAgfQ0KDQogICAgMTAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0DQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIGRhc2ggew0KICAgIDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMA0KICAgIH0NCg0KICAgIDUwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzUNCiAgICB9DQoNCiAgICAxMDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQNCiAgICB9DQp9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0icGF0aCIgY3g9IjI1IiBjeT0iMjUiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjUiPjwvY2lyY2xlPiA8L3N2Zz4="; ?>), linear-gradient(45deg, #24a1de, #24a1de) !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
        }

        body[data-url-id*="?pages=tg_channel"] .Ignoring_me_iframe.shadow_root div iframe {
            height: 85vh !important;
            min-height: 85vh !important;
            max-height: 85vh !important;
            max-width: 500px !important;
        }

        .Ignoring_me_iframe.shadow_root div {


            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            opacity: 1;
            display: block;
            overflow: auto;
            z-index: 33333333333;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            align-content: center;
            align-items: center;


        }

        .Ignoring_me_iframe.shadow_root div {
            overflow-x: hidden;
            overflow-y: auto;
            overflow-y: scroll;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            overflow-y: auto !important;
            -ms-scroll-snap-type: y mandatory;
            -webkit-scroll-snap-type: y mandatory;
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            -webkit-transition: 0.5s;
            -o-transition: 0.5s;
            transition: 0.5s;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }


        .Ignoring_me_iframe.shadow_root div iframe {
            height: 100%;
            scroll-snap-align: center;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
            transform-origin: center center;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            transition: -webkit-transform 0.5s;
            -webkit-transition: -webkit-transform 0.5s;
            -o-transition: transform 0.5s;
            transition: transform 0.5s;
            transition: transform 0.5s, -webkit-transform 0.5s;
            position: relative;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        div.bra {
            position: fixed;
            background: black;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        div.bra img.img_background_rljs {
            transition: .3s;
        }

        div.bra img.img_background_rljs {

            position: fixed;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            top: 0px;
            bottom: 0px;
            -webkit-filter: blur(4px);
            filter: blur(2px);
            -o-object-fit: cover;
            object-fit: cover;
            background: black;
            opacity: 0;
            z-index: -1;
            pointer-events: none;
        }

        div.bra img.img_background_rljs.active {
            opacity: 0.9;
        }

        div#buttons.box_shadow img.aepraaa3 {
            background: transparent;
            border: none;
            position: absolute;
            z-index: -1;
            left: 0px;
            top: 0px;
            padding: 0px;
            border-radius: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            object-fit: cover;
            pointer-events: none;
            opacity: 0;
        }

        div#buttons.box_shadow .adiv:hover img.aepraaa3.loading {
            opacity: 0 !important;
        }

        div#buttons.box_shadow .adiv:hover img.aepraaa3:not(.loading) {
            opacity: 0.5;
        }

        /* */

        br_box br_aer {

            /*  */
            overflow-x: scroll;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            overflow-x: auto !important;
            -ms-scroll-snap-type: x mandatory;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            -webkit-transition: margin-left 0.5s;
            -o-transition: margin-left 0.5s;
            scroll-behavior: smooth;
            transition: margin-left 0.5s;
            -webkit-mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 25%, white 80%, transparent 100%);
            mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 10%, white 93%, transparent 100%);
            /* z-index: 333333; */
            position: absolute;
            width: 100%;
            padding-bottom: 50px;
            right: 0px;
            left: 0px;
            padding-top: 25px;
            color: white;
        }

        br_box br_aer.snaped {
            bottom: 30px;
            padding: 0px;
            padding-bottom: 10px;
            position: unset;
        }

        br_box br_aer .baer {
            scroll-snap-align: center;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            border-radius: 10px;
            -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
            transform-origin: center center;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            transition: -webkit-transform 0.5s;
            -webkit-transition: -webkit-transform 0.5s;
            -o-transition: transform 0.5s;
            transition: transform 0.5s;
            transition: transform 0.5s, -webkit-transform 0.5s;
            position: relative;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin: 0px 5px;
        }

        br_box br_aer img {
            pointer-events: none;
        }

        br_box br_aer .baer img:not(.favicon) {
            width: 50px;
            border-radius: 10px;
            height: 50px;
            min-width: 50px;
            min-height: 50px;
            max-width: 50px;
            max-height: 50px;
            background: black;
            object-fit: scale-down;
        }

        br_box br_aer .baer img {
            -o-object-fit: cover;
            object-fit: cover;
        }

        br_box br_aer .baer {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 250px !important;
        }

        br_box br_aer img.favicon {
            width: 16px;
            height: 16px;
            border-radius: 4px;
            max-width: 16px !important;
            max-height: 16px !important;
            min-width: 16px !important;
            max-height: 16px !important;
        }



        br_box br_aer ber_f {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            padding-left: 10px;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
        }

        br_box br_aer bar_t img {
            margin-right: 5px;
        }

        br_box br_aer bar_t {
            display: -webkit-box;
            display: -ms-flexbox;
            display: inline-flex;
        }

        br_box br_aer .baer {
            border-radius: 10px !important;
            padding: 5px;
            font-weight: normal;
            position: relative;
        }

        br_box br_aer .baer:hover * {}

        br_box br_aer .baer:hover {
            /* background: white; */
        }


        br_box br_aer bar_t {
            white-space: nowrap;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            max-width: 200px;
        }

        br_box br_aer span {
            white-space: nowrap;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            max-width: 165px;

        }


        br_box pe {
            padding-left: 10px;
            bottom: 106px;
            color: white;
        }

        br_box {
            display: grid;
            flex-wrap: nowrap;
            flex-direction: column;
            bottom: 0px;
            border-radius: 10px;
            /* transform: translateY(500px); */
            transition: .3s;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            border-radius: 10px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            enable-background: new 0 0 512 512 !important;
            border-radius: 0px !important;
            padding-top: 10px;
            left: 0px;
            position: static;

            border: 2px solid rgb(255 255 255 / 18%);
            border-radius: 4px !important;

        }

        br_box .bra {
            position: absolute;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 100%;
            right: 0px;
            pointer-events: none;
            background: black;
            z-index: -1;
            border-radius: 10px;
        }

        br_box img.img_background_rljs {
            position: absolute;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            top: 0px;
            bottom: 0px;
            -webkit-filter: blur(4px);
            filter: blur(2px) !important;
            -o-object-fit: cover;
            object-fit: cover;
            background: black;
            opacity: 0.5;
            pointer-events: none;
        }

        br_box img.img_background_rljs {
            opacity: 0.4 !important;
        }

        dnm_footer {
            transition: .3s;
            /* opacity: 0; */
        }

        /* AEFAEF */





        div#clavs br_ta ta_f.active span {
            content: "3";
            color: black;
            padding: 6px;
            background: white;
            z-index: 3;
            font-weight: bold;
            font-family: arial;
            width: 20px;
            height: 20px;

            font-size: 10px !important;
        }

        div#clavs br_ta ta_f.active span {
            color: transparent;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            top: 0px;
            color: var(--black-trasparent-color);
            right: 0px;
            border-bottom-left-radius: 5px;
            border-left: 2px solid;
            border-bottom: 2px solid;
            margin-left: 5px;
            border-top: 2px solid;
            border-top-left-radius: 5px;
        }

        div#clavs br_ta ta_f.active {
            padding-right: 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -ms-flex-line-pack: center;
            align-content: center;
        }

        div#clavs br_ta ta_f:not(.active) span {
            /* display: none; */
        }

        div#clavs br_ta ta_f span {
            -webkit-transform: translateX(30px);
            -ms-transform: translateX(30px);
            transform: translateX(30px);
            font-size: 0px !important;
            width: 0px !important;
            padding: 0px !important;
        }

        div#clavs br_ta ta_f:hover span {

            -webkit-transform: none !important;

            -ms-transform: none !important;

            transform: none !important;
            font-size: 10px !important;
            width: 20px !important;
            padding: 6px !important;
        }


        div#clavs br_ta ta_f.active span {

            -webkit-transform: none !important;

            -ms-transform: none !important;

            transform: none !important;
            font-size: 10px !important;
            width: 20px !important;
            padding: 6px !important;
        }

        div#clavs br_ta ta_f span {
            content: "3";
            color: black;
            padding: 6px;
            background: white;
            z-index: 3;
            font-weight: bold;
            font-family: arial;
            width: 20px;
            height: 20px;

            font-size: 10px !important;
        }

        div#clavs br_ta ta_f span {
            font-weight: bold;
        }

        div#clavs br_ta ta_f span {
            color: transparent;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            top: 0px;
            color: var(--black-trasparent-color);
            right: 0px;
            border-bottom-left-radius: 5px;
            border-left: 2px solid;
            border-bottom: 2px solid;
            margin-left: 5px;
            border-top: 2px solid;
            border-top-left-radius: 5px;
        }

        div#clavs br_ta ta_f {
            padding-right: 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -ms-flex-line-pack: center;
            align-content: center;
        }

        div#clavs br_ta ta_f {
            text-transform: capitalize !important;
        }

        i.br_ta_funnel.bi.bi-funnel {
            margin-top: 6px;
            margin-left: 6px;
            margin-right: 6px;
            pointer-events: none;
        }

        div#clavs br_ta ta_f[data-category="telegram"] i {
            margin-right: 5px;
            padding-right: 2px;
        }

        ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        /* 
        div#clavs br_ta ta_f span {
    transform:translateX(30px);
    font-size:0px !important;
    width:0px !important;

    padding:0px !important;
}
 
div#clavs br_ta ta_f.active span {

    transform:none !important;
    font-size: 10px !important;
    width:20px !important;
    padding: 6px !important;
}

        */

        #clavs grider_viewer project img.loader_post {
            z-index: -1;
            width: 50px !important;
            height: 50px !important;
            border: none !important;
            margin: auto;
            pointer-events: none;
            top: 0px !important;
        }

        <?php if ($_GET['vp'] == "livestream") {
            ?>
            .box_shadow_txtf.box_shadow {
                margin: auto !important;
            }

            div#buttons,
            arr_bundle {

                display: none !important;
            }

            span.box_shadow_h {
                display: none !important;
            }

            <?php
        } ?>
        @import url(https://cdn.eronelit.com/echat/node_modules/@fortawesome/fontawesome-free/css/all.min.css);
        @import url(https://cdn.eronelit.com/node_modules/@fortawesome/fontawesome-free/css/all.min.css);

        ta_f[data-category="deviantart"] i {
            margin-right: 5px;
        }

        ta_f[data-category="deviantart"]:hover,
        ta_f[data-category="deviantart"].active {
            background: #00e59b !important;
        }

        ta_f[data-category="video"].active span,
        ta_f[data-category="video"]:hover span,
        ta_f[data-category="deviantart"]:hover span,
        ta_f[data-category="deviantart"].active span {
            background: transparent !important;

        }



        ta_f[data-category="video"].active,
        ta_f[data-category="video"]:hover {
            background: #b90808 !important;
            color: white !important;

        }

        ta_f i {
            margin-right: 5px;
        }

        ta_f[data-category="video"]:hover span,
        ta_f[data-category="video"].active span {
            border-color: white !important;
            background: transparent !important;
            color: white !important;
        }

        editor-wrapper {
            background: #333;
            position: absolute;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 3;
        }

        section[data-ui-type="editor"] div#resizer-container {
            display: flex;
            width: 8px !important;
            min-width: 8px !important;
            max-width: 8px !important;
        }


        editor-wrapper {
            background: black;
        }

        editor-wrapper.active_f div#resizer-container {
            /* border-right:1px solid black !important; */
            /* filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) invert(1) !important; */
            /* -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) invert(1) !important; */
            /* enable-background: new 0 0 512 512 !important; */
        }

        editor-wrapper.active_f iframe#preview-container {
            opacity: 0.8 !important;
            pointer-events: none !important;
        }

        editor-wrapper.active_f div#editor-container {
            opacity: 0.8 !important;
            pointer-events: none !important;
        }

        editor-wrapper div-sh {

            background: white;
            display: block;
            margin: auto;
            width: 2px;
            height: 40%;
            border-radius: 50px;
            pointer-events: none !important;

        }


        section[data-ui-type="editor"] size_r {
            position: absolute;
            top: 51px;
            right: 0px;
            z-index: 3333;
            background: rgb(255 255 255 / 48%);
            color: #333;
            padding: 5px 10px;
            font-size: 13px;
            border-bottom-left-radius: 5px;
            border-left: 1px solid black;
            border-bottom: 1px solid black;
        }

        section[data-ui-type="editor"] iframe#preview-container {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            transition: none !important;
        }

        section[data-ui-type="editor"] size_r i {
            margin-right: 5px;
        }



        @media screen and (max-width: 600px) {

            section[data-ui-type="editor"] iframe#preview-container {
                position: to;
                top: 0px !important;
                height: 50% !important;
            }

            editor-wrapper {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
            }

            section[data-ui-type="editor"] div#editor-container {
                top: unset;
                right: 0px !important;
                left: 0px !important;
                width: 100% !important;
            }

        }

        id_mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background: white;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            z-index: 33333;
        }

        id_mask spanf {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
        }

        id_mask img#logo_edi {
            width: 50px;
            height: 50px;
            border-radius: 350px !important;
            border: 2px solid;
            padding: 4px;
            margin: auto;
        }

        id_mask span {
            text-align: center;
        }

        editor-wrapper a {
            background: #333;
            color: white !important;
            padding: 10px !important;
            line-height: normal;
            margin-top: 30px !important;
            display: block;
            outline: none;
            border-radius: 6px;
        }

        editor-wrapper * {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
            enable-background: new 0 0 512 512;
        }

        div#logContainer.active {
            height: 60%;
        }

        div#logContainer {
            position: absolute;
            right: 0px;
            background: #333;
            z-index: 33333;
            width: 50%;
            height: 60%;
            bottom: 0px;
            width: calc(60% - 8px);
            border-top: 2px solid black;
            border-radius: 0px;
            border-left: 0px solid;
            border-bottom-left-radius: 5px;
            font-size: 12px;
            height: 32px;
            overflow: auto;
            transition: height .3s !important;
        }

        div#logContainer .log {
            padding: 5px 10px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            font-family: revert-layer !important;
            margin: 5px;
            border-radius: 6px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
            enable-background: new 0 0 512 512;
            border: 0px;

        }

        div#logContainer log_msg {
            display: -ms-grid;
            display: grid;
        }

        div#logContainer,
        div#logContainer * {
            color: white;
        }

        div#logContainer i {
            margin-right: 7px;
        }

        div#logContainer .log.info {
            background: #179fff4f;
        }


        div#logContainer .log {
            padding: 5px 10px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            font-family: revert-layer;
            margin: 5px;

            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            border-radius: 6px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
            enable-background: new 0 0 512 512;
            border: 0px;
        }

        div#logContainer log_msg {
            display: -ms-grid;
            display: grid;
        }

        div#logContainer,
        div#logContainer * {
            color: white;
        }

        div#logContainer i {
            margin-right: 7px;
        }

        div#logContainer .log.info {
            background: #179fff4f;
        }

        div#logContainer .log.error {
            background: var(--red);
        }

        div#logContainer divf_ {
            position: sticky;
            left: 0px;
            right: 0px;
            top: 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            margin-left: 0px;
            margin-right: 0px;
            background: #333 !important;
            z-index: 3333;
        }


        div#logContainer divf_ span {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            padding: 5px 10px;

            border-bottom: 2px solid;
            border-color: transparent;
        }

        div#logContainer {
            padding-left: 0px !important;
        }

        div#logContainer divf_ * {
            -webkit-filter: none !important;
            filter: none !important;
        }

        div#logContainer divf_ span:hover {
            background: rgb(34 34 34 / 13%);
            border-bottom-color: rgb(255 255 255 / 13%);
        }

        div#logContainer span:hover,
        div#logContainer span.active {
            border-bottom: 2px solid;
            background: #222;
            -webkit-filter: none !important;
            filter: none !important;
        }

        div#logContainer span.info.active,
        div#logContainer span.info.active i,
        div#logContainer span.info:hover i,
        div#logContainer span.info:hover {
            color: #179fff !important;
            border-bottom-color: #179fff !important;
        }


        div#logContainer span.info.active,
        div#logContainer span.info.active i,
        div#logContainer span.info:hover i,
        div#logContainer span.info:hover {
            color: #179fff !important;
            border-bottom-color: #179fff !important;
        }


        div#logContainer span.errors.active i,
        div#logContainer span.errors.active,
        div#logContainer span.errors:hover i,
        div#logContainer span.errors:hover {
            color: var(--red) !important;
            border-bottom-color: var(--red) !important;
        }

        div#logContainer divf_ span.errors:hover,
        div#logContainer divf_ span.errors:hover * {
            border-color: var(--red);
            color: var(--red);
        }

        div#logContainer divf_ span.warnings.active,
        div#logContainer divf_ span.warnings.active *,
        div#logContainer divf_ span.warnings:hover,
        div#logContainer divf_ span.warnings:hover * {
            border-color: orange;
            color: orange;
        }

        div#logContainer divf_ span.expand {
            right: 0px;
            position: absolute;
        }

        div#logContainer .log.warnings {
            background: orange;
        }

        div#logContainer .log:not(.error, .warnings) {
            display: none !important;
        }

        div#logContainer:hover .log:hover {
            opacity: 1;
        }

        div#logContainer:hover .log {
            opacity: 0.7;
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
        }

        div#logContainer .log * {
            pointer-events: none;
        }

        @media screen and (max-width: 600px) {

            section[data-ui-type="editor"] iframe#preview-container,
            section[data-ui-type="editor"] div#editor-container {
                max-width: 100% !important;
                min-width: 100% !important;
                width: 100% !important;
            }

            /*  */

            div#logContainer divf_ span {
                display: grid;
                text-align: center;
                justify-content: center;
                justify-items: center;
                width: 100%;
                position: unset !important;
            }

            div#logContainer divf_ span i {
                margin: auto;
            }

            div#logContainer:not(.active) {
                height: 51px;
            }

            div#logContainer divf_ span {
                /* width: 100%; */
                /* position: unset !important; */
            }

            /*  */
        }



        .anchorTitle {
            background: rgb(0 0 0 / 0.9);
        }

        .anchorTitle img.is_touch.in_hover {
            position: absolute;
            left: 0px;
            z-index: -34;
            top: 0px;
            -o-object-fit: cover;
            object-fit: cover;
            height: 100%;
            width: 100%;
            -webkit-filter: blur(1px);
            filter: blur(1px);
            opacity: 0.5;
            background: black;
        }

        body[data-url-id="yes"] div#clavs:hover grider_viewer:hover project:hover,
        body[data-url-id="/?p=projects"] div#clavs:hover grider_viewer:hover project:hover {
            opacity: 1;
        }

        body[data-url-id="yes"] div#clavs:hover grider_viewer:hover project:not(:hover) *,
        body[data-url-id="/?p=projects"] div#clavs:hover grider_viewer:hover project:not(:hover) * {
            opacity: 0.7;
        }

        body[data-url-id="/?p=projects"] div#clavs:hover {
            background: rgb(0 0 0 / 60%) !important;
        }


        body[data-url-id="yes"] div#clavs:hover grider_viewer:hover project:hover {
            opacity: 1;
        }


        body[data-url-id="yes"] div#clavs:hover grider_viewer:hover project:not(:hover) * {
            opacity: 0.7;
        }

        body[data-url-id="yes"] div#clavs:hover grider_viewer:hover project img.loader_post {
            opacity: 0;
        }

        body[data-url-id="yes"] div#clavs:hover {
            background: rgb(0 0 0 / 60%) !important;
        }


        body[data-url-id="/?p=projects"] div#clavs:hover grider_viewer project:hover,
        body[data-url-id="yes"] div#clavs:hover grider_viewer project:hover {
            -webkit-transform: scale(1.05) !important;
            -ms-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
        }



        editor-wrapper id_mask a {
            opacity: 0.8;
            -webkit-transition: .3s !important;
            -o-transition: .3s !important;
            transition: .3s !important;
        }

        editor-wrapper id_mask a:hover {
            opacity: 1;
        }

        div_preview {
            position: absolute;
            bottom: 12px;
            left: 12px;
            right: 12px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            background: var(--black-trasparent-color);
            z-index: 33333;
            border-top: 2px solid;
            color: white;
            font-size: 12px;
            padding: 10px;
            border-top-color: #444;
            display: -ms-grid;
            display: grid;
            overflow: auto;
            max-height: 150px !important;
        }



        div_preview img {
            display: none;
        }

        div_preview div_h {
            font-size: 14px;
            border-bottom: 1px solid white;
            padding-bottom: 5px;
            margin-bottom: 5px;
        }


        div_preview div_h2 {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }

        div_preview divh2 {
            width: 30%;
            padding: 2px;
            background: white;
            border-radius: 40px;
            margin: 65px auto !important;
        }

        div_preview div_bck {
            background-image: -o-linear-gradient(45deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%));
            background-image: linear-gradient(45deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%));
            display: block;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
            -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
        }


        /*  */
        div_preview img {
            display: none;
        }

        div_preview div_h {
            font-size: 14px;
            border-bottom: 1px solid white;
            padding-bottom: 5px;
            margin-bottom: 5px;
        }


        div_preview div_h2 {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }

        div_preview divh2 {
            width: 30%;
            padding: 2px;
            background: white;
            border-radius: 40px;
            margin: 7px auto !important;
            margin-left: 0px !important;
        }

        div_preview div_bck {
            background-image: -o-linear-gradient(45deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%));
            background-image: linear-gradient(45deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%));
            display: block;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
            -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
        }


        div_preview.closed {
            max-height: 53px;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
        }

        div_preview.closed div_t {
            display: none;
        }

        div_preview.closed dtitle {
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            overflow: hidden;
            display: block;
            width: 100%;
            height: 1.2em;
            white-space: nowrap;
        }

        div_preview dtitle {
            border-left: 2px solid white;
            padding-left: 5px;
            margin: 4px 0px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        div_preview.closed dtitle {
            height: 17px;
        }

        /*

<div_preview><div_bck></div_bck><div_h2><divh2></divh2><data_exp>Close - Description</data_exp></div_h2><div_h>Pegasus project - Connection PC and Brain with no chips is possible!</div_h><div_t>Is possible no only in theory?!<br><br>Pegasus project is project, Connecting the brain to the computer using WiFi frequency and brain neuro signals. The connection is used by using a modified WiFi signal... Similar as Neural link but you don't need chips... <br> More coming soon! <img loading="lazy" class="is_touch in_hover" ondragstart="return false;" src="/?blog=13_jul_2024_23_40/43515315" data-zoom-image="https://portfolio.localhost/?p=projects" alt="Pegasus project - Connection PC and Brain with no chips is possible!"></div_t></div_preview>


<div_preview><div_h>Pegasus project - Connection PC and Brain with no chips is possible!</div_h><div_t>Is possible no only in theory?!<br><br>Pegasus project is project, Connecting the brain to the computer using WiFi frequency and brain neuro signals. The connection is used by using a modified WiFi signal... Similar as Neural link but you don't need chips... <br> More coming soon! <img loading="lazy" class="is_touch in_hover" ondragstart="return false;" src="/?blog=13_jul_2024_23_40/43515315" data-zoom-image="https://portfolio.localhost/?p=projects" alt="Pegasus project - Connection PC and Brain with no chips is possible!"></div_t><br></div_preview>        */
        video.video_is_hidden {
            opacity: 0 !important;

        }




        div#clavs.gallery_mode section[data-ui-type="gallery"] div_header {
            display: block !important;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] div_header #logo_backscr_img {
            opacity: 1;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer {
            position: fixed;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: calc(100% - 50px);
            display: block;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] i.bi.bi-arrow-left-short.editor_btns.undo {
            opacity: 0.5;
            pointer-events: none;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] i.bi.bi-arrow-left-short.editor_btns.undo.active {
            opacity: 1 !important;
            pointer-events: unset !important;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer sp_clv {
            position: absolute;
            background: transparent;
            width: 100%;
            height: 100%;
            bottom: 0px;
            top: 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            z-index: 33333;
            color: white;
            font-size: 13px;
            text-align: center;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer project:not([box-ui="uit-gallery"]) fiv {
            display: none !important;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer {
            padding: 5px !important;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer sp_clv i {
            font-size: 40px;
            width: 60px;
            height: 60px;
            display: block;
        }


        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer p-title {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
            text-transform: capitalize;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer project img {
            opacity: 0.7;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer img_drps {
            position: absolute;
            width: 100%;
            height: calc(100% - 15px);
            background: rgb(0 0 0 / 0.5);
            z-index: -1;
            border-radius: 10px !important;
        }

        #clavs grider_viewer project:hover p_open {
            top: 45px !important;
            opacity: 1;
            z-index: 333333333;
        }


        span_live {
            position: absolute;
            bottom: 30px;
            z-index: 33333;
            left: 0px;
            right: 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            text-align: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end;
            -ms-flex-line-pack: center;
            align-content: center;
            pointer-events: none;
        }

        span_live btn_l {
            background: hwb(0deg 0% 0% / 58%);
            color: white;
            border-radius: 6px !important;
            margin: 4px;
            padding: 4px 10px;
            font-size: 13px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
        }

        @-webkit-keyframes span_live_i {
            0% {
                opacity: 0;
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @keyframes span_live_i {
            0% {
                opacity: 0;
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        span_live btn_l i {
            margin-right: 4px;
            -webkit-animation: span_live_i 2s infinite;
            animation: span_live_i 2s infinite
        }



        a.fiv_d {
            position: absolute;
            font-size: 11px;
            bottom: 32px !important;
            top: unset !important;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            left: 5px;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            width: -webkit-fit-content !important;
            width: -moz-fit-content !important;
            width: fit-content !important;
            background: rgb(0 0 0 / 52%);
            opacity: 1;
            z-index: 333;
            color: white;
            padding: 5px;
            border-radius: 4px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
        }

        a.fiv_d i {
            margin-right: 6px;
        }

        ta_f[data-category="astronomy"]:hover i,
        ta_f[data-category="astronomy"].active i {
            -webkit-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            transform: rotate(-90deg);
        }

        body div.solarsystem,
        body div-solarsystem,
        body[data-category-name="astronomy"] #clavs grider_viewer {
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
        }

        body div.solarsystem {
            background: black;
        }

        body[data-category-name="astronomy"].active #clavs grider_viewer {
            opacity: 0;
            pointer-events: none;
            -webkit-transform: translateY(100dvh);
            -ms-transform: translateY(100dvh);
            transform: translateY(100dvh);
        }


        body:not([data-category-name="astronomy"]) div.solarsystem,
        body:not([data-category-name="astronomy"]) div-solarsystem,
        body:not([data-category-name="astronomy"]) solar_arrow {
            opacity: 0 !important;
            pointer-events: none !important;
        }

        /*  */
        body div-solarsystem,
        body div.solarsystem {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
        }

        solar_arrow {
            color: white;
            position: fixed;
            bottom: 0px;
            left: 0px;
            right: 0px;
            display: flex;
            z-index: 33333353;
            align-content: center;
            justify-content: center;
            align-items: flex-end;
            padding: 10px;
            border-top: 1px solid #ffffff36;
            background: var(--black-trasparent-color);
        }

        solar_arrow labelv span {
            margin: 0px 10px;
        }

        body[data-category-name="astronomy"] grider_viewer.gridsH.grids {
            -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(60%, black), to(transparent));
            -webkit-mask-image: linear-gradient(black 60%, transparent);
            mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(60%, black), to(transparent));
            mask-image: linear-gradient(black 60%, transparent);
        }

        solar_arrow back_f {
            width: 300px;
            height: 200px;
            background: rgb(255 255 255 / 8%);
            border-radius: 0px;
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(10px);
            border: 0px;
            padding: 0;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
        }

        solar_arrow * {
            -webkit-transition: .3s !important;
            -o-transition: .3s !important;
            transition: .3s !important;
        }

        solar_arrow:hover back_f {
            background: rgb(255 255 255 / 10%) !important;
        }

        #clavs grider_viewer video {
            -webkit-mask-image: radial-gradient(#00000026, #000000);
            mask-image: radial-gradient(#00000026, #000000);
        }

        #clavs grider_viewer#gallery-container:not(.g_gallery) video,
        #clavs grider_viewer#gallery-container:not(.g_gallery) img,
        #clavs grider_viewer#gallery-container:not(.g_gallery) div_hr {
            top: 0px;
            margin-top: 34px;
        }

        div#zoomWindowContainer iframe {
            position: absolute;
            top: 60px !important;
            left: 10px !important;
            right: 10px !important;
            bottom: 10px !important;
            height: calc(100% - 75px) !important;
            width: calc(100% - 20px) !important;
        }


        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer sp_clv {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
            enable-background: new 0 0 512 512 !important;
            -webkit-transition: .3s !important;
        }

        video-player#video_preview {
            -webkit-transition: .3s !important;
            -o-transition: .3s !important;
            transition: .3s !important;
        }

        video-player#video_preview {
            position: fixed;
            left: 0px;
            z-index: 333333;
            width: 100%;
            height: calc(100dvh - 51px);
            bottom: 0px !important;
            border-top: 1px solid #ffffff2e;
            border-radius: 0px;
            -webkit-transform: translateY(100dvh);
            -ms-transform: translateY(100dvh);
            transform: translateY(100dvh);

            opacity: 0;
        }

        p-container.shadow_iframe {
            opacity: 0;
            z-index: 1;
            pointer-events: none;
            background: var(--black-trasparent-color) !important;
        }

        p-container.shadow_iframe.active {
            opacity: 1;
            pointer-events: unset !important;
        }

        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: white;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: transparent;
        }

        /*  */
        ta_f[data-category="technews"] {
            border: 2px solid var(--red);
            padding-top: 0px !important;
            padding-bottom: 0px !important;
            display: grid !important;
        }

        ta_f[data-category="technews"] span {
            -webkit-transform: none !important;
            -ms-transform: none !important;
            transform: none !important;
            font-size: 10px !important;
            color: white !important;
            width: 40px !important;
            padding: 6px !important;
            min-width: -webkit-fill-available;
            background: transparent !important;
            border: 0px !important;
            background: var(--red) !important;
            border-radius: 0px !important;
            margin: 0px !important;
        }

        ta_f[data-category="technews"] {
            border: 2px solid var(--red);
            padding: 0px !important;
            display: grid !important;
            min-width: 150px;

            color: var(--red) !important;
        }

        ta_f[data-category="technews"] span_t {
            font-size: 4px !important;
        }

        blue-warp {
            pointer-events: none;
        }

        ta_f[data-category="technews"] blue-warp {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100% !important;
            height: 100% !important;
            top: 0px !important;
            pointer-events: none;
            z-index: -1;
            border-radius: 0px !important;
            border: none !important;
            opacity: 0.5;
            -webkit-filter: invert(1) !important;
            filter: invert(1) !important;
        }

        ta_f[data-category="technews"],
        ta_f[data-category="technews"] * {
            pointer-events: none;
        }

        .custom-scrollbar::-webkit-scrollbar {
            width: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 5px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        }

        pdf-viewer {
            display: block;
            width: 250px;
            height: 250px;
            background: rgb(0 0 0 / 32%);
        }

        /*  */
        svg_viewer,
        video-player-v2 {
            display: block;
            margin: 20px 0px !important;
            width: -webkit-fill-available;
            border-radius: 10px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            enable-background: new 0 0 512 512 !important;
            pointer-events: none;
        }


        div#clavs div_header,
        div#clavs br_ta,
        #clavs grider_viewer {
            transition: .3s !important;
        }

        div#clavs.scrollactive div_header,
        div#clavs.scrollactive br_ta {}

        div#clavs.scrollactive div_header {
            opacity: 0 !important;
            pointer-events: none !important;
        }

        div#clavs.scrollactive grider_viewer {
            transform: translateY(0px);
            padding-top: 10px !important;
        }

        div#clavs.scrollactive br_ta {
            top: 0px;
        }

        fiv_title {
            background: rgb(0 0 0 / 52%);
            opacity: 1;
            z-index: 333;
            color: white;
            padding: 5px;
            border-radius: 4px;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
            position: absolute;
            font-size: 11px;
            margin: 10px;
            height: 26px;
            margin-top: 10px;
            padding: 5px;
            display: block;
            border-radius: 6px;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            min-width: 50px;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            max-width: calc(100% - 55px);
            white-space: nowrap;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            padding-top: 12px;
        }

        div#clavs.gallery_mode section[data-ui-type="gallery"] grider_viewer:hover project:not(:hover) {
            opacity: 0.5 !important;
        }

        blog_post_loader {
            position: fixed;
            z-index: 23423423423432423423;
            left: 0px;
            width: 100%;
            height: 100%;
            top: 0px;
            background: var(--black-trasparent-color);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }

        blog_post_loader,
        blog_post_loader * {
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
        }

        blog_post_loader loader {
            display: block;
            margin: auto;
        }

        blog_post_loader loader img {
            display: block;
            margin: auto;
            width: 150px;
            height: 150px;
            -o-object-fit: cover;
            object-fit: cover;
            border-radius: 150px;
            margin: auto;
            opacity: 0.9;
            padding: 5px;
            background: var(--black-trasparent-color);
            border: 3px solid rgb(255 255 255 / 21%);
            -webkit-filter: blur(0.5px);
            filter: blur(0.5px);
        }

        blog_post_loader loader rotater {
            display: block;
            width: 150px;
            height: 150px;
            -webkit-animation: spin 1s linear infinite;
            animation: spin 1s linear infinite;
            border-radius: 150px;
            position: absolute;
            border: 3px solid;
            z-index: 3;
            border-top: 3px solid white;
        }

        @-webkit-keyframes spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);

            }

            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @keyframes spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);

            }

            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        blog_post_loader.active {
            opacity: 0 !important;
        }

        blog_post_loader.active loader {
            -webkit-transform: scale(0);
            -ms-transform: scale(0);
            transform: scale(0);
        }

        solar-map {
            display: block;
            position: absolute;
            width: 150px;
            height: 150px;
            background: black;
        }

        video-player#homevideo {

            position: fixed;
            left: 0px;
            right: 0px;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            -o-object-fit: scale-fit;
            object-fit: scale-fit;
            background: black;
            -webkit-transition: .3s !important;
            -o-transition: .3s !important;
            transition: .3s !important;
            opacity: 0.5;

        }

        body {
            transition: .3s;

        }

        svg_viewer {
            background: white;
        }

        svg_viewer {
            display: block;
            min-height: 70vh !important;
            height: 70vh !important;
            background: white;
        }

       
 
    </style>
    <?php
    if ($_SERVER['HTTP_HOST'] == "markonikolic98.com") { ?>
        <!-- Google tag (gtag.js) -->
        <script async nonce="<?php echo $script_nonce; ?>"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4445409692157494">
            </script>
        <script async nonce="<?php echo $script_nonce; ?>"
            src="https://www.googletagmanager.com/gtag/js?id=G-NZPKRC33WQ"></script>
        <script nonce="<?php echo $script_nonce; ?>">
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-NZPKRC33WQ');
        </script>
    <?php }
    ?>
    <?php /*   <?php
$r = $this->get_data([
"url" => "https://api.eronelit.com/app&id=A03429468246&json=all",
"headers" => [
'Content-Type: application/json',
'Authorization: Bearer 32M052k350QaeofkaeopfF',
]
]);
?>

<meta http-equiv="Content-Security-Policy" content="<?php echo $csp; ?>"> 

<script async defer src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.120/pdf.min.js"></script>
<script async defer src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.120/pdf.worker.min.js"></script>
<link   async defer rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.120/web/viewer.css">
<script async defer src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.120/web/pdf_viewer.js"></script>
*/ ?>
</head>

<body onload="welcomer.run();">

    <!-- (: SUDO :) -->
</body>

</html>
<?php
exit();
?>