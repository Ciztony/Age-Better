import {
  runButtonCallBacks,
  configureComponent,
  validateExternalInputFunctions
} from "./helperFunctions.js";




// Inject text elements
export function injectTextHtml(textObject, content) {
  content.text.forEach(textContent => {
    textObject.innerHTML += textContent;
  });
}

function setRandomQuote(quoteList,page) {
  if (page == "main-page") {
    let textDiv = document.getElementById('text')
    let quoteListLength = quoteList.length
    const randomIndex = Math.floor(Math.random() * quoteListLength)
    let quote = quoteList[randomIndex]
    textDiv.innerHTML += `<h3 class="h3-standard" style="top:300px; position:absolute">~ ${quote} ~</h3>`
  }
}

// Handles button click and callbacks
function runButtonEventListener(renderContent, buttonElement, buttonMetDat,quoteList) {
  buttonElement.addEventListener("click", () => {
    const { callbacks = {} } = buttonMetDat;
    const targetPage = buttonElement.getAttribute("data-toPage");



    if (callbacks.before && Object.keys(callbacks.before).length) {
      runButtonCallBacks(callbacks.before, []);
    }

    if (targetPage) {
      renderContent(targetPage);
    }
    setRandomQuote(quoteList,targetPage)

    if (callbacks.after && Object.keys(callbacks.after).length) {
      runButtonCallBacks(callbacks.after, []);
    }
  });
}

// Configure label + bind to input
function configureLabel(inputMetDat) {
  const { label } = inputMetDat;
  const labelElement = configureComponent(label.attr, "label");
  labelElement.textContent = label.textContent;
  return labelElement;
}

// Inject button elements
export function injectButtonHtml(renderContent, buttonObject, content,quoteList) {
  content.buttons.forEach(buttonMetDat => {
    const buttonElement = configureComponent(buttonMetDat.attr, "button");
    buttonElement.textContent = buttonMetDat.textContent;

    runButtonEventListener(renderContent, buttonElement, buttonMetDat,quoteList);
    buttonObject.appendChild(buttonElement);
  });
}

// Inject input elements
export function injectInputHtml(inputObject, content) {
  content.input.forEach(inputMetDat => {
    let inputElement = configureComponent(inputMetDat.attr, inputMetDat.inputType);

    if (inputMetDat.readOnly) {
      inputElement.readOnly = true;
    }

    validateExternalInputFunctions(inputMetDat, inputElement);

    if (inputMetDat.label && Object.keys(inputMetDat.label).length) {
      const labelElement = configureLabel(inputMetDat);
      labelElement.appendChild(inputElement);
      inputElement = labelElement; // replace with label-wrapped element
    }

    inputObject.appendChild(inputElement);
  });
}

