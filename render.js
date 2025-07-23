import {injectButtonHtml, injectTextHtml, injectInputHtml} from "./injectHtml.js"
import {clearComponent} from "./helperFunctions.js"
import {htmlContent,mainPageQuotes} from "./htmlContent.js"



// Renders page content
export function renderContent(pageNumber) {
  const content = htmlContent[String(pageNumber)]; // Get content for the current page (ensure always a string)
  
  // Get divs of the page elements
  const textObject = document.getElementById("text");
  const buttonObject = document.getElementById("buttons");
  const inputObject = document.getElementById("input");

  // Clear them
  clearComponent(textObject);
  clearComponent(buttonObject);
  clearComponent(inputObject)

  // Inject the html content into the page
  injectTextHtml(textObject, content);
  injectButtonHtml(renderContent,buttonObject,content,mainPageQuotes)
  injectInputHtml(inputObject,content)
}