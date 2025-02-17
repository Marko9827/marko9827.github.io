<?php



$css = file_get_contents(ROOT . "Scripts/md_viewer.css");
$css_viewer = file_get_contents(ROOT . "Scripts/link_preview.css");
$js = file_get_contents(ROOT . "/Scripts/md_viewer.js");
$blog_style_bundle_str = base64_encode(self::minifyCSS("$css $css_viewer"));


$r = json_decode(file_get_contents(ROOT . "/apps/fother/data_s/blog/blgd.json"), true);
$i = 0;
foreach ($r as $key => $val) {
  $curlR = SITE_HOST . "$val[source]";
  $queryString = parse_url($curlR, PHP_URL_QUERY);
  // -
  $varr = array();
  $var_shared = 0;
  foreach ($val['shared_links'] as $key => $val3) {
    ;
    $varr[$var_shared] = base64_encode($val3);
    $var_shared++;
  }
  $response = self::get_page_by_pln(str_replace("blog=", "", $queryString), $val["time"], $val);

  $r[$i]['shared_links'] = $varr;
  $r[$i]['page'] = "";
  $r[$i]['page'] = $response;
  $r[$i]['thumbail'] = "https://$_SERVER[HTTP_HOST]/" . $r[$i]['thumbail'];
  $aer = str_replace("https://$_SERVER[HTTP_HOST]/app&id=A03429468246&blog=", "", $val["thumbail"], $aer);
  $aer = str_replace("https://$_SERVER[HTTP_HOST]/app&id=A03429468246&blog=", "", $val["thumbail"], $aer);
  $r[$i]['thumbail'] = $aer;

  foreach ($r[$i]["gallery"] as $key => $gal_item) {
    $aer = str_replace("https://$_SERVER[HTTP_HOST]/app&id=A03429468246&blog=", "/?blog=", $r[$i]['gallery'][$key]);
    $r[$i]['gallery'][$key] = $aer;
  }

  $i++;
}
function gallery()
{
  $fileList = glob(ROOT . '/apps/fother/data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE);
  $arr = [];  // Initialize the array
  $api_HOst = "https://$_SERVER[HTTP_HOST]";

  foreach ($fileList as $filename) {
    $path_parts = pathinfo($filename);
    $IamNumberic = time() . rand();
    $item = new stdClass();  // Create a new stdClass object for each item

    if (!is_numeric("$path_parts[filename]")) {
      rename(ROOT . "data_s/data_wlp/$path_parts[filename].$path_parts[extension]", "data_s/data_wlp/$IamNumberic.$path_parts[extension]");
      $item->img = "$api_HOst/app&id=$_GET[id]&mnps=gallery&img=$IamNumberic";

      if (!file_exists(ROOT . "data_s/data_wlp/thumb/$IamNumberic.$path_parts[extension]")) {
        // $this->SerzveThumb("$filename", 640, ROOT."data_s/data_wlp/thumb/","$IamNumberic.$path_parts[extension]");
      }
      $item->thumb = "$api_HOst/app&id=$_GET[id]&mnps=gallery&thumb=$IamNumberic";
    } else {
      $item->img = "$api_HOst/app&id=$_GET[id]&mnps=gallery&img=$path_parts[filename]";
      $item->thumb = "$api_HOst/app&id=$_GET[id]&mnps=gallery&thumb=$path_parts[filename]";
    }

    $item->title = "-";
    $item->description = "-";
    $item->href = "-";
    $item->type = true;

    array_push($arr, $item);  // Add the item to the array using array_push()
  }

  return $arr;
}
;

function menuC()
{
  $f = json_decode(file_get_contents(ROOT . "/apps/fother/data_s/blog/blgd_projects.json"), true);
  $v = [];
  foreach ($f as $key => $val) {

    if ($f[$key]['title'] == "Blog") {
      $f[$key]['num'] = count(json_decode(file_get_contents(ROOT . "/apps/fother/data_s/blog/blgd.json"), true));
    }
    if ($f[$key]['title'] == "Gallery - Photos") {
      $f[$key]['num'] = count(glob(ROOT . '/apps/fother/data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE));
    }
    array_push($v, $f[$key]);
  }
  return $v;
}

function projects()
{
  $f = json_decode(file_get_contents(ROOT . "/apps/fother/data_s/blog/blgd_projects2.json"), true);
  $v = [];
  foreach ($f as $key => $val) {
    if (strpos($_GET['id'], "A03429468246") !== false) {
      $f[$key]['img'] = "https://$_SERVER[HTTP_HOST]" . $f[$key]["img"];

      array_push($v, $f[$key]);
    }
  }
  return $v;
}

$blog_style_bundle = [
  "blog" => $i,
  "id" => "$_GET[id]",
  "data" => [
    "blog_style_bundle" => (string) $blog_style_bundle_str,
    "blog" => $r,
    "pages" => [
      "tg_channel" => [
        "title" => "Telegram Channel",
        "u" => "tg-channel",
        "c" => ""
      ],
      "cv_pdf" => [
        "title" => "CV",
        "u" => "cv-pdf",
        "c" => ""
      ],
      "visitcard" => [
        "title" => "Visitcard",
        "u" => "visitcard",
        "c" => ""
      ]
    ],
    "gallery" => gallery(),
    "menu" => menuC(),
    "projects" => projects()
  ],
  "gallery" => count(glob(ROOT . '/apps/fother/data_s/data_wlp/*.{png,jpg,jpeg}', GLOB_BRACE)),
  "projects" => count(json_decode(file_get_contents(ROOT . "/apps/fother/data_s/blog/blgd_projects2.json"), true))
];
header("Content-Type: text/json");
echo json_encode($blog_style_bundle, JSON_PRETTY_PRINT);
exit();

