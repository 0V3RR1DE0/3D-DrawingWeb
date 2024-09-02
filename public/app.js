// app.js

import { scene, camera, renderer } from './renderer.js';
import { controls, pointerControls } from './controls.js';

// Add a moving sphere to visualize movement
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 0.5;
scene.add(sphere);

// Update the sphere's position based on camera movement
function updateSpherePosition() {
    sphere.position.copy(camera.position);
    sphere.position.y -= 0.5; // Offset the sphere slightly below the camera
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Orbit controls
    updateSpherePosition();
    renderer.render(scene, camera);
}
animate();
