ConeGeometry
  var geometry = new THREE.ConeGeometry( 5, 20, 32 );

TorusGeometry 
  var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );

TorusKnotGeometry
  let geometry = new THREE.TorusKnotGeometry(20, 0.8, 67, 18, 15, 12);
  let tessellateModifier = new THREE.TessellateModifier(8);

CylinderGeometry 
  var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );

LatheGeometry
  var points = [];
  for ( var i = 0; i < 10; i ++ ) {
    points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
  }
  var geometry = new THREE.LatheGeometry( points );

SphereGeometry 
  var geometry = new THREE.SphereGeometry( 5, 32, 32 );

CircleGeometry
  var geometry = new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);

http://blog.cjgammon.com/threejs-geometry
https://medium.com/@crazypixel/geometry-manipulation-in-three-js-twisting-c53782c38bb

