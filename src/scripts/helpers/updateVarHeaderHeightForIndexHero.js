import debounce from './debounce.js';

function setVarHeaderHeightForIndexHero(height) {
  const hero = document.querySelector('.hero');

  hero.style.setProperty('--header-height', `${height}px`);
}

export default function updateVarHeaderHeightForIndexHero() {
  const header = document.querySelector('.header');
  let height = Math.ceil(header.offsetHeight) + 1;

  setVarHeaderHeightForIndexHero(height);

  const updateHandler = debounce(() => {
    const newHeight = Math.ceil(header.offsetHeight) + 1;

    if (height == newHeight) return;

    height = newHeight;

    setVarHeaderHeightForIndexHero(height);
  }, 400);

  window.addEventListener('resize', updateHandler);
}
