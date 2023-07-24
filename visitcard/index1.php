<?php
header('X-Frame-Options: SAMEORIGIN');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

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




$actual_link = "http://" . $_SERVER['HTTP_HOST'];

// ob_start(function ($b) {
//     return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
// });

?>
<!DOCTYPE html>
<html>

<head>
    <title>Marko Nikolić - Portfolio > Visitcard</title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <link rel="icon" href="/?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />
    <link rel="stylesheet" href="/?mnps=stylesheet-fai?<?php echo time(); ?>" />
    <script type="text/javascript" src="/?mnps=stylesheet-js-fai?<?php echo time(); ?>"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable='no'">
    <link rel="stylesheet" href="/?mnps=source_934285_stylesheet?<?php echo time(); ?>" />
    <link rel="preload" href="https://cdn.eronelit.com/node_modules/jquery/dist/jquery.min.js" as="script">
    <script src="https://cdn.eronelit.com/node_modules/jquery/dist/jquery.min.js"></script>
    <meta property="og:type" content="website" />
    <meta name="author" content="Marko Nikolic">

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
 <script type="text/javascript" src="/?pages=vc-js-5"></script>
    <script type="text/javascript" src="/?pages=vc-js-4"></script>
    <script src="/?mnps=javascript-nfo-13"></script>
    */ ?>
    <style type="text/css">
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }


        ::-webkit-scrollbar-track {
            background: rgba(51, 122, 183, 0);
        }


        ::-webkit-scrollbar-thumb {
            background: #337ab7;
        }
        body{
            background: white !important;
        }
    </style>
</head>

