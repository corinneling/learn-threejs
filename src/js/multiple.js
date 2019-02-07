const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

 // settings -------------------------------------------
const renderWidth = window.innerWidth,
      renderHeight = window.innerHeight,
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 750),
      renderer = new THREE.WebGLRenderer({alpha:true}),
      controls = new OrbitControls(camera);
// object -----------------------------------------------
const geometry = new THREE.IcosahedronGeometry(8, 0),
      material = new THREE.MeshNormalMaterial();

function generateObjects() {
  // add the renderer 
  renderer.setSize(renderWidth, renderHeight);
  renderer.setClearColor(0xffffff, 0);
  document.body.appendChild(renderer.domElement);

  // add the objects
  for(let i = 0; i < 11; i++) {
    for(let x = 0; x < 11; x++){
      const xOffset = -125;
      let icosahedron = new THREE.Mesh(geometry, material);
      icosahedron.position.x = (Math.floor((Math.random() * 80)) * i) + xOffset;
      icosahedron.position.y = (Math.floor((Math.random() * 100)) * i);
      icosahedron.position.z = (Math.floor((Math.random() * 100)) * x);
      scene.add(icosahedron);
    }
  }

  // add light source to the scene
  const light = new THREE.PointLight(0xffffff);
  light.position.set(10, 15, 20);
  scene.add(light);

  // set the view of the camera
  camera.position.set(100, 150, 250);
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

generateObjects()
renderAnimation();
window.addEventListener('resize', onWindowResize); 