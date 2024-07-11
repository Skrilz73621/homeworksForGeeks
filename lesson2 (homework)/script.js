const color = prompt("Введите цвет светофора (красный, желтый, зеленый):")

switch (color) {
  case "красный":
    console.log("стой!")
    break
  case "желтый":
    console.log("жди!")
    break
  case "зеленый":
    console.log("иди!")
    break
  default:
    console.log("неизвестный цвет!")
}


const number = parseInt(prompt("Введите порядковый номер планеты (1-8):"), 10)

const planets = ["Меркурий","Венера","Земля","Марс","Юпитер","Сатурн","Уран","Нептун","Плутон" ]

if (number >= 1 && number <= planets.length) {
  console.log(planets[number - 1])
} else {
  console.log("Некорректный номер планеты!")
}