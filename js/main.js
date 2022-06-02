let displayText = "",
    displayResult = "";

const acBtn = document.querySelector("#acbtn"),
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
    
function callAlert() {
    alert("Hello");
}

acBtn.addEventListener('click', callAlert);