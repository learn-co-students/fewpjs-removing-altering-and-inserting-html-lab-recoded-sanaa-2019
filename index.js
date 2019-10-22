// // Write your code here!

let main = document.querySelector("#main");
main.remove();

var newHeader = document.createElement('h1')
newHeader.id = "victory"
var node = document.createTextNode("Aiman is the champion!");
newHeader.appendChild(node);
document.body.appendChild(newHeader)
