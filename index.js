// Write your code here!
main.remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory")
document.body.appendChild(newHeader);
let element = document.querySelector("h1#victory");
element.innerHTML = 'Firas is the champion'