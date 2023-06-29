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

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   
   if (checkPilot === "Empty" || checkCopilot === "Empty" 
   || checkFuel === "Empty" || checkCargo === "Empty") {
        window.alert("All fields required!");
   } else if (checkPilot === "Is a Number" || checkCopilot === "Is a Number" 
   || checkFuel === "Not a Number" || checkCargo === "Not a NUmber") {
        window.alert("Make sure to enter valid information for each field!");
   } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;



        if (fuelLevel.value < 10000 || cargoLevel.value > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready For Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            if (fuelLevel.value < 10000) {
                fuelStatus.innerHTML = "Fuel level too low for launch";
            } else {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
            }
            if (cargoLevel.value > 10000) {
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            } else {
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
            }
        } else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            
        }

   } 
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
