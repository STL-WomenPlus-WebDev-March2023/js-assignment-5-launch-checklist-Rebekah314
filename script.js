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

    submitButton.addEventListener("click", function(event) {
        
        let checkFields = formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

        //Make sure no fields are left blank
        if (checkFields === "empty") {
            alert("All fields required!");
            event.preventDefault();
        }
        if (checkFields === "wrong type") {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        }

    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});