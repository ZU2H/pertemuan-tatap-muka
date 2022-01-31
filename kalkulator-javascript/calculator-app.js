const SUM = document.querySelector("#sum");
const SUBTRACT = document.querySelector("#substract");
const MULTIPLY = document.querySelector("#multiply");
const DIVIDE = document.querySelector("#divide");
const EQUAL = document.querySelector("#result");

MULTIPLY.addEventListener("click", function() {
    let x = num1.value;
    let y = num2.value; 
    EQUAL.innerHTML = x * y;
});

DIVIDE.addEventListener("click", function() {
    let x = num1.value;
    let y = num2.value;
    EQUAL.innerHTML = x / y;
});

SUM.addEventListener("click", function() {
    let x = parseFloat(num1.value);
    let y = parseFloat(num2.value);
    EQUAL.innerHTML = x + y;
});

SUBTRACT.addEventListener("click", function() {
    let x = num1.value;
    let y = num2.value;
    EQUAL.innerHTML = x - y;
});

function about() {
    alert("Thanks for use our calculator");
}