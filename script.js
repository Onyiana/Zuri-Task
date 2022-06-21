var opr = prompt("Operator: Mul, Add, Sub or Division ")
var num1 = parseInt(prompt("Number1: "))
var num2 = parseInt(prompt("Number2: "))

switch(opr){
    case '+':
        console.log(num1 + num2)
        break;

    case '-':
        console.log(num1 - num2)
        break;

    case '*':
        console.log(num1 * num2)
        break;

    case '/':
        console.log(num1 / num2)
        break;
}


// if (opr == "+")
// {
//     console.log(num1 + num2)
// }
// else if(opr == "-")
// {
//     console.log(num1 - num2)
// }
// else if(opr == "*")
// {
//     console.log(num1 * num2)
// }
// else if(opr == "/")
// {
//     console.log(num1 / num2)
// }