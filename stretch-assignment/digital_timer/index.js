// Body Selector
const body = document.querySelector('body');

// Digits Selector
const digits = document.querySelector('.digits');

// Create Start Timer Button
const createButton = document.createElement('p');
createButton.textContent = 'Start Timer';
createButton.style.border = '1px solid black';
createButton.style.padding = '5px';
digits.style.display = 'flex';
digits.style.flexWrap = 'flex-wrap';
digits.style.justifyContent = 'center';
createButton.style.width = '50px';
digits.appendChild(createButton);