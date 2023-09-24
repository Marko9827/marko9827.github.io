<!DOCTYPE html>
<html lang="en" class="<?php
                        if (!empty($_GET['theme_source'])) {
                          echo $_GET['theme_source'];
                        }
                        ?>">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="./?mnps=image-favicon?<?php echo time(); ?>">

  <title>143</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Bootstrap core CSS -->
  <link href="./?mnps=fgae-stylesheet?<?php echo time(); ?>" rel="stylesheet">
  <link rel="stylesheet" href="./?mnps=stylesheet-fai?<?php echo time(); ?>" />
  <?php /*
  <!-- Custom styles for this template -->
  <link href="Scripts/tmp/1query/album.css" rel="stylesheet">
  */ ?>

  <style>
    :root {
      --gold_ff: #DAA520;
      --gold_ff_gover: #daa520c7;
    }

    .green {
      --gold_ff: #0ca02c;
      --gold_ff_gover: #0ca02cc7;
    }

    .red {
      --gold_ff: #da3220;
      --gold_ff_gover: #da3220c7;
    }

    .blue {
      --gold_ff: #337ab7;
      --gold_ff_gover: #337ab7c7;
    }

    .btn-outline-secondary {
      color: white;
      background-color: var(--gold_ff);
      border-radius: 10px;
      border-color: var(--gold_ff);
      box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.09), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
      border: var(--gold_ff);
      transition: 0.3s;
      border-left: 4px solid var(--gold_ff);
      border-right: 4px solid var(--gold_ff);
    }

    .btn-outline-secondary:hover {
      color: var(--gold_ff);
      background-color: var(--gold_ff_gover);
      color: white;
      border-radius: 0px;
      border: 0px;
      border-left: 4px solid var(--gold_ff);
      border-right: 4px solid transparent;
      box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
      transition: 0.3s;
    }
  </style>

  <script type="text/javascript">

  

var color1;
color1 = ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];
/*ZNJ*/

var dotty = document.getElementById("dotty");

var w = dotty.width = window.innerWidth,
    h = dotty.height = window.innerHeight,
    sum = w + h,
    ctx = dotty.getContext('2d'),

    opts = {

        side: 15,
        picksParTick: 2,
        baseTime: 40,
        addedTime: 10,

        colors: ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'],


        addedAlpha: 20,
        strokeColor: 'rgb(232, 232, 232)',

        hueSpeed: .2,
        repaintAlpha: 1
    },

    difX = Math.sqrt(3) * opts.side / 2, // height of a equilateral triangle 
    difY = opts.side * 3 / 2, // side of a triangle ( because it goes down to a vertex ) then half a side of the triangle in the hex below: s + s/2 = s*3/2
    rad = Math.PI / 6, // TAU / 6 = PI / 3 I thought, but apparently this way works better
    cos = Math.cos(rad) * opts.side,
    sin = Math.sin(rad) * opts.side,

    hexs = [],
    tick = 0;

function loop() {

    window.requestAnimationFrame(loop);

    tick += opts.hueSpeed;

    ctx.shadowBlur = 0;
    // ctx.fillStyle = 'rgba(41,53,64,alp)'.replace( 'alp', opts.repaintAlpha );
    ctx.fillStyle = 'rgba(225,225,225,alp)'.replace('alp', opts.repaintAlpha);
    ctx.fillRect(0, 0, w, h);

    for (var i = 0; i < opts.picksParTick; ++i)
        hexs[(Math.random() * hexs.length) | 0].pick();

    hexs.map(function (hex) { hex.step(); });
}
function Hex(x, y) {

    this.x = x;
    this.y = y;
    this.sum = this.x + this.y;
    this.picked = false;
    this.time = 0;
    this.targetTime = 0;

    this.xs = [this.x + cos, this.x, this.x - cos, this.x - cos, this.x, this.x + cos];
    this.ys = [this.y - sin, this.y - opts.side, this.y - sin, this.y + sin, this.y + opts.side, this.y + sin];
}
Hex.prototype.pick = function () {

    this.color = opts.colors[(Math.random() * opts.colors.length) | 0];
    this.picked = true;
    this.time = this.time || 0;
    this.targetTime = this.targetTime || (opts.baseTime + opts.addedTime * Math.random()) | 0;
}
Hex.prototype.step = function () {

    var prop = this.time / this.targetTime;

    ctx.beginPath();
    ctx.moveTo(this.xs[0], this.ys[0]);
    for (var i = 1; i < this.xs.length; ++i)
        ctx.lineTo(this.xs[i], this.ys[i]);
    ctx.lineTo(this.xs[0], this.ys[0]);

    if (this.picked) {

        ++this.time;

        if (this.time >= this.targetTime) {

            this.time = 0;
            this.targetTime = 0;
            this.picked = false;
        }

        ctx.fillStyle = ctx.shadowColor = this.color.replace('alp', Math.sin(prop * Math.PI));
        ctx.fill();
    } else {

        ctx.strokeStyle = ctx.shadowColor = opts.strokeColor;
        ctx.stroke();
    }
}

