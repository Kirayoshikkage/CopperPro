import Swiper, { Navigation, A11y, Keyboard } from 'swiper';

function defaultSliderWithItems(selectorContainer) {
  const slider = `${selectorContainer} .swiper`;
  const buttonNext = `${selectorContainer} .swiper-button-next`;
  const buttonPrev = `${selectorContainer} .swiper-button-prev`;
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

const bestSalesSlider = defaultSliderWithItems.bind(this, '.best-sales');

const newItemSlider = defaultSliderWithItems.bind(this, '.new-item');

const recomendationSlider = defaultSliderWithItems.bind(this, '.recomendation');

const discountsSlider = defaultSliderWithItems.bind(this, '.discounts');

function reviewsSlider() {
  const slider = `.reviews .swiper`;
  const buttonNext = `.reviews .swiper-button-next`;
  const buttonPrev = `.reviews .swiper-button-prev`;
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 3,
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

export {
  bestSalesSlider,
  newItemSlider,
  recomendationSlider,
  discountsSlider,
  reviewsSlider,
};
