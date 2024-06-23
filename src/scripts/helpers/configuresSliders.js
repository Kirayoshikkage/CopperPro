import Swiper, { Navigation, A11y, Keyboard } from 'swiper';

function bestSalesSlader() {
  const slider = '.best-sales .swiper';
  const buttonNext = '.best-sales .swiper-button-next';
  const buttonPrev = '.best-sales .swiper-button-prev';
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    a11y: {
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
  });
}

function newItemSlader() {
  const slider = '.new-item .swiper';
  const buttonNext = '.new-item .swiper-button-next';
  const buttonPrev = '.new-item .swiper-button-prev';
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    a11y: {
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
  });
}

export { bestSalesSlader, newItemSlader };
