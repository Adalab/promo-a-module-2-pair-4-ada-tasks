'use strict';
const list = document.querySelector('.js__li');

function toggleCrossed () {
  list.classList.toggle('crossed');
}

list.addEventListener('click', (event) => {
  toggleCrossed();
});