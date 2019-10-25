<!DOCTYPE html>
<html id="themes_html" lang="en-us" class="no-js">

<head>
  <meta charset="utf-8">
  <title>Marko Nikolić - Portfolio</title>
  <link rel="icon" href="logo.ico" type="image/ico" />
  <meta name="description" content="This website for my PortFolio. ">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="author" content="Marko Nikolic">
  <?php /*?>
  <link rel="stylesheet" id="template_css" href="css/style1f.css"> */ ?>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <?php /*<link rel="stylesheet" href="css/fafa/css/materialdesingicons.css"> */ ?>
  <script type="text/javascript" src="./?marko-nikolic-portfolio-source=javascript-2?<?php echo time(); ?>"></script>
  <link rel="stylesheet" id="template_css" href="./?marko-nikolic-portfolio-source=stylesheet-9?<?php echo time(); ?>">
  <link rel="stylesheet" href="fonts/D3/D3.css" />
  <link rel="stylesheet" href="./?marko-nikolic-portfolio-source=stylesheet-8?<?php echo time(); ?>">
  <link rel="stylesheet" href="./?marko-nikolic-portfolio-source=stylesheet-7?<?php echo time(); ?>">
  <style>
    body {
      overflow: hidden;
    }

    * {
      overflow: hidden;
    }
  </style>
</head>

