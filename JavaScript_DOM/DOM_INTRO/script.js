//Creating an element
const newDiv = document.createElement("div"); //returns an element
const newanchor = document.createElement("a");
console.log(newDiv); //<div></div>
console.log(newanchor);

//Setting attributes
//two params ("attribute-type" , "attribute-value")
newDiv.setAttribute("class", "dom-ele dom-com");
newDiv.setAttribute("id", "dom-id");
newanchor.setAttribute("href", "https://google.com");
newanchor.setAttribute("target", "_blank");

//Get element by ID
const htmlEle = document.getElementById("h1-id"); //specific id element
const htmlClassEle = document.getElementsByClassName("html-ele");
console.log(htmlEle);
console.log(htmlClassEle);

//Query Selector
const queryEle = document.querySelector("h2");
console.log(queryEle);

//setting styles to an element
queryEle.setAttribute("class", "bg-warm");
queryEle.style.fontSize = "30px";

//Query Selector all
const allQueryEle = document.querySelectorAll(".query-class");
console.log(allQueryEle);

//task to set background color
const colorList = ["red", "blue", "green", "orange"];
for (let i = 0; i < allQueryEle.length; i++) {
  allQueryEle[i].style.backgroundColor = colorList[i];
}

//Inner HTML
newDiv.innerHTML = `
<h1>DOM Element</h1>
`;

newDiv.innerHTML += `
<p>This element is created in JS-DOM</p>
`;

newanchor.innerText = "Google";

//Inner Text
//only for adding text
queryEle.innerText += "Google     1";
queryEle.textContent += "Text     Changed in JS";

console.log(queryEle.innerText);
console.log(queryEle.textContent);

//Append and Append child

const newDivArea = document.createElement("div");
newDivArea.setAttribute("class", "new-area");

//append child (Older method)
// return and adds only a single node of element
const app_child = document.body.appendChild(newDivArea);
console.log(app_child); //single node(newDivArea)

//append(new Method)
//returns only undefied but can add multiple nodes and text
//by comma seperated values
const app = newDivArea.append(newDiv, newanchor, "  Text also can be added");
console.log(app); //undefined
