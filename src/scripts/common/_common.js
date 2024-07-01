import BurgerMenu from '../components/BurgerMenu.js';
import FocusLock from '../components/FocusLock.js';
import getFontSizeBody from '../helpers/getFontSizeBody.js';

export default function common() {
  const focusLock = new FocusLock({
    exception: ['.burger-menu', '.header .burger-trigger'],
    mutationObserver: true,
    disableOnMobileDevice: true,
  });

  const burgerMenu = new BurgerMenu({
    container: '.burger-menu',
    trigger: '.header .burger-trigger',
    body: '.burger-menu__body',
    breakpoints: {
      // 36rem - 576px
      [getFontSizeBody() * 36]() {
        if (burgerMenu.isOpen()) {
          burgerMenu.close();
        }
      },
    },
    focusLock,
  });

  burgerMenu.init();
}
