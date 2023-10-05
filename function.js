let display = document.getElementById("calc-display");
const buttonsContainer = document.querySelector(".all-buttons");
const buttons = document.querySelectorAll(".calc-button");

function clearDisplay() {
  display.value = "";
}

function appendToDisplay(value) {
  var validInput = /^[0-9+\-*%/.]*$/;

  if (validInput.test(value)) {
    display.value += value;
  } else {
    alert("Недопустимый символ");
  }
}

function calculate() {
  try {
    var result = eval(display.value);

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
