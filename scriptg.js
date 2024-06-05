function getPHAndMoisture() {
    var PH;
    var moisture;

    while (true) {
        var pHInput = prompt("Hello user! What is your pH");
        if (pHInput === null) return null; // Handle cancel button or closing prompt
        PH = parseFloat(pHInput);
        if (!isNaN(PH) && PH > 0 && PH < 15) break;
        alert("Error, Please enter a pH between 0 and 15");
    }

    while (true) {
        var moistureInput = prompt("Hello user! What is your Moisture Level");
        if (moistureInput === null) return null; // Handle cancel button or closing prompt
        moisture = parseFloat(moistureInput);
        if (!isNaN(moisture) && moisture >= 0 && moisture <= 100) break;
        alert("Error, Please enter a moisture level between 0 and 100");
    }

    return { pH: PH, moisture: moisture };
}
