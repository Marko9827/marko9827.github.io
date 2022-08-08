<?php

function img_t($url)
{
    $filetry = "$_SERVER[DOCUMENT_ROOT]/rdlv/$url";
    $mime_type = mime_content_type($filetry);

    return "data:image/png;base64," . base64_encode(file_get_contents($filetry));
}

if (!empty($_GET['drc'])) {
    $rr = array();
    header("content-type: application/json");
    $rr[0]->title = "E-student";
    $rr[0]->description = "E-student, platforma za studente";
    $rr[0]->img = img_t("students.svg");

    $rr[1]->title = "Search engine";
    $rr[1]->description = "My search engine";
    $rr[1]->img = img_t("erq.png");

    $rr[2]->title = "E-student";
    $rr[2]->description = "E-student, platforma za studente";
    $rr[2]->img = img_t("students.svg");

    $rr[3]->title = "E-student";
    $rr[3]->description = "E-student, platforma za studente";
    $rr[3]->img = img_t("students.svg");

    $rrh = '[
        {
            title: "E-student",
            description: "E-student, platforma za studente",
            img: this.domain + "students"
        },
        {
            title: "Search engine",
            description: "My search engine ",
            img: this.domain + "erq.png"
        },
        {
            title: "Eronelit Dashboard",
            description: "Eronelit Dashboard for server",
            img: this.domain + "rlj.png"
        },
        {
            title: "DB Manager",
            description: "Eronelit Dashboard - Plugin DB Manager",
            img: this.domain + "rlj.png"
        },
        {
            title: "Echat",
            description: "My bussines, cloud gaming, Streaming social network",
            img: this.domain + "rlj2.png"
        }
    ]';
    if (json_encode($rr) !== null) {
        echo json_encode($rr);
    }
} else if (!empty($_GET['download'])) {
    $file_url = "";
    if ($_GET['download'] == "FJ02349310") {
        $file_url = "$_SERVER[DOCUMENT_ROOT]/Eronel_Full_PC_information_.rar";
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

    $filetry = "$_SERVER[DOCUMENT_ROOT]/rdlv/$_GET[src]";

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
        include "./ERROR_PG.php";
    }
} else if (!empty($_GET['svc'])) {
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
