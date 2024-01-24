// weight = mass * gravity

function calculateWeight() {
    const gravity = {
        MERCURY: 3.7,
        VENUS: 8.87,
        EARTH: 9.81,
        MARS: 3.71,
        JUPITER: 24.79,
        SATURN: 10.44,
        URANUS: 8.69,
        NEPTUNE: 11.15,
    };

    const massInput = document.getElementById("mass");
    const planetInput = document.getElementById("planet");
    const result = document.getElementById('result');

    const mass = parseFloat(massInput.value);

    if (isNaN(mass) || mass <= 0) {
        result.innerHTML = 'Please enter a valid positive mass.';
        return;
    }

    const selectedPlanet = planetInput.value.toUpperCase();

    if (!(selectedPlanet in gravity)) {
        result.innerHTML = 'Please select a valid planet.';
        return;
    }

    const weight = mass * gravity[selectedPlanet];

    result.innerHTML = `The weight on ${selectedPlanet} is ${weight.toFixed(2)} N`;
}
