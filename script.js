var div = document.createElement("div");
const divContainer = document.getElementsByClassName("container");
const div2 = document.querySelectorAll("div.gridDiv");
const range = document.getElementById("range")
var value = 16;


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function onrandomTrace(item){
    item.addEventListener("mouseover", ()=> item.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);
  
}

function onBtnClick(){
    value = prompt("How many squares do you want?");
    removeAllChildNodes(divContainer[0]);
    let img = document.createElement("img");
    img.setAttribute("src", "notePad.jpg");
    divContainer[0].appendChild(img)
    createField(value);
    divContainer[0].style.gridTemplateColumns = `repeat(${value}, 1fr)`;
}

function addDivInsideContainer(){
    var div = document.createElement("div");
    div.classList.add("gridDiv");
    divContainer[0].appendChild(div);
}

function createField(value){
    for(let i = 0;i<value*value;i++){
        addDivInsideContainer();
        }
    blackTrace()
}

function setRandomColor(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

function blackTrace(){
    document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.background = "black"));
}

function randomColor(){
    document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.background = setRandomColor()));
}

// function grayScale(){
    
//     document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.opacity +=0.5 ));
    
// }

function eraser(){
    document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.background = "whitesmoke"));
}

function chosen(){
    document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.background = `${document.getElementById("chosenColor").value}`));
}

createFieldRange = () => {
    let rangeValue = document.getElementById("range").value
    removeAllChildNodes(divContainer[0]);
    let img = document.createElement("img");
    img.setAttribute("src", "notePad.jpg");
    divContainer[0].appendChild(img)
    createField(rangeValue);
    divContainer[0].style.gridTemplateColumns = `repeat(${rangeValue}, 1fr)`;
}

range.addEventListener("mouseup", createFieldRange)
createField(value);