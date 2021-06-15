var div = document.createElement("div");
const divContainer = document.getElementsByClassName("container");
const div2 = document.querySelectorAll("div.gridDiv");
const range = document.getElementById("range");
const buttons = document.querySelectorAll("button")



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function onrandomTrace(item){
    item.addEventListener("mouseover", ()=> item.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);
  
}

function onBtnClick(){
    let rangeValue = document.getElementById("range").value;
    removeAllChildNodes(divContainer[0]);
    let img = document.createElement("img");
    img.setAttribute("src", "notePad.jpg");
    divContainer[0].appendChild(img)
    createField(rangeValue);
    divContainer[0].style.gridTemplateColumns = `repeat(${rangeValue}, 1fr)`;
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
    document.getElementById("blackTrace").classList.toggle("clickedBtn");
}

function randomColor(){
    document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.background = setRandomColor()));
    document.getElementById("randomColor").classList.toggle("clickedBtn");

}

// function grayScale(){
    
//     document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.opacity +=0.5 ));
    
// }

function eraser(){
    document.querySelectorAll("div.gridDiv").forEach(el => el.addEventListener("mouseover", ()=> el.style.background = "whitesmoke"));
    document.getElementById("eraser").classList.toggle("clickedBtn");
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
    document.getElementById("value").textContent = `Your number of squares is ${rangeValue}x${rangeValue}`;
}

buttons.forEach(el=>el.addEventListener("onclick",()=>{
    el.classList.toggle("clickedBtn")
}));

range.addEventListener("mouseup", createFieldRange)
createField(16);