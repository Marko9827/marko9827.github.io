<?php
$protocol = "https://";
define("SITE_HOST_DOMAIN", $_SERVER['HTTP_HOST']);
define("SITE_HOST", "$protocol$_SERVER[HTTP_HOST]");
define("API_KEY", "LMV419-516MLE-KTSJPL-AMT492-1MLZMQ");
define("API_URL", "https://api.eronelit.com/");
define("SITEURL", API_URL);

define("CDN", "https://cdn.eronelit.com/"); //SITE_HOST);//"https://cdn.eronelit.com");
define("SOUND_API", "");
define("SERVER_AJAXS", "$protocol$_SERVER[HTTP_HOST]"); //https://tree.localhost");

define("NONCE", base64_encode(substr(sha1(mt_rand()), 1, 20)));

$urlCdn = "";

$cdn_urls = "https://cdn.scaleflex.it https://fonts.gstatic.com https://cdnjs.cloudflare.com https://cdn.eronelit.com https://cdn.localhost";
$font_src = "https://cdn.scaleflex.it https://fonts.gstatic.com https://cdnjs.cloudflare.com https://cdn.eronelit.com https://cdn.localhost";


$csp = " frame-ancestors 'self';
  block-all-mixed-content;
  default-src 'self' $cdn_urls;
  script-src 'self' blog: data:  $cdn_urls 'unsafe-inline';
  style-src 'self' $cdn_urls  'unsafe-inline';
  'style-src-elem'  'self' $cdn_urls  'unsafe-inline';
  object-src 'none';
  frame-src 'self';
  child-src 'self';
  img-src 'self' $cdn_urls data: blob:  'unsafe-inline';
  font-src 'self' data: $font_src  'unsafe-inline'; 
  connect-src 'self' $cdn_urls ws: wss: ;
  manifest-src 'self';
  base-uri 'self';
  form-action 'self';
  media-src 'self' data: blob: $cdn_urls;
  prefetch-src 'self';
  worker-src 'self'; report-uri https://" . SERVER_AJAXS . "/report-csp-endpoint;";
header(
    "Content-Security-Policy: $csp"
);
$rand = time();
?>
<!DOCTYPE html>
<html id="themes_html" lang="en-us" class="no-js" data-rand="<?php echo $rand; ?>">

<head>
    <meta charset="utf-8">

    <?php
    $this->MetaTags();

    /*?>
        <meta http-equiv="Content-Security-Policy" 
        content="default-src 'self' wss: data: blob: *.google-analytics.com *.googletagmanager.com *.eronelit.com *.gstatic.com fonts.googleapis.com 'unsafe-inline'; img-src: self *.eronelit.com data: blob: 'unsafe-inline' ">
     */?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.eronelit.com" crossorigin>

    <link rel="stylesheet" href="<?php echo SITE_HOST; ?>/?svc=aet">


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
    <link href="<?php echo CDN; ?>/node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
    <link href="<?php echo CDN; ?>/node_modules/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <script nonce="<?php echo NONCE; ?>" src="<?php echo CDN; ?>/node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4445409692157494">
    </script>
    <?php /*
<style type="text/css">
include "./welcomer_f.css"; 
</style>*/
    $token = bin2hex(random_bytes(64));
    echo '<meta content="' . $token . '" name="csrf-param" />
