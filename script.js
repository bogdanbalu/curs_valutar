const EUR = 4.94;   //1 * EURO
const USD = 4.81;   // 1 * DOLAR
const CHF = 4.99;    // 1 * Franc elvetian

let inputValue;

const getValueInput = () => {
    return inputValue = document.getElementById("convertor").value;
}

inputValue = getValueInput();

const calcEur = (value) => {
    return EUR * value;
}

const eurValue = calcEur(inputValue);
console.log(eurValue);