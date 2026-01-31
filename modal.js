const modal = document.querySelector('.backdrop');
const modalButtonOpen = document.querySelector('.modal-button-open');
const modalButtonClose = document.querySelector('.modal-button-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalButtonOpen.addEventListener('click', toggleModal);
modalButtonClose.addEventListener('click', toggleModal);
