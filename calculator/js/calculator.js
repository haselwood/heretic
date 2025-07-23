let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen'); {

function buttonClick(value) {
    } if (isNaN(value)) {
        handleSymbol (value); 
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol)
        if (value === 'C') {
           buffer = "0";
           runningTotal ="0";
    
    if (symbol === "÷") {
        handleDivide(symbol);
        
    }
    if (symbol === "×") {
        handleTimes(symbol);
    }
    if (symbol === "-") {
        handleMinus(symbol);
    }
    if (symbol === "+") {
        handlePlus(symbol);
    }
    if (symbol === "=") {
        handleEquals(symbol);
    }
    if (symbol === "←") {
        handleArrow(symbol);
    }
}

function handleDivide(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "÷";
    buffer = "0";
}

function handleTimes(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "×";
    buffer = "0";
}

function handleMinus(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "-";
    buffer = "0";
}

function handlePlus(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "+";
    buffer = "0";
}

function handleArrow(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "←";
    buffer = "0";
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}
function handleEquals(symbol) {
    previousOperator = "=";
    screen.innerText = runningTotal;
}
function init () {
 document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
    console.log('buffer', buffer);
    })
}
init();