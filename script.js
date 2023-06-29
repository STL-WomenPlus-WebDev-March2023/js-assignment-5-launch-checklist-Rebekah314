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

    let list = document.getElementById("faultyItems");


    list.style.visibility = "hidden";

    submitButton.addEventListener("click", function(event) {

        let checkPilot = validateInput(pilot.value);
        let checkCopilot = validateInput(copilot.value);
        let checkFuel = validateInput(fuelLevel.value);
        let checkCargo = validateInput(cargoMass.value);

        if (checkPilot === "Empty" || checkCopilot === "Empty" 
        || checkFuel === "Empty" || checkCargo === "Empty") {
            alert("All fields are required!");
        } else if (checkPilot === "Is a Number" || checkCopilot === "Is a Number" 
        || checkFuel === "Not a Number" || checkCargo === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
        } else {
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
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