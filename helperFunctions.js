
// Clear all inner content of a component
export function clearComponent(component) {
  if (component) component.innerHTML = "";
}

// Set multiple attributes on a DOM element
function setAttr(element, attributes) {
  Object.entries(attributes).forEach(([attr, value]) => {
    element.setAttribute(attr, value);
  });
}

// Create and configure a DOM element with attributes
export function configureComponent(attributes, type) {
  const element = document.createElement(type);
  setAttr(element, attributes);
  return element;
}

// Run a set of callbacks with optional arguments
export function runButtonCallBacks(callbacks, args) {
  Object.entries(callbacks).forEach(([name, callback]) => {
    callback(args?.[name]); // Use optional chaining to avoid errors if args is undefined
  });
}

// Handle input-specific configuration
export function validateExternalInputFunctions(inputMetDat, inputElement) {
  if (inputMetDat.inputType === "select") {
    inputElement.innerHTML = inputMetDat.innerHTML;
  }
}




