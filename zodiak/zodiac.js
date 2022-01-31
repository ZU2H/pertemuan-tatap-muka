const JAN = 1
const FEB = 2
const MAR = 3
const APR = 4
const MAY = 5
const JUN = 6
const JUL = 7
const AUG = 8
const SEP = 9
const OKT = 10
const NOV = 11
const DES = 12

enter.onclick = function () {
    let month = document.querySelector("#month").value;
    let date = document.querySelector("#date").value;
    let result = document.querySelector("#result");

    if (date >= 0 && month >= 0) {
        if ((month == JAN && date >= 20) || (month == FEB && date <= 18)) {
            result.innerHTML = "Aquarius";
        } else if ((month == FEB && date >= 19) || (month == MAR && date <= 20)) {
            result.innerHTML = "Pisces";
        } else if ((month == MAR && date >= 21) || (month == APR && date <= 19)) {
            result.innerHTML = "Aries";
        } else if ((month == APR && date >= 20) || (month == MAY && date <= 20)) {
            result.innerHTML = "Taurus";
        } else if ((month == MAY && date >= 21) || (month == JUN && date <= 20)) {
            result.innerHTML = "Gemini";
        } else if ((month == JUN && date >= 21) || (month == JUL && date <= 22)) {
            result.innerHTML = "Cancer";
        } else if ((month == JUL && date >= 23) || (month == AUG && date <= 22)) {
            result.innerHTML = "Cancer";
        } else if ((month == AUG && date >= 23) || (month == SEP && date <= 22)) {
            result.innerHTML = "Virgo";
        } else if ((month == SEP && date >= 23) || (month == OKT && date <= 22)) {
            result.innerHTML = "Libra";
        } else if ((month == OKT && date >= 23) || (month == NOV && date <= 21)) {
            result.innerHTML = "Scorpio";
        } else if ((month == NOV && date >= 22) || (month == DES && date <= 21)) {
            result.innerHTML = "Sagitarius";
        } else if ((month == DES && date >= 22) || (month == JAN && date <= 19)) {
            result.innerHTML = "Capricorn";
        }
    }
}