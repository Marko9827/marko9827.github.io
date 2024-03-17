<?php
header('X-Frame-Options: SAMEORIGIN');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

define("SITE_HOST", "https://$_SERVER[HTTP_HOST]/");



$actual_link = "https://" . $_SERVER['HTTP_HOST'];
$protocol = "https://";
define("SITE_HOST_DOMAIN", $_SERVER['HTTP_HOST']);
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

?>
<!DOCTYPE html>
<html>

<head>
    <title>Marko Nikolić - Portfolio > CV</title>
    <meta charset="utf-8">

    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <link rel="icon" href="<?php echo SITE_HOST; ?>/?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />
    <link rel="stylesheet" href="<?php echo SITE_HOST; ?>/?mnps=stylesheet-fai?<?php echo time(); ?>" />
    <script type="text/javascript" src="<?php echo SITE_HOST; ?>/?mnps=stylesheet-js-fai?<?php echo time(); ?>"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable='no'">
    <link rel="stylesheet" href="<?php echo SITE_HOST; ?>/?mnps=pdf-cs1?<?php echo time(); ?>" />

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

    <?php /*  
 <script type="text/javascript" src="<?php echo SITE_HOST;?>/?pages=vc-js-5"></script>
    <script type="text/javascript" src="<?php echo SITE_HOST;?>/?pages=vc-js-4"></script>
    <script src="<?php echo SITE_HOST;?>/?mnps=javascript-nfo-13"></script>
    */ ?>
    <script type="text/javascript" src="<?php echo SITE_HOST; ?>/?mnps=js-feaie?<?php echo time(); ?>"></script>
    <style type="text/css">  div#left_coll {
    width: 280px;
       min-width: 280px;
    max-width: 280px;
   
}</style>
<script type="text/javascript">
    

    onload_img = async function (d) {

const img = new Image();
img.src = d.getAttribute("data-load-src");
img.onload = async function () {
    const H = URL.createObjectURL(await fetch(img.src).then(function(v){ return v.blob() }));
    d.src = H;
    d.removeAttribute("style");

    d.removeAttribute("onload");
    
}
}

</script>
</head>

