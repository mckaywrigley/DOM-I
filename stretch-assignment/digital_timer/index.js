// Body Selector
let body = document.querySelector('body');

// Digits Selectors
let digits = document.querySelector('.digits');
let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

// Create Start Timer Button
let button = document.createElement('p');
button.textContent = 'Start';
button.style.border = '1px solid black';
button.style.padding = '5px';
button.style.marginLeft = '20px';
digits.style.display = 'flex';
digits.style.flexWrap = 'flex-wrap';
digits.style.justifyContent = 'center';
button.style.width = '100px';
button.style.cursor = 'pointer';
button.style.textAlign = 'center';
digits.appendChild(button);

// Reset Button
let resetButton = document.createElement('p');
resetButton.textContent = 'Reset';
resetButton.style.border = '1px solid black';
resetButton.style.padding = '5px';
resetButton.style.marginLeft = '20px';
resetButton.style.width = '100px';
resetButton.style.textAlign = 'center';
resetButton.style.cursor = 'pointer';
digits.appendChild(resetButton);

// Initialize Values
let secondsOnesDigit = 0;
let msHundredsDigit = 0;

// Start Button Click Handler
button.addEventListener('click', () => {
    let timer = setInterval(run, 10);

    function run() {
        msHundreds.textContent = msHundredsDigit;
        secondOnes.textContent = secondsOnesDigit;
        if(msHundredsDigit < 99) {
            msHundredsDigit++;
        } else if (msHundredsDigit === 99) {
            msHundredsDigit = 0;
            secondsOnesDigit++;
        }
    };

    // Reset Handler
    resetButton.addEventListener('click', () => {
        clearInterval(timer);
        secondsOnesDigit = 0;
        msHundredsDigit = 0;
        msHundreds.textContent = msHundredsDigit;
        secondOnes.textContent = secondsOnesDigit;
    });
});