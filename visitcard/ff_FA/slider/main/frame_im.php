<?php if (!empty($_GET['theme'])) {
  if (strpos($_GET['theme'], "dark") !== false) {
    $theme_path =  "dark";
  } else if (strpos($_GET['theme'], "gold") !== false) {
    $theme_path = "gold";
  } else if (strpos($_GET['theme'], "purple") !== false) {
    $theme_path = "purple";
  } else {
  }
} else {
}


ob_start(function ($b) {
  return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
});

?>



<!DOCTYPE html>
<html class="ltr <?php echo  $theme_path; ?>" dir="ltr" lang="en">

<head>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="./?eronelit-assets=stylesheet-2" crossorigin="anonymous">

</head>

<body>
  <style>
    * {
      overflow: hidden;
    }
  </style>
  <div id="eronelit_cloud_slider" class="carousel slide" data-ride="carousel" style="height:380px;">
    <ol class="carousel-indicators">
      <li data-target="#eronelit_cloud_slider" data-slide-to="0" class="active"></li>
      <li data-target="#eronelit_cloud_slider" data-slide-to="1"></li>
      <li data-target="#eronelit_cloud_slider" data-slide-to="2"></li>
      <li data-target="#eronelit_cloud_slider" data-slide-to="3"></li>
      <li data-target="#eronelit_cloud_slider" data-slide-to="4"></li>

    </ol>
    <div class="carousel-inner">


      <div class="carousel-item active">
        <img class="d-block w-100 h-280" src="./?eronelit-assets=svg&eronelit-assets-<?php echo  $theme_path; ?>-svg=cpu" alt="First slide">
        <p>First activated block<br><span>Activated 10 years ago, Blending technology. Technology of the future!</span></p>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 h-280" src="./?eronelit-assets=svg&eronelit-assets-<?php echo  $theme_path; ?>-svg=data" alt="Second slide">
        <p>Storage and databases<br><span>Scalable, flexible, high performance storage facility and database for your
            applications.</span></p>


      </div>
      <div class="carousel-item">
        <img class="d-block w-100 h-280" src="./?eronelit-assets=svg&eronelit-assets-<?php echo  $theme_path; ?>-svg=programming" alt="Third slide">
        <p>Eronelit Quantum cloud<br><span>Every change you make sure is kept on our cloud! Your ability to choose to see only you!</span></p>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100 h-280" src="./?eronelit-assets=svg&eronelit-assets-<?php echo  $theme_path; ?>-svg=eronelit_jga" alt="Third slide">
        <p>Eronelit JGA<br><span>Advanced 3D Scientific Virtual Experiments and Simulations!</span></p>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100 h-280" src="./?eronelit-assets=svg&eronelit-assets-<?php echo  $theme_path; ?>-svg=modeling" alt="Third slide">
        <p>Eronelit SDK > QUANTUM<br><span>QUANTUM SCIENTIFIC 3D SIMULATIONS AND DATA LABS</span></p>
      </div>
    </div>

    <a class="carousel-control-prev" href="#eronelit_cloud_slider" role="button" data-slide="prev">

      <img class="arrows_main" id="slider_left" src="./?eronelit-assets=svg&eronelit-assets-<?php echo  $theme_path; ?>-svg=left-arrow">

    </a>

    <a class="carousel-control-next" href="#eronelit_cloud_slider" role="button" data-slide="next">

      <img class="arrows_main" id="slider_left" src="./?eronelit-assets=svg&eronelit-assets-<?php echo  $theme_path; ?>-svg=right-arrow">
    </a>

  </div>






  <script>

  </script>
  <script src="./?eronelit-assets=javascript-2?<?php echo time(); ?>"></script>
  <?php /* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

  */ ?>
  <script type="text/javascript" src="./?eronelit-assets=js_eq_code_423423424234?<?php echo time(); ?>"></script>
  <script type="text/javascript" src="./?eronelit-assets=js_eq_code_3204429492?<?php echo time(); ?>"></script>
</body>

</html>