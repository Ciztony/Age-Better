import {alertUser} from "./alertTextBox.js"

// Various functions used by buttons to execute a response

export function changeStats(args){ // Similar to the bottom change stats function to make the display match the profile
   let nameElement = document.getElementById("name")
   let mobilityElement = document.getElementById("mobility")
   let points = document.getElementById("points")
   let dataset = document.getElementById("input").dataset
   nameElement.textContent += dataset.name
   mobilityElement.textContent += dataset.mobility
   points.textContent += dataset.points
}

export function setWelcomeToUser(args){ // Resets the welcome title to match user name
  let welcomeTitle = document.getElementById("welcome")
  let name = document.getElementById("input").getAttribute("data-name")
  if (name !== "User" && name !== "") {
    welcomeTitle.textContent = `Welcome ${name}!`
  }
}

export function finishChangingProfile(args) { // Saves new profile info
   let newName = document.getElementById("nameInput").value // Gets the values in the input
   let newMobilityType = document.getElementById("mobilityInput").value
   let inputDiv = document.getElementById("input") // Get the input div
   inputDiv.setAttribute("data-name",newName) // Set the new profile attribute
   inputDiv.setAttribute("data-mobility",newMobilityType)
}

export function setDefaultProfile(args){
   let nameInput = document.getElementById("nameInput") // Set default account so that problems dont occur
    let mobilityInput =  document.getElementById("mobilityInput")
    nameInput.value = "User"
    mobilityInput.value = "Normal"
 }

export function checkForNewUser() { // Give alert new user alert message once button is triggered
  // Temporary notification
  if (document.getElementById("bP").textContent === "Complete") {
    alertUser("Welcome to the Age Better App! Hope this benefits you!")
  }
}

export function changeInputFieldValues(args){ // Get the value of the profile and set as the value of the input boxes when on change profile page
  let inputDiv = document.getElementById("input")
   let name = inputDiv.getAttribute("data-name")
   let mobilityType = inputDiv.getAttribute("data-mobility")
   document.getElementById("nameInput").value = name
   document.getElementById("mobilityInput").value = mobilityType
}

// Congratulate user for finishing his/her exercise
export function finishExercising(args) {
   let inputDiv = document.getElementById("input") // Adds points to profile but doesn't really work because we don't actually have the coordinates
    let newPoints = Number(inputDiv.getAttribute("data-points")) + Number(document.getElementById("points-stroll").value)
   inputDiv.setAttribute("data-points",newPoints) // Sets attribute to the new Points
   alertUser("Well done for exercising and going out!!")
}

// Submit user request for attendant
export function submitUserRequestForAttendant(){
  alertUser("The attendant is coming! Pls wait...")
  // Get request
  let request = document.getElementById("submitAtndReq").value
  let notes = document.getElementById("reqNotes").value
  let inputDiv = document.getElementById("input")
  // Set attributes of the textbox to show sucessful request
  inputDiv.setAttribute("request",request)
  inputDiv.setAttribute("notes",notes)
}




// Reposition button after textbox has been rendered
export function repositionButton(){
  let backButton = document.getElementById("bC")
  let requestInfo = document.getElementById("reqIf")
  let bottom = requestInfo.getBoundingClientRect().bottom
  backButton.style.top = `${bottom+30}px`
}
