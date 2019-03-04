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
button.textContent = 'Start Timer';
button.style.border = '1px solid black';
button.style.padding = '5px';
button.style.marginLeft = '20px';
digits.style.display = 'flex';
digits.style.flexWrap = 'flex-wrap';
digits.style.justifyContent = 'center';
button.style.width = '100px';
button.style.textAlign = 'center';
digits.appendChild(button);

let secondsOnesDigit = 0;
let msHundredsDigit = 0;

// Button Click Handler
button.addEventListener('click', () => {
    setInterval(() => {
        msHundreds.textContent = msHundredsDigit;
        secondOnes.textContent = secondsOnesDigit;
        if(msHundredsDigit < 99) {
            msHundredsDigit++;
        } else if (msHundredsDigit === 99) {
            msHundredsDigit = 0;
            secondsOnesDigit++;
        }
    }, 10)
});