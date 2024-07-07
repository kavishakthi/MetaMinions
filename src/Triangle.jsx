import * as THREE from 'three';
import { gsap } from "gsap";

function Triangle() {

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

// create Triangles 

var material = new THREE.MeshPhongMaterial({
    color : 0xf6c12a,
    shininess: 70
})

var shape = new THREE.Shape();
shape.moveTo(0,0)
shape.lineTo(2,3)
shape.lineTo(4,0)
shape.lineTo(0,0)

var ExtrudeSettings = {
    steps : 5,
    depth: 1,
    bevelEnabled : true,
    bevelThickness : 0.3,
    bevelSize : 0.5,
    bevelOffSet : 0,
    bevelSegments : 1
}

var geometry = new THREE.ExtrudeGeometry(shape, ExtrudeSettings);

geometry.center();

var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0
mesh.position.y = 0
mesh.position.z = -5
mesh.scale.set(1.5, 1.5, 1.5);

scene.add(mesh)

gsap.to(mesh, {duration: 2, x:300})
camera.position.z = 10;

var geometry1 = new THREE.PlaneGeometry(1000, 1000, 1);
var material1 = new THREE.MeshPhysicalMaterial({
    color: 0x444444
})
var plane = new THREE.Mesh(geometry1, material1)
plane.position.z = -50;
scene.add(plane);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.55)
scene.add(ambientLight);

var pointLight1 = new THREE.PointLight(0xf9eac8, 1, 100)
pointLight1.position.set(5,10,0)
pointLight1.castShadow = true;

pointLight1.shadow.camera.top = 20;
scene.add(pointLight1);

//const material = new THREE.LineBasicMaterial({color : 0x00ff00});
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
//points.push(new THREE.Vector3(10, 0, 0));

const geometry2 = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry2, material);

scene.add(line);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();

gsap.to(mesh.position, { x: 30, duration: 4 });
}

export default Triangle