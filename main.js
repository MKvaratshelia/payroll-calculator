// поля ввода данных перед расчетом
const form = document.querySelector(".calculator__form");
const workout = form.elements.workout; //количество тренировок
const percent = form.elements.percent; // процент
const trainingCost = form.elements.trainingCost; // стоимость тренировки
const button = form.elements.button;

// поля формы с результатами
const formResult = document.querySelector(".calculator__form-result");
const salary = formResult.elements.salary;
const tax = formResult.elements.tax;
const total = formResult.elements.total;

// расчитываем
function result(numbers, cost, percent) {
  let resultPercent = percent.value;
  if (workout.value < 70) {
    resultPercent -= 2;
  } else if (workout.value >= 131) {
    resultPercent += 2;
  }

  const result = (numbers.value * cost.value * resultPercent) / 100;

  let taxResult = result * 0.13;
  if (result > 40000.0) {
    taxResult = 40000.0 * 0.13;
  }
  const salaryResult = result - taxResult;

  salary.value = result.toFixed(2) + " руб";
  tax.value = taxResult.toFixed(2) + " руб";
  total.value = salaryResult.toFixed(2) + " руб";
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  result(workout, trainingCost, percent);
});
