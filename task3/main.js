const anwser = document.getElementById('answer');
const x = prompt('give the lenght of sides of a triangle: "side1,side2,side3"');
const cords = x.split(',');

let anw = '';
if (cords[0] == cords[1] && cords[1] == cords[2]) {
  anw = 'equilateral';
} else if (
  cords[0] == cords[1] ||
  cords[0] == cords[2] ||
  cords[1] == cords[2]
) {
  anw = 'isosceles';
} else {
  anw = 'scalene';
}

anwser.textContent = anw;
