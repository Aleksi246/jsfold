const anwser = document.getElementById('answer');
let x = prompt('give a positive integer');
while (Number(x) < 0 || Number(x) % 1 > 0) {
  x = prompt('give a positive integer');
}

let anw = 0;

for (let i = 1; i <= Number(x); i++) {
  anw += i;
}

anwser.textContent = anw;
