// overlay.js

document.addEventListener('DOMContentLoaded', () => {
    const fluidDensityInput = document.getElementById('fluid-density');
    const viscosityInput = document.getElementById('viscosity');
    const fluidDensityValue = document.getElementById('fluid-density-value');
    const viscosityValue = document.getElementById('viscosity-value');
    const resetButton = document.getElementById('reset-settings');

    fluidDensityInput.addEventListener('input', () => {
        fluidDensityValue.textContent = `${fluidDensityInput.value}%`;
        console.log('Fluid Density:', fluidDensityInput.value);
    });

    viscosityInput.addEventListener('input', () => {
        viscosityValue.textContent = `${viscosityInput.value}%`;
        console.log('Viscosity:', viscosityInput.value);
    });

    resetButton.addEventListener('click', () => {
        fluidDensityInput.value = 50;
        viscosityInput.value = 50;
        fluidDensityValue.textContent = '50%';
        viscosityValue.textContent = '50%';
        console.log('Settings reset');
    });
});
