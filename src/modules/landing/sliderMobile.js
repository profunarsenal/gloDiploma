import { slider } from "./slider";

export const sliderMobile = () => {
  const slidesTransparency = document.querySelectorAll('.transparency-item');
  const slidesFormula = document.querySelectorAll('.formula-slider__slide');
  const priceLinks = document.querySelectorAll('.link-list > a');

  let screenWidth = document.documentElement.clientWidth;

  const addStyle = (slides) => {
    slides.forEach((slide, index) => {
      if (index < 1) {
        slide.style.display = 'flex';
      } else {
        slide.style.display = 'none';
      }
    })
  }

  if (screenWidth < 576) {
    addStyle(slidesTransparency);
    addStyle(slidesFormula);

    slider('.transparency-item',
      '.transparency-item-left', '.transparency-item-right', null, null, 'flex');

    slider('.formula-slider__slide',
      '.slider-arrow_left-formula', '.slider-arrow_right-formula', null, null, 'flex');

  }

  priceLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (screenWidth < 576) {
        slider('.popup-repair-types-nav__item',
          '.nav-arrow-popup-repair_left', '.nav-arrow-popup-repair_right');
      }
    })
  })

  window.addEventListener('resize', () => {
    screenWidth = document.documentElement.clientWidth;
  })

}