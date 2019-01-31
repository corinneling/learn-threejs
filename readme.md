# three.js 

This repo is my work from going through the [three.js docs tutorial](httptheejs.org/docs/#manual/en/introduction/Creating-a-scene)

To display anything with three js we need
  1. Scene
  2. Camera
  3 Renderer

### Notes
**Scene**
`var scene = new THREE.Scene();`

**Camera**
`var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);`

PerspectiveCamera is one of a few cameras in three js
  * 75 = the field of view, or FOV
    * the value is in degrees, and it is the max seen of the scene at any given time
  * window.innerWidth / window.innerHeight = aspect ratio
    * almost always use this ratio or the image will look squished
  * 0.1 & 1000 = the near and far clipping plane
    * objects farther or closer away than these values will not be rendered 

  