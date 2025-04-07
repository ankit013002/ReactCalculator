const PerformCalculation = (exp) => {
    let result = 0;
    let exp1 = ""
    let exp2 = ""
    exp = MakeCalculable(exp)
    exp = PerformParenthesisOperations(exp)
    if(exp.indexOf("+") != -1){
        let operatorIndex = exp.indexOf("+")
        exp1 = exp.slice(0, operatorIndex)
        exp2 = exp.slice(operatorIndex + 1, exp.length)
        result = PerformCalculation(exp1) + PerformCalculation(exp2)
    }else if(exp.indexOf("-") != -1){
        let operatorIndex = exp.indexOf("-")
        exp1 = exp.slice(0, operatorIndex)
        exp2 = exp.slice(operatorIndex + 1, exp.length)
        result = PerformCalculation(exp1) - PerformCalculation(exp2)
    }else if(exp.indexOf("*") != -1){
        let operatorIndex = exp.indexOf("*")
        exp1 = exp.slice(0, operatorIndex)
        exp2 = exp.slice(operatorIndex + 1, exp.length)
        result = PerformCalculation(exp1) * PerformCalculation(exp2)
    }else if(exp.indexOf("/") != -1){
        let operatorIndex = exp.indexOf("/")
        exp1 = exp.slice(0, operatorIndex)
        exp2 = exp.slice(operatorIndex + 1, exp.length)
        result = PerformCalculation(exp1) / PerformCalculation(exp2)
    }else if(exp.lastIndexOf("^") != -1){
        let operatorIndex = exp.lastIndexOf("^");
        exp1 = exp.slice(0, operatorIndex);
        exp2 = exp.slice(operatorIndex + 1);
        result = PerformCalculation(exp1) ** PerformCalculation(exp2);
    }
    else if(IsValDigit(exp)){
        result = parseFloat(exp)
    }
    return result;
}


function PerformParenthesisOperations(exp) {
    while (exp.includes("(")) {
        let closeIndex = exp.indexOf(")");
        let openIndex = closeIndex;
        while (openIndex >= 0 && exp.charAt(openIndex) !== "(") {
            openIndex--;
        }


        if (openIndex >= 0) {
            let inner = exp.slice(openIndex + 1, closeIndex);
            let innerResult = PerformCalculation(inner);
            exp = exp.slice(0, openIndex) + innerResult + exp.slice(closeIndex + 1);
        } else {
            break; // mismatched parenthesis
        }
    }
    return exp;
}




function MakeCalculable(exp){
    let newExp = ""
    for(let i = 0; i < exp.length; i++){
        if(exp.charAt(i) == "(" && i > 0){
            if(IsValDigit(exp.charAt(i-1))){
                newExp += "*" + exp.charAt(i);
            }else{
                newExp += exp.charAt(i);
            }
        }else if(i == exp.length - 1){
            if(exp.charAt(i) != "+" && exp.charAt(i) != "-" && exp.charAt(i) != "*" && exp.charAt(i) != "/" && exp.charAt(i) != "("){
                newExp += exp.charAt(i);
            }
        }else{
            newExp += exp.charAt(i);
        }
    }
    return newExp;
}


function IsValDigit(value){
    return parseFloat(value)
}


function Main(){
    let expression = "5+(2-(3+1)+8*4/2+(2*3)"
    let result = PerformCalculation(expression);
    console.log("Final Result: " + result)
}

export default PerformCalculation;