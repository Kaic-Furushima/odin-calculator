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
            screenString = "lol";
        }
    } else if(operation == "%"){
        screenString = num1 / 100;
    }
    if(isFloat(screenString)){
        screenString = screenString.toFixed(2);
    }

    mainString = screenString + "";
    showOnScreen();
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
    if(!(mainString.indexOf("+") != -1 || mainString.indexOf("-") != -1 || mainString.indexOf("*") != -1 || mainString.indexOf("/") != -1) && screenString == ""){
        screenString = mainString;
        mainString = "";
    }
    screenString += number + "";
    showOnScreen();
}

function setOperation(operationType){
    mainString += screenString + "";
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

function changeSignal(){
    if(mainString != ""){
        screenString = -(parseFloat(mainString));
        mainString = screenString;
    } else {
        screenString = -(parseFloat(screenString));
        mainString = screenString;
    }
    showOnScreen();
}