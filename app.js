/* Math Operator */

const textResult = document.getElementById("textResult");

const valueOne = document.getElementById("valueOne");
const valueTwo = document.getElementById("valueTwo");

const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const reset = document.getElementById("reset");

sumar.addEventListener("click", () => {
  const val1 = parseFloat(valueOne.value);
  const val2 = parseFloat(valueTwo.value);

  textResult.textContent = val1 + val2;
});

restar.addEventListener("click", () => {
  const val1 = valueOne.value;
  const val2 = valueTwo.value;

  textResult.textContent = val1 - val2;
});

multiplicar.addEventListener("click", () => {
  const val1 = valueOne.value;
  const val2 = valueTwo.value;

  textResult.textContent = val1 * val2;
});

dividir.addEventListener("click", () => {
  const val1 = valueOne.value;
  const val2 = valueTwo.value;

  textResult.textContent = val1 / val2;
});

reset.addEventListener("click", () => {
  textResult.textContent = "";
});

/* =================== Click Counter ======================= */

const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const resetCounter = document.getElementById("resetCounter");
const decrease = document.getElementById("decrease");

let val = 0;
decrease.addEventListener("click", () => {
  val--;
  counter.textContent = val;
});

resetCounter.addEventListener("click", () => {
  val = 0;
  counter.textContent = val;
});

increase.addEventListener("click", () => {
  val++;
  counter.textContent = val;
});
