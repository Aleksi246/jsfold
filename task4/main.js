const anwser = document.getElementById('answer');
const x = prompt('points');

let anw = '';
if (x >= 0 && x <= 39) {
  anw = '0';
} else if (x >= 40 && x <= 51) {
  anw = '1';
} else if (x >= 52 && x <= 63) {
  anw = '2';
} else if (x >= 64 && x <= 75) {
  anw = '3';
} else if (x >= 76 && x <= 87) {
  anw = '4';
} else if (x >= 88 && x <= 100) {
  anw = '5';
} else {
  anw = 'Invalid score';
}

anwser.textContent = anw;
