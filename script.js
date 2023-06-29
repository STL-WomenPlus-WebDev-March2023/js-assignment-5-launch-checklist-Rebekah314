// Write your JavaScript code here!
//const scriptHelper = require('./scriptHelper.js');

//const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");



window.addEventListener("load", function() {

    const submitButton = document.getElementById("formSubmit");
    

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    submitButton.addEventListener("click", function(event) {

        const pilot = document.querySelector("input[name=pilotName]").value;
        const copilot = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        const cargoMass = document.querySelector("input[name=cargoMass]").value;

        let checkPilot = validateInput(pilot);
        let checkCopilot = validateInput(copilot);
        let checkFuel = validateInput(fuelLevel);
        let checkCargo = validateInput(cargoMass);

        if (checkPilot === "Empty" || checkCopilot === "Empty" 
        || checkFuel === "Empty" || checkCargo === "Empty") {
            alert("All fields are required!");
        } else if (checkPilot === "Is a Number" || checkCopilot === "Is a Number" 
        || checkFuel === "Not a Number" || checkCargo === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
        } else {
            formSubmission(window.document, list, pilot, copilot, fuelLevel, cargoMass);
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