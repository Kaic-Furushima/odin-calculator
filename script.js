let result = null;
let mainString;

const calculatorScreen = document.querySelector("#calculatorScreen");

const buttonClean = document.querySelector("#cleanScreen");
const buttonChange = document.querySelector("#changeSignal");
const buttonPercentage = document.querySelector("#percentage");

const buttonDivide = document.querySelector("#divide");
const buttonMultiply = document.querySelector("#multiply");
const buttonSubtract = document.querySelector("#subtract");
const buttonAdd = document.querySelector("#add");
const buttonEquals = document.querySelector("#equals");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");
const buttonSix = document.querySelector("#six");
const buttonSeven = document.querySelector("#seven");
const buttonEight = document.querySelector("#eight");
const buttonNine = document.querySelector("#nine");
const buttonZero = document.querySelector("#zero");
const buttonPoint = document.querySelector("#point");

function operate(string){
    let array = string.split(" ");
    
    let num1 = parseFloat(array[0]);
    let operation = array[1];
    let num2 = parseFloat(array[2]);

    if(operation == "+"){
        result = num1 + num2;
    } else if(operation == "-"){
        result = num1 - num2;
    } else if(operation == "*"){
        result = num1 * num2;
    } else if(operation == "/"){
        if(num2 != 0){
            result = num1 / num2;
        } else {
            result = "lol";
        }
    }
}

function clean(){
    string = "";
}

function addNumberToString(number){
    string += (number + " ");
}

function addOperationToString(operation){
    string += operation;
}

function showOnScreen(string){
    let toShow = document.createElement("p");
    toShow.textContent = string;
    calculatorScreen.appendChild(toShow)
}

showOnScreen("2939");