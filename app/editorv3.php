<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Solarna Pločica 3D</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: black;
    }
    canvas {
      display: block;
    }
  </style>
</head>
<body>

<!-- Three.js -->
<script src="https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js"></script>
<!-- OrbitControls (prava putanja i globalna dostupnost) -->
<script src="https://cdn.jsdelivr.net/npm/three@0.158.0/examples/js/controls/OrbitControls.min.js"></script>

<script>
  let tile; // globalno, da možemo pristupiti u animaciji
  let controls;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Svetlo
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x404040));

  // Orbit kontrole
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.3;

  // Učitaj teksturu
  const loader = new THREE.TextureLoader();
  loader.load('solar_tile.png', function(texture) {
    const geometry = new THREE.PlaneGeometry(3, 6);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.8,
      roughness: 0.2,
      side: THREE.DoubleSide
    });

    tile = new THREE.Mesh(geometry, material);
    scene.add(tile);
  });

  // Animacija
  function animate() {
    requestAnimationFrame(animate);
    if (tile) {
      tile.rotation.y += 0.003;
      tile.rotation.x = Math.sin(Date.now() * 0.0002) * 0.1;
    }
    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  // Resajz
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
</script>

</body>
</html>
