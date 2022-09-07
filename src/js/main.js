// Functions for drag and drop
let automaticBox = document.getElementById("automatic-box");
let returnObject = document.getElementById("money-container");
let coins = document.getElementsByClassName("amount");

automaticBox.addEventListener("dragover", (e) => dragProduct(e));
automaticBox.addEventListener("drop", (e) => dropProduct(e));

returnObject.addEventListener("dragover", (e) => dragProduct(e));
returnObject.addEventListener("drop", (e) => dropProductReturn(e));

for(let i=0; i<coins.length; i++){
    coins[i].setAttribute("draggable", "true");
    coins[i].setAttribute("id", "amount" + i);
    coins[i].addEventListener("dragstart", (e) => startDrag(e));
    if (draggable="true") {
        coins[i].style.width = "80px";
    }   
}

function startDrag(e) {
    e.dataTransfer.setData("idCoins", e.target.id);
    console.log(e.target.id);
}

function dragProduct(e) {
    console.log("arrastrando");
    e.preventDefault()
}

function dropProduct(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("idCoins");
    automaticBox.appendChild(document.getElementById(data));
    console.log(automaticBox.childElementCount);
}

function dropProductReturn(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("idCoins");
    returnObject.appendChild(document.getElementById(data));
    console.log(returnObject.childElementCount);
}