// Stores functions that are necessary for the attendant page to display

function removeInputBoxAndSelect(buttonDiv,textBox,selectButton) {
  buttonDiv.removeChild(selectButton) // Remove the nearest attendants text box and select button
  textBox.style.display = "none"
}

function getNotesAndRequest(inputDiv) {
  // Get request data
   let request = inputDiv.getAttribute("request")
   let notes = inputDiv.getAttribute("notes")
   if (notes == "") {
     notes = "None"
   }
   console.log(notes)
   return [notes,request]
}

function rearrangePageForRequest(attendantText,requestInfo,request,notes) {
  attendantText.textContent = "Pls Wait..." // Add new text to show attendant is coming
  requestInfo.innerHTML = `---Request---<br>Request: ${request}<br>Notes: [${notes}]`
  attendantText.classList.add("h2Standard")
  requestInfo.classList.add("requestStyling")
  requestInfo.id = "reqIf"
}

function appendTextAndRequestInfo(attendantText,requestInfo) {
   let textDiv = document.getElementById("text")
   textDiv.appendChild(attendantText)
   textDiv.appendChild(requestInfo)
}

// Sets all the content in the page after user has completed his/her request for the attendant
export function setPageAfterUserHasRequested(){

   // Get the content divs
   let textBox = document.getElementById("nearest-attendants")
   let selectButton = document.getElementById("selectattendant")
   let buttonDiv = document.getElementById("buttons") 
   let inputDiv = document.getElementById("input")

   let result = getNotesAndRequest(inputDiv) // Get the notes and request attributes
   let [notes,request] = result
   
   removeInputBoxAndSelect(buttonDiv,textBox,selectButton) // Remove the input box and select button to give space for the textbox


   let attendantText = document.createElement("h2")
   attendantText.classList += "h2-standard"
   let requestInfo = document.createElement("h2") // Request Info

   rearrangePageForRequest(attendantText,requestInfo,request,notes) // Rearrange page, add new content
   appendTextAndRequestInfo(attendantText,requestInfo) // Append to DOM

}