for (var x = 0; x < w; x += difX * 2) {
    var i = 0;

    for (var y = 0; y < h; y += difY) {
        ++i;
        hexs.push(new Hex(x + difX * (i % 2), y));

    }
}
loop();

window.addEventListener('resize', function () {

    w = dotty.width = window.innerWidth;
    h = dotty.height = window.innerHeight;
    sum = w + h;

    hexs.length = 0;
    for (var x = 0; x < w; x += difX * 2) {
        var i = 0;

        for (var y = 0; y < h; y += difY) {
            ++i;
            hexs.push(new Hex(x + difX * (i % 2), y));

        }
    }
})



    var color1;
    <?php
    if (!empty($_GET['theme_source'])) {

      if (strpos($_GET['theme_source'], "red") !== false) {
        echo "color1 = ['rgba(218, 50, 32,alp)', 'rgba(107, 107, 107,alp)', 'rgba(255,255,255,alp)'];";
      } else  if (strpos($_GET['theme_source'], "green") !== false) {
        echo "color1 = ['rgba(12, 160, 44,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];";
      } else  if (strpos($_GET['theme_source'], "gold") !== false) {
        echo "color1 = ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];";
      } else  if (strpos($_GET['theme_source'], "blue") !== false) {
        echo "color1 = ['rgba(0, 134, 196,alp)', 'rgba(51, 122, 183,alp)', 'rgba(255,255,255,alp)'];";
      } else { }
    }
    ?>

    function menu_theme_red_f() {
      color1 = ['rgba(218, 50, 32,alp)', 'rgba(107, 107, 107,alp)', 'rgba(255,255,255,alp)'];

    }

    function menu_theme_green_f() {
      color1 = ['rgba(12, 160, 44,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];
    }

    function menu_theme_gold_f() {
      color1 = ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];
    }

    function menu_theme_blue_f() {
      color1 = ['rgba(0, 134, 196,alp)', 'rgba(51, 122, 183,alp)', 'rgba(255,255,255,alp)'];
    }

    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
    document.addEventListener("dragstart", function(e) {
      e.preventDefault()
    }, false);
    document.addEventListener("selectstart", function(e) {
      e.preventDefault()
    }, false);

    document.onkeypress = function(event) {
      event = (event || window.event);
      if (event.keyCode == 123) {
        return false;
      }
    }
    document.onmousedown = function(event) {
      event = (event || window.event);
      if (event.keyCode == 123) {
        return false;
      }
    }
    document.onkeydown = function(event) {
      event = (event || window.event);
      if (event.keyCode == 123) {
        return false;
      }
    }



    function KP1() {
      $('form').bind("keypress", function(e) {
        if (e.keyCode == 13) {
          e.preventDefault();
          return false;
        }
      });
    }




    function menu_theme_red() {
      opts.colors = ['rgba(218, 50, 32,alp)', 'rgba(107, 107, 107,alp)', 'rgba(255,255,255,alp)'];
      document.getElementById("F_slider_projcts").src = "./?mnps=source_099925&theme_source=red";

      var element_themes = document.getElementById("themes_html");
      element_themes.classList.add("red");
      element_themes.classList.remove("green");
      element_themes.classList.remove("blue");
    }

    function menu_theme_green() {
      opts.colors = ['rgba(12, 160, 44,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];


      var element_themes = document.getElementById("themes_html");
      element_themes.classList.remove("red");
      element_themes.classList.add("green");
      element_themes.classList.remove("blue");

      document.getElementById("F_slider_projcts").src = "./?mnps=source_099925&theme_source=green";


    }

    function menu_theme_gold() {
      opts.colors = ['rgba(0, 134, 196,alp)', 'rgba(218, 165, 32,alp)', 'rgba(255,255,255,alp)'];

      var element_themes = document.getElementById("themes_html");
      element_themes.classList.remove("red");
      element_themes.classList.remove("green");
      element_themes.classList.remove("blue");
    }

    function menu_theme_blue() {
      var element_themes = document.getElementById("themes_html");
      element_themes.classList.remove("red");
      element_themes.classList.remove("green");
      element_themes.classList.add("blue");
      opts.colors = ['rgba(0, 134, 196,alp)', 'rgba(51, 122, 183,alp)', 'rgba(255,255,255,alp)'];

      document.getElementById("F_slider_projcts").src = "./?mnps=source_099925&theme_source=blue";

    }
  </script>


  <link rel="stylesheet" href="./?mnps=stylesheet-8?<?php echo time(); ?>">
  <link rel="stylesheet" href="./?mnps=stylesheet-3?<?php echo time(); ?>">
</head>

<body onkeydown="return false;" onkeypress="return false;" onkeyup="return false;">


  <main role="main">
    <style>
      img {
        background-size: cover;
        image-rendering: crisp-edges;
      }
    </style>



    <canvas id="dotty" width="100%" height="100%" style="position:fixed;"></canvas>



    <div class="album py-5 bg-light">


      <!--
      <div id="myBtnContainer">
        <button class="btn active" onclick="Csharp()">C#</button>
        <button class="btn" onclick="web()">Web</button>
        <button class="btn" onclick="filterSelection('cars')"> Cars</button>
        <button class="btn" onclick="filterSelection('people')"> People</button>
      </div> -->

      <script type="text/javascript">
        /*
          Csharp
          asp.net
          web
          android
          */
        function Csharp() {
          $(".Csharp").show('slow', {
            animation: 'slide'
          });
          $(".web").hide();
          $(".android").hide();
        }


        function web() {
          $(".Csharp").hide();
          $(".web").show('slow', {
            animation: 'slide'
          });
          $(".android").hide();
        }

        /*        $(".Csharp").hover() {

                } */

        $("div").addClass(function(index, currentClass) {

          if (currentClass === "show") {
            $("body").css("overflow", "hidden");
          }


        });
      </script>


      <div class="container">

        <div class="row">

          <div class="col-md-4 Csharp">
            <div class="card mb-4 box-shadow it_cardf">
              <img class="card-img-top" src="./?mnps=image-in-pr-img&image-in-pr-img-s-jpg=img_fae" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">When Eronel SDK connects to the brain ... All information about the status of an
                  organism is stored for analysis in Eronel JGA where the...
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <style>
                        .info-btn:hover {
                          border-top-right-radius: 30px;
                        }
                      </style>
                      <button type="button" class="btn btn-sm btn-outline-secondary info-btn" data-toggle="modal" data-target="#exampleModal">More Information + Photo</button>
                      <!--<button type="button" onclick="play392()" class="btn btn-sm btn-outline-secondary demo-btn">Play</button>
                                      -->
                      <script type="text/javascript">
                        function play392() {
                          window.location.href = '392/index.html';

                        }
                      </script>


                      <div class="modal fade hidescr hidescr" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Eronelit SDK</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                            <?php /*   <iframe class="iframe_modal_body_slider" src="Scripts/sliders/index.html"></iframe>
                            */ ?>  When Eronel SDK connects to the brain ...
                              All information about the status of the organism is stored for analysis in Eronel JGA
                              where the Task Manager of all processes is done in Windows. Only processes for the
                              operation of organs, blood images and pressure are shown ...
                              The whole process takes half a second ...🌟☄☮
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--<small class="text-muted">9 mins</small>-->
                  </div>
              </div>
            </div>
          </div>





          <div class="col-md-4 Csharp">
            <div class="card mb-4 box-shadow it_cardf">
              <img class="card-img-top" src="./?mnps=image-in-pr-img&image-in-pr-img-s-jpg=galaxy_slider2" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">Eronelit SPACEPROGRAM is my 3D Virtualization Program for the whole universe, the
                  countless animations that provide space experience!
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <style>
                        .info-btn:hover {
                          border-top-right-radius: 30px;
                        }
                      </style>
                      <button type="button" class="btn btn-sm btn-outline-secondary info-btn" data-toggle="modal" data-target="#exampleModal1">More Information + Photo</button>
                      <!--<button type="button" onclick="play392()" class="btn btn-sm btn-outline-secondary demo-btn">Play</button>
                                        -->
                      <script type="text/javascript">
                        function play392() {
                          window.location.href = '392/index.html';

                        }
                      </script>


                      <div class="modal fade hidescr" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel1">Eronelit SPACEP ROGRAM</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                            <?php /*    <iframe class="iframe_modal_body_slider" src="Scripts/sliders/indexgalaxy.html"></iframe>
                             */ ?> Eronelit SPACEPROGRAM is my 3D Virtualization Program for the whole universe, the
                              countless animations that provide space experience!
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--<small class="text-muted">9 mins</small>-->
                  </div>
              </div>
            </div>
          </div>






          <div class="col-md-4 Csharp">
            <div class="card mb-4 box-shadow it_cardf">
              <img class="card-img-top" src="./?mnps=image-in-pr-img&image-in-pr-img-s-png=dd1" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">
                  Eronelit OS is a commercial software that enables web site management through a presentation.
                  <br>

                  <br>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <style>
                        .info-btn:hover {
                          border-top-right-radius: 30px;
                        }
                      </style>
                      <button type="button" class="btn btn-sm btn-outline-secondary info-btn" data-toggle="modal" data-target="#exampleModal2">More Information + Photo</button>
                      <!--<button type="button" onclick="play392()" class="btn btn-sm btn-outline-secondary demo-btn">Play</button>
                                          -->
                      <script type="text/javascript">
                        function play392() {
                          window.location.href = '392/index.html';

                        }
                      </script>


                      <div class="modal fade hidescr" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel2">Eronelit OS</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                            <?php /*  <iframe class="iframe_modal_body_slider" src="Scripts/sliders/osinde.html"></iframe>
                            */ ?>  Eronelit OS is a commercial software that enables web site management through a
                              presentation.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--<small class="text-muted">9 mins</small>-->
                  </div>
              </div>
            </div>
          </div>



          <div class="col-md-4 Csharp">
            <div class="card mb-4 box-shadow it_cardf">
              <img class="card-img-top" src="./?mnps=image-in-pr-img&image-in-pr-img-s-png=AI1" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">Artificial intelligence (AI), sometimes called machine intelligence, is
                  intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans
                  and...
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <style>
                        .info-btn:hover {
                          border-top-right-radius: 30px;
                        }
                      </style>
                      <button type="button" class="btn btn-sm btn-outline-secondary info-btn" data-toggle="modal" data-target="#exampleModal3">More Information + Photo</button>
                      <!--<button type="button" onclick="play392()" class="btn btn-sm btn-outline-secondary demo-btn">Play</button>
                                        -->
                      <script type="text/javascript">
                        function play392() {
                          window.location.href = '392/index.html';

                        }
                      </script>


                      <div class="modal fade hidescr" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Eronelit SPACEPROGRAM</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                            <?php /*    <iframe class="iframe_modal_body_slider" src="Scripts/sliders/AI.html"></iframe>
                          */ ?>    Artificial intelligence (AI), sometimes called machine intelligence, is intelligence
                              demonstrated by machines, in contrast to the natural intelligence displayed by humans and
                              other animals. In computer science AI research is defined as the study of "intelligent
                              agents": any device that perceives its environment and takes actions that maximize its
                              chance of successfully achieving its goals. Colloquially, the term "artificial
                              intelligence" is applied when a machine mimics "cognitive" functions that humans
                              associate with other human minds, such as "learning" and "problem solving".

                              The scope of AI is disputed: as machines become increasingly capable, tasks considered as
                              requiring "intelligence" are often removed from the definition, a phenomenon known as the
                              AI effect, leading to the quip, "AI is whatever hasn't been done yet."[citation not
                              found] For instance, optical character recognition is frequently excluded from
                              "artificial intelligence", having become a routine technology. Modern machine
                              capabilities generally classified as AI include successfully understanding human speech,
                              competing at the highest level in strategic game systems (such as chess and Go),
                              autonomously operating cars, and intelligent routing in content delivery networks and
                              military simulations.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--<small class="text-muted">9 mins</small>-->
                  </div>
              </div>
            </div>
          </div>




          <div class="col-md-4 Csharp">
            <div class="card mb-4 box-shadow it_cardf">
              <img class="card-img-top" src="./?mnps=image-in-pr-img&image-in-pr-img-s-png=ftpimage" alt="Card image cap">
              <div class="card-body">
                Eronelit FTP | FTP O/nline
                <br>
                The File Transfer Protocol (FTP) is a standard network protocol used for the transfer of computer files
                between a client and...<br><br>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <style>
                      .info-btn:hover {
                        border-top-right-radius: 30px;
                      }
                    </style>
                    <button type="button" class="btn btn-sm btn-outline-secondary info-btn" onclick="window.open('https://ftpo.eronelit.com/', '_blank'); 
                      ">Go
                      FTP O/NLINE</button>
                    <!--<button type="button" onclick="play392()" class="btn btn-sm btn-outline-secondary demo-btn">Play</button>
                                        -->
                    <script type="text/javascript">
                      function play392() {
                        window.location.href = '392/index.html';

                      }
                    </script>


                    <div class="modal fade hidescr" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel4"> Eronelit FTP | FTP O/nline</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                          <?php /*  <iframe class="iframe_modal_body_slider" src="Scripts/sliders/onlineftp.html"></iframe>
*/ ?>
                            The File Transfer Protocol (FTP) is a standard network protocol used for the transfer of
                            computer files between a client and server on a computer network.

                            FTP is built on a client-server model architecture using separate control and data
                            connections between the client and the server.
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--<small class="text-muted">9 mins</small>-->
                </div>
              </div>
            </div>
          </div>





          <div class="col-md-4 Csharp">
            <div class="card mb-4 box-shadow it_cardf">
              <img class="card-img-top" src="./?mnps=image-in-pr-img&image-in-pr-img-s-png=home_experiments" alt="Card image cap">
              <div class="card-body">
                Eronelit Experiments
                <br>
                https://experiments.eronelit.com<br><br>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <style>
                      .info-btn:hover {
                        border-top-right-radius: 30px;
                      }
                    </style>
                    <button type="button" class="btn btn-sm btn-outline-secondary info-btn" onclick="window.open('https://experiments.eronelit.com', '_blank'); 
                        ">Go
                      Eronelit Experiments</button>
                    <!--<button type="button" onclick="play392()" class="btn btn-sm btn-outline-secondary demo-btn">Play</button>
                                          -->
                    <script type="text/javascript">
                      function play392() {
                        window.location.href = '392/index.html';

                      }
                    </script>


                    <div class="modal fade hidescr" id="exampleModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel5"> Eronelit FTP | FTP O/nline</h5>






                          </div>
                          <div class="modal-body">
                            <?php /*<iframe class="iframe_modal_body_slider" src="Scripts/sliders/onlineftp.html"></iframe>
                          */ ?>  <p>
                              The File Transfer Protocol (FTP) is a standard network protocol used for the transfer of
                              computer files between a client and server on a computer network.

                              FTP is built on a client-server model architecture using separate control and data
                              connections between the client and the server.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--<small class="text-muted">9 mins</small>-->
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
  </main>




  <script type="text/javascript">
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
    document.addEventListener("dragstart", function(e) {
      e.preventDefault();
    }, false);
    document.addEventListener("selectstart", function(e) {
      e.preventDefault();
    }, false);


    document.onkeydown = function(e) {
      e = e || window.event; //Get event
      if (e.ctrlKey) {
        var c = e.which || e.keyCode; //Get key code
        switch (c) {
          case 83: //Block Ctrl+S
          case 87: //Block Ctrl+W --Not work in Chrome
          case 65: //selecta ll
          case 68:
          case 122:
          case 123:
          case 123:
            e.preventDefault();
            e.stopPropagation();
            break;
        }
      }
    };
  </script>
  <script  data-cfasync="false" src="./?mnps=javascript-3?<?php echo time(); ?>"></script>
  <!-- Bootstrap core JavaScript
    ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script type="text/javascript" <?php /* integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"*/ ?> data-cfasync="false" src="./?mnps=javascript-jq-slm3"></script>
  <script type="text/javascript">
    window.jQuery || document.write('<script  type="text/javascript"  data-cfasync="false"  src="./?mnps=javascript-jq-slm"><\/script>')
  </script>
  <script type="text/javascript" data-cfasync="false" src="./?mnps=javascript-in-F_9"></script>
  <script type="text/javascript" data-cfasync="false" src="./?mnps=javascript-5"></script>
  <script type="text/javascript" data-cfasync="false" src="./?mnps=javascript-mr-h_old"></script>
  <script type="text/javascript" data-cfasync="false" src="./?mnps=javascript-mr-m"></script>
  <script type="text/javascript" data-cfasync="false" src="./?mnps=javascript-14"></script>



</body>

</html>