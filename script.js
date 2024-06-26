let result;

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