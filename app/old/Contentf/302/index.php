
<?php 

if (!empty($_GET['q'])) { ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="icon" href="./?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />

  <meta charset="UTF-8">
  <title>10|-|01</title>

  <link rel="stylesheet" href="./?pages=source_FS03249?<?php echo time(); ?>">

</head>

<body>

  <div id="container"></div>

  <script type="x-shader/x-vertex" id="vertexShader">
    // uniform float amplitude;
  // attribute float size;
  uniform float amplitude;

  attribute vec3 vertexColor;

  varying vec4 varColor;

  void main()
  {
  varColor = vec4(vertexColor, 1.0);

  vec4 pos = vec4(position, 1.0);
  pos.z *= amplitude;

  vec4 mvPosition = modelViewMatrix * pos;

  gl_PointSize = 1.0;
  gl_Position = projectionMatrix * mvPosition;
  }
</script>

  <script type="x-shader/x-fragment" id="fragmentShader">
    varying vec4 varColor;

  void main()
  {
  gl_FragColor = varColor;
  }
</script>

  <?php /*<script type="text/javascript" data-cfasync="false" src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r62/three.min.js'></script>
  <script type="text/javascript" data-cfasync="false" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/trackball_ctrl_r62.js'></script>
*/ ?><script type="text/javascript" data-cfasync="false" src="./?pages=source_FJ03249?<?php echo time(); ?>"></script>

  <script type="text/javascript" data-cfasync="false" src="./?pages=source_FJ13249?<?php echo time(); ?>"></script>

  <script type="text/javascript">
    var container;
    var camera, scene, renderer;
    var controls;

    var shaderUniforms, shaderAttributes;

    var particles = [];
    var particleSystem;


    <?php
    if (!empty($_GET['q'])) {
      $path = $_GET['q'];
      list($width, $height) = getimagesize($path);
      echo "
  var imageWidth = $width;
  var imageHeight = $height;
  ";
    }
    ?>



    var imageData = null;

    var animationTime = 0;
    var animationDelta = 0.03;

    init();
    // tick();

    function init() {
      createScene();
      createControls();
      createPixelData();

      window.addEventListener('resize', onWindowResize, false);
    }

    function createScene() {
      container = document.getElementById('container');

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 3000;
      camera.lookAt(scene.position)

      renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1);

      container.appendChild(renderer.domElement);
    }

    function createControls() {
      controls = new THREE.TrackballControls(camera);

      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;

      controls.noZoom = false;
      controls.noPan = true;

      controls.staticMoving = true;
      controls.dynamicDampingFactor = 0.3;
    }

    function createPixelData() {
      var image = document.createElement("img");
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");

      image.crossOrigin = "Anonymous";
      image.onload = function() {
        image.width = canvas.width = imageWidth;
        image.height = canvas.height = imageHeight;

        context.fillStyle = context.createPattern(image, 'no-repeat');
        context.fillRect(0, 0, imageWidth, imageHeight);
        context.drawImage(image, 0, 0, imageWidth, imageHeight);

        imageData = context.getImageData(0, 0, imageWidth, imageHeight).data;

        createPaticles();
        tick();
      };

      image.src = "<?php if (!empty($_GET['q'])) {

                      echo $_GET['q'];
                    } ?>";
    }

    function createPaticles() {
      var colors = [];
      var weights = [0.2126, 0.7152, 0.0722];
      var c = 0;

      var geometry, material;
      var x, y;
      var zRange = 400;

      geometry = new THREE.Geometry();
      geometry.dynamic = false;

      x = imageWidth * -0.5;
      y = imageHeight * 0.5;

      shaderAttributes = {
        vertexColor: {
          type: "c",
          value: []
        }
      };

      shaderUniforms = {
        amplitude: {
          type: "f",
          value: 0.5
        }
      };

      var shaderMaterial = new THREE.ShaderMaterial({
        attributes: shaderAttributes,
        uniforms: shaderUniforms,
        vertexShader: document.getElementById("vertexShader").textContent,
        fragmentShader: document.getElementById("fragmentShader").textContent
      })

      for (var i = 0; i < imageHeight; i++) {
        for (var j = 0; j < imageWidth; j++) {
          var color = new THREE.Color();

          color.setRGB(imageData[c] / 255, imageData[c + 1] / 255, imageData[c + 2] / 255);
          shaderAttributes.vertexColor.value.push(color);

          var weight = color.r * weights[0] +
            color.g * weights[1] +
            color.b * weights[2];

          var vertex = new THREE.Vector3();

          vertex.x = x;
          vertex.y = y;
          vertex.z = (zRange * -0.5) + (zRange * weight);

          geometry.vertices.push(vertex);

          c += 4;
          x++;
        }

        x = imageWidth * -0.5;
        y--;
      }
      console.log(geometry.vertices.length)
      particleSystem = new THREE.ParticleSystem(geometry, shaderMaterial);

      scene.add(particleSystem);
    }

    function tick() {
      requestAnimationFrame(tick);

      update();
      render();
    }

    function update() {
      shaderUniforms.amplitude.value = Math.sin(animationTime);

      animationTime += animationDelta;

      controls.update();
    }

    function render() {
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  </script>
</body>

</html>
  <?php }
  else {
    echo "Image source is empty!";
  }
?>