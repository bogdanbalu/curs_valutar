const EUR = 5;   //1 * EURO
const USD = 4.81;   // 1 * DOLAR
const CHF = 4.99;    // 1 * Franc elvetian
const backSpace = "Backspace";
const deleteButton = 'Delete';

const convertorInput = document.getElementById("convertor");

convertorInput.addEventListener("keydown", () => {
    let currentValue = storageData();

    calcEur(currentValue);
    calcUsd(currentValue);
    calcCHF(currentValue);
});

const storageData = () => {
    return convertorInput.value;
}

const calcEur = (value) => {
    return EUR * value;
}

const calcUsd = (value) => {
    return USD * value;
}

const calcCHF = (value) => {
    return CHF * value;
}

const clearInput = (key) => {
    return key === backSpace || key === deleteButton ? null : true
}




