<?php
session_start();
$HOST_URL = ROOT;

function img_t($url)
{
    global $HOST_URL;
    $filetry = ROOT . "rdlv/$url";
    $mime_type = mime_content_type($filetry);

    #return "data:image/png;base64," . base64_encode(file_get_contents($filetry));
    return "$HOST_URL/rdlv/$url";
}

function MarkDownTOstring($path)
{



    $markdown = file_get_contents($path);
    $converter = new League\CommonMark\CommonMarkConverter();
    $html .= "<style type='text/css'> " . file_get_contents(ROOT . "svc/md/style.css") . " </style>";

    $html .= $converter->convertToHtml($markdown);


    $html .= "<script type='text/javascript'> " . file_get_contents(ROOT . "svc/md/js.js") . " </script>";
    return $html;
}
function getHeaderWrongToken()
{
    header("content-type: text/json");
    $array = array();
    $array[0]->status = 200;
    $array[0]->request->time = date('d-m-Y h:i:s A');
    $array[0]->message = "Token expired!";
    $array[0]->By = "Eronelit Cloud API";


    if (json_encode($array) !== null) {
        echo json_encode($array);
    }
    exit();
}
function getHeaderFromMe($header = "")
{
    $header_token = "";
    $headers = getallheaders();
    if (isset($headers[$header])) {
        $header_token = $headers[$header];
    }
    return $header_token;
}
function exist_mime($filePath)
{
    $finfo = finfo_open(FILEINFO_MIME_TYPE);

    // Get the MIME type of the file
    $mime = finfo_file($finfo, $filePath);

    // Close the finfo resource
    finfo_close($finfo);
    return $mime;

}

function data_print_r(){
    
}

function headersExist()
{

    $return = false;
    $arr = [
        'AuthV2-token',
        'AuthV2-token-launcher'
    ];
    foreach ($arr as $val) {
        if (getHeaderFromMe($val) == $_SESSION[$val]) {
            $return = true;
        }
    }
    return $return;
}

