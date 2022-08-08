<?php
if (!empty($_GET['src'])) {
    $filetry = "$_SERVER[DOCUMENT_ROOT]/rdlv/$_GET[src].svg";

    # header("content-type: image/png");
    if (file_exists($filetry)) {
        $mime_type = mime_content_type($filetry);
        
        header("Content-Type: image/svg+xml");
        header('Content-Length' . filesize($filetry));
        
        // header("Content-type: " . image_type_to_mime_type($mime_type));

        @readfile($filetry);
        exit;
    }else{
        include "./ERROR_PG.php";
    }
} else if(!empty($_GET['svc'])){
    $filetry = "$_SERVER[DOCUMENT_ROOT]/svc/$_GET[svc].css";

    # header("content-type: image/png");
    if (file_exists($filetry)) {
        $mime_type = mime_content_type($filetry);

        header("Content-Type: text/css");
        header('Content-Length' . filesize($filetry));

        // header("Content-type: " . image_type_to_mime_type($mime_type));

        @readfile($filetry);
        exit;
    } else {
        include "./ERROR_PG.php";
    }
} else {
    include "./wlcomer_home.php";
}
