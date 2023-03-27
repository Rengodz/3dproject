import * as THREE from 'three';
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper);//

camera.position.set(0, 2, 5);

const boxMesh = new THREE.BoxGeometry(4, 10, 10);
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF88});
const box = new THREE.Mesh(boxMesh, boxMaterial);
box.scale.set(0.2, 0.1, 0.1);
scene.add(box);

function animate() {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);