<body id="fullsc">
  <style>
    body {
      overflow: hidden;
      overflow-x: hidden;
      overflow-y: hidden;
    }
  </style>
  <button class="open-close-menu" id="small-screen-menu" onclick="&open"> <i class="icon ion-navicon-round"></i>

  </button>
  <ul id="menu">
    <li data-menuanchor="Home" class="active main-nav"> <a onclick="onHome()"><i class="fa fa-home"></i></a>

    </li>
    <li data-menuanchor="Shot1" class="main-nav"> <a onclick="onShot1()">1 <span>Belgrade/Kalemegdan
          [Photografy]</span></a>

    </li>
    <li data-menuanchor="Shot2" class="main-nav"> <a onclick="onShot2()">2 <span>Surčin/Belgrade/Serbia
          [Photografy]</span></a>

    </li>
    <li data-menuanchor="Shot3" class="main-nav"> <a onclick="onShot3()">3 <span>Ada Ciganlija [Photografy]</span></a>

    </li>
    <?php /*
    <li data-menuanchor="Movie" class="main-nav"> <a onclick="onMovie()"><i class="fa fa-video-camera"></i><span>Fantasy
          or Reality</span></a>
    </li> */ ?>

    <li data-menuanchor="Shot5" class="main-nav"> <a onclick="OnShot5()">4 <span>Zemun [Photografy]</span></a>

      <?php /*  <!--</a><a onclick="onShot5()">5 <span>Numbers</span></a>--> */ ?>
    </li>
    <li data-menuanchor="Shot6" class="main-nav"> <a onclick="OnShot6()">5 <span>More photos [Photografy]</span></a>

    </li>
    <li data-menuanchor="Shot7" class="main-nav"> <a onclick="OnShot7()">6 <span>Ada Ciganlija [Photografy]</span></a>

    </li>
    <li data-menuanchor="Shot8" class="main-nav"> <a onclick="OnShot8()">7 <span>Ada Ciganlija [Photografy]</span></a>

    </li>
    <li data-menuanchor="Map" class="main-nav"> <a onclick="OnMap()"><i class="fa fa-industry"></i><span>See My Work
          [IT]</span></a>

    </li>
    <li id="menu-link">
      <ul>
        <?php /* <!-- <li>

<a onclick="iders()">EN-|RS</a>

</li> --> */ ?>
        <li> <a class="open-info" <?php /*  onclick="window.location.href = '#about-anchor'; " */ ?> data-target="about-anchor">About</a>

        </li>
        <li> <a class="open-info" <?php /* onclick="window.location.href = '#clients-anchor'; " */ ?> data-target="clients-anchor">MY
            SKIlls</a>

        </li>
        <li> <a class="open-info" <?php /* onclick="window.location.href = '#contact-anchor'; " */ ?> data-target="contact-anchor">Contact</a>

        </li>
        <?php /*            <!--<li class="social-menu">

<a href="#" target="_blank"><i class="fa fa-facebook"></i> <span>Facebook</span></a>
 
</li>-->
 */ ?> <li class="social-menu"> <a href="https://twitter.com/markoni62595164" target="_blank"><i class="fa fa-twitter"></i> <span>Twitter</span></a>

        </li>
        <li class="social-menu"> <a target="_blank" href="https://instagram.com/nikoliccc02"><i class="fa fa-instagram"></i> <span>Instagram</span></a>

        </li>

        <li class="social-menu"> 
          <a target="_blank" href="https://github.com/marko9827"><i class="fa fa-github"></i> <span>Github</span></a>
        </li>
      </ul>
    </li>
  </ul>
  <div id="loading">
    <div class="overload-left"></div>
    <div class="overload-right"></div>
    <div id="preloader"> <span></span>

      <span></span>

    </div>
  </div>
  <div id="pagepiling">
    <div class="section" id="section1">
      <div class="global-overlay">
        <canvas id="dotty" width="100%" height="100%"></canvas>
      </div>
      <div class="intro">
        <p id="menu_theme_red" onclick="menu_theme_red()">R</p>
        <ul id="menu_theme_gold">
          <li onclick="menu_theme_gold()">G</li>
        </ul>
        <ul id="menu_theme_green">
          <li onclick="menu_theme_green()">G</li>
        </ul>
        <ul id="menu_theme_blue">
          <li onclick="menu_theme_blue()">B</li>
        </ul>

        <h1 class="text-shadow1">Marko Nikolić</h1>

        <p class="subtitle text-shadow1">Developer / Photographer from Serbia/Belgrade</p> <a class="color-btn" onclick="OnMap()">See my work [ IT ]</a>

        <a class="color-btn" onclick="onShot1()">See my work [Photografy , photos + video]</a>

        <a class="color-btn" href="https://www.linkedin.com/in/markonikolic98/" target="_blank">My Linkedin</a>

        <a class="color-btn" onclick="CF()">Full Screen</a>

      </div>
      <script>
        function CF() {
          if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
          }
        }
      </script> <a class="scroll-indicator" onclick="onShot1()"><span></span>Scroll</a>

    </div>
    <div class="section" id="section2">
      <div class="global-overlay"></div>
      <div class="img-info">

        <h5>Some details...</h5>


        <h2>Serbia/Belgrade</h2>

        <p class="credit"> <i class="fa fa-camera" aria-hidden="true"></i> Photo by <a class="open-info" data-target="about-anchor">Marko

            Nikolić</a>

          <br> <i class="fa fa-location-arrow" aria-hidden="true"></i>Belgrade/Kalemegdan</p> <a data-dialog="somedialog_1" class="action-btn trigger before-click">More Informations</a>

        <?php /*    <!--<a class="action-btn before-click" href="https://link-to-your-picture.jpg/" download="https://link-to-your-picture.jpg"><i class="fa fa-download" aria-hidden="true"></i></a>

<a class="action-btn before-click"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>-->*/ ?>
      </div>
    </div>
    <div class="section" id="section3">
      <div id="carousel-1" class="carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner">
          <div class="global-overlay"></div>
          <div class="item active"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="img-info">

        <h5>Some details...</h5>


        <h2> Serbia/Belgrade/Surčin</h2>

        <p class="credit"> <i class="fa fa-camera" aria-hidden="true"></i> Photo by <a class="open-info" data-target="about-anchor">Marko

            Nikolić</a>

          <br> <i class="fa fa-location-arrow" aria-hidden="true"></i> Belgrade/Surčin</p> <a onclick="OnShot6()" class="action-btn before-click" aria-hidden="false">More pictures at once</a>

        <?php /*   <!--<a class="action-btn before-click" id="carousel-1-left" href="#carousel-1"
                    data-slide="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>

<a class="action-btn before-click" id="carousel-1-right" href="#carousel-1" data-slide="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>--> */ ?>
      </div>
    </div>
    <?php /*   <!--<div class="section" id="section4">

<div class="global-overlay"></div>

<iframe src="/index.html" style="width:100%; height:100%; bottom: initial; border:0px;"></iframe>

</div>--> */ ?>
    <div class="section" id="section4">
      <div class="global-overlay"></div>
      <div class="img-info">

        <h5>Some details...</h5>


        <h2>Every ship that stands, in fact, has its own long way!</h2>

        <p class="credit"> <i class="fa fa-camera" aria-hidden="true"></i> Photo by <a class="open-info" data-target="about-anchor">Marko

            Nikolić</a>

          <br> <i class="fa fa-location-arrow" aria-hidden="true"></i> Serbia/Belgrade/Ada Ciganlija</p>
        <?php /*  <!-- <a data-dialog="somedialog_2" class="action-btn trigger before-click">More Informations</a> --> */ ?>
      </div>
    </div>
    <?php /* <div class="section" id="section5">
      <div class="global-overlay"></div>
      <a id="bgndVideo" class="player" data-property="{videoURL:'https://youtu.be/Wm_meEhlQ5Q',containment:'#section5',autoPlay:false, mute:false, startAt:0, stopAt:0, opacity:1}"></a>
      <div class="img-info">

        <h5>Some details...</h5>


        <h2>Eronel Ayra OS - Traveling universe</h2>

        <p class="credit"> <i class="fa fa-camera" aria-hidden="true"></i> Video by <a class="open-info" data-target="about-anchor">Marko

            Nikolić</a>

          <br> <i class="fa fa-location-arrow" aria-hidden="true"></i> Video Name | 3D Video Simulation</p> <a class="action-btn before-click player-nav" id="play-ytb" onclick='$("#bgndVideo").playYTP()'><i class="fa fa-play" aria-hidden="true"></i></a>

        <a class="action-btn before-click player-nav" id="pause-ytb" onclick='$("#bgndVideo").pauseYTP()'><i class="fa fa-pause" aria-hidden="true"></i></a>

        <a class="action-btn before-click player-nav" id="replay-ytb"><i class="fa fa-refresh" aria-hidden="true"></i></a>

        <a class="action-btn before-click player-nav" onclick='$("#bgndVideo").YTPFullscreen()'><i class="fa fa-expand" aria-hidden="true"></i>

        </a> <a href="https://youtu.be/Wm_meEhlQ5Q" target="_blank" class="action-btn before-click">Watch on YouTube</a>

      </div>
    </div> */ ?>
    <div class="section" id="section6">
      <div class="global-overlay"></div>
      <div class="img-info">

        <h5>Some details...</h5>


        <h2>Each color has its own hidden number! :)</h2>

        <p class="credit"> <i class="fa fa-camera" aria-hidden="true"></i> Photo by <a class="open-info" data-target="about-anchor">Marko

            Nikolić</a>

          <br> <i class="fa fa-location-arrow" aria-hidden="true"></i> Serbia / Zemun</p>
      </div>
    </div>
    <div class="section" id="section7">
      <div class="global-overlay"></div>
      <div class="row" id="vertical-parent-gallery">
        <div class="col-xs-12 col-sm-3 col-lg-3 vertical-gallery">
          <div class="vertical-photo"></div>
          <div class="text-gallery">

            <h4>Baths photographed in 2016</h4>

          </div>
        </div>
        <div class="col-xs-12 col-sm-3 col-lg-3 vertical-gallery">
          <div class="vertical-photo"></div>
          <div class="text-gallery">

            <h4>Rose photographed in 2016</h4>

          </div>
        </div>
        <div class="col-xs-12 col-sm-3 col-lg-3 vertical-gallery">
          <?php /*       <!--<a class="swipebox" data-rel="gallery1" data-title="Crazy view">

</a>--> */ ?>
          <div class="vertical-photo"></div>
          <div class="text-gallery">

            <h4>Temple of the Holy Savior | Belgrade/Serbia</h4>

          </div>
        </div>
        <div class="col-xs-12 col-sm-3 col-lg-3 vertical-gallery">
          <?php /*         <!--<a class="swipebox" data-rel="gallery1" data-title="Giant city">

</a>--> */ ?>
          <div class="vertical-photo"></div>
          <div class="text-gallery">

            <h4>Belgrade/Serbia</h4>

          </div>
        </div>
      </div>
    </div>
    <div class="section" id="section8">
      <div class="global-overlay"></div>
      <div class="img-info">

        <h5>Some details...</h5>


        <h2>Every sun air has its own color!</h2>

        <p class="credit"> <i class="fa fa-camera" aria-hidden="true"></i> Photo by <a class="open-info" data-target="about-anchor">Marko

            Nikolić</a>

          <br> <i class="fa fa-location-arrow" aria-hidden="true"></i> Serbia/Belgrade/Ada Ciganlija</p> <a class="action-btn before-click" href="https://www.instagram.com/p/BUUX7DGhS2d/?taken-by=nikoliccc02" target="_blank">View on Instagram <i class="fa fa-instagram" aria-hidden="true"></i></a>

        <?php /*   <!--<a
                    data-dialog="somedialog_4" class="action-btn trigger before-click">More Informations</a>

<a class="action-btn before-click" href="https://link-to-your-picture.jpg/" download="https://link-to-your-picture.jpg/"><i class="fa fa-download" aria-hidden="true"></i></a>

<a class="action-btn before-click"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>--> */ ?>
      </div>
    </div>
    <div class="section" id="section9">
      <div class="global-overlay"></div>
      <div class="img-info">

        <h5>Some details...</h5>


        <h2>Ada Ciganlija [Photografy]y</h2>

        <p class="credit"> <i class="fa fa-camera" aria-hidden="true"></i> Photo by <a class="open-info" data-target="about-anchor">Marko

            Nikolić</a>

          <br> <i class="fa fa-location-arrow" aria-hidden="true"></i> Serbia/Belgrade/Ada Ciganlija</p>
        <?php /*<!--<a data-dialog="somedialog_5" class="action-btn trigger before-click">More Informations</a>--> <a class="action-btn before-click" href="https://www.instagram.com/p/BUSOfCyBHSA/?taken-by=nikoliccc02" target="_blank">View on Instagram <i class="fa fa-instagram" aria-hidden="true"></i></a>

                <!--<a class="action-btn before-click"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>-->
           */ ?>
      </div>
    </div>
    <div class="section" id="section10">
      <?php /*  <!--<div class="img-info">

<h5>See you on the</h5>

<h2>PHOTO TOURS</h2>

<p class="credit">Johnny leads photo tours to select worldwide locations.<br>For information, prices, and availability, please use the contact form.</p>

<a class="action-btn before-click open-info" data-target="contact-anchor">Contact me</a>

</div>

<div class="map-wrapper">

<div id="map"></div>

</div>--> */ ?>
      <div class="global-overlay">
        <iframe id="F_slider_projcts" src="./?marko-nikolic-portfolio-source=source_099925" style="/* margin-top:50px; */width:100%;height:100%;/* bottom: initial; */border:0px;position: absolute;left: 0px;right: 0px;bottom: 0px;top: 50px;"></iframe>
      </div>
    </div>
  </div>
  <div id="info">

    <h2 id="about-anchor">Know more about me...<br><small></small></h2>

    <div id="carousel-2" class="carousel carousel-fade">
      <div id="Slika">
        <div id="slika1">
          <img src="?marko-nikolic-portfolio-source=image-3140?<?php echo time(); ?>" alt="loading..." />
        </div>
      </div>
      <?php    /*     <style>
        
#Slika {
padding-top: 0px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
height: 100%;
background: white;
width: 100%;
}

#Slika #slika1 {
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
width: 100%;
height: 100%;
background: #DAA520;
border-radius: 10px;
}

#Slika #slika1 img {
margin-bottom: 4px;
width: 100%;
height: 100%;
border-bottom: 4px #DAA520 solid;
margin-top: 10px;
}

#Slika #slika1 img:hover {
border-bottom: 4px rgba(218, 165, 32, 0.79) solid;
}

            </style>
      */ ?>
    </div>
    <div class="row">
      <?php /*  <!--<div class="col-xs-12 col-sm-12 col-lg-6">

<p>Lorem ipsum Eu adipiseaficing magna cillum proident qui aliqua elit sit occaecat amet sunt sit ullamco enim aliquip incididunt eu quis Excepteur in qui cupidatat non cupidatat qui ad ea officia deserunt sunt anim do in consectetur et anim do aliqua occaecat.</p>

</div>aefaef

<div class="col-xs-12 col-sm-12 col-lg-6">

<p>Lorem ipsum Eu adipisicing magna cillum proident qui aliqua elit sit occaecat amet sunt sit ullamco enim aliquip incididunt eu quis Excepteur in qui cupidatat non cupidatat qui ad ea officia deserunt sunt anim do in consectetur et anim do aliqua occaecat.</p>

</diaefv>-->
            <!-- aef--> */ ?>
      <div class="intro">
        <p>Programmer, Desinger</p>

        <h2>Creo</h2>

        <p>In Creo know perfectly that I do I passed 3 years of training in high school I stayed another year, perfects
          the house for Creo.</p>

        <h2>Other</h2>

        <p>Web, Windows, Mobile (Android, Windows) when I was a kid I always thought in the development of their
          applications. Today I make them successful. Android itself salvadao medium (Android SDK)</p>
        <br /> <a class="color-btn socialnew" href="https://www.linkedin.com/in/markonikolic98/" target="_blank"><i class="fa fa-instagram socialnew1"></i> Linkedin</a>

        <a class="color-btn btndemo" onkeypress="KP1()" onclick="idemo()">Eronel SDK Demo</a>

        <div class="col-xs-12 col-sm-12 col-lg-12" style="width: 100%;">
          <form id="contact-form" name="contact-form" method="POST" data-name="Contact Form">
            <div class="row" id="rowdemo">
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <div class="form-group" id="FAE_F" style="display:none;  "> <i class="fa fa-lock icon-fields"></i>

                  <input type="password" id="password" onkeydown="checkEnter(e)" onkeypress="return runScript(event)" onkeyup="return false" class="form form-control" placeholder="Please Pass*" onfocus='this.placeholder=""' onblur='this.placeholder="Type in the password!"' name="password" data-name="Name" required />
                </div>
              </div>
              <p id="demo"></p>
            </div>
          </form>
        </div>
        <script type="text/javascript">

        </script>
      </div> <span class="separator"></span>


      <h2 id="clients-anchor">My skills...<small>"It does not matter what the skill is. When and how you use it!" Author
          quoted <a class="a_program">Marko Nikolić.</a></small></h2>

      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">

            <h5 class="mb-0">

              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                Education

              </button>

            </h5>

          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body"> <span>

                <a class="a_program">Faculty of Informatics and Computing</a>, University Singidunum - Studying in
                progress, student status!

                <br><br>

              </span>

            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">

            <h5 class="mb-0">

              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                Experience



              </button>



            </h5>

          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body"> <span>

                <a class="a_program">Programming:</a> <br>C#, javascript, HTML5, css3, asp.net,PHP, jQuery UI,VB, C++,
                SQL,...

                <br>

                <a class="a_program">Game engines:</a> <br>Unreal Engine, Unity, CryEngine, in-house

                game engine (based on

                C++, OpenGL, Bullet physics...)

                <br>

                <a class="a_program">Libraries:</a> <br>Bullet and PhysX physics, OpenCV, QT, SDL2,

                Assimp, OpenGL legacy..

                <br>

                <a class="a_program"> Science : </a> <br>Quantum (Quantum Theory, Wromhole,space,gravitational
                physics,robotic solutions in medicine, space, ...), Space explore,exploring the entire history of the
                planet Earth,...

                <Br>

                <a class="a_program"> Platforms: </a> <br>PC, Android, Oculus Rift VR, Google

                Cardboard, Microsoft Kinect, Linux(Debian,Ubundu), Embedded systems.

                <Br>



                <a class="a_program">Tools & Technologies</a>

                <br>

                Microsoft SQL Server, Visual Studio, Eclipse, Qt Creator,PTC Creo, SolidWork, Git,

                VMware, Virtualbox,Windows Communication Foundation (WCF),PHP, JQuery UI, DataBases

                <br>

                <a class="a_program">Skills: </a><br>Programming , design, behavioral trees, 3D

                modeling, gameplay design, particle system, Industry Simulation(PTC CREO)

                <br>

                <a class="color-btn btndemo btnlinkedin" href="https://www.linkedin.com/in/markonikolic98/" target="_blank">More Info (Linkedin)</a>



                <br><br>

              </span>

            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo1">

            <h5 class="mb-0">

              <button class="btn btn-link " type="button" onclick="projects()">

                Projects



              </button>

              <script type="text/javascript">
                function projects() {

                  window.location.href = '#Map';

                  $(".close-content").click();

                }

                $(".close-content").click(function() {
                  window.location.href = '#Home';
                });
              </script>

            </h5>

          </div>
          <div id="collapseTwo1" class="collapse" aria-labelledby="headingTwo1" data-parent="#accordionExample">
            <div class="card-body"> <span>











                <br>

                <br>

              </span>

            </div>
          </div>
        </div>
        <div class="card" style="display:none;">
          <div class="card-header btn-downlaod" id="headingTwo1">

            <h5 class="mb-0">

              <button class="btn btn-link " type="button" onclick="projects_cv()">

                Download CV.pdf <i class="fa fa-file-pdf"></i>



              </button>

              <script type="text/javascript">
                function projects_cv() {



                }
              </script>

            </h5>

          </div>
        </div>
        <?php /*    <!-- <div class="card">

<div class="card-header" id="headingThree">

<h5 class="mb-0">

<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"

aria-expanded="false" aria-controls="collapseThree">



Miscellaneous

</button>

</h5>

</div>

<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">

<div class="card-body">

<span>

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson

ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck

quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on

it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh

helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan

excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim

aesthetic synth nesciunt you probably haven't heard of them accusamus labore

sustainable VHS.

</span> </div>

</div>

</div> -->
*/ ?>
      </div>
      <?php /* <!-- <div id="carouselClients" class="carousel slide" data-ride="carousel">

<div class="carousel-inner">

<div class="item active">

<div class="row">



<div class="col-lg-3 col-sm-3 col-xs-6">

<a onclick="onGIT()"><img src="../../../cdn.themehelite.com/themeforest/panorama/img/client-4.png"

alt="Image" class="img-responsive"></a>

</div>

</div>

</div>

<div class="item">

<div class="row">

<div class="col-lg-3 col-sm-3 col-xs-6">

<a href="#x"><img src="../../../cdn.themehelite.com/themeforest/panorama/img/client-1.png" alt="Image" class="img-responsive"></a>

</div>

<div class="col-lg-3 col-sm-3 col-xs-6">

<a href="#x"><img src="../../../cdn.themehelite.com/themeforest/panorama/img/client-2.png" alt="Image" class="img-responsive"></a>

</div>

<div class="col-lg-3 col-sm-3 col-xs-6">

<a href="#x"><img src="../../../cdn.themehelite.com/themeforest/panorama/img/client-3.png" alt="Image" class="img-responsive"></a>

</div>

<div class="col-lg-3 col-sm-3 col-xs-6">

<a href="/"><img src="../../../cdn.themehelite.com/themeforest/panorama/img/client-4.png"

alt="Image" class="img-responsive"></a>

</div>

</div>

</div>

</div>

</div>



--> */ ?><span class="separator"></span>


      <h2 id="contact-anchor">Get in touch with me<br><small>Booking / Meeting / Freelancing</small></h2>

      <div class="info-contact row">
        <div class="col-xs-12 col-sm-4 col-lg-4 item-contact">
          <div class="contact-item"> <i class="fa fa-location-arrow"></i>

            <p>Serbia/Belgrade/Surčin
              <br>
            </p>
          </div>
        </div>
        <?php /*   <!--<div class="col-xs-12 col-sm-4 col-lg-4 item-contact">

<div class="contact-item">

<i class="fa fa-keyboard-o"></i>

<p>

<a href="mailto:marko.super@gmail.com">howdy@example.com</a><br>

<a href="mailto:your-email-pro@good.com">h.pro@example.com</a>

</p>

</div>

</div>-->*/ ?>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12">
          <form disabled id="contact-form" action="" method="post">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 display-none">
                <div class="form-group">
                  <input required id="checking" class="form form-control" placeholder="Leave this field empty" onfocus='this.placeholder=""' onblur='this.placeholder="Leave this field empty"' name="checking" data-name="Checking">
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <div class="form-group"> <i class="fa fa-user icon-fields"></i>

                  <input required id="name" class="form form-control" placeholder="Name*" onfocus='this.placeholder=""' onblur='this.placeholder="Name*"' name="name" data-name="Name" required>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <div class="form-group"> <i class="fa fa-envelope icon-fields"></i>

                  <input required type="email" id="email" class="form form-control" placeholder="Email Address*" onfocus='this.placeholder=""' onblur='this.placeholder="Email Address*"' name="email-address" data-name="Email Address" required>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <div class="form-group"> <i class="fa fa-industry icon-fields"></i>

                  <input required id="company" class="form form-control" placeholder="Company name" onfocus='this.placeholder=""' onblur='this.placeholder="Company name"' name="company" data-name="Company" required>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <div class="form-group"> <i class="fa fa-phone icon-fields"></i>

                  <input required type="tel" id="phone" class="form form-control" placeholder="Phone number" onfocus='this.placeholder=""' onblur='this.placeholder="Phone number"' name="phone" data-name="Phone" required>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-lg-12">
                <div class="form-group"> <i class="fa fa-pencil icon-fields"></i>

                  <textarea required id="text-area" class="form textarea form-control" placeholder="Your message here*... 20 characters Min." onfocus='this.placeholder=""' onblur='this.placeholder="Your message here*... 20 characters Min."' minlength="20" maxlegth="120" name="message" data-name="Text Area" required></textarea>
                </div> <span class="sub-text">* Required fields</span>

                <style>
                  #info #contact-form span.sub-text {
                    bottom: 0px;
                  }

                  .open-close-menu i {
                    overflow-x: hidden;
                  }

                  #text-area {
                    min-width: 100%;
                    min-height: 10%;
                    max-width: 100%;
                  }
                </style>
              </div>
              <?php /*       <div class="col-xs-12 col-sm-12 col-lg-12">

<input type="checkbox" id="ios" name="newsletter" value="Yes" checked>

<label for="ios" class="ios button"></label>

<label class="check-news">I want to receive your Weekly Newsletter.</label>

</div>*/ ?>
            </div>
            <input type="submit" name="submit" disabled id="valid-form" class="btn btn-color">Send my Message</button>

          </form>
          <p> There is currently no active form for upgrading! <br>
            Contact me on my email! <a style="color:blue;" href="mailto:marko.supergun@gmail.com">marko.supergun@gmail.com</a></p>
          <div id="block-answer">
            <div id="answer"></div>
          </div>
        </div>
      </div>
      <button class="close-content"><i class="icon ion-close-round"></i>

      </button>
    </div>
  </div>
  <div class="copyright">
    <?php /*  <!--<button id="myBtn" onclick="onHome()">f<i class="fa fa-arrow-circle-o-up"></i></button>--> */ ?>
    <p class="credit"> <a onclick="onHome()">TOP<i class="fa top"></i></a> | Copyright © 2014 - <?php echo date("Y"); ?>
      <a class="open-info" data-target="about-anchor">Marko Nikolić</a> | Serbia/Belgrade.</p>
    <script type="text/javascript">

    </script>
  </div> <span class="holdscroll"></span>



  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-3?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-4?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-5?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-6?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-7?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-8?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-9?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-10?<?php echo time(); ?>"></script>
  <?php /* <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-11?<?php echo time(); ?>"></script> */ ?>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-12?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-13?<?php echo time(); ?>"></script>
  <script data-cfasync="false" src="./?marko-nikolic-portfolio-source=javascript-14?<?php echo time(); ?>"></script>
  <?php /*          -->  <input style="display: none !important;" type="text" id="input" placeholder="type whatever" value="Marko Nikolić" title="type and press enter" />

 
  <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.min.js'></script>
  <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/OrbitControls.js'></script>
  <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/perlin.js'></script>




   <script   src="./?marko-nikolic-portfolio-source=javascript-15?<?php echo time(); ?>"></script>
  <script type="text/javascript" src="js/js_s/map.php?<?php echo time(); ?>" async></script> *f/ ?>


  <script type="text/javascript">
    console.clear();

    var ww = window.innerWidth,
      wh = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.getElementById('dotty_cirle')
    });
    renderer.setSize(ww, wh);
    renderer.setClearColor(0x001a2d);

    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x001a2d, 80, 140);

    var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.1, 200);
    camera.position.x = 70;
    camera.position.y = 30;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3());

    // var controls = new THREE.OrbitControls(camera, renderer.domElement);

    
    var moonLight = new THREE.PointLight(0xffffff, 2, 150);
    scene.add(moonLight);

    var moon;

    function createMoon() {
      var geometry = new THREE.SphereGeometry(8, 32, 32);
      var material = new THREE.MeshPhongMaterial({
        color: 0x26fdd9,
        shininess: 15,
        emissive: 0x2bb2e6,
        emissiveIntensity: 0.8
      });
      moon = new THREE.Mesh(geometry, material);
      moon.position.x = -9;
      moon.position.z = -6.5;
      moon.position.y = 1;
      moon.rotation.y = -1;
      scene.add(moon);
      moonLight.position.copy(moon.position);
      moonLight.position.y += 4;
      var moonLight2 = new THREE.PointLight(0xffffff, 0.6, 150);
      scene.add(moonLight2);
      moonLight2.position.x += 20;
      moonLight2.position.y -= 20;
      moonLight2.position.z -= 25;
    }

    function createTerrain() {
      var geometry = new THREE.PlaneGeometry(150, 150, 120, 120);
      var m = new THREE.Matrix4();
      m.makeRotationX(Math.PI * -0.5);
      geometry.applyMatrix(m);
      for (var i = 0; i < geometry.vertices.length; i++) {
        var vector = geometry.vertices[i];
        var ratio = noise.simplex3(vector.x * 0.03, vector.z * 0.03, 0);
        vector.y = ratio * 10;
      }
      var material = new THREE.MeshPhongMaterial({
        color: 0x198257,
        emissive: 0x032f50
      });
      var plane = new THREE.Mesh(geometry, material);
      scene.add(plane);
    }

    var stars = new THREE.Group();
    scene.add(stars);
    var starsLights = new THREE.Group();
    scene.add(starsLights);
    var starsAmount = 20;

    function createStars() {
      var geometry = new THREE.SphereGeometry(0.3, 16, 16);
      var material = new THREE.MeshBasicMaterial({
        color: 0xffffff
      });
      for (var i = 0; i < starsAmount; i++) {
        var star = new THREE.Mesh(geometry, material);
        star.position.x = (Math.random() - 0.5) * 150;
        star.position.z = (Math.random() - 0.5) * 150;
        var ratio = noise.simplex3(star.position.x * 0.03, star.position.z * 0.03, 0);
        star.position.y = ratio * 10 + 0.3;
        stars.add(star);
        var velX = (Math.random() + 0.1) * 0.1 * (Math.random() < 0.5 ? -1 : 1);
        var velY = (Math.random() + 0.1) * 0.1 * (Math.random() < 0.5 ? -1 : 1);
        star.vel = new THREE.Vector2(velX, velY);
        var starLight = new THREE.PointLight(0xffffff, 0.8, 3);
        starLight.position.copy(star.position);
        starLight.position.y += 0.5;
        starsLights.add(starLight);
      }
    }

    function updateStar(star, index) {
      if (star.position.x < -75) {
        star.position.x = 75;
      }
      if (star.position.x > 75) {
        star.position.x = -75;
      }
      if (star.position.z < -75) {
        star.position.z = 75;
      }
      if (star.position.z > 75) {
        star.position.z = -75;
      }

      star.position.x += star.vel.x;
      star.position.z += star.vel.y;
      var ratio = noise.simplex3(star.position.x * 0.03, star.position.z * 0.03, 0);
      star.position.y = ratio * 10 + 0.3;


      starsLights.children[index].position.copy(star.position);
      starsLights.children[index].position.y += 0.5;
    }

    function render(a) {
      requestAnimationFrame(render);
      for (var i = 0; i < starsAmount; i++) {
        updateStar(stars.children[i], i);
      }
      renderer.render(scene, camera);
    }

    function onResize() {
      ww = window.innerWidth;
      wh = window.innerHeight;
      camera.aspect = ww / wh;
      camera.updateProjectionMatrix();
      renderer.setSize(ww, wh);
    }

    createMoon();
    createTerrain();
    createStars();
    requestAnimationFrame(render);
    window.addEventListener('resize', onResize);
  </script> *f/ ?>
  <script src="./js/js_s/oth/dist/script.php"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'></script>

  <script src="https://maps.google.com/maps/api/js"></script>

*/ ?>
  <?php /*
        <!--[if lt IE 10]>
            <script type="text/javascript" src="js/placeholder.php?<?php echo time(); ?>"></script>
  <![endif]-->
        */ ?>
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
</body>

</html>
<?php if (isset($_POST['submit'])) {
  $to = "marko.supergun@gmail.com"; // this is your Email address $from=$ _POST[ 'email-address']; // this is the sender 's Email address

  $first_name = $_POST['name '];

  $last_name = $_POST['company '];

  $subject = "Form submission";

  $subject2 = "Copy of your form submission";

  $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message '];

  $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message '];



  $headers = "From:" . $from;

  $headers2 = "From:" . $to;

  mail($to, $subject, $message, $headers);

  mail($from, $subject2, $message2, $headers2); // sends a copy of the message to the sender

  echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";

  // You can also use header('Location: thank_you.php '); to redirect to another page.

} else { }



?>