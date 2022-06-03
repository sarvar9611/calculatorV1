let inputText = '0',
    equalResult = '0',
    displayText = document.querySelector('#displayText'),
    resultText = document.querySelector('#resultText');

const acBtn = document.querySelector("#acBtn"),
    eraseBtn = document.querySelector('#eraseBtn'),
    dotBtn = document.querySelector('#dotBtn'),
    divideBtn = document.querySelector('#divideBtn'),
    multiplyBtn = document.querySelector('#multiplyBtn'),
    minusBtn = document.querySelector('#minusBtn'),
    plusBtn = document.querySelector('#plusBtn'),
    equalBtn = document.querySelector('#equalBtn'),
    zeroBtn = document.querySelector('#zeroBtn'),
    doubleZeroBtn = document.querySelector('#doubleZeroBtn'),
    oneBtn = document.querySelector('#oneBtn'),
    twoBtn = document.querySelector('#twoBtn'),
    threeBtn = document.querySelector('#threeBtn'),
    fourBtn = document.querySelector('#fourBtn'),
    fiveBtn = document.querySelector('#fiveBtn'),
    sixBtn = document.querySelector('#sixBtn'),
    sevenBtn = document.querySelector('#sevenBtn'),
    eightBtn = document.querySelector('#eightBtn'),
    nineBtn = document.querySelector('#nineBtn');
    
function showString() {
    displayText.textContent = (inputText == '') ? 0: inputText;
}

acBtn.addEventListener('click', () => {
    inputText = '0'
    equalResult = '0';
    showString();
});
zeroBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        showString();
    } else {
        inputText += '0';
        showString();
    }
    
});
doubleZeroBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        showString();
    } else {
        inputText += '00';
        showString();
    }
});
oneBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '1';
        showString();
    } else {
        inputText += '1';
        showString();
    }
});
twoBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '2';
        showString();
    } else {
        inputText += '2';
        showString();
    }
});
threeBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '3';
        showString();
    } else {
        inputText += '3';
        showString();
    }
});
fourBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '4';
        showString();
    } else {
        inputText += '4';
        showString();
    }
});
fiveBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '5';
        showString();
    } else {
        inputText += '5';
        showString();
    }
});
sixBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '6';
        showString();
    } else {
        inputText += '6';
        showString();
    }
});
sevenBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '7';
        showString();
    } else {
        inputText += '7';
        showString();
    }
});
eightBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '8';
        showString();
    } else {
        inputText += '8';
        showString();
    }
});
nineBtn.addEventListener('click', () => {
    if (inputText.slice(0) == '0') {
        inputText = '';
        inputText += '9';
        showString();
    } else {
        inputText += '9';
        showString();
    }
});
plusBtn.addEventListener('click', () => {
    if (inputText.slice(-1) == '+') {
        showString();
    }
    else if (inputText.slice(-1) == '.' || inputText.slice(-1) == 'x' || inputText.slice(-1) == '-' || inputText.slice(-1) == '÷') {
        inputText = inputText.slice(0, -1) + '+';
        showString();
    }
    else {
        inputText += '+';
        showString();
    }
});
minusBtn.addEventListener('click', () => {
    if (inputText.slice(-1) == '-') {
        showString();
    }
    else if (inputText.slice(-1) == '.' || inputText.slice(-1) == '+' || inputText.slice(-1) == 'x' || inputText.slice(-1) == '÷') {
        inputText = inputText.slice(0, -1) + '-';
        showString();
    }
    else {
        inputText += '-';
        showString();
    }
});
multiplyBtn.addEventListener('click', () => {
    if (inputText.slice(-1) == 'x') {
        showString();
    }
    else if (inputText.slice(-1) == '.' || inputText.slice(-1) == '+' || inputText.slice(-1) == '-' || inputText.slice(-1) == '÷') {
        inputText = inputText.slice(0, -1) + 'x';
        showString();
    }
    else {
        inputText += 'x';
        showString();
    }
});
divideBtn.addEventListener('click', () => {
    if (inputText.slice(-1) == '÷') {
        showString();
    }
    else if (inputText.slice(-1) == '.' || inputText.slice(-1) == '+' || inputText.slice(-1) == '-' || inputText.slice(-1) == 'x') {
        inputText = inputText.slice(0, -1) + '÷';
        showString();
    }
    else {
        inputText += '÷';
        showString();
    }
});
dotBtn.addEventListener('click', () => {
    if (inputText.slice(-1) == '.' || inputText.slice(-1) == '+' || inputText.slice(-1) == '-' || inputText.slice(-1) == 'x' || inputText.slice(-1) == '÷') {
        showString();
    }
    else {
        inputText += '.';
        showString();
    }
});
eraseBtn.addEventListener('click', () => {
    inputText = inputText.slice(0, -1);
    showString();
});