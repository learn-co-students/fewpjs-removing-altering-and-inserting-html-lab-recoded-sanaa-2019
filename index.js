document.querySelector('main').remove();

let newHeader= document.createElement('h1');
newHeader.id='victory';
let text= document.createTextNode('Taghreed is the champion');
newHeader.appendChild(text);
document.body.appendChild(newHeader);
