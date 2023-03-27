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


const sphereGeometry = new THREE.SphereGeometry();
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00, wireframe: true});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.scale.set(2.5, 2.5, 2.5);
scene.add(sphere);

const particlesMesh = new THREE.SphereGeometry(4, 10, 10);
const particlesMaterial = new THREE.MeshBasicMaterial({color: 0x00FF88, wireframe: true});
const particles = new THREE.Mesh(particlesMesh, particlesMaterial);
particles.scale.set(0.5, 0.5, 0.5);
scene.add(particles);

function animate() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    particles.rotation.y += 0.01;
renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);