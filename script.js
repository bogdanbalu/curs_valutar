// Moneda: Euro
const EUR = {
    "value": 4.93,
    "currency": "euro",
}

//Moneda: Dolar american
const USD = {
    "value": 4.84,
    "currency": "dolari",
}

//Moneda: Franc elvetian
const CHF = {
    "value": 5.07,
    "currency": "franci elvetieni",
}

// Moneda: Lira sterlină
const GBP = {
    "value": 5.87,
    "currency": "lire sterline",
}

//Moneda: Leva bulgarească
const BGN = {
    "value": 2.52,
    "currency": "leva bulgaresti",
}

//Moneda: Coroana norvegiană
const NOK = {
    "value": 0.49,
    "currency": "coroane norvegiene",
}

// Moneda: Coroana suedeză
const SEK = {
    "value": 0.47,
    "currency": "coroane suedeze",
}

//Moneda: Yeni japonezi
const JPY = {
    "value": 100 * 3.62,
    "currency": "yeni japonezi",
}

//Moneda: Coroana cehă
const CZK = {
    "value": 0.20,
    "currency": "coroane cehe",
}

// Moneda: Forinți maghiari
const HUF = {
    "value": 100* 1.22,
    "currency": "forinti maghiari",
}

//Moneda: Lira egipteană
const EGP = {
    "value":  0.25,
    "currency": "lire egiptiane",
}

const convertorInput = document.getElementById("convertor");

const eur = document.getElementById("eur");
const usd = document.getElementById("usd");
const chf = document.getElementById("chf");
const gbp = document.getElementById("gbp");
const bgn = document.getElementById("bgn");
const nok = document.getElementById("nok");
const sek = document.getElementById("sek");
const jpy = document.getElementById("jpy");
const czk = document.getElementById("czk");
const huf = document.getElementById("huf");
const egp = document.getElementById("egp");

convertorInput.addEventListener("keyup", () => {
    let currentValue = getInputData();

    calculatedExchange(currentValue, EUR.currency, EUR.value, eur);
    calculatedExchange(currentValue, USD.currency, USD.value, usd);
    calculatedExchange(currentValue, CHF.currency, CHF.value, chf);
    calculatedExchange(currentValue, GBP.currency, GBP.value, gbp);
    calculatedExchange(currentValue, BGN.currency, BGN.value, bgn);
    calculatedExchange(currentValue, NOK.currency, NOK.value, nok);
    calculatedExchange(currentValue, SEK.currency, SEK.value, sek);
    calculatedExchange(currentValue, JPY.currency, JPY.value, jpy);
    calculatedExchange(currentValue, CZK.currency, CZK.value, czk);
    calculatedExchange(currentValue, HUF.currency, HUF.value, huf);
    calculatedExchange(currentValue, EGP.currency, EGP.value, egp);
});

const getInputData = () => {
    return Number(convertorInput.value);
}

const calculatedExchange = (value, currency, rateOfExchange, inputName,  ) => {
    const exchange = value / rateOfExchange;
    inputName.innerText = `Valoarea in ${currency}, este: ${exchange.toFixed(2)}`; 
}



