
var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output-div");

function clickHandler(){
    outputDiv.innerText = "joisdehmdw,e " + textInput.value;

};


btnTranslate.addEventListener("click", clickHandler);