<body ondragstart="return false;" onselect="return false;" id="body">
    <div id="meta_div">
        <div id="div_box_center">
            <div id="box_side" class="box3 box_div_id">
                <h1 class="box1"><a id="color1">Marko</a> Nikolić</h1>
                <span class="separator"></span>
                <p class="font f1">IT Developer from Serbia/Belgrade</p>
            </div>
            <div id="box_back" class="box2 box_div_id">
                <h1>Marko Nikolić</h1>
                <span class="separator"></span>
                <img id="hrcod" src="/?mnps=source_9342805_generated_qr?<?php echo time(); ?>">
                <div id="cont1">
                    <p id="info_email"><i class="fas fa-map-marker-alt"></i> Serbia/Belgrade/Surčin</p>
                    <p id="info_email"><i class="fas fa-globe"></i> portfolio.eronelit.com</p>
                    <p id="info_email"><i class="fab fa-linkedin"></i> linkedin.com/in/marko-nikolic-49385a283</p>
                    <p id="info_email"><i class="fas fa-at"></i> marko.supergun&#64;gmail.com</p>
                    <p></p>
                </div>
            </div> <br><br> <br>
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
                <a><i class="far fa-copyright"></i></a> Copyright © 2014 - <?php echo date("Y"); ?> <a>Marko Nikolić</a> | Serbia/Belgrade.
            </p>
        </div>
        <div class="copyrig1">
            <?php /*  <p> <a><i class="far fa-copyright"></i></a> Copyright © 2014 - <?php echo date("Y"); ?> <a>Marko Nikolić</a> | Serbia/Belgrade.

            <?php /*       VISIT CARD ORIGINAL URL | <i class="fas fa-link"></i> https://portfolio.eronelit.com/?pages=visitcard
            <br><a id="downloadfiler" href="VisitCard_MarkoNikolic.png" target="_blank"><i class="fas fa-download"></i>Download as an image.</a>
*f/ ?>
        </p> */
            //  echo $actual_link = $_SERVER['HTTP_HOST']. "?pages=visitcard" 
            ?>
            <br>
            <button onclick="window.open('<?php echo $actual_link; ?>')"><i class="fas fa-external-link-alt"></i> ORIGINAL URL https://portfolio.eronelit.com/?p=visitcard<br> Current time and date [ <?php echo date("d:m:Y |") . " <span id='clock'></span>" ?> ] </button>
        </div>
        <p id="round_ffae" style="display: none !important;" onclick="onflicaer()//window.print()"><i class="fas fa-file-pdf"></i></p>
    </div>
    <?php /* <div id="alert" >
        <p><br>This page is protected by Eronelit Security <br> You do not have permission to print!
            <br>

            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIA0KICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgDQogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIA0KICAgIDxwYXRoIGQ9Im02MCA5aC01NmMtMS42NTQgMC0zIDEuMzQ2LTMgM3Y0MGMwIDEuNjU0IDEuMzQ2IDMgMyAzaDU2YzEuNjU0IDAgMy0xLjM0NiAzLTN2LTQwYzAtMS42NTQtMS4zNDYtMy0zLTN6bS01NiAyaDU2Yy41NTIgMCAxIC40NDkgMSAxdjVoLTU4di01YzAtLjU1MS40NDgtMSAxLTF6bTU2IDQyaC01NmMtLjU1MiAwLTEtLjQ0OS0xLTF2LTMzaDU4djMzYzAgLjU1MS0uNDQ4IDEtMSAxem0tNDUtMzhoLTJ2LTJoMnptLTggMGgtMnYtMmgyem00IDBoLTJ2LTJoMnptNSA2Yy02LjA2NSAwLTExIDQuOTM1LTExIDExczQuOTM1IDExIDExIDExIDExLTQuOTM1IDExLTExLTQuOTM1LTExLTExLTExem0wIDJjNC45NjMgMCA5IDQuMDM4IDkgOSAwIDEuODU0LS41NjQgMy41NzktMS41MjkgNS4wMTItMS4wMTEtMS41MTQtMi40NDctMi42NjQtNC4xMDktMy4zMzcgMS0uOTE0IDEuNjM4LTIuMjE3IDEuNjM4LTMuNjc1IDAtMi43NTctMi4yNDMtNS01LTVzLTUgMi4yNDMtNSA1YzAgMS40NTguNjM4IDIuNzYxIDEuNjM4IDMuNjc2LTEuNjYxLjY3Mi0zLjA5OCAxLjgyMy00LjEwOSAzLjMzNy0uOTY1LTEuNDM0LTEuNTI5LTMuMTU5LTEuNTI5LTUuMDEzIDAtNC45NjIgNC4wMzctOSA5LTl6bS0zIDdjMC0xLjY1NCAxLjM0Ni0zIDMtM3MzIDEuMzQ2IDMgMy0xLjM0NiAzLTMgMy0zLTEuMzQ2LTMtM3ptLTMuMDk3IDguNjAxYzEuMjI4LTIuMjAxIDMuNTQ2LTMuNjAxIDYuMDk3LTMuNjAxczQuODY5IDEuNCA2LjA5NyAzLjYwMWMtMS42MDYgMS40ODQtMy43NDQgMi4zOTktNi4wOTcgMi4zOTlzLTQuNDkxLS45MTUtNi4wOTctMi4zOTl6bTEuMDk3IDYuMzk5aC00Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MmMwIDEuMTAzLjg5NyAyIDIgMmg0YzEuMTAzIDAgMi0uODk3IDItMnYtMmMwLTEuMTAzLS44OTctMi0yLTJ6bS00IDR2LTJoNGwuMDAxIDJ6bTE0LTRoLTRjLTEuMTAzIDAtMiAuODk3LTIgMnYyYzAgMS4xMDMuODk3IDIgMiAyaDRjMS4xMDMgMCAyLS44OTcgMi0ydi0yYzAtMS4xMDMtLjg5Ny0yLTItMnptLTQgNHYtMmg0bC4wMDEgMnptMTQtNGgtNGMtMS4xMDMgMC0yIC44OTctMiAydjJjMCAxLjEwMy44OTcgMiAyIDJoNGMxLjEwMyAwIDItLjg5NyAyLTJ2LTJjMC0xLjEwMy0uODk3LTItMi0yem0tNCA0di0yaDRsLjAwMSAyem0yNC0xMS44MTZ2LTMuMTg0YzAtMi43NTctMi4yNDMtNS01LTVzLTUgMi4yNDMtNSA1djMuMTg0Yy0xLjE2MS40MTQtMiAxLjUxNC0yIDIuODE2djhjMCAxLjY1NCAxLjM0NiAzIDMgM2g4YzEuNjU0IDAgMy0xLjM0NiAzLTN2LThjMC0xLjMwMi0uODM5LTIuNDAyLTItMi44MTZ6bS01LTYuMTg0YzEuNjU0IDAgMyAxLjM0NiAzIDN2M2gtNnYtM2MwLTEuNjU0IDEuMzQ2LTMgMy0zem01IDE3YzAgLjU1MS0uNDQ4IDEtMSAxaC04Yy0uNTUyIDAtMS0uNDQ5LTEtMXYtOGMwLS41NTEuNDQ4LTEgMS0xaDhjLjU1MiAwIDEgLjQ0OSAxIDF6bS01LThjLTEuNjU0IDAtMyAxLjM0Ni0zIDMgMCAxLjMwMi44MzkgMi40MDIgMiAyLjgxNnYyLjE4NGgydi0yLjE4NGMxLjE2MS0uNDE0IDItMS41MTQgMi0yLjgxNiAwLTEuNjU0LTEuMzQ2LTMtMy0zem0wIDRjLS41NTIgMC0xLS40NDktMS0xcy40NDgtMSAxLTEgMSAuNDQ5IDEgMS0uNDQ4IDEtMSAxem0tMTUtMTdoMjh2LTZoLTI4em0yLTRoMjR2MmgtMjR6bTI0IDE4aDJ2MmgtMnptMCA0aDJ2MmgtMnptMCA0aDJ2MmgtMnoiIGZpbGw9IiNmMDBhIi8+DQo8L3N2Zz4=" width="112">
        </p>
    </div> */ ?>
    <?php /*   <object data="/?pages=pdf-954385472" style="/h* display: block; *h/width: auto;height: auto;border:0px;position: fixed;left: 0px;right: 0px;bottom: 86px;top: 53px;">
        <embed id="F_slider_projcts" src="/?pages=pdf-954385472" style="width:100%;height:100%; border:0px;position: absolute;left: 0px;right: 0px;bottom: 0px;top: 50px;">
        Error: Embedded data could not be displayed.
    </object>
   
  
    <h2 class="toCanvas"> <a href="javascript:void(0);"> </a></h2>
    <h2 class="toPic"><a href="javascript:void(0);"></a></h2>


    <script type="text/javascript" src="/?pages=vc-js-1"></script>
    <script type="text/javascript" src="/?pages=vc-js-2"></script>
    <script type="text/javascript" src="/?pages=vc-js-3"></script>



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
    ?>
    <script type="text/javascript" src="/?pages=vc-js-6?<?php echo time(); ?>"></script>
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