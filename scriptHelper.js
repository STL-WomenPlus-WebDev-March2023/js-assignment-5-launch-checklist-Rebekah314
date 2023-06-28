// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let checkPilot = validateInput(pilot.value);
   let checkCopilot = validateInput(copilot.value);
   let checkFuel = validateInput(fuelLevel.value);
   let checkCargo = validateInput(cargoLevel.value);
   
   if (checkPilot === "Empty" || checkCopilot === "Empty" 
   || checkFuel === "Empty" || checkCargo === "Empty") {
    return "empty";
   }

   if (checkPilot === "Is a Number" || checkCopilot === "Is a Number" 
   || checkFuel === "Not a Number" || checkCargo === "Not a NUmber") {
    return "wrong type";
   }

   let returnString = "";
   if (fuelLevel.value < 10000){
    returnString += "fuel ";
   }
   if (cargoLevel.value > 10000) {
    returnString += "cargo";
   }
   return returnString;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
