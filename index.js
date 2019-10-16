// Write your code here!

//remove main with id #main

var removeElement = document.getElementById("main");

removeElement.parentNode.removeChild(removeElement);

//create new header with text node in it
var newHeader = document.createElement('h1')
newHeader.id = "victory"
var node = document.createTextNode("Eman is the champion ^_* !");
newHeader.appendChild(node);
document.body.appendChild(newHeader)
