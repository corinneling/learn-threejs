const THREE = require('three');

// settings -------------------------------------------
const renderWidth = window.innerWidth,
      renderHeight = window.innerHeight,
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 500),
      renderer = new THREE.WebGLRenderer({alpha:true});
// object -----------------------------------------------
const geometry = new THREE.BoxGeometry(6, 6, 6),
      material = new THREE.MeshPhongMaterial({color: 0x56c6ff, wireframe: true}),
      cube = new THREE.Mesh(geometry, material);

function generateObject() {
  // add the renderer 
  renderer.setSize(renderWidth, renderHeight);
  renderer.setClearColor( 0xffffff, 0);
  document.body.appendChild(renderer.domElement);
  // add the cube
  scene.add(cube);
  // show axes
  const axes = new THREE.AxesHelper();
  axes.scale.set(1, 1, 1);
  scene.add(axes);
  // add light source to the scene
  const light = new THREE.PointLight(0xffffff);
  light.position.set(10, 15, 20);
  scene.add(light);
  const secondLight = new THREE.PointLight(0xFFFFFF , 1.5);
  secondLight.position.set(25, 0, -80);
  scene.add(secondLight);
  // rotate the view of the camera
  camera.position.set(10, 10, 10); 
  camera.lookAt( scene.position );
}

// render and the animate the cube
function renderAnimation() {
  requestAnimationFrame(renderAnimation);
  renderer.render(scene, camera);
  cube.rotation.x += 0.015;
  cube.rotation.y += 0.015;
  cube.rotation.z += 0.015;
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
