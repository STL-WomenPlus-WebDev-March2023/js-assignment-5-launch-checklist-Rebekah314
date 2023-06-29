// Write your JavaScript code here!
//const scriptHelper = require('./scriptHelper.js');

//const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");



window.addEventListener("load", function() {

    const submitButton = document.getElementById("formSubmit");
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    let list = "";

    let faultyItemsList = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    submitButton.addEventListener("click", function(event) {
        
        let checkFields = formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        
        //Make sure no fields are left blank or are incorrect type
        if (checkFields === "empty") {
            alert("All fields required!");
        } else if (checkFields === "wrong type") {
            alert("Make sure to enter valid information for each field!");
        } else {
            faultyItemsList.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
            //Update faultyItems list
            if (checkFields.includes("fuel") || checkFields.includes("cargo")) {
                launchStatus.innerHTML = "Shuttle Not Ready For Launch";
                launchStatus.style.color = "red";
                if (checkFields.includes("fuel")) {
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                } else {
                    fuelStatus.innerHTML = "Fuel level high enough for launch";
                }
                if (checkFields.includes("cargo")) {
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                } else {
                    cargoStatus.innerHTML = "Cargo mass low enough for launch";
                }
            } else {
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "green";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                
            }
        }
        
        event.preventDefault();
    });

   let listedPlanets;
   let listedPlanetsResponse = myFetch();               //this returns a promise
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet 
       //from the list of planets and add that information to your destination.
       let destination = pickPlanet(listedPlanets);
       console.log(destination);
       addDestinationInfo(document, destination.name, destination.diameter, destination.star, 
        destination.distance, destination.moons, destination.image);
   })
   
});