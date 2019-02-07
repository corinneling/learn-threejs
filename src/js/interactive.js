const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

// settings -------------------------------------------
const renderWidth = window.innerWidth,
      renderHeight = window.innerHeight,
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 500),
      renderer = new THREE.WebGLRenderer({alpha:true}),
      controls = new OrbitControls(camera);
// object -----------------------------------------------
const icosahedron = new THREE.SphereGeometry(5, 32, 32),
      knot = new THREE.TorusKnotGeometry(32, 4, 16, 20, 20),
      material = new THREE.MeshNormalMaterial(),
      icosahedronMesh = new THREE.Mesh( icosahedron, material ),
      knotMesh = new THREE.Mesh( knot, material );

function generateObject() {
  // add the renderer 
  renderer.setSize(renderWidth, renderHeight);
  renderer.setClearColor(0xffffff, 0);
  document.body.appendChild(renderer.domElement);
  // add the object
  scene.add(icosahedronMesh);
  scene.add(knotMesh);
  // add light source to the scene
  const light = new THREE.PointLight(0xffffff);
  light.position.set(10, 15, 20);
  scene.add(light);
  // rotate the view of the camera
  camera.position.set(0, 20, 100);
  controls.update();
}

// render and the animate the cube
function renderAnimation() {
  requestAnimationFrame(renderAnimation);
  renderer.render(scene, camera);
  controls.update();
}

// resize the camera and the renderer
function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

generateObject()
renderAnimation();
window.addEventListener('resize', onWindowResize);