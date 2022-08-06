<?php
$protocol = "https://";
define("SITE_HOST_DOMAIN", $_SERVER['HTTP_HOST']);
define("SITE_HOST", "$protocol$_SERVER[HTTP_HOST]");
define("API_KEY", "LMV419-516MLE-KTSJPL-AMT492-1MLZMQ");
define("API_URL", "https://api.eronelit.com/");
define("SITEURL", API_URL);
define("CDN",  SITE_HOST); //"https://cdn.eronelit.com/");//SITE_HOST);//"https://cdn.eronelit.com");
define("SOUND_API", "");
define("SERVER_AJAXS", "$protocol$_SERVER[HTTP_HOST]"); //https://tree.localhost");

define("NONCE", base64_encode(substr(sha1(mt_rand()), 1, 20)));

$cdn_urls = "https://cdnjs.cloudflare.com https://cdn.eronelit.com https://cdn.localhost";
$font_src = "https://cdn.scaleflex.it https://fonts.gstatic.com https://cdn.eronelit.com https://cdn.localhost";



header(
    "Content-Security-Policy: 
  frame-ancestors 'self';
  block-all-mixed-content;
  default-src 'self' $cdn_urls;
  script-src 'self'  $cdn_urls;
  style-src 'self' $cdn_urls 'report-sample' 'unsafe-inline';
  object-src 'none';
  frame-src 'self';
  child-src 'self';
  img-src 'self' $cdn_urls;
  font-src 'self' data: $font_src; 
  connect-src 'self' $cdn_urls ws: wss: ;
  manifest-src 'self';
  base-uri 'self';
  form-action 'self';
  media-src 'self' data: blob: $cdn_urls;
  prefetch-src 'self';
  worker-src 'self'; report-uri https://" . SERVER_AJAXS . "/report-csp-endpoint;"
);
$rand = time();
?>
<!DOCTYPE html>
<html id="themes_html" lang="en-us" class="no-js">

