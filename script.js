const EUR = 4.94;   //1 * EURO
const USD = 4.81;   // 1 * DOLAR
const CHF = 4.99;    // 1 * Franc elvetian

const getValueInput = () => {
    return document.getElementById("convertor").value;
}

const inputValue = getValueInput();
console.log(inputValue);

const calcEur = (value) => {
    return EUR * value;
}

const getEur = calcEur(inputValue);

const calcUsd = (value) => {
    return USD * value;
}

const getUsd = calcUsd(inputValue);

const calcCHF = (value) => {
    return CHF * value;
}

const getChf = calcCHF(inputValue);
console.log(getChf);
