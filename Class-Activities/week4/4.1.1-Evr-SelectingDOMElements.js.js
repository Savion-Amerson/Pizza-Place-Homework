// select all unordered list (ul) elements
console.log(document.getElementsByTagName("ul"));

// select all elements with the class "class-week"
console.log(document.querySelectorAll(".class-week"));

// select all elements with the class "nav-bar"
console.log(document.getElementsByName("nav-bar"));

// select the element with the id "dog-picture" and save it to a variable
console.log(document.id("dog-picture"));



// select the root node
console.log("html-1", document.querySelector("html"));
console.log("html-2", document.getElementsByTagName("html"));
console.log("html-3", document.querySelector("p").getRootNode);

// select the last child of the root node
console.log(document.querySelector("p").lastChild);
console.log(document.querySelector("html").lastElementChild);

// select all the children of the body element
console.log("body children", document.querySelector("body").children);

// select the next sibling of the h2 node
console.log("h2 next sibling", document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node
console.log("h1 parent", document.querySelector("h1").parentElement);



// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar");
console.log("nav bar", navBar.outerHTML);

// print the inner HTML of the navigation bar
console.log("inner html", navBar.innerHTML);

// print the text content of the #class-schedule-list element
const firstClassWork = document.querySelector("#class-schedule-list");
console.log(firstClassWork.textContent);

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");

// select the img element and add a src attribute
// document.querySelector("img").src = ""

// change the font color of the h1 element
document.querySelector("h1").style.color = "blue"



// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList)

// create two new list item (li) elements, and add some text to them
const listItem = document.createElement("li");
const listItem2 = document.createElement("li");

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItem);
document.querySelector(".nav-bar > ul").appendChild(listItem2);




// add an event listener to the dog picture that listens for a "click" and gives an alert
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color


// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
