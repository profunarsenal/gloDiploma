export const slider = (sliderClass, slidesClass, btnPrevClass, btnNextClass, slideCurrentClass, slidesTotalClass) => {
  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slidesClass);
  const btnPrev = document.querySelector(btnPrevClass);
  const btnNext = document.querySelector(btnNextClass);
  const slideCurrent = document.querySelector(slideCurrentClass);
  const slidesTotal = document.querySelector(slidesTotalClass);
  let position = 0;

  slideCurrent.textContent = position + 1;
  slidesTotal.textContent = slides.length;

  const nextSlide = () => {
    slides[position].style.display = 'none';
    position++;
    if (position >= slides.length) {
      position = 0;
    }
    slides[position].style.display = 'block';
    slideCurrent.textContent = position + 1;
  }

  const prevSlide = () => {
    slides[position].style.display = 'none';
    position--;
    if (position < 0) {
      position = slides.length - 1;
    }
    slides[position].style.display = 'block';
    slideCurrent.textContent = position + 1;
  }

  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);

}