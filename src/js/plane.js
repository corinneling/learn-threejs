const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({alpha: true});
let controls = new OrbitControls(camera);

function generatePlane() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
  const material = new THREE.MeshBasicMaterial({color: 0xeaeaea, side: THREE.DoubleSide});
  const plane = new THREE.Mesh(geometry, material);
  plane.rotateX(- Math.PI / 2);
  scene.add(plane);

  const light = new THREE.PointLight(0xffffff);
  light.position.set(10, 15, 20);
  scene.add(light);

  camera.position.set(0, 150, 200);
}


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

generatePlane();
animate();