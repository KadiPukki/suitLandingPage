'use strict';

//crio constantes para selecionar o modal, botão de fechar e botão de abrir
const modal = document.querySelector('.pop-up');
const btnCloseModal = document.querySelector('.close');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//declaro variável como funcão para abrir o modal
const openModal = function () {
    modal.classList.remove('hidden');
};

//declaro variável como funcão para fechar o modal
const closeModal = function () {
    modal.classList.add('hidden');
};

//Looping FOR para abrir e fechar o modal ao clicar nos botões
for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);