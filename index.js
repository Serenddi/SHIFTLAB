'use strict'

let input = document.querySelector('#input');
// let str = input.value;
const search = document.querySelector('.search');
const restart = document.querySelector('.restart')
const output = document.querySelector('.output');
let cells = document.querySelectorAll('#cell')
let regExp;
let elem = '<mark>$&</mark>'
let elem2 = '<mark class="off">$&</mark>'

input.addEventListener( 'keyup', event => {
  if(event.code === 'Enter' ) 
  {checkTheSame()}
});

search.addEventListener('click', checkTheSame);

restart.addEventListener('click', cleanThePage)

function checkTheSame(e) {
  cells.forEach((cell) => {
    if (input.value !== '') {
      regExp = new RegExp(input.value, "gi");
      cell.innerHTML = (cell.textContent).replace(regExp, elem)
    }
  })
}

function cleanThePage() {
  cells.forEach((cell) => {
      cell.innerHTML = (cell.textContent).replace(regExp, elem2)
    })
  input.value = '';
}

