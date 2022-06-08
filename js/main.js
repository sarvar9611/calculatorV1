let inputText = '0',
    equalResult = 0,
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
    resultText.textContent = equalResult;
}

acBtn.addEventListener('click', () => {
    inputText = '0'
    equalResult = 0;
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

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    /*
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    */
        switch (code) {
            case 'Numpad1':
                if (inputText.slice(0) == '0') {
                    inputText = '';
                    inputText += '1';
                    showString();
                } else {
                    inputText += '1';
                    showString();
                }
                break;

            case 'Numpad2':
                if (inputText.slice(0) == '0') {
                    inputText = '';
                    inputText += '2';
                    showString();
                } else {
                    inputText += '2';
                    showString();
                }
                break;

            case 'Numpad3':
                    if (inputText.slice(0) == '0') {
                        inputText = '';
                        inputText += '3';
                        showString();
                    } else {
                        inputText += '3';
                        showString();
                    }
                    break;
        
            case 'Numpad4':
                    if (inputText.slice(0) == '0') {
                        inputText = '';
                        inputText += '4';
                        showString();
                    } else {
                        inputText += '4';
                        showString();
                    }
                    break;
        
            case 'Numpad5':
                    if (inputText.slice(0) == '0') {
                        inputText = '';
                        inputText += '5';
                        showString();
                    } else {
                        inputText += '5';
                        showString();
                    }
                    break;
        
            case 'Numpad6':
                    if (inputText.slice(0) == '0') {
                        inputText = '';
                        inputText += '6';
                        showString();
                    } else {
                        inputText += '6';
                        showString();
                    }
                    break;
        
            case 'Numpad7':
                    if (inputText.slice(0) == '0') {
                        inputText = '';
                        inputText += '7';
                        showString();
                    } else {
                        inputText += '7';
                        showString();
                    }
                    break;
        
            case 'Numpad8':
                    if (inputText.slice(0) == '0') {
                        inputText = '';
                        inputText += '8';
                        showString();
                    } else {
                        inputText += '8';
                        showString();
                    }
                    break;
        
            case 'Numpad9':
                    if (inputText.slice(0) == '0') {
                        inputText = '';
                        inputText += '9';
                        showString();
                    } else {
                        inputText += '9';
                        showString();
                    }
                    break;
        
            case 'Numpad0':
                if (inputText.slice(0) == '0') {
                    showString();
                } else {
                    inputText += '0';
                    showString();
                }
                break;

            case 'NumpadDivide':
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
                break;

            case 'NumpadMultiply':
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
                break;

            case 'NumpadAdd':
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
                break;

            case 'NumpadSubtract':
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
                break;

            case 'NumpadDecimal':
                if (inputText.slice(-1) == '.' || inputText.slice(-1) == '+' || inputText.slice(-1) == '-' || inputText.slice(-1) == 'x' || inputText.slice(-1) == '÷') {
                    showString();
                }
                else {
                    inputText += '.';
                    showString();
                }
                break;

            case 'Backspace':
                inputText = inputText.slice(0, -1);
                showString();
                break;

            case 'Delete':
                inputText = '0';
                equalResult = 0;
                showString();
                break;

            case 'NumpadEnter':
                if (inputText.includes("+")) {
                    inputText.split('+').forEach(counterPlus)
                }
                else if (inputText.includes("-")) {
                    inputText.split('-').forEach(counterMinus)
                }
                else if (inputText.includes("x")) {
                    inputText.split('x').forEach(counterMultiply)
                }
                else if (inputText.includes("÷")) {
                    inputText.split('÷').forEach(counterDivide)
                }
                showString();
                inputText = `${equalResult}`;
                equalResult = 0;
                break;
                    
            default:
            break;
        }
  }, false);



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


function counterPlus(item, index, arr) {
    equalResult += +item;
}

function counterMinus(item, index, arr) {
    if (index == 0) {
        equalResult += +item;
    } else {
        equalResult -= +item;
    }
}

function counterMultiply(item, index, arr) {
    if (index == 0) {
        equalResult += +item;
    } else {
        equalResult *= +item;
    }
}

function counterDivide(item, index, arr) {
    if (index == 0) {
        equalResult += +item;
    } else {
        equalResult /= +item;
    }
}

equalBtn.addEventListener('click', () => {
    if (inputText.includes("+")) {
        inputText.split('+').forEach(counterPlus)
    }
    else if (inputText.includes("-")) {
        inputText.split('-').forEach(counterMinus)
    }
    else if (inputText.includes("x")) {
        inputText.split('x').forEach(counterMultiply)
    }
    else if (inputText.includes("÷")) {
        inputText.split('÷').forEach(counterDivide)
    }
    showString();
    inputText = `${equalResult}`;
    equalResult = 0;
});
