let result = null;
let mainString = "";
let screenString = "";
let operation = "";
let toShow = document.createElement("p");

const calculatorScreen = document.querySelector("#calculatorScreen");

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function operate(){
    let trimmedString = mainString.trim();
    let array = trimmedString.split(" ");
    
    let num1 = parseFloat(array[0]);
    let operation = array[1];
    let num2 = parseFloat(array[2]);

    if(operation == "+"){
        screenString = num1 + num2;
    } else if(operation == "-"){
        screenString = num1 - num2;
    } else if(operation == "*"){
        screenString = num1 * num2;
    } else if(operation == "/"){
        if(num2 != 0){
            screenString = num1 / num2;
        } else {
            result = "lol";
        }
    }
    if(isFloat(screenString)){
        screenString = screenString.toFixed(2);
    }

    mainString = screenString + "";
    showOnScreen();
    screenString = "";
}

function clean(){
    mainString = "";
    screenString = "";
    operation = "";
    showOnScreen();
}

function showOnScreen(){
    toShow.textContent = screenString;
    calculatorScreen.appendChild(toShow)
}

function addNumber(number){
    if(screenString[9] != null){
        return 0;
    }
    if(screenString.indexOf(".") != -1 && number == "."){
        return 0;
    }
    screenString += number + "";
    mainString += number + "";
    showOnScreen();
}

function setOperation(operationType){
    if(!operation){
        operation = operationType;
        screenString = "";
        mainString += operation;
    } else{
        operate();
        operation = operationType;
        screenString = "";
        mainString += operation;
    }
}