const $months = document.querySelector(".months");
const $seasonButtons = document.querySelectorAll(".seasonButton");

for (const $seasonButton of $seasonButtons) {
  $seasonButton.addEventListener("click", renderMonths);
}

const seasons = {
  Зима: {
    monthes: ["Декабрь", "Январь", "Февраль"],
    className: "winter",
  },
  Весна: {
    monthes: ["Март", "Апрель", "Май"],
    className: "spring",
  },
  Лето: {
    monthes: ["Июнь", "Июль", "Август"],
    className: "summer",
  },
  Осень: {
    monthes: ["Сентябрь", "Октябрь", "Ноябрь"],
    className: "autumn",
  },
};

function renderMonths(event) {
  const seasonName = event.target.innerText;
  const season = seasons[seasonName];
  $months.innerHTML = "";

  for (const monthName of season.monthes) {
    const button = MonthButton(monthName, season.className);
    $months.append(button);
  }
}

function MonthButton(text, className) {
  const button = document.createElement("button");
  button.classList.add("seasonButton");
  button.classList.add(className);
  button.innerText = text;

  return button;
}
