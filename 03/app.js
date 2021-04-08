// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, this, event, event.type, event.currentTarget, event.target);
// }
// document.body.addEventListener('click', popup);
// document.body.addEventListener('click', function(){
//     console.log('cline');
// })
// const newElement = document.createElement('span');
// const textNode = document.createTextNode('hello js world!');
// newElement.appendChild(textNode);
// var v = document.querySelector("#debug").appendChild(newElement);
// console.log(outerWidth);
// console.log(name);

// var debug = document.getElementById("debug");
// console.log(debug);

// var box = document.querySelector(".box");
// console.log(box);

// var boxs = document.querySelectorAll(".box");
// console.log(boxs);


// document.body.appendChild(box);

const newElement = document.createElement('div');
const textNode = document.createTextNode('hello js world!');
newElement.appendChild(textNode);
document.querySelector("body").appendChild(newElement);