'use strict';

var info = document.querySelector('.info a');
var modal = document.querySelector('.modal');
var buttonClose = document.querySelector('.btn-close');

info.addEventListener ('click', showModal);
function showModal() {
  modal.classList.add('modal-show');
}

buttonClose.addEventListener ('click', closeModal);
function closeModal() {
  modal.classList.remove('modal-show');
}


/*var modal = document.querySelector('.modal');
var buttonOpen = document.querySelector('btn-close');
var buttonClose = document.querySelector('h1');

function showModal(event) {
  buttonOpen.innerHTML = event.target.innerHTML;
  modal.classList.add('modal-show');
}

modal.addEventListener ('click', showModal);

function closeModal() {
  modal.classList.remove('modal-show');
}

buttonClose.addEventListener ('click', closeModal);
*/
