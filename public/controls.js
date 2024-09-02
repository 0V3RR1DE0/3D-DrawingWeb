// controls.js

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { camera, renderer } from './renderer.js';

// Orbit Controls for desktop
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// PointerLock Controls for first-person navigation
const pointerControls = new PointerLockControls(camera, renderer.domElement);
document.addEventListener('click', () => pointerControls.lock(), false);

// Add touch controls
let touchStart = null;
renderer.domElement.addEventListener('touchstart', (event) => {
    if (event.touches.length === 1) {
        touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
});

renderer.domElement.addEventListener('touchmove', (event) => {
    if (event.touches.length === 1 && touchStart) {
        const touchEnd = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        const deltaX = touchEnd.x - touchStart.x;
        const deltaY = touchEnd.y - touchStart.y;

        controls.rotateLeft(deltaX * 0.005);
        controls.rotateUp(deltaY * 0.005);

        touchStart = touchEnd;
    }
});

renderer.domElement.addEventListener('touchend', () => {
    touchStart = null;
});

export { controls, pointerControls };
