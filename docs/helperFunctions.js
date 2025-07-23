// Clear component
export function clearComponent(component) {
  component.innerHTML = "";
}


// Sets internal Html attributes
function setAttr(element,elementMetDat) {
  for (const [attr,value] of Object.entries(elementMetDat)) {
    element.setAttribute(attr,value)
    // console.log("Attr:",attr,",Value:",value)
  }
}
export function configureComponent(componentMetDat,type) {
  let element = document.createElement(type)
  setAttr(element,componentMetDat)
  // console.log(element)
  return element
}

export function runButtonCallBacks(callbacks,args) {
  for (const [name,callback] of Object.entries(callbacks)) {
    callback(args[name]) // Run callbacks
  }
}

export function validateExternalInputFunctions(inputMetDat, inputElement) {
  switch (inputMetDat.inputType) {
    case "select":
      inputElement.innerHTML = inputMetDat.innerHTML
      break
    default:
      break
  }
}





