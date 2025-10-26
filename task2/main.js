const anwser = document.getElementById('answer');
const x = prompt('give the cords of start and end "x1,y1,x2,y2"');
const cords = x.split(',');

let distance = Math.sqrt(
  (cords[2] - cords[0]) ** 2 + (cords[3] - cords[1]) ** 2
);

anwser.textContent = distance;
