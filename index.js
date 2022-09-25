'use strict'

let input = document.querySelector('#input');
// let str = input.value;
const search = document.querySelector('.search');
const restart = document.querySelector('.restart')
const output = document.querySelector('.output');
let cells = document.querySelectorAll('#cell');
let title = document.querySelector('#title');
let regExp;
let elem = '<mark>$&</mark>'
let elem2 = '<mark class="off">$&</mark>'
let elem3 = '<mark class="pink">$&</mark>'

input.addEventListener( 'keyup', event => {
  if(event.code === 'Enter' ) 
  {checkTheSame()}
});

search.addEventListener('click', checkTheSame);


restart.addEventListener('click', cleanThePage)

let x;

function checkTheSame(e) {
  cells.forEach((cell) => {
    if (input.value !== '') {
      regExp = new RegExp(input.value, "gi");
      cell.innerHTML = (cell.textContent).replace(regExp, elem);
      title.innerHTML = (title.textContent).replace(regExp, elem);

      x = document.querySelectorAll('mark').length;
      
      x !== 0 ? output.textContent = `Количество совпадений: ${x}` : output.textContent = 'Ничего не найдено'
    }
  })
}

function cleanThePage() {
  title.innerHTML = (title.textContent).replace(regExp, elem3);
  cells.forEach((cell) => {
      cell.innerHTML = (cell.textContent).replace(regExp, elem2)
    })

  input.value = '';
  output.textContent = ''
}



