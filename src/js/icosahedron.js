const THREE = require('three');

// settings -------------------------------------------
const renderWidth = window.innerWidth,
      renderHeight = window.innerHeight,
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 500),
      renderer = new THREE.WebGLRenderer({alpha:true});
// cube -----------------------------------------------
// const geometry = new THREE.IcosahedronGeometry(0, 20),
//       material = new THREE.MeshLambertMaterial({color: 0x56c6ff, wireframe: true}),
//       cube = new THREE.Mesh(geometry, material);

var geometry = new THREE.IcosahedronGeometry(20, 0);
var material = new THREE.MeshNormalMaterial();
var icosahedron = new THREE.Mesh( geometry, material );


function generateCube() {
  // add the renderer 
  renderer.setSize(renderWidth, renderHeight);
  renderer.setClearColor( 0xffffff, 0);
  document.body.appendChild(renderer.domElement);

  // add the cube
  scene.add( icosahedron );

  // show axes
  const axes = new THREE.AxesHelper();
  axes.scale.set(1, 1, 1);
  scene.add(axes);

  // add light source to the scene
  const light = new THREE.PointLight(0xffffff);
  light.position.set(10, 15, 20);
  scene.add(light);

  // // rotate the view of the camera
  camera.position.z = 100;

}

// render and the animate the cube
function renderAnimation() {
  requestAnimationFrame(renderAnimation);
  renderer.render(scene, camera);
  icosahedron.rotation.x += 0.025;
  icosahedron.rotation.y += 0.025;
}

// resize the camera and the renderer
function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

generateCube()
renderAnimation();
window.addEventListener('resize', onWindowResize);