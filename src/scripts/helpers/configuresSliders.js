import Swiper, { Navigation, A11y, Keyboard, Thumbs } from 'swiper';

// Thumbs

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
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });
}

const bestSalesSlider = defaultSliderWithItems.bind(this, '.best-sales');

const newItemSlider = defaultSliderWithItems.bind(this, '.new-item');

const recomendationSlider = defaultSliderWithItems.bind(this, '.recomendation');

const discountsSlider = defaultSliderWithItems.bind(this, '.discounts');

const similarProductsSlider = defaultSliderWithItems.bind(
  this,
  '.similar-products'
);

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
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });
}

function pageProductSlider() {
  const swiperThumb = new Swiper('.hero .swiper_thumb', {
    modules: [Keyboard, A11y],
    keyboard: {
      enabled: true,
    },
    spaceBetween: 16,
    slidesPerView: 6,
    watchSlidesProgress: true,
  });
  // eslint-disable-next-line no-unused-vars
  const swiperMain = new Swiper('.hero .swiper_main', {
    modules: [Keyboard, A11y, Thumbs],
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: swiperThumb,
    },
  });
}

export {
  bestSalesSlider,
  newItemSlider,
  recomendationSlider,
  discountsSlider,
  reviewsSlider,
  pageProductSlider,
  similarProductsSlider,
};
