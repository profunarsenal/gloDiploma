export const transformSlider = (sliderClass, btnPrevClass, btnNextClass) => {
  const slider = document.querySelector(sliderClass);
  const btnPrev = document.getElementById(btnPrevClass);
  const btnNext = document.getElementById(btnNextClass);
  let position = 0;

  const nextSlide = () => {
    position -= 210;

    if (position < -840) {
      position = 0
    }

    slider.style.cssText += `transform: translateX(${position}px)`;
  }

  const prevSlide = () => {
    position += 210;

    if (position > 0) {
      position = -840
    }

    slider.style.cssText += `transform: translateX(${position}px)`;
  }

  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);

}