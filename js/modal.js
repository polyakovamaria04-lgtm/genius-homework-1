const modal = document.querySelector('.backdrop');
const modalButtonOpen = document.querySelector('.modal-button-open');
const modalButtonClose = document.querySelector('.modal__button-close');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
};

modalButtonOpen.addEventListener('click', toggleModal);
modalButtonClose.addEventListener('click', toggleModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    toggleModal();
  }
});
