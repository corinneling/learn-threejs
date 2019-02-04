const THREE = require('three');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
const renderer = new THREE.WebGLRenderer({ alpha: true });

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-20, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 20, 0));
geometry.vertices.push(new THREE.Vector3(20, 0, 0));

const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);

renderScene();
