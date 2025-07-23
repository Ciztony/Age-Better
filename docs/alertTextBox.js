const alertTextBox = document.getElementById("alertTextbox")
const alertTextContent = document.getElementById("alertTextContent")
const confirmButton = document.getElementById("confirmAlertButton")
export function alertUser(alertText) {
  alertTextContent.innerText = alertText
  alertTextBox.style.display = "block"
  confirmButton.addEventListener('click',function(){
    alertTextBox.style.display = "none"
  })
  
}
