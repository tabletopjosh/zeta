function displayResults(PH, moisture) {
  alert("Your current PH is " + PH + " and your current moisture level is " + moisture);
}

function main() {
  var input = getPHAndMoisture();
  if (input !== null) {
      displayResults(input.pH, input.moisture);
  }
}

main();