<head>
    <meta charset="utf-8">
    <title>Marko Nikolić - Portfolio</title>
    <link rel="icon" href="/?marko-nikolic-portfolio-source=image-favicon?<?php echo time(); ?>" type="image/ico" />
    <meta name="description" content="This website for my PortFolio. ">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="author" content="Marko Nikolic">
    <meta name="theme-color" content="#333">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.eronelit.com" crossorigin>

    <link rel="preload" href="https://cdn.eronelit.com/node_modules/bootstrap-icons/font/bootstrap-icons.css" as="style">
    <link rel="preload" href="https://cdn.eronelit.com/node_modules/jquery/dist/jquery.min.js" as="script">

    <link href=" https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://cdn.eronelit.com/node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.eronelit.com/node_modules/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <script src="https://cdn.eronelit.com/node_modules/jquery/dist/jquery.min.js"></script>

    <meta property="og:type" content="website" />
    <meta name="author" content="Marko Nikolic">
    <link rel="manifest" href="/manifest.webmanifest">

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@markoni62595164" />
    <meta name="twitter:creator" content="@markoni62595164" />
    <meta property="og:url" content="<?php echo SITE_HOST; ?>" />
    <meta property="og:title" content="Marko Nikolić - Portfolio" />
    <meta property="og:description" content="This website for my PortFolio." />
    <meta property="og:image" itemprop="image" content="<?php echo SITE_HOST; ?>/README_files/readme_part1.png?<?php echo time(); ?>" />
    <meta property="og:image" itemprop="image" content="<?php echo SITE_HOST; ?>/README_files/readme_part1.png?<?php echo time(); ?>" />
    <meta property="og:image:url" itemprop="image" content="<?php echo SITE_HOST; ?>/README_files/readme_part1.png?<?php echo time(); ?>" />
    <meta property="og:image:secure_url" content="<?php echo SITE_HOST; ?>/README_files/readme_part1.png?<?php echo time(); ?>" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1024">
    <meta property="og:image:height" content="1024">
    <meta property="og:locale" content="en_GB" />

    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-decoration: none;
            font-family: "Poppins", sans-serif;
            user-select: none;
            outline: none !important;
            overflow: hidden;
            cursor: none !important;
        }

        :root {
            --primary: #ffff;
            --btn-disable: #fff;
            --seo-color: #fff;
            --primary_light: #ffffff4f;
            --textshadow_media: 0px 0px 0px var(--white), 3px 3px 5px #00000047;
            --white: #333;
            --hard_white: #fff;
            --red: #b90808;
            --section-bg: #333;
            --green: #2e7d32;
            --header-a: #e6e6e6;
            --product-background: linear-gradient(45deg, #1b5e20, #10bf19);
            --ads-background: linear-gradient(45deg, rgb(148 31 148), #c55e05);
            --event-background: linear-gradient(45deg, rgb(148 31 148), #2196f3);
            --job-background: linear-gradient(45deg, rgb(148 31 148), #3f51b5);
            --black-trasparent-color: rgba(0, 0, 0, 0.639);
            --grid-image: url(/?url=source&sourcelogin=grid.svg);
            --shield-image: url(/?url=source&sourcelogin=shield.svg);
            --stars-25: #b32020;
            --stars-40: #FFD700;
            --stars-60: #d56617;
            --stars-75: var(--green);
        }

        hh_anim_start {

            position: fixed;
            z-index: 3;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            background: white !important;
            margin: 0px !important;
            padding: 0px !important;
            display: flex;
            /* opacity: 0; */

        }

        hh_anim_start #logo {
            width: 150px;
            height: 150px;
            margin: auto;
            display: block;
            /* opacity: 0; */
            transform: scale(0);
            /* filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)) !important; */
            /* -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)) !important; */
        }

        hh_anim_start #logo_backscr {
            position: fixed;
            transform: unset;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
        }



        hh_anim_start spjin {
            display: flex;
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            text-align: center;

        }

        hh_anim_start spjin img,
        hh_anim_start spjin #logo_backscr_img {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
            enable-background: new 0 0 512 512 !important;
            border-radius: 440px;
            background: var(--primary_light);
            padding: 8px;
            width: 80px;
            height: 80px;
            border: 3px solid var(--black-trasparent-color);
            margin-bottom: 25px;
            transition: .3s;

        }

        .activeBell {
            border-color: var(--primary_light) !important;
            padding: 0px !important;
        }

        hh_anim_start #logo {
            transition: .3s;
        }

        hh_anim_start spjin {
            display: grid;
            margin: auto;

        }

        hh_anim_start spj {
            display: block;
            margin: auto;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
            enable-background: new 0 0 512 512 !important;
        }

        hh_anim_start #logo {
            width: 120px;
            height: 120px;
            transform: translateY(-20px);
        }

        hh_anim_start .Vjideo_sjpinner {

            display: block;
            margin: auto;
            position: unset;

        }

        .spjinActive .Vjideo_sjpinner {
            height: 0px;
            transform: scale(0) !important;
        }

        .spjinActive #logo {
            transform: unset !important;
        }

        hh_anim_start .Vjideo_sjpinner .path {
            filter: none !important;
            -webkit-filter: none !important;
        }


        hh_anim_start spjin p {
            position: fixed;
            display: grid;
            left: 0px;
            width: 100% !important;
            margin: auto;
            bottom: 30px;
            text-align: center;
            color: var(--black-trasparent-color) !important;
            position: fixed;
            left: 0px;
            width: 100%;
            z-index: 3333;
            opacity: 1;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
            enable-background: new 0 0 512 512 !important;
        }

        hh_anim_start .Vjideo_sjpinner .path {
            stroke: var(--black-trasparent-color) !important;
        }

        hh_anim_start .Vjideo_sjpinner {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
            enable-background: new 0 0 512 512 !important;
        }

        .box_shadow {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
        }

        .box_shadow_h {
            font-weight: 500;
            font-size: 13px;
        }

        #buttons {
            display: inline-flex;
            margin-top: 15px;
        }

        #buttons a {
            padding: 4px 10px;
            border: 2px solid var(--white);
            color: var(--white);
            border-radius: 4px;
            margin: 0px 10px;
            transition: .3s;
            font-size: 15px;
        }

        #buttons a:hover {
            background: vaR(--white);
            color: var(--primary);
        }

        #clavs {
            position: absolute;
            display: grid;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 4;
            background: var(--white);
            transition: .3s;
            opacity: 0;


        }

        #clavs iframe {
            position: absolute;
            top: 50px;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: -webkit-fill-available;
            border: none;
            background: var(--primary);
        }

        svg.Vjideo_sjpinner {
            position: absolute;
            top: 10px;
            color: var(--primary);
            left: 0px;
            z-index: 3;
            margin: 0px;
            width: 30px;
            height: 30px;
            top: 10px;
            left: 10px;
        }

        .Vjideo_sjpinner {
            -webkit-animation: vjideo_sjpinner_rotate 2s linear infinite;
            transition: .3s;
            animation: vjideo_sjpinner_rotate 2s linear infinite;
            z-index: 23333333;
            position: fixed;
            top: 35px;
            left: 35px;
            margin: -25px 0 0 -25px;
            width: 50px;
            height: 50px;
            pointer-events: none !important
        }

        .Vjideo_sjpinner .path {
            stroke: var(--primary);
            stroke-linecap: round;
            -webkit-animation: vjideo_sjpinner_dash 1.5s ease-in-out infinite;
            animation: vjideo_sjpinner_dash 1.5s ease-in-out infinite;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)) !important;
            enable-background: new 0 0 512 512 !important
        }

        @-webkit-keyframes vjideo_sjpinner_rotate {
            100% {
                transform: rotate(360deg)
            }
        }

        @keyframes vjideo_sjpinner_rotate {
            100% {
                transform: rotate(360deg)
            }
        }

        @-webkit-keyframes vjideo_sjpinner_dash {
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

        @keyframes vjideo_sjpinner_dash {
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

        div_header {

            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 51px;
            background: var(--white);
            display: inline-flex;
            box-shadow: 0 0px 8px 0 rgb(0 0 0 / 20%), 0 6px 70px 0 rgb(0 0 0 / 10%);
            z-index: 33;
        }

        div_header span {

            position: absolute;
            left: 50px;
            top: 12px;
            color: var(--primary);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            right: 80px !important;

        }

        i#reaload_page {
            position: absolute;
            left: 13px;
            color: var(--primary);
            font-size: 24px;
            top: 8px;
        }

        .show {
            opacity: 1 !important;
            pointer-events: unset !important;
        }


        .hide {
            opacity: 0 !important;
            pointer-events: none !important;
        }

        btns_r {
            display: inline-flex;
            color: var(--primary);
            font-size: 24px;
            position: absolute;
            top: 7px;
            right: 13px;
        }

        btns_r i {
            padding: 0px 10px;
        }

        btns_r i:last-child {
            padding: 0px;
        }

        div#clavs #logo_backscr_img {
            border: 2px solid var(--primary);
            width: 36px;
            height: 36px;
            border-radius: 50px;
            padding: 4px;
            position: absolute;
            top: 7px;
            left: 7px;

        }

        div#clavs svg,
        div#clavs i,
        div#clavs span {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
            enable-background: new 0 0 512 512 !important;
            transition: .3s !important;
        }

        div_header #logo_backscr_img {
            opacity: 0;
            pointer-events: none !important;
        }

        .ld_completeld_complete #logo_backscr_img {
            opacity: 1;
        }

        .ld_completeld_complete #reaload_page {
            left: 50px;
        }

        .ld_completeld_complete span {
            left: 80px;
        }

        .href_a_span {
            display: none;
        }

        @media only screen and (max-width: 600px) {

            #buttons {
                display: grid;
                margin: 0px;
            }

            #buttons a {
                margin: 10px auto;
                display: inline-flex;
            }

            .href_a_span {
                display: block;
            }
        }

        .href_a_span {
            margin-left: 5px;
        }

        #buttons a i {
            width: 25px;
        }

        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #f5f5f5;
            pointer-events: none;
            mix-blend-mode: difference;
            z-index: 1000000000;
            -webkit-transition: -webkit-transform 0.2s !important;
            transition: -webkit-transform 0.2s !important;
            -o-transition: transform 0.2s !important;
            transition: transform 0.2s !important;
            transition: transform 0.2s, -webkit-transform 0.2s !important;
            -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.1)
        }

        .cursor_pc_show {
            display: block !important
        }

        .cursor i {
            color: white;
        }
    </style>
    <script nonce="<?php echo NONCE; ?>" src="/?marko-nikolic-portfolio-source=welcomer-pl" type="text/javascript"></script>