if (!empty($_GET['drc'])) {

    $rjl = "H3024F";
    if ($_GET['drc'] == "$rjl") {
        $rr = array();
        header("content-type: application/json");
        $rr[0]->title = "E-student";
        $rr[0]->description = "E-student, platforma za studente";
        $rr[0]->img = img_t("students.svg");
        $rr[0]->href = "https://demo.eronelit.com/demo_34023591386511932414/";
        $rr[0]->type = true;
        //
        $rr[1]->title = "Search engine";
        $rr[1]->description = "My search engine";
        $rr[1]->img = img_t("erq.png");
        $rr[1]->href = "https://search.eronelit.com/";
        $rr[1]->type = true;
        //
        $rr[2]->title = "Eronelit Dashboard";
        $rr[2]->description = "Eronelit Dashboard for server";
        $rr[2]->img = img_t("rlj.png");
        $rr[2]->href = "";
        $rr[2]->type = true;
        //
        $rr[3]->title = "DB Manager";
        $rr[3]->description = "Eronelit Dashboard - Plugin DB Manager";
        $rr[3]->img = img_t("rlj.png");
        $rr[3]->href = "";
        $rr[3]->type = true;
        // 
        $rr[4]->title = "Echat";
        $rr[4]->description = "My bussines, cloud gaming, Streaming social network";
        $rr[4]->img = img_t("rlj2.png");
        $rr[4]->href = "https://echat.eronelit.com/";
        $rr[4]->type = true;
        // 
        $rr[5]->title = "Full PC Info";
        $rr[5]->description = "Get full pc info / New version coming soon!";
        $rr[5]->img = img_t("flj3.png");
        $rr[5]->href = "$HOST_URL/Eronel_Full_PC_information_.rar";
        $rr[5]->type = false;
        // 
        $rr[6]->title = "Do not be angry man";
        $rr[6]->description = "Do not be angry man - GAME";
        $rr[6]->img = img_t("tema_bela.png");
        $rr[6]->href = "https://github.com/Marko9827/projekatZaFaks";
        $rr[6]->type = true;
        // 
        $rr[7]->title = "Java http server";
        $rr[7]->description = "Simple java http static web server";
        $rr[7]->img = img_t("java-http-server.png");
        $rr[7]->href = "https://github.com/Marko9827/java-http-server";
        $rr[7]->type = true;
        //
        if (json_encode($rr) !== null) {
            echo json_encode(json_decode(json_encode($rr)));
        }
    } else {
        getHeaderWrongToken();
    }
} else if (!empty($_GET['download'])) {
    $file_url = "";
    if ($_GET['download'] == "FJ02349310") {
        $file_url = ROOT . "Eronel_Full_PC_information_.rar";
    }
    $data = file_get_contents($file_url);
    $fh = fopen("$name", 'w') or die("can't open file");
    fwrite($fh, $data);
    fclose($fh);

    header("Cache-Control: public");
    header("Content-Description: File Transfer");
    header("Content-Length: " . filesize("$name") . ";");
    header("Content-Disposition: attachment; filename=$name");
    header("Content-Type: application/octet-stream; ");
    header("Content-Transfer-Encoding: binary");
    readfile($name);
    exit;
} else if (!empty($_GET['src'])) {
    if ($_GET['src'] == "vdwallpper") {
   
      
        ignore_user_abort(false);
        include ROOT . "Content/vstream.php";
        // $this->include(ROOT . "Upload/STREAM/" . basename($path, ".mp4") . "_$chunk.mp4");
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");

        $filetry = ROOT . "Content/videos/";
        $files = glob($filetry . '/*.mp4');



        foreach (array_keys($files, $_SESSION['vname']) as $key) {
            unset($files[$key]);
        }
        $file = array_rand($files);
        $filetry2 = $files[$file];
        $_SESSION['vname'] = $filetry2;
        if (file_exists($filetry2)) {
            // header("Content-Type: video/mp4"); 
            $ppath = $filetry2; //ROOT . "cinematic_3/cinematic_MainMenu.mp4";
            $reqpath = $ppath;
            header("Content-Type: video/mp4"); #Optional if you'll only load it from other pages
            header('Accept-Ranges: bytes');
            header('Content-Length:' . filesize($reqpath));
            header('Content-Disposition: inline; filename="' . basename($reqpath) . '"');
            $stream = fopen($reqpath, 'rb');
            fpassthru($stream);
            fclose($stream);
         #   @readfile($reqpath);
            /*

            $stream = new eronelit_VideoStream($filetry2);
            $stream->start();*/
        } /*else{
   // header("Content-Type: video/mp4"); 
   $files = glob($filetry . '/*.mp4');
   $stream = new eronelit_VideoStream($files[0]);
   $stream->start();
}*/

        exit();
    } else {
        $filetry = ROOT . "rdlv/$_GET[src]";

        # header("content-type: image/png");
        if (file_exists($filetry)) {
            $mime_type = mime_content_type($filetry);
            if (strpos($filetry, ".svg") !== false) {

                header("Content-Type: image/svg+xml");
                header('Content-Length' . filesize($filetry));
                @readfile($filetry);
            }
            if (strpos($filetry, ".png") !== false) {
                header("content-type: image/png");

                echo file_get_contents($filetry);
                exit();
                echo "data:image/png;base64," . base64_encode(file_get_contents($filetry));
            }


            exit;
        } else {
            include ROOT . "ERROR_PG.php";
        }
    }
} else if (!empty($_GET['svc'])) {

    if ($_GET['svc'] == "edt3") {
        include ROOT . "svc/editor.php";

    } else {
        $filetry = ROOT . "svc/$_GET[svc]";
        $rr = ["css", "js", "jpg", "png", "txt", "md"];

        # header("content-type: image/png");

        foreach ($rr as $val) {

            if (file_exists("$filetry.$val")) {

                $fileT = "$filetry.$val";
                $fff3 = "text/txt";
                if ($val == "css") {
                    $fff3 = "text/css";
                }
                if ($val == "js") {
                    $fff3 = "text/javascript";
                }
                if ($val == "jpg") {
                    $fff3 = "image/jpeg";
                }
                if ($val == "png") {
                    $fff3 = "image/png";
                }
                if ($val == "md") {
                    header("content-type: text/html");
                    echo MarkDownTOstring("$fileT");
                    exit();
                }

                header("Content-Type: " . $fff3);
                header('Content-Length' . filesize($fileT));

                // header("Content-type: " . image_type_to_mime_type($mime_type));

                @readfile($fileT);
                exit();
            }
        }
        if ($exist) {
            include ROOT . "ERROR_PG.php";
        }
    }
} else {
    include ROOT . "wlcomer_home.php";
}
