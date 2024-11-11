function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return 'Error: Divide by Zero';
    }
    return a / b;
}

function operate(num1, num2, op) {
    if (op == '+') {
        return add(num1, num2);
    } else if (op == '-') {
        return subtract(num1, num2);
    } else if (op == '*') {
        return multiply(num1, num2);
    } else if (op == '/') {
        return divide(num1, num2);
    }
}

let num1 = 0;
let num2 = 0;
let op = '';

let calc = document.querySelector('.calculator');
let output = document.querySelector('.output');

calc.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'add':
            if (op == '') {
                num1 = +output.textContent;
                op = '+';
                output.textContent += '+';
            }
            break;
        case 'subtract':
            if (op == '') {
                num1 = +output.textContent;
                op = '-';
                output.textContent += '-';
            }
            break;
        case 'multiply':
            if (op == '') {
                num1 = +output.textContent;
                op = '*';
                output.textContent += '*';
            }
            break;
        case 'divide':
            if (op == '') {
                num1 = +output.textContent;
                op = '/';
                output.textContent += '/';
            }
            break;
        case 'equal':
            let idx = output.textContent.indexOf(op);
            num2 = +output.textContent.slice(idx + 1);
            let total = operate(num1, num2, op);
            output.textContent = total;
            num1 = total;
            num2 = 0;
            op = '';
            break;
        case 'clear':
            output.textContent = '';
            num1 = 0;
            num2 = 0;
            op = '';
            break;
        case 'zero':
            output.textContent += '0';
            break;
        case 'one':
            output.textContent += '1';
            break;
        case 'two':
            output.textContent += '2';
            break;
        case 'three':
            output.textContent += '3';
            break;
        case 'four':
            output.textContent += '4';
            break;
        case 'five':
            output.textContent += '5';
            break;
        case 'six':
            output.textContent += '6';
            break;
        case 'seven':
            output.textContent += '7';
            break;
        case 'eight':
            output.textContent += '8';
            break;
        case 'nine':
            output.textContent += '9';
            break;
    }
});

