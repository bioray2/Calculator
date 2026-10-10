function isNumber(value){
    return value >= "0" && value <= "9" && value.length === 1;
}

function clear(){
    input1 = "";
    operator = "";
    modifier = "";
    finalNumber = "";
    output.textContent = "0";
}

function equals(x, y){
    switch(operator){
        case "/":
            if(Number(y) === 0){
                clear();
                return "0";
            }
            else{            
                return x / y;
            }
        case "*":
            return x * y;
        case "-":
            return x - y;
        case "+":
            return Number(x) + Number(y);
    }
}

function period(){
    if(operator == ""){
        finalNumber += ".";
        output.textContent = finalNumber;
    }
    else{
        modifier += ".";
        output.textContent = (finalNumber + operator + modifier);
    }
}

function percent(){
    if(operator == ""){
        finalNumber /= 100;
        output.textContent = finalNumber;
    }
    else{
        modifier /= 100;
        output.textContent = (finalNumber + operator + modifier);
    }    
}

function polarity(){
    if(operator == ""){
        finalNumber *= -1;
        output.textContent = finalNumber;
    }
    else{
        finalNumber *= -1;
        output.textContent = (finalNumber + operator + modifier);
    } 
}

const calculator = document.querySelector("#keyboard");
let output = document.querySelector("#output");

let operator = "";
let finalNumber = "";
let modifier = "";
let input1 = "";

function calculate(){
    calculator.addEventListener("click", (event) => {
        input1 = event.target.textContent.trim();

        //handles number buttons
        if(isNumber(input1)){
            if(operator == ""){
                finalNumber += input1;
                output.textContent = finalNumber;
            }
            else{
                modifier += input1;
                output.textContent = (finalNumber + operator + modifier);
            }
        }

        

        // handles other buttons
        switch(input1){
            case "AC":
                clear();
                break;
            case "+/-":
                polarity();
                break;
            case ".":
                period();
                break;
            case "%":
                percent();
                break;
            case "/":
            case "*":
            case "+":
            case "-":
                if(operator !== "" && modifier !== ""){
                    finalNumber = equals(finalNumber, modifier)
                    output.textContent = finalNumber;
                    modifier = "";
                }
                operator = input1;
                output.textContent = finalNumber + operator;
                break;
            case "=":
                finalNumber = equals(finalNumber, modifier);
                output.textContent = finalNumber;
                modifier = "";
                break;
        }
    })
}
calculate();