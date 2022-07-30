// Moneda: Euro
const EUR = 4.93;

//Moneda: Dolar american
const USD = 4.84;

//Moneda: Franc elvetian
const CHF = 5.07;

// Moneda: Lira sterlină
const GBP = 5.87;

//Moneda: Leva bulgarească
const BGN = 2.52;

//Moneda: Coroana norvegiană
const NOK = 0.49;

// Moneda: Coroana suedeză
const SEK = 0.47;

//Moneda: Yeni japonezi
const JPY = 100 * 3.62;

//Moneda: Coroana cehă
const CZK = 0.20;

// Moneda: Forinți maghiari
const HUF = 100* 1.22;

//Moneda: Lira egipteană
const EGP = 0.25;

const convertorInput = document.getElementById("convertor");

const eur = document.getElementById("eur");
const usd = document.getElementById("usd");
const chf = document.getElementById("chf");
const gpb = document.getElementById("gpb");
const bgn = document.getElementById("bgn");
const nok = document.getElementById("nok");
const sek = document.getElementById("sek");
const jpy = document.getElementById("jpy");
const czk = document.getElementById("czk");
const huf = document.getElementById("huf");
const egp = document.getElementById("egp");

convertorInput.addEventListener("keydown", () => {
    let currentValue = storageData();

    calcEur(currentValue);
    calcUsd(currentValue);
    calcCHF(currentValue);
    calcGBP(currentValue);
    calcBGN(currentValue);
    calcNOK(currentValue);
    calcSEK(currentValue);
    calcJPY(currentValue);
    calcCZK(currentValue);
    calcHUF(currentValue);
    calcEGP(currentValue);
});

const storageData = () => {
    return convertorInput.value;
}

const calcEur = (value) => {
    const eurValue = value / EUR;
    return eur.innerHTML = `Valoarea in euro, este: ${eurValue.toFixed(2)}`;
}

const calcUsd = (value) => {
    const usdValue = value / USD;
    return usd.innerHTML = `Valoarea in dolari, este: ${usdValue.toFixed(2)}`;
}

const calcCHF = (value) => {
    const chfValue = value / CHF;
    return chf.innerHTML = `Valoarea in franci elvetieni, este: ${chfValue.toFixed(2)}`;
}

const calcGBP = (value) => {
    const gbpValue = value / GBP;
    return gbp.innerHTML = `Valoarea in lire sterline, este: ${gbpValue.toFixed(2)}`;
}

const calcBGN = (value) => {
    const bgnValue = value / BGN;
    return bgn.innerHTML = `Valoarea in leva bulgaresti, este: ${bgnValue.toFixed(2)}`;
}

const calcNOK = (value) => {
    const nokValue = value / NOK;
    return nok.innerHTML = `Valoarea in coroana norvegiena, este: ${nokValue.toFixed(2)}`;
}

const calcSEK = (value) => {
    const sekValue = value / SEK;
    return sek.innerHTML = `Valoarea in coroana suedeza, este: ${sekValue.toFixed(2)}`;
}

const calcJPY = (value) => {
    const jpyValue = value / JPY;
    return jpy.innerHTML = `Valoarea in yeni japonezi, este: ${jpyValue.toFixed(2)}`;
}

const calcCZK = (value) => {
    const czkValue = value / CZK;
    return czk.innerHTML = `Valoarea in coroana ceha, este: ${czkValue.toFixed(2)}`;
}

const calcHUF = (value) => {
    const hufValue = value / HUF;
    return huf.innerHTML = `Valoarea in forinti maghiari, este: ${hufValue.toFixed(2)}`;
}

const calcEGP = (value) => {
    const egpValue = value / EGP;
    return egp.innerHTML = `Valoarea in lira egiptiana, este: ${egpValue.toFixed(2)}`;
}



