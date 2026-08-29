let currentInput = "0";
let previousInput = "";
let operation = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".btn-num");
const opButtons = document.querySelectorAll(".btn-op");
const equalBtn = document.getElementById("equalBtn");
const clearBtn = document.getElementById("clearBtn");

function updateDisplay() {
  display.textContent = currentInput;
}

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const num = button.getAttribute("data-num");
    if (currentInput === "0" || shouldResetDisplay) {
      currentInput = num;
      shouldResetDisplay = false;
    } else {
      currentInput += num;
    }
    updateDisplay();
  });
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const op = button.getAttribute("data-op");
    if (operation !== null && !shouldResetDisplay) {
      calculate();
    }
    previousInput = currentInput;
    operation = op;
    shouldResetDisplay = true;
  });
});

function calculate() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  let result;
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "Error" : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  shouldResetDisplay = true;
  updateDisplay();
}

equalBtn.addEventListener("click", () => {
  if (operation !== null) {
    calculate();
  }
});

clearBtn.addEventListener("click", () => {
  currentInput = "0";
  previousInput = "";
  operation = null;
  shouldResetDisplay = false;
  updateDisplay();
});
