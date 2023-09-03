const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay  = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("[#uppercase]");
const LowerCaseCheck = document.querySelector("[#lowercase]");
const NumbersCheck = document.querySelector("[#numbers]");
const SpecialCheck = document.querySelector("[#special_characters]");
const indicator = document.querySelector("[data-indicator]");
const generation = document.querySelector("[generateButton]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();
//set circle = grey;


function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

}

function setIndicator(color){
    indicator.style.backgroundColor = color;

}

function getRandomInteger(min,max){
  return Math.floor(Math.random() * (max-min) + min);

}
