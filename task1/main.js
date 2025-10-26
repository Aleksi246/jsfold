const anwser = document.getElementById('anwser');
const celc = prompt('give celsius');

let fart = Number(celc) * (9 / 5) + 32;

anwser.textContent = fart;
