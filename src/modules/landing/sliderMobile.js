import { Slider } from "./slider";

export const sliderMobile = () => {
  const slidesTransparency = document.querySelectorAll('.transparency-item');
  const slidesFormula = document.querySelectorAll('.formula-slider__slide');
  const priceLinks = document.querySelectorAll('.link-list > a');
  let screenWidth = document.documentElement.clientWidth;

  const transparencySlider = new Slider({
    slidesClass: '.transparency-item',
    btnPrevClass: '.transparency-item-left',
    btnNextClass: '.transparency-item-right',
    display: 'flex'
  })

  const formulaSlider = new Slider({
    slidesClass: '.formula-slider__slide',
    btnPrevClass: '.slider-arrow_left-formula',
    btnNextClass: '.slider-arrow_right-formula',
    display: 'flex'
  })

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

    transparencySlider.init()
    formulaSlider.init()
  }

  priceLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (screenWidth < 576) {
        const popupRepairSlider = new Slider({
          slidesClass: '.popup-repair-types-nav__item',
          btnPrevClass: '.nav-arrow-popup-repair_left',
          btnNextClass: '.nav-arrow-popup-repair_right',
        })

        popupRepairSlider.init()
      }
    })
  })

  window.addEventListener('resize', () => {
    screenWidth = document.documentElement.clientWidth;
  })

}