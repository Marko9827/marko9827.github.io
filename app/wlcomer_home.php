<?php
session_start();
$protocol = "https://";
define("source_URL", (string) "$_SERVER[HTTP_HOST]");
define("SITE_HOST_DOMAIN", source_URL);
define("SITE_HOST", (string) $protocol . source_URL);
define("API_KEY", "LMV419-516MLE-KTSJPL-AMT492-1MLZMQ");
define("API_URL", "https://api.markonikolic98.com/");
define("SITEURL", API_URL);
define("CDN", "https://cdn.markonikolic98.com/"); //SITE_HOST);//"https://cdn.eronelit.com");
define("SOUND_API", "");
define("SERVER_AJAXS", (string) $protocol . source_URL); //https://tree.localhost");
function generate_nonce()
{
    return base64_encode("$_SERVER[HTTP_HOST]");
    // return bin2hex(random_bytes(16));
}
$_SESSION["Bearer_token_temp"] = base64_encode("$_SERVER[HTTP_HOST]");

//generate_nonce();
define("NONCE", "$_SESSION[Bearer_token_temp]");



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
$_SESSION['Bearer_token_temp'] = bin2hex(random_bytes(30 / 2));


if (substr_count($_SERVER["HTTP_ACCEPT_ENCODING"], "gzip")) {
    ob_start("ob_gzhandler");
} else {
    ob_start();
}


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
        "https://" . source_URL . "/jsjquery",
        "https://" . source_URL . "/feedjson",
        "https://" . source_URL . "/mainc",
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

$cdn_urls = createScriptElements_array();

//"api.eronelit.com   cdn.eronelit.com api.eronelit.com https:";
$fonts = " fonts.gstatic.com   api.eronelit.com cdn.markonikolic98.com api.markonikolic98.com cdn.eronelit.com api.eronelit.com fonts.googleapis.com";
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
function ob_f($b)
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
$csp = (string) "
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
if ($_SERVER['REQUEST_METHOD'] !== 'GET' || isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {

    header('HTTP/1.1 405 Method Not Allowed');
    header('Allow: GET');
    echo 'Method Not Allowed';
    exit;
}
// if(empty($_GET['build_i'])){
// ob_start();
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
ob_clean();
header("Content-Type: text/html; charset=UTF-8");
?>
<!DOCTYPE html>
<html id="themes_html" lang="en" data-location="<?= "GM213-3LOC4SE24"; ?>" class="no-js" prefix="og: https://ogp.me/ns#"
    data-rand="<?php echo $rand; ?>">

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
    <link rel='dns-prefetch' href='https://api.markonikolic98.com' />
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.eronelit.com" crossorigin>
    <link rel='preconnect' href='https://cdn.markonikolic98.com' />
    <link rel='preconnect' href='https://api.markonikolic98.com' />
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <meta name="google" content="notranslate">
    <meta name="referrer" content="origin">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="msapplication-tap-highlight" content="no">
    <!-- #region -->
    <link rel="canonical" href="<?php echo "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>">
    <script src="<?php echo $POLIFY; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script src="<?php echo "https://" . source_URL . "/feedjson"; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script src="<?php echo "https://" . source_URL . "/mainc"; ?>" nonce="<?php echo $nonce; ?>"></script>
    <script async src="<?php echo "https://" . source_URL . "/main"; ?>" nonce="<?php echo $nonce; ?>"
        type="text/javascript" charset="UTF-8">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs/loader.js"></script>

    <meta http-equiv="Content-Security-Policy" content="<?php echo $csp; ?>">

    <?php
    /*
    if (!empty($_GET['p']) && $_GET['p'] == "editor") { ?>
        <script defer src="https://unpkg.com/monaco-editor@latest/min/vs/loader.js" nonce="<?php echo $nonce; ?>"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.7/require.min.js"
            integrity="sha512-J5ha2LF4Le+PBQnI5+xAVJDR+sZG9uSgroy4n/A6TLjNkvYQbqZA8WHZdaOvJ0HiKkBC9Frmvs10rFDSHKmveQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <?php } /*<script    nonce="<?php echo $nonce_h; ?>"  crossorigin="anonymous" src="https://cdn.eronelit.com/node_modules/jquery3.6.0/dist/jquery.min.js"></script>

<?php
*/
    #    createLinkElements($data['preloadLinks']);
    createLinkElements($data['allLinks']);
    createScriptElements($data['scripts']);


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
        <script nonce="<?php echo $script_nonce; ?>"  src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
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
*/
    ?>

    <link rel="preload" href="/mainss" as="style" />
    <link rel="stylesheet" href="/mainss">


    <link crossorigin rel="preload"
        href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css" as="style" />
    <link crossorigin rel="preload" defer href="https://unpkg.com/monaco-editor@0.45.0/min/vs/loader.js" as="script" />

    <link async defer rel="stylesheet" crossorigin
        href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css">

    <script crossorigin type="text/javascript" defer
        src="https://unpkg.com/monaco-editor@0.45.0/min/vs/loader.js"></script>

    
</head>

<body>


</body>

</html>
<?php
/*
$b = ob_get_clean();
$build_index = "$_SERVER[DOCUMENT_ROOT]/build/index.html";
if(file_exists($build_index)){
    unlink($build_index);
}
file_put_contents($build_index,ob_f($b));
        } else {
            header("Content-Type: text/html charset=utf-8");
            @readfile("$_SERVER[DOCUMENT_ROOT]/build/index.html");
            exit();
        }
exit();
*/ ?>