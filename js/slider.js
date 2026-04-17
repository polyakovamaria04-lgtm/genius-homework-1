const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',

    renderBullet: function (index, className) {
      if (index < 3) {
        return `<span class="${className}" data-index="${index}"></span>`;
      }
      return '';
    },
  },
  navigation: {
    nextEl: '.carousel__arrow-wrapper.next',
    prevEl: '.carousel__arrow-wrapper.prev',
  },
});

document.querySelectorAll('.pagination__button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const index = Number(btn.dataset.index);

    swiper.slideToLoop(index);
  });
});