<meta content="' . $token . '" name="csrf-token" />';
    $_SESSION['AuthV2-token'] = $token;


    ?>
    <link rel="preload" href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css"
        as="style" />
    <!-- <link rel="preload" href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/loader.js" as="script" /> -->
    <link rel="stylesheet" href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css" />




    <script nonce="<?php echo NONCE; ?>" defer
        src="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/loader.js"></script>
    <link rel="preload" href="<?php echo CDN; ?>/node_modules/monaco-editor@0.45.0/min/vs/loader.js" as="script" />

    <script nonce="<?php echo NONCE; ?>"
        src="<?php echo CDN; ?>/portfolio/node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script nonce="<?php echo NONCE; ?>"
        src="<?php echo CDN; ?>/portfolio/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <script nonce="<?php echo NONCE; ?>" async src="<?php echo CDN; ?>/node_modules/ez-plus/src/jquery.ez-plus.js"
        type="text/javascript"></script>
    <script nonce="<?php echo NONCE; ?>" type="text/javascript">
        <?php
        include ROOT . "welcomer_f.js";
        ?>
    </script>

    <?php if (!empty($_GET['tp'])) {
        if ($_GET['tp'] == "m") {
            ?>
            <style type="text/css">
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
    <style type="text/css">
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

        section[data-ui-type="editor"] div#resizer-container {
            border: none !important;
            padding: 0px;
            margin: 0px;
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
    </style>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DFNVTLRPLX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-DFNVTLRPLX');
    </script>

</head>

<body oncontextmenu="return false;" onload="welcomer.start(this);" ondragstart="return false;">
    <video style="opacity:0;" onloadedmetadata="$(this).removeAttr('style'); $(this).removeAttr('onloadedmetadata');"
        loop autoplay muted autobuffer playsinline class="wallpaperVideo">
        <source src="<?php echo SITE_HOST; ?>/?src=vdwallpper&v=<?php echo time(); ?>" type="video/mp4">
    </video>
    <p class="p-c">Do you love random videos?<br>
        - Tip: Reload page... </p>
    <div id="content_Space"></div>
    <hh_anim_start>



        <spjin>
            <p> <span class="box_shadow_h">Marko Nikolić - Portfolio <i class="far fa-copyright"></i>
                    <?php echo Date("Y"); ?>
                </span></p>
            <spj>
                <svg id="logo_backscr_img" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
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
                <br class="hide_noy"><br class="hide_noy">
                <h3>Marko Nikolić</h3>
                <div class="box_shadow_txtf  box_shadow"><span>Full stack Developer</span>
                    <sp>-</sp><span>Scientist theories/news</span>
                    <sp>-</sp><span>Writing books</span>
                    <sp>-</sp><span>Photographer</span>
                </div>
                <br class="hide_noy"><br>
                <arr_bundle>
                    <i onclick="welcomer.bundleSuggestedS(1);"
                        class="bi bi-arrow-right-circle-fill catascrollEchatTv_right catascrollEchatTv"
                        style="transform:scale(1)"></i>
                    <i onclick="welcomer.bundleSuggestedS('2');" class="bi bi-arrow-left-circle-fill catascrollEchatTv"
                        style="transform:scale(0);"></i>


                </arr_bundle>
                <div id="buttons" class="box_shadow" onscroll="welcomer.scrolj();">
                    <?php /*
<a href="javascript: welcomer.pgloader('/?pages=cv-pdf');" onmouseover="welcomer.bell_over(this);" onmouseout="welcomer.bell_out(this)" title="Look at my CV"><i class="bi bi-file-earmark-person-fill"></i><span class="href_a_span">My CV</span></a>
<a href="javascript: welcomer.pgloader('projects');" onmouseover="welcomer.bell_over(this);" onmouseout="welcomer.bell_out(this)" title="Look at my Projects"><i class="bi bi-box2-heart"></i><span class="href_a_span">My projects</span></a>
<a href="javascript: welcomer.pgloader('/?pages=visitcard')" onmouseover="welcomer.bell_over(this);" title="Visit my Visit card" onmouseout="welcomer.bell_out(this)"><i class="bi bi-file-earmark-person-fill"></i><span class="href_a_span">My Visitcard</span></a>
<a href="https://blog.eronelit.com/" target="_blank" onmouseover="welcomer.bell_over(this);" title="Blog/News &#128512" onmouseout="welcomer.bell_out(this)"><i class="bi bi-rss"></i><span class="href_a_span">Blog/News &#128512</span></a>

<a href="https://www.linkedin.com/in/marko-nikolic-49385a283" target="_blank" title="Look at my Linkedin profile (NEW)"><i class="bi bi-linkedin"></i> <span class="href_a_span"><span class="href_a_span">My Linkedin (NEW)</span></a>
<a href="https://github.com/Marko9827" target="_blank" title="Look at my Github profile"><i class="bi bi-github"></i> <span class="href_a_span">My Github</span></a>
<a href="https://www.instagram.com/nikoliccc02/" target="_blank" title="Look at my Instagram profile"><i class="bi bi-instagram"></i> <span class="href_a_span">My Instagram</span></a>
<a href="https://www.deviantart.com/marko9827" target="_blank" title="Look at my Deviantart profile"><i class="fab fa-deviantart"></i> <span class="href_a_span">My Deviantart</span></a>
<a href="https://t.me/nikoliccc02" target="_blank"><i style=" margin-bottom: -2px;
" class="fab fa-telegram"></i> <span class="href_a_span">Telegram</span></a>

*/?>
                </div>
            </spj>
        </spjin>
    </hh_anim_start>
    <div id="clavs">
        <div_header>
            <svg id="logo_backscr_img" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" class="">
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
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)"
                    transform="rotate(139.903 50 50)">
                    <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
            </svg>
            <i id="reaload_page" title="Reload" onclick="welcomer.reload_me(this);" class="bi bi-arrow-clockwise"></i>
            <svg class="Vjideo_sjpinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
            </svg><span>Loading ...</span>
            <btns_i>
                <input type="text" placeholder="Search project" data-hmm="search"
                    onkeyup="welcomer.search_Kompjiler(this);" />
                <i class="bi bi-x-lg" data-hmm="closeMe" onclick="welcomer.search_Kompjiler(this);"
                    title="Close Search"></i>

            </btns_i>
            <btns_r>
                <i class="bi bi-search F_bi_search" data-hmm="true" onclick="welcomer.search_Kompjiler(this);"
                    title="Search project..."></i>
                <i class="bi bi-filetype-pdf pdf_download" title="Download my CV as PDF"></i>
                <i class="bi bi-house pdf_page_home_btn" onclick="welcomer.blogloader('all');"
                    title="Return to Blog home page"></i>
                <i class="bi bi-share" onclick="welcomer.share();" title="Share"></i>
                <i class="bi bi-x-lg close_btnf" onclick="welcomer.Hclose(this);" title="Close"></i>
            </btns_r>

        </div_header>
        <?php /*<iframe preload="none" class="iframe_mask" title="Iframe mask" loading="lazy" 
<video  class="iframe_mask" style="opacity:0;" 
onloadedmetadata="$(this).removeAttr('style'); $(this).removeAttr('onloadedmetadata');" 
loop autoplay muted autobuffer playsinline  class="wallpaperVideo">
<source src="/?src=vdwallpper" type="video/mp4">
</video>*/?>
        <box_h></box_h>
        <grider_viewer class="gridsH grids">

        </grider_viewer>
        <?php /*
<pages>
<page>
<div class="container page_header">
<div class="row-0">
<div class="col-sm-1">
<img src="/rdlv/students.svg" alt="aefeaf" />
</div>
<div class="col-sm-2">
<h3>Echat</h3>

<p class="descriptions">My bussines, cloud gaming, Streaming social network</p>
<tags>
<tag>Social</tag>
</tags>
</div>
</div>
</div>
<headr>

</headr>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
</ol>
<div class="carousel-inner">
<div class="carousel-item active">
<img class="d-block w-100" src="/rdlv/apps/echat/page1.png" alt="First slide">
</div>
<div class="carousel-item ">
<img class="d-block w-100" src="/rdlv/apps/echat/page2.png" alt="First slide">
</div>
<div class="carousel-item ">
<img class="d-block w-100" src="/rdlv/apps/echat/page3.png" alt="First slide">
</div>
<div class="carousel-item ">
<img class="d-block w-100" src="/rdlv/apps/echat/page4.png" alt="First slide">
</div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>
</page>
</pages> */?>






        <iframe title="Ignoring me " class="Ignoring_me_iframe" src=""></iframe>



        <div_not>
            <div_panel>
                <span></span>
                <btns>
                    <btn1>Yes</btn1>
                    <btn2>Cancel</btn2>
                </btns>
            </div_panel>
        </div_not>
    </div>

    <gridder_loader>
        <img alt="loading" loading="lazy"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iVmppZGVvX3NqcGlubmVyIFZqaWRlb19zanBpbm5lcl9jZW50ZXIiIA0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogIGhlaWdodD0iNTAiDQogIHdpZHRoPSI1MCINCg0Kdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iDQogICAgd2lkdGg6IDYwcHg7DQogICAgaGVpZ2h0OiA2MHB4Ow0KICAgICANCiI+IA0KPHN0eWxlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHlwZT0idGV4dC9jc3MiPg0KLlZqaWRlb19zanBpbm5lciB7DQogICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7DQogICAgdHJhbnNpdGlvbjogLjNzOw0KICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTsNCiAgICB6LWluZGV4OiAyMzMzMzMzMzsNCiAgICBwb3NpdGlvbjogZml4ZWQ7DQogICAgdG9wOiAzNXB4Ow0KICAgIGxlZnQ6IDM1cHg7DQogICAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7DQogICAgd2lkdGg6IDUwcHg7DQogICAgaGVpZ2h0OiA1MHB4Ow0KICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQNCn0NCg0KLlZqaWRlb19zanBpbm5lciAucGF0aCB7DQogICAgc3Ryb2tlOiB3aGl0ZTsNCiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7DQogICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpKSAhaW1wb3J0YW50Ow0KICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXcgMCAwIDUxMiA1MTIgIWltcG9ydGFudA0KfQ0KDQogDQoNCkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUgew0KICAgIDEwMCUgew0KICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpDQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIHJvdGF0ZSB7DQogICAgMTAwJSB7DQogICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykNCiAgICB9DQp9DQoNCkAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHsNCiAgICAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDANCiAgICB9DQoNCiAgICA1MCUgew0KICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1DQogICAgfQ0KDQogICAgMTAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0DQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIGRhc2ggew0KICAgIDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMA0KICAgIH0NCg0KICAgIDUwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzUNCiAgICB9DQoNCiAgICAxMDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQNCiAgICB9DQp9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0icGF0aCIgY3g9IjI1IiBjeT0iMjUiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjUiPjwvY2lyY2xlPiA8L3N2Zz4="
            height="55" width="55">
    </gridder_loader>
    <div class="contanct_frm">
        <?php /* <iframe preload="none" class="iframe_mask" title="Iframe mask" loading="lazy" src="/?mnps=image-mask"></iframe>
<video  class="iframe_mask" style="opacity:0;" 
onloadedmetadata="$(this).removeAttr('style'); $(this).removeAttr('onloadedmetadata');" 
loop autoplay muted autobuffer playsinline  class="wallpaperVideo">
<source src="/?src=vdwallpper" type="video/mp4">
</video> */?>
        <div class="h5_div"><svg id="logo_backscr_img" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
                class="">
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
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)"
                    transform="rotate(139.903 50 50)">
                    <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
            </svg><i class="bi bi-inbox"></i> Contact me<i class="closec bi bi-x-lg"></i></div>

        <form autocomplete="off">
            <p class="msg"></p>
            <label for="fname">Full Name</label>
            <i class="input_icon bi bi-quote"></i>
            <input type="text" id="fname" name="firstname" placeholder="Your name..">

            <label for="lname">Your Email</label>
            <i class="input_icon bi bi-envelope"></i>
            <input type="email" id="lname" name="email" placeholder="Your Email..">

            <label for="subject" class="message_lenght">Message </label>
            <textarea id="subject" name="subject" placeholder="Your message..." style="height:200px"></textarea>
            <label for="norobot">Solve math problem. I'm not a robot</label>
            <input type="number" id="norobot" name="norobot" placeholder="">

        </form>
        <fotter>

            <button type="button" id="sendbtn">Send message</button>
        </fotter>
    </div>

    <canvas id="canvas">Your browser doesn't support canvas</canvas>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
        style=" filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)); -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)); enable-background: new 0 0 512 512 !important;">
        <defs>
            <filter id="shadowed-goo">

                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo" />
                <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                    result="shadow" />
                <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                <feBlend in2="shadow" in="goo" result="goo" />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo" />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
        </defs>
    </svg>
    <div class="cursor" style="opacity: 0;"></div>
    <info_box>
        <info_msg onclick="$(this).removeClass('info_box_active');">
            <dv_h></dv_h>
            <info_div>
                <img src="/favicon.svg" alt="for Testing" title="aefaef" />
                <h4></h4>
            </info_div>
            <p></p>

        </info_msg>
    </info_box>
    <?php /*<ul id="btns_bottom">

<li><i class="fas fa-inbox"></i> <span>Примљене</span></li>
<li><i class="fas fa-inbox"></i> <span>Примљене</span></li>
<li><i class="fas fa-inbox"></i> <span>Примљене</span></li>
<li><i class="fas fa-inbox"></i> <span>Примљене</span></li>

</ul>
*/?>
    <p-c><i class="bi bi-pci-card"></i> 0FPS</p-c>

    <section data-ui-type="slider" class="hidden_omega">
        <arr_bundle>
            <i class="bi bi-arrow-right-circle-fill catascrollEchatTv_right catascrollEchatTv"
                style="transform:scale(1)" onclick="welcomer.eronelit_gallery.bundleSuggestedS(1);"></i>
            <i class="bi bi-arrow-left-circle-fill catascrollEchatTv"
                onclick="welcomer.eronelit_gallery.bundleSuggestedS(-1);" style="transform:scale(1)"></i>

        </arr_bundle>
        <span id="helper_id_helper" class="dont_removme"><i style="padding-right:2px;"
                class="dont_removme bi bi-info-square"></i> For close click ( X ) button.</span>
        <i onclick="welcomer.closeMeIamSad()" class="bi bi-x-lg zoomer_exit dont_removme"></i>
        <div-echatv onscroll="welcomer.eronelit_gallery.scroll_event();">

        </div-echatv>
    </section>
    <section data-ui-type="editor" class="hidden_omega">
        <div_header data-url="editor">
            <svg id="logo_backscr_img" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" class="">
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
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)"
                    transform="rotate(139.903 50 50)">
                    <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s"
                        repeatCount="indefinite"></animateTransform>
                </rect>
            </svg>
            <span>Marko Nikolić - Portfolio > Editor</span>
            <span class="editor_t">> Editor</span>

            <btns_i>
                <input type="text" placeholder="Search project" data-hmm="search"
                    onkeyup="welcomer.search_Kompjiler(this);" />
                <i class="bi bi-x-lg" data-hmm="closeMe" onclick="welcomer.search_Kompjiler(this);"
                    title="Close Search"></i>

            </btns_i>
            <btns_r>
                <i class="bi bi-arrow-left-short editor_btns undo"></i>
                <i class="bi bi-arrow-right-short editor_btns redo  " title="redo" data-title="redo"></i> <i
                    class="bi bi-file-earmark-arrow-down celvon" onclick="welcomer.editor.d();"
                    data-title="Download as html file"></i>

                <!-- <i class="bi bi-house pdf_page_home_btn" onclick="welcomer.blogloader('all');"></i> -->
                <i class="bi bi-question-lg" onclick="welcomer.editor.load_menu_bar(this);"></i>

                <i class="bi bi-share" onclick="welcomer.share();" title="Share"></i>
                <i class="bi bi-x-lg close_btnf" onclick="welcomer.Hclose(this);" title="Close"></i>
            </btns_r>

        </div_header>
        <editor-history-rp>
         
        </editor-history-rp>
        <editor-wrapper>
        </editor-wrapper>
    </section>


</body>

</html>
<?php


exit();
/*
<div class="embed_posts"><p>Povezan post: </p><iframe src="/?blog=24_sept_2023_12_01" height="825" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe></div>
*/

?>