export const burgerMenu = () => {
  const menu = document.querySelector('.popup-dialog-menu');
  let screenWidth = document.documentElement.clientWidth;

  document.addEventListener('click', (e) => {
    if (screenWidth < 576) {
      if (e.target.closest('.menu__icon')) {
        menu.style.top = '100%';
      } else if (e.target.closest('.close-menu') || !e.target.closest('.popup-dialog-menu')) {
        menu.style.top = '0';
      }
    } else if (screenWidth < 1024) {
      if (e.target.closest('.menu__icon')) {
        menu.style.right = '539px';
      } else if (e.target.closest('.close-menu') || !e.target.closest('.popup-dialog-menu')) {
        menu.style.right = '0';
      }
    } else {
      if (e.target.closest('.menu__icon')) {
        menu.style.right = '639px';
      } else if (e.target.closest('.close-menu') || !e.target.closest('.popup-dialog-menu')) {
        menu.style.right = '0';
      }
    }
  })

  window.addEventListener('resize', () => {
    screenWidth = document.documentElement.clientWidth;
  })

}