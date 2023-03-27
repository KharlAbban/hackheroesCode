//Select About and Comment Modals
const aboutModal = document.querySelector("#aboutModal");
const commentsModal = document.querySelector("commentsModal");
const aboutBtn = Array.from(document.querySelectorAll(".itemAbtBtn"));
const commentsBtn = Array.from(document.querySelectorAll(".itemCmtBtn"));
//Add Click Event Listener to each about and comments button on the main page
aboutBtn.forEach(addClickEventListener);
commentsBtn.forEach(addClickEventListener);




//On click, the function console logs the element and then calls another function
//to retrieve the itemName value and numLikes value from the parent
//It then calls another function to replace the modal text with retrieved ones

//Function to add a click event listener to an element
function addClickEventListener (element) {
  element.addEventListener("click", (e) => {
    console.log(element.dataset.bsTarget);
    retrieveSpecs(element);
  });
}

//Function to retrieve item name, likes and store in variables
function retrieveSpecs (element) {
  var elementTarget = element.dataset.bsTarget;
  var elementParent = element.parentElement;
  var elementSiblingRow = elementParent.querySelector(".row");
  var getItemName = elementSiblingRow.querySelector(".itemName").textContent;
  var getItemLikes = elementSiblingRow.querySelector(".numLikes").textContent;
  console.log(elementTarget);
  repModalTitle(elementTarget, element.textContent);
}

//Function to replace modal title
function repModalTitle(target, displayText) {
  var targetModal =document.querySelector(target);
  targetModal.querySelector(".modal-title").textContent = displayText;
}
