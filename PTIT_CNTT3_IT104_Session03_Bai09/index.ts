import { add, subtract, multiply, divide, power, sqrt, factorial, toNumber } from './calculator';
function calculate(operation: string): void {
    const input1 = (document.getElementById("input1") as HTMLInputElement).value;
    const input2 = (document.getElementById("input2") as HTMLInputElement).value;
    const resultSpan = document.getElementById("result") as HTMLSpanElement;

    let result: number | string;

    switch (operation) {
        case '+':
            result = add(input1, input2);
            break;
        case '-':
            result = subtract(input1, input2);
            break;
        case '*':
            result = multiply(input1, input2);
            break;
        case '/':
            result = divide(input1, input2);
            break;
        case '^':
            result = power(input1, input2);
            break;
        case '√':
            result = sqrt(input1, input2);
            break;
        case '!':
            result = factorial(input1); // Chỉ dùng input1 cho giai thừa
            break;
        default:
            result = "Invalid operation";
    }

    resultSpan.textContent = result.toString();
}