// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTargetDiv = document.getElementById("missionTarget");
   // Here is the HTML formatting for our mission target div.
   missionTargetDiv.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*6);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
