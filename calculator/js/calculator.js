let runningTotal = 0;
let buffer = "0";
let previousOperator;
let shouldResetBuffer = false;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    if (symbol === 'C') {
        buffer = "0";
        runningTotal = 0;
    } else if (symbol === "÷") {
        handleDivide(symbol);
    } else if (symbol === "×") {
        handleTimes(symbol);
    } else if (symbol === "−") {
        handleMinus(symbol);
    } else if (symbol === "+") {
        handlePlus(symbol);
    } else if (symbol === "=") {
        handleEquals(symbol);
    } else if (symbol === "←") {
        handleArrow(symbol);
    }
}

function handleDivide(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "÷";
    shouldResetBuffer = true;
}

function handleTimes(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "×";
    shouldResetBuffer = true;
}

function handleMinus(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "-";
    shouldResetBuffer = true;
}

function handlePlus(symbol) {
    runningTotal = parseFloat(buffer);
    previousOperator = "+";
    shouldResetBuffer = true;
}

function handleArrow(symbol) {
    if (buffer.length === 1) {
        buffer = "0";
    } else {
        buffer = buffer.substring(0, buffer.length - 1);
    }
}

function handleNumber(numberString) {
    if (buffer === "0" || shouldResetBuffer) {
        buffer = numberString;
        shouldResetBuffer = false;
    } else {
        buffer += numberString;
    }
}
function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    } else if (previousOperator === "÷") {
        runningTotal /= intBuffer;
    }
}

function handleEquals(symbol) {
    if (previousOperator === null) {
        return;
    }
    flushOperation(parseFloat(buffer));
    buffer = runningTotal.toString();
    runningTotal = 0;
    previousOperator = null;
    screen.innerText = buffer;
}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
            console.log('buffer', buffer);
        });
}

init();