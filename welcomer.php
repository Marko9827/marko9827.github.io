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

ob_start(function ($b) {
    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
});

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
        <?php include "./welcomer_f.css"; ?>
    </style>
    <script nonce="<?php echo NONCE; ?>" src="/?marko-nikolic-portfolio-source=welcomer-pl" type="text/javascript"></script>

</head>

<body oncontextmenu="return false;" onload="welcomer.start(this);">

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
                    <a href="javascript: welcomer.pgloader('/?pages=cv-pdf');" onmouseover="welcomer.bell_over(this);" onmouseout="welcomer.bell_out(this)" title="Look at my CV"><i class="bi bi-file-earmark-person-fill"></i> My CV</a>
                    <a href="https://www.linkedin.com/in/markonikolic98/" target="_blank" title="Look at my Linkedin profile"><i class="bi bi-linkedin"></i> <span class="href_a_span">My Linkedin</a>
                    <a href="https://github.com/Marko9827" target="_blank" title="Look at my Github profile"><i class="bi bi-github"></i> <span class="href_a_span">My Github</span></a>
                    <a href="javascript: welcomer.pgloader('/?pages=visitcard')" onmouseover="welcomer.bell_over(this);" title="Visit my Visit card" onmouseout="welcomer.bell_out(this)"><i class="bi bi-file-earmark-person-fill"></i> My Visitcard </a>
                    <!-- <a onmouseover="bell_over(this);" onmouseout="bell_out(this)" title="Look at my Projects"><i class="bi bi-box2-heart"></i> My projects</a> -->

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
            <i id="reaload_page" title="Reload" onclick="welcomer.reload_me(this);" class="bi bi-arrow-clockwise"></i>
            <svg class="Vjideo_sjpinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
            </svg><span>Loading ...</span>
            <btns_r>

                <i class="bi bi-share" onclick="welcomer.share();" title="Share"></i>
                <i class="bi bi-x-lg" onclick="welcomer.Hclose(this);" title="Close"></i>
            </btns_r>

        </div_header>
        <box_h></box_h>
        <grider_viewer class="gridsH grids">
            
        </grider_viewer>
        <iframe title="Ignoring me " src="" onload="welcomer.pgloader('yes');" onmousemove="welcomer.cursor_hide(this);" onmouseout="welcomer.cursor_hide(this)"></iframe>
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
    <div class="cursor" style="opacity: 0;"></div>


</body>

</html>