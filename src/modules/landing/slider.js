export class Slider {
  constructor({
    slidesClass,
    btnPrevClass,
    btnNextClass,
    slideCurrentClass,
    slidesTotalClass,
    display = 'block'
  }) {
    this.slides = document.querySelectorAll(slidesClass);
    this.btnPrev = document.querySelector(btnPrevClass);
    this.btnNext = document.querySelector(btnNextClass);
    this.slideCurrent = document.querySelector(slideCurrentClass);
    this.slidesTotal = document.querySelector(slidesTotalClass);
    this.display = display;
    this.position = 0;
  }

  init() {
    this.controlsSlide()
    this.fraction()
  }

  fraction() {
    if (this.slideCurrent && this.slidesTotal) {
      this.slideCurrent.textContent = this.position + 1;
      this.slidesTotal.textContent = this.slides.length;
    }
  }

  nextSlide() {
    this.slides[this.position].style.display = 'none';
    this.position++;

    if (this.position >= this.slides.length) {
      this.position = 0;
    }

    this.slides[this.position].style.display = this.display;

    this.fraction();
  }

  prevSlide() {
    this.slides[this.position].style.display = 'none';
    this.position--;

    if (this.position < 0) {
      this.position = this.slides.length - 1;
    }

    this.slides[this.position].style.display = this.display;

    this.fraction();
  }

  controlsSlide() {
    this.btnPrev.addEventListener('click', this.prevSlide.bind(this));
    this.btnNext.addEventListener('click', this.nextSlide.bind(this));
  }
}
