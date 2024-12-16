const output = document.querySelector('.output');
const result = document.querySelector('.result');
const input = document.querySelectorAll('button');

let currentInput = '';

input.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.textContent;

        if (value === 'AC') {
            currentInput = '';
            output.textContent = '';
            result.textContent = '0';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            output.textContent = currentInput;
        } else if (value === '=') {
            const calculationResult = eval(currentInput);
            result.textContent = calculationResult;
        } else {
            currentInput += value;
            output.textContent = currentInput;
        }
    });
});