</head>

<body oncontextmenu="return false;" onload="start(this);">

    <hh_anim_start>



        <spjin>
            <p> <span class="box_shadow_h">Marko Nikolić - Portfolio <i class="far fa-copyright"></i> <?php echo Date("Y"); ?></span></p>
            <spj>
                <svg id="logo_backscr_img" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
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
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
                    </rect>
                    <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
                        <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
                    </rect>
                    <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
                        <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
                    </rect>
                </svg>
                <br><br>
                <div class="  box_shadow">New look under construction. <br>Coming Soon...</div>
                <br><br>
                <div id="buttons" class="box_shadow">
                    <a href="javascript:return false;"  onclick="pgloader('/?pages=cv-pdf');" onmouseover="bell_over(this);" onmouseout="bell_out(this)" title="Look at my CV"><i class="bi bi-file-earmark-person-fill"></i> My CV</a>
                    <a href="https://www.linkedin.com/in/markonikolic98/" target="_blank" title="Look at my Linkedin profile"><i class="bi bi-linkedin"></i> <span class="href_a_span">My Linkedin</a>
                    <a href="https://github.com/Marko9827" target="_blank" title="Look at my Github profile"><i class="bi bi-github"></i> <span class="href_a_span">My Github</span></a>
                    <a href="javascript:return false;" onclick="pgloader('/?pages=visitcard')" onmouseover="bell_over(this);" title="Visit my Visit card" onmouseout="bell_out(this)"><i class="bi bi-file-earmark-person-fill"></i> My Visitcard </a>

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
                <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
                    <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
                    <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
                    <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
                </rect>
            </svg>
            <i id="reaload_page" title="Reload" onclick="reload_me(this);" class="bi bi-arrow-clockwise"></i>
            <svg class="Vjideo_sjpinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
            </svg><span>Loading ...</span>
            <btns_r>

                <i class="bi bi-share" onclick="share();" title="Share"></i>
                <i class="bi bi-x-lg" onclick="Hclose(this);" title="Close"></i>
            </btns_r>

        </div_header>
        <iframe title="Ignoring me " src="" onload="pgloader('yes');" onmousemove="cursor_hide(this);" onmouseout="cursor_hide(this)"></iframe>
    </div>
    <div class="cursor" style="opacity: 0;"></div>


</body>

</html>