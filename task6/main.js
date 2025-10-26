const table = document.getElementById('table');
const teksti = document.getElementById('text');
const num = Number(prompt('give a positive integer'));

teksti.textContent = num;

let innerhtml = '';
for (let i = 1; i <= num; i++) {
  innerhtml += '<tr>';
  for (let j = 1; j <= num; j++) {
    innerhtml += '<td>' + j * i + '</td>';
  }
  innerhtml += '</tr>';
}

table.innerHTML = innerhtml;
