const result = document.getElementById("result");
function simpleMath(operator){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    result.style.color = "black"
    if(num1 === NaN || num2 === NaN || num1 === null || num2 === null){
        result.style.color = 'red';
        result.innerText= "Enter valid number"
    }

    switch (operator) {
        case "+":
            result.innerHTML = `Result = ${num1 + num2}`
            break;
        case "-":
            result.innerHTML = `Result = ${num1 - num2}`
            break;
        case "*":
            result.innerHTML = `Result = ${num1 * num2}`
            break;
        case "/":
            result.innerHTML = `Result = ${num1 / num2}`
            break;
    }
}