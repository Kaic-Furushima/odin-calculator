let result = null;
let mainString = "";
let beforeString = "";
let afterString = "";
let toShow = document.createElement("p");

const calculatorScreen = document.querySelector("#calculatorScreen");

function operate(string){
    let trimmedString = string.trim();
    let array = trimmedString.split(" ");
    
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

function showOnScreen(){
    toShow.textContent = mainString;
    calculatorScreen.appendChild(toShow)
}

function addNumber(number){
    if(mainString[9] != null){
        return 0;
    }
    if(mainString.indexOf(".") != -1 && number == "."){
        return 0;
    }
    mainString += number + "";
    showOnScreen();
}