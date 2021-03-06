# three.js 

This repo is my work from going through the [three.js docs tutorial](https://threejs.org/docs)

## Setup 
1. Install the threejs npm package with `npm i three --save`
2. Setup your project with [webpack](https://github.com/corinneling/learn-threejs/blob/master/setup-webpack.md)
3. Set the size of your canvas to 100%
4. Reference your js file in the body tag of your html page
5. Set the scene, camera, renderer
6. Add an object

## Notes
threejs uses the [WebGL](https://caniuse.com/#feat=webgl) API to create visuals in the browser by accessing a computer’s specialised graphics hardware using JavaScript, and render the output to a webpage in a `<canvas>`

To display anything with three js we need:
  1. Scene
  2. Camera
  3. Renderer

### Scene
`var scene = new THREE.Scene();`

### Camera
```
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
/// PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
```

PerspectiveCamera is one of a few cameras in three js
  * 75 = Camera frustum,the region of space in the modeled world that may appear on the screen, vertical field of view.
    * the value is in degrees, and it is the max seen of the scene at any given time
  * window.innerWidth / window.innerHeight = Camera frustum aspect ratio.
    * almost always use this ratio or the image will look squished
  * 0.1 & 1000 = Camera frustum near and far plane.
    * objects farther or closer away than these values will not be rendered 

### Renderer
```
var renderer = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
```

  * The WebGLRenderer is one of a few three js renderers
     * three js also includes fallback renderers for users with older browsers
  * Set size = sets the size the app will be rendered
     * Right now it will be fill the browser
     * For increased performance you can set it to window.innerWidth/2, window.innerHeight/2

### Add an Object
**Cube**
```
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });
  var cube = new THREE.Mesh(geometry, material);
```

  * BoxGeometry
    * this object contans all of the points (vertices) and fill (faces) of the cube
  * MeshBasicMaterial 
     * Is one of many materials that threejs comes with
  * Mesh
    * Combines the two. It takes a BoxGeometry and applies a Material to it

**Line**
* There are two classes available for drawing lines: LineBasicMaterial or LineDashedMaterial
* The lines are drawn between each consecutive pair of vertices. For example: 
```
geometry.vertices.push(new THREE.Vector3(-20, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 20, 0));
geometry.vertices.push(new THREE.Vector3(20, 0, 0));
```

### Render the Scene
```
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // rotates the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
```

  * To render everything we need a render/animate loop
     * This loop lets the renderer draw the scene every time the screen is refreshed
     * A typical screen is refreshed 60 times per second
     * requestAnimationFrame pauses whenever a user goes to a different tab in their browser

### Add [Orbit Control](https://threejs.org/docs/#examples/controls/OrbitControls)
1. Add the [npm package](https://www.npmjs.com/package/three-orbit-controls): `npm i three-orbit-controls` 
2. Require it in the file: `const OrbitControls = require('three-orbit-controls')(THREE);`
3. Create a new instance of the oribit control: `const controls = new OrbitControls(camera);`
4. In the render function and in the animate function call the update method: `controls.update();`

## Resources
https://threejs.org/

https://humaan.com/blog/web-3d-graphics-using-three-js/

### 3D Graphics
* [3D Warehouse](https://3dwarehouse.sketchup.com/) is a great place to get free 3D Graphics to test out threejs with

* Sketchup
https://www.sketchup.com/plans-and-pricing#for-personal