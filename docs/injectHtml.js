import {runButtonCallBacks, configureComponent, validateExternalInputFunctions} from "./helperFunctions.js"

// Injects the text elements
export function injectTextHtml(textObject,content) {
  // Add html content
  for (const textContent of content.text) {
    textObject.innerHTML += textContent
  }
}

function runButtonEventListener(renderContent,buttonElement,buttonMetDat) {
  // Set up the click event listener for each button
  buttonElement.addEventListener("click", () => {
    const targetPage = buttonElement.getAttribute("data-toPage"); // Get the target page from data-toPage
    // Run button callbacks
    if (Object.keys(buttonMetDat.callbacks.before || {}).length > 0) {
      runButtonCallBacks(buttonMetDat.callbacks.before, []);
    }

    if (targetPage) {
      renderContent(targetPage);
    }

    if (Object.keys(buttonMetDat.callbacks.after || {}).length > 0) {
      runButtonCallBacks(buttonMetDat.callbacks.after, []);
    }
    
  });
}


function configureLabel(inputMetDat){
  const metDat = inputMetDat.label
  const labelElement = configureComponent(metDat.attr,"label")
  labelElement.textContent = metDat.textContent
  return labelElement
}



// Injects the button elements
export function injectButtonHtml(renderContent,buttonObject,content) { // Render content is a callback to prevent circular imports
  // Loop through the buttons and render them
  for (const buttonMetDat of content.buttons) {
    // Configure the button
    const buttonElement = configureComponent(buttonMetDat.attr,"button");
    buttonElement.textContent = buttonMetDat.textContent;
  
    runButtonEventListener(renderContent,buttonElement,buttonMetDat)
    
    // Append the button to the button container
    buttonObject.appendChild(buttonElement);
  }
}

// Injects the input elements
export function injectInputHtml(inputObject,content) { // Render content is a callback to prevent circular imports
  // Loop through the input and render them
  for (const inputMetDat of content.input) {
    // Configure the input element
    let inputElement = configureComponent(inputMetDat.attr,inputMetDat.inputType);
    
    if (inputMetDat.readOnly === true) {
      inputElement.readOnly = true
    }

    validateExternalInputFunctions(inputMetDat,inputElement)
    if (inputMetDat.label.size !== 0){
      // console.log('Configuring')
      const labelElement = configureLabel(inputMetDat)
      labelElement.appendChild(inputElement)
      
      inputElement = labelElement // Set as new input element
    }

    // Append the input to the input container
    inputObject.appendChild(inputElement);
  }
}
