document.getElementById('soilForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var moisture = parseInt(document.getElementById('moisture').value);
    var ph = parseFloat(document.getElementById('ph').value);

    // Validate moisture level
    var moistureMsg = '';
    if (moisture < 1 || moisture > 10 || isNaN(moisture)) {
        moistureMsg = 'Moisture level must be between 1 and 10.';
    }

    // Validate pH level
    var phMsg = '';
    if (ph < 0 || ph > 14 || isNaN(ph)) {
        phMsg = 'pH level must be between 0 and 14.';
    }

    // Check if soil is likely to erode
    var resultMsg = '';
    if (moisture < 5 || (ph < 6 || ph > 8)) {
        resultMsg = 'Your soil is likely to erode.';
    } else {
        resultMsg = 'Your soil is stable.';
    }

    // Display result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Name: ${name}</p>
        <p>State: ${state}</p>
        <p>City: ${city}</p>
        <p>Moisture Level: ${moisture}</p>
        <p>pH Level: ${ph}</p>
        <p class="${moistureMsg || phMsg ? 'error' : 'success'}">${moistureMsg || phMsg || resultMsg}</p>
    `;
});