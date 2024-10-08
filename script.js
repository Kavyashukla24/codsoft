// Get the display element
const display = document.getElementById('display');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let operation = '';

// Add event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Handle number buttons
        if (!isNaN(value) || value === '.') {
            currentNumber += value;
            display.value = currentNumber;
        }

        // Handle operation buttons
        if (['+', '-', '*', '/'].includes(value)) {
            previousNumber = currentNumber;
            operation = value;
            currentNumber = '';
            display.value = previousNumber + ' ' + value + ' ';
        }

        // Handle equals button
        if (value === '=') {
            const result = calculate(previousNumber, currentNumber, operation);
            display.value = result;
            previousNumber = '';
            currentNumber = result;
        }

        // Handle clear button
        if (value === 'C') {
            display.value = '';
            previousNumber = '';
            currentNumber = '';
        }

        // Handle backspace button
        if (value === '<') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        }
    });
});

// Calculate function
function calculate(num1, num2, operation) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            } else {
                return num1 / num2;
            }
        default:
            return 'Error: Invalid operation';
    }
}