<body ondragstart="return false;" onselect="return false;" id="body">
    <div id="meta_div">
        <div id="div_box_center">
            <div id="box_side" class="box3 box_div_id">
                <h1 class="box1"><a id="color1">Marko</a> Nikolić</h1>
                <span class="separator"></span>
                <p class="font f1 font_btmna">IT Developer from Serbia/Belgrade </p>

                <div id="left_coll">
                    <div id="round_top">
                        <div id="ff"></div>
                        <div id="ff2"></div>
                    </div>
                    <img id="cv_profile_img"     src="<?php 
                    
                    ob_start();
                  
                    $response = ob_get_clean();
                    echo   SITE_HOST; ?>?mnps=image-3140;
                    
                     ?>"  />
                    <p class="main_label">Contact</p>
                    <br>
                    <span class="separator seperator_white"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code"><i class="fas fa-heartbeat"></i><span>Born : 16/03/1998</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-map-marker-alt"></i><span>Serbia/Belgrade/Surčin</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-globe"></i><span>portfolio.eronelit.com</span></p>
                        <p id="info_email" class="info_email_code"><i class="fab fa-linkedin"></i><span>linkedin.com/in/markonikolic98</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-at"></i><span>contact&#64;markonikolic98.com</span></p>
                        <p id="info_email" class="info_email_code"><i class="fab fa-github"></i><span onclick="open.window('https:\/\/github.com/marko9827');">github.com/marko9827</span></p>
                        <p></p>
                    </div>
                    <p class="main_label ">Language</p>
                    <br>
                    <span class="separator seperator_white"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code"><i class="fas fa-language"></i><span>Serbian <br> Mother tongue</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-language"></i><span>English <br> Excellent both written & oral</span></p>
                    </div>
                    <div id="round_bottom">
                        <div id="ff"></div>
                        <div id="ff2"></div>
                    </div>
                </div>

                <div id="right_coll">
                    <p class="main_label main_label_and_icon"><i class="fas fa-graduation-cap"></i> Education</p>
                    <span class="separator"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code"><i class="fas fa-graduation-cap"></i><span>Singidunum University<br>Information Technology and Computing<br>- Student<?php //2017 
                                                                                                                                                                                        ?></span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-award"></i><span>Tehnicka Skola Novi Beograd<br>Modeling, Virtual Environments and Simulation<br><?php //2013 - 2017 
                                                                                                                                                                                        ?></span></p>
                        <p></p>
                    </div>
                    <p class="main_label main_label_and_icon main_label_and_icon_2"><i class="fas fa-puzzle-piece"></i>Personal Projects</p>
                    <br>
                    <span class="separator"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Eronelit Q </span><br> Web engine [ https://search.eronelit.com ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Full PC info </span> <br> All information PC [ https://blog.eronelit.com/2016/11/eronel-full-pc-information.html ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Interaktivmarket </span> <br> Bussiness social network [ https://interaktivmarket.com ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Echat</span> <br> Bussiness/Stream/Gaming network<br>[ https://echat.eronelit.com/ ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Eronelit Web Q</span> <br> Web browser</span><br><br>
                            <span onclick="parent.welcomer.pgloader('projects');" id="ffaefaer_F" title="Open my projects">AND MORE</span>
                        </p>



                    </div>

                </div>
                <div id="skills_div">
                    <p class="main_label main_label_and_icon main_label_and_icon_2 ksills_ff">Other important information</p>
                    <br>

                    <span class="separator"></span>
                    <div id="cont1">
                        <div id="sckills">
                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-code"></i> Programming :</span> <br>
                            <p class="icon_of_text">C#, javascript, HTML5, css3, asp.net,PHP, jQuery UI,VB, C++, SQL,...</p>
                            </p>


                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-cogs"></i> Game engines :</span> <br>
                            <p class="icon_of_text"> Unreal Engine, Unity, CryEngine, in-house game engine (based on C++, OpenGL, Bullet physics...)</p>
                            </p>

                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-address-book-libary"></i> Libraries :</span> <br>
                            <p class="icon_of_text"> Bullet and PhysX physics, OpenCV, QT, SDL2, Assimp, OpenGL legacy..</p>
                            </p>

                            <div id="skkkaeri">
                                <div id="round_top">
                                    <div id="ff"></div>
                                    <div id="ff2"></div>
                                </div>
                                <p class="skill_row_coll">
                                    <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-microscope"></i> Science : </span> <br>
                                <p class="icon_of_text"> Quantum (Quantum Theory, Wromhole,space,gravitational
                                    physics,robotic solutions in medicine, space, ...), Space explore,exploring the entire history of the
                                    planet Earth,... </p>
                                </p>
                                <div id="round_bottom">
                                    <div id="ff"></div>
                                    <div id="ff2"></div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511.99975 511" style="position: absolute; width: 69px; margin-top: -82px; margin-left: 551px; transform: rotate(-135deg); ">
                                    <path d="m471.597656 348.3125c-.824218-4.679688-3.011718-9.164062-6.628906-12.78125l-192-192c-9.375-9.375-24.5625-9.375-33.9375 0-6.578125 6.574219-8.4375 15.992188-5.785156 24.28125l-64.277344-64.28125c-9.375-9.375-24.5625-9.375-33.9375 0-9.375 9.371094-9.375 24.566406 0 33.9375l32.277344 32.28125c-8.285156-2.65625-17.699219-.796875-24.277344 5.78125-9.375 9.371094-9.375 24.566406 0 33.9375l56.277344 56.28125c-8.285156-2.65625-17.699219-.796875-24.277344 5.78125-9.375 9.371094-9.375 24.566406 0 33.9375l160 160c3.617188 3.617188 8.101562 5.804688 12.78125 6.632812 16.136719 19.765626 40.679688 32.398438 68.1875 32.398438 48.601562 0 88-39.398438 88-88 0-27.507812-12.636719-52.050781-32.402344-68.1875zm0 0" fill="#dbeaff"></path>
                                    <path d="m430.589844 354.140625c-9.683594-2.175781-19.070313-2.113281-27.792969-.257813-15.285156 3.25-31.121094-2.476562-42.171875-13.527343l-79.003906-79.003907c-5.171875-5.171874-13.5-6.425781-19.433594-2.148437-7.566406 5.453125-8.191406 16.058594-1.882812 22.367187l79.558593 79.5625c11.046875 11.046876 16.769531 26.878907 13.519531 42.160157-1.855468 8.722656-1.917968 18.105469.257813 27.789062 5.476563 24.386719 25.527344 43.71875 50.101563 48.277344 44.882812 8.324219 83.441406-30.234375 75.117187-75.117187-4.554687-24.570313-23.886719-44.625-48.269531-50.101563zm0 0" fill="#edf4ff"></path>
                                    <path d="m416 512.453125c-24.585938 0-49.164062-9.355469-67.882812-28.070313l-204-204c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l204 204c31.195312 31.191407 81.945312 31.183594 113.140624 0 31.195313-31.191406 31.195313-81.949218 0-113.140624l-260-260c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l260 260c18.132813 18.132812 28.117188 42.238281 28.117188 67.882812s-9.984375 49.75-28.117188 67.882812c-18.71875 18.714844-43.296874 28.070313-67.882812 28.070313zm0 0" fill="#c3ddff"></path>
                                    <path d="m416 368.5-17.03125 3.109375c-2.664062 1.007813-5.210938 2.25-7.621094 3.695313-13.988281 8.390624-19.847656 23.699218-19.847656 41.195312 0 26.507812 17.988281 42.640625 44.5 42.640625 17.488281 0 32.792969-3.996094 41.183594-17.976563 4.328125-7.207031 6.816406-15.644531 6.816406-24.664062 0-26.507812-21.492188-48-48-48zm0 0" fill="#8bb3ea"></path>
                                    <g fill="#c3ddff">
                                        <path d="m236.007812 244.507812c-2.046874 0-4.09375-.78125-5.65625-2.34375l-228.007812-228.007812c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l228.007812 228.007812c3.125 3.125 3.125 8.1875 0 11.3125-1.5625 1.5625-3.609374 2.34375-5.65625 2.34375zm0 0"></path>
                                        <path d="m256 328.5c-2.046875 0-4.09375-.78125-5.65625-2.34375l-152-152c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l152 152c3.125 3.125 3.125 8.1875 0 11.3125-1.5625 1.5625-3.609375 2.34375-5.65625 2.34375zm0 0"></path>
                                        <path d="m340 284.5c-2.046875 0-4.09375-.78125-5.65625-2.34375l-220-220c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l220 220c3.125 3.125 3.125 8.1875 0 11.3125-1.5625 1.5625-3.609375 2.34375-5.65625 2.34375zm0 0"></path>
                                    </g>
                                    <path d="m456 408.5c0 8.835938-7.164062 16-16 16s-16-7.164062-16-16 7.164062-16 16-16 16 7.164062 16 16zm0 0" fill="#a4ccff"></path>
                                    <path d="m416 368.5c-6.019531 0-11.722656 1.085938-17.03125 3.109375l8.015625 12.292969c1.539063 2.332031 4.085937 3.597656 6.6875 3.597656 1.507813 0 3.039063-.425781 4.390625-1.320312 3.695312-2.429688 4.710938-7.390626 2.28125-11.082032zm0 0" fill="#a4ccff"></path>
                                    <path d="m432.5 448c-3.867188 0-7.617188-.46875-11.21875-1.332031l1.375-2.0625c2.453125-3.675781 1.460938-8.644531-2.21875-11.09375-3.695312-2.460938-8.648438-1.460938-11.09375 2.21875l-3.003906 4.503906c-8.160156-5.316406-14.601563-13.042969-18.316406-22.175781l7.492187 5.066406c1.375.929688 2.9375 1.375 4.476563 1.375 2.570312 0 5.085937-1.230469 6.632812-3.519531 2.476562-3.65625 1.515625-8.636719-2.140625-11.105469l-11.335937-7.667969c-2.667969-1.808593-6.015626-1.78125-8.597657-.230469-.027343-.65625-.050781-1.3125-.050781-1.976562 0-9.023438 2.515625-17.484375 6.847656-24.695312-13.972656 8.394531-23.347656 23.710937-23.347656 41.195312 0 26.507812 21.488281 48 48 48 17.484375 0 32.792969-9.363281 41.183594-23.332031-7.210938 4.328125-15.660156 6.832031-24.683594 6.832031zm0 0" fill="#739ad6"></path>
                                </svg>

                            </div>

                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fab fa-android"></i> Platforms : </span> <br>
                            <p class="icon_of_text"> PC, Android, Oculus Rift VR, Google Cardboard, Microsoft Kinect, Linux(Debian,Ubundu), Embedded systems</p>
                            </p>
                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-tools"></i> Skills : </span> <br>
                            <p class="icon_of_text"> Programming , design, behavioral trees, 3D modeling, gameplay design, particle system, Industry Simulation(PTC CREO)</p>
                            </p>



                        </div>
                    </div>
                </div>
                <div id="footer_cv">
                    <div id="round_top">
                        <div id="ff"></div>
                        <div id="ff2"></div>
                    </div>
                    <p>
                        <a></a> Copyright <a><i class="far fa-copyright"></i></a> 2014 - <?php echo date("Y"); ?> <a>Marko Nikolić</a> | CV.
                    </p>
                    <div id="backgro_row"></div>
                </div>
            </div>
            <?php /* <div id="box_back" class="box2 box_div_id">
                <h1>Marko Nikolić</h1>
                <span class="separator"></span>
                 <img id="hrcod" src="<?php echo SITE_HOST;?>/?mnps=source_9342805_generated_qr?<?php echo time(); ?>">
                <div id="cont1">
                    <p id="info_email"><i class="fas fa-map-marker-alt"></i> Serbia/Belgrade/Surčin</p>
                    <p id="info_email"><i class="fas fa-globe"></i> portfolio.eronelit.com</p>
                    <p id="info_email"><i class="fab fa-linkedin"></i> linkedin.com/in/marko-nikolic-49385a283</p>
                    <p id="info_email"><i class="fas fa-at"></i> marko.supergun@gmail.com</p>
                    <p></p>
                </div>
            </div>  *l/ ?>
            <br><br> <br>
            <?php /* 
      
        <span class="separator"></span>
        <div id="instructions">
            <p style="font-wheight:bold;">Instruction for print : </p>
            <p id="box_represantion"><span></span>Dimension 90 x 50 mm (or 85 x 55 mm)</p>
        </div>

        <div  style="width: 10px;height: 228px;position: absolute;"></div>
        */ ?>
        </div>
        <div class="copyrig">
            <p>
                <a></a> Copyright <i class="far fa-copyright"></i> 2014 - <?php echo date("Y"); ?> <a>Marko Nikolić</a> | Serbia/Belgrade.
            </p>
        </div><?php /*
        <div class="copyrig1" <?php /* style="display:none !important;" *f/ ?>>

            <br>
            <button onclick="window.open('<?php echo $actual_link; ?>')"><i class="fas fa-external-link-alt"></i> ORIGINAL URL https://portfolio.eronelit.com/?pages=visitcard<br> Current time and date [ <?php echo date("d:m:Y |") . " <span id='clock'></span>" ?> ] </button>
        </div> */ ?>
        <p id="round_ffae" style="display: none !important;" title="Generate web page to pdf" onclick="window.open('./?pages=cv-markonikolic-pdf');"><i class="fas fa-file-pdf"></i></p>
    </div>
    <?php /* <div id="alert" >
        <p><br>This page is protected by Eronelit Security <br> You do not have permission to print!
            <br>

            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIA0KICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgDQogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIA0KICAgIDxwYXRoIGQ9Im02MCA5aC01NmMtMS42NTQgMC0zIDEuMzQ2LTMgM3Y0MGMwIDEuNjU0IDEuMzQ2IDMgMyAzaDU2YzEuNjU0IDAgMy0xLjM0NiAzLTN2LTQwYzAtMS42NTQtMS4zNDYtMy0zLTN6bS01NiAyaDU2Yy41NTIgMCAxIC40NDkgMSAxdjVoLTU4di01YzAtLjU1MS40NDgtMSAxLTF6bTU2IDQyaC01NmMtLjU1MiAwLTEtLjQ0OS0xLTF2LTMzaDU4djMzYzAgLjU1MS0uNDQ4IDEtMSAxem0tNDUtMzhoLTJ2LTJoMnptLTggMGgtMnYtMmgyem00IDBoLTJ2LTJoMnptNSA2Yy02LjA2NSAwLTExIDQuOTM1LTExIDExczQuOTM1IDExIDExIDExIDExLTQuOTM1IDExLTExLTQuOTM1LTExLTExLTExem0wIDJjNC45NjMgMCA5IDQuMDM4IDkgOSAwIDEuODU0LS41NjQgMy41NzktMS41MjkgNS4wMTItMS4wMTEtMS41MTQtMi40NDctMi42NjQtNC4xMDktMy4zMzcgMS0uOTE0IDEuNjM4LTIuMjE3IDEuNjM4LTMuNjc1IDAtMi43NTctMi4yNDMtNS01LTVzLTUgMi4yNDMtNSA1YzAgMS40NTguNjM4IDIuNzYxIDEuNjM4IDMuNjc2LTEuNjYxLjY3Mi0zLjA5OCAxLjgyMy00LjEwOSAzLjMzNy0uOTY1LTEuNDM0LTEuNTI5LTMuMTU5LTEuNTI5LTUuMDEzIDAtNC45NjIgNC4wMzctOSA5LTl6bS0zIDdjMC0xLjY1NCAxLjM0Ni0zIDMtM3MzIDEuMzQ2IDMgMy0xLjM0NiAzLTMgMy0zLTEuMzQ2LTMtM3ptLTMuMDk3IDguNjAxYzEuMjI4LTIuMjAxIDMuNTQ2LTMuNjAxIDYuMDk3LTMuNjAxczQuODY5IDEuNCA2LjA5NyAzLjYwMWMtMS42MDYgMS40ODQtMy43NDQgMi4zOTktNi4wOTcgMi4zOTlzLTQuNDkxLS45MTUtNi4wOTctMi4zOTl6bTEuMDk3IDYuMzk5aC00Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MmMwIDEuMTAzLjg5NyAyIDIgMmg0YzEuMTAzIDAgMi0uODk3IDItMnYtMmMwLTEuMTAzLS44OTctMi0yLTJ6bS00IDR2LTJoNGwuMDAxIDJ6bTE0LTRoLTRjLTEuMTAzIDAtMiAuODk3LTIgMnYyYzAgMS4xMDMuODk3IDIgMiAyaDRjMS4xMDMgMCAyLS44OTcgMi0ydi0yYzAtMS4xMDMtLjg5Ny0yLTItMnptLTQgNHYtMmg0bC4wMDEgMnptMTQtNGgtNGMtMS4xMDMgMC0yIC44OTctMiAydjJjMCAxLjEwMy44OTcgMiAyIDJoNGMxLjEwMyAwIDItLjg5NyAyLTJ2LTJjMC0xLjEwMy0uODk3LTItMi0yem0tNCA0di0yaDRsLjAwMSAyem0yNC0xMS44MTZ2LTMuMTg0YzAtMi43NTctMi4yNDMtNS01LTVzLTUgMi4yNDMtNSA1djMuMTg0Yy0xLjE2MS40MTQtMiAxLjUxNC0yIDIuODE2djhjMCAxLjY1NCAxLjM0NiAzIDMgM2g4YzEuNjU0IDAgMy0xLjM0NiAzLTN2LThjMC0xLjMwMi0uODM5LTIuNDAyLTItMi44MTZ6bS01LTYuMTg0YzEuNjU0IDAgMyAxLjM0NiAzIDN2M2gtNnYtM2MwLTEuNjU0IDEuMzQ2LTMgMy0zem01IDE3YzAgLjU1MS0uNDQ4IDEtMSAxaC04Yy0uNTUyIDAtMS0uNDQ5LTEtMXYtOGMwLS41NTEuNDQ4LTEgMS0xaDhjLjU1MiAwIDEgLjQ0OSAxIDF6bS01LThjLTEuNjU0IDAtMyAxLjM0Ni0zIDMgMCAxLjMwMi44MzkgMi40MDIgMiAyLjgxNnYyLjE4NGgydi0yLjE4NGMxLjE2MS0uNDE0IDItMS41MTQgMi0yLjgxNiAwLTEuNjU0LTEuMzQ2LTMtMy0zem0wIDRjLS41NTIgMC0xLS40NDktMS0xcy40NDgtMSAxLTEgMSAuNDQ5IDEgMS0uNDQ4IDEtMSAxem0tMTUtMTdoMjh2LTZoLTI4em0yLTRoMjR2MmgtMjR6bTI0IDE4aDJ2MmgtMnptMCA0aDJ2MmgtMnptMCA0aDJ2MmgtMnoiIGZpbGw9IiNmMDBhIi8+DQo8L3N2Zz4=" width="112">
        </p>
    </div> */ ?>
    <?php /*   <object data="<?php echo SITE_HOST;?>/?pages=pdf-954385472" style="/h* display: block; *h/width: auto;height: auto;border:0px;position: fixed;left: 0px;right: 0px;bottom: 86px;top: 53px;">
        <embed id="F_slider_projcts" src="<?php echo SITE_HOST;?>/?pages=pdf-954385472" style="width:100%;height:100%; border:0px;position: absolute;left: 0px;right: 0px;bottom: 0px;top: 50px;">
        Error: Embedded data could not be displayed.
    </object>
   
  
    <h2 class="toCanvas"> <a href="javascript:void(0);"> </a></h2>
    <h2 class="toPic"><a href="javascript:void(0);"></a></h2>


    <script type="text/javascript" src="<?php echo SITE_HOST;?>/?pages=vc-js-1"></script>
    <script type="text/javascript" src="<?php echo SITE_HOST;?>/?pages=vc-js-2"></script>
    <script type="text/javascript" src="<?php echo SITE_HOST;?>/?pages=vc-js-3"></script>



    <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>


    <canvas id="myCanvas"  ></canvas>

    <script type="text/javascript">
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');

        // draw a blue cloud
        context.beginPath();
        context.moveTo(170, 80);
        drawWindow(window, 0,0, 100, 200, "rgb(255,255,255)");
        context.stroke();

        function onflicaer() {
            // only jpeg is supported by jsPDF
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
        }
    </script>
*f/ ?>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
    <canvas id="viewport"></canvas>
    <style>
        canvas#viewport {
            border: 1px solid red;

            position: fixed;
            background: -webkit-linear-gradient(45deg, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef), -webkit-linear-gradient(45deg, #efefef 25%, #cecece 25%, #cecece 75%, #efefef 75%, #efefef);
            background-size: 21px 21px;
            vertical-align: middle;
            border: 0px;
            background-position: 0 0, 10px 10px;

        }
    </style>
    <script type="text/javascript">
        function onflicaer() {
            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');

            base_image = new Image();
            base_image.src = '<?php echo "./?mnps=image-in-g-background-5"; ?>';
            context.drawImage(base_image, 0, 0);

            // only jpeg is supported by jsPDF
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save();

        }
    </script>*/ ?>

    <?php
    if (!empty($_GET['url_path'])) {
        $path = $_GET['url_path'];

        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);

        /*   echo "<style> body {
        background-image: url('$base64');
         "; $fileSizeBytes = filesize($path);
 
        
        </style>"; */


        //In my case, the file was 269,708 bytes in size.
        var_dump(filesize($path));
    }
    /*    ?>



    <div style="
    margin-top: 40px;
    position: fixed;
">
        <a id="a-make" href="#">Make a screenshot</a>
        <a id="a-download" href="#" style="display:none;">Download a screenshot</a>
    </div>

    <div id="main">
        <div id="screenshot">
            ...
        </div>
    </div>
    <style>
        canvas {
            position: fixed;
            margin-top: 120px;
            border: 2px dashed;
        }
    </style>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>

    <script>
        function makeScreenshot() {
            html2canvas(document.getElementById("div_box_center"), {
                scale: 2
            }).then(canvas => {
                canvas.id = "canvasID";
                var main = document.getElementById("meta_div");
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(canvas);
                var canvas = document.getElementById('canvasID');

                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF();

                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            });
        }

        document.getElementById("a-make").addEventListener('click', function() {
            document.getElementById("a-make").style.display = "none";
            makeScreenshot();
            document.getElementById("a-download").style.display = "inline";
        }, false);

        document.getElementById("a-download").addEventListener('click', function() {
            this.href = document.getElementById("canvasID").toDataURL();
            this.download = "canvas-image.pdf";


        }, true);
    </script>



 *f/ ?>


    <script type="text/javascript" src="<?php echo SITE_HOST;?>/?pages=vc-js-6?<?php echo time(); ?>"></script>
*/ ?>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
 

    <script type="text/javascript" src="<?php echo SITE_HOST; ?>/?pages=vc-js-7?<?php echo time(); ?>"></script>
    <?php
    include "$_SERVER[DOCUMENT_ROOT]/cursor_bml.php";
    ?>
</body>

</html><?php

        /*

Trenutno postoji teorija u ERonelit JGA da 
je GENOM pod imenom F[4029582886] DNA/DNK urođeni kod koji je zaslužan 
i koji određuje kada je beba sprememna da se rodi. 
Samo nesvesni deo mozga majke može da ga čita. . .

Ova teroija je nastala kada sam apdejtovao verziju ya Deoploy jednog od mojih sistema koji su 
pisani DNA/DNK kodom . . .

*/
        ?>