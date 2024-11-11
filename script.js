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

calc.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'add':
            console.log('Add');
            break;
        case 'subtract':
            console.log('subtract');
            break;
        case 'multiply':
            console.log('multiply');
            break;
        case 'divide':
            console.log('divide')
            break;
        case 'equal':
            console.log('equal');
            break;
        case 'clear':
            console.log('clear');
            break;
        case 'one':
            break;
        case 'two':
            break;
        case 'three':
            break;
        case 'four':
            break;
        case 'five':
            break;
        case 'six':
            break;
        case 'seven':
            break;
        case 'eight':
            break;
        case 'nine':
            break;
    }
});

