export class Slider {
  constructor({
    slidesClass,
    btnPrevClass,
    btnNextClass,
    slideCurrentClass,
    slidesTotalClass,
    display = 'block',
    autoPlay = false
  }) {
    this.slides = document.querySelectorAll(slidesClass);
    this.btnPrev = document.querySelector(btnPrevClass);
    this.btnNext = document.querySelector(btnNextClass);
    this.slideCurrent = document.querySelector(slideCurrentClass);
    this.slidesTotal = document.querySelector(slidesTotalClass);
    this.display = display;
    this.position = 0;
    this.autoPlay = autoPlay;
    this.timer;
  }

  init() {
    this.controlsSlide()
    this.fraction()

    if (this.autoPlay) {
      this.onAutoPlay()
    }
  }

  fraction() {
    if (this.slideCurrent && this.slidesTotal) {
      this.slideCurrent.textContent = this.position + 1;
      this.slidesTotal.textContent = this.slides.length;
    }
  }

  nextSlide() {
    this.slides[this.position].style.cssText += `
      display: none;
      opacity: 0;
    `;

    this.position++;

    if (this.position >= this.slides.length) {
      this.position = 0;
    }

    this.slides[this.position].style.cssText += `
    display: ${this.display};
    opacity: 0;
    transition: none;
    `;

    setTimeout(() => {
      this.slides[this.position].style.cssText += `
        opacity: 1;
        transition: 0.3s ease;
      `;
    }, 100)

    this.fraction();
  }

  prevSlide() {
    this.slides[this.position].style.cssText += `
    display: none;
    opacity: 0;
  `;

    this.position--;

    if (this.position < 0) {
      this.position = this.slides.length - 1;
    }

    this.slides[this.position].style.cssText += `
    display: ${this.display};
    opacity: 0;
    transition: none;
    `;

    setTimeout(() => {
      this.slides[this.position].style.cssText += `
        opacity: 1;
        transition: 0.3s ease;
      `;
    }, 100)

    this.fraction();
  }

  controlsSlide() {
    this.btnPrev.addEventListener('click', this.prevSlide.bind(this));
    this.btnNext.addEventListener('click', this.nextSlide.bind(this));

    this.btnPrev.addEventListener('mouseover', this.pauseAutoPlay.bind(this));
    this.btnNext.addEventListener('mouseover', this.pauseAutoPlay.bind(this));
    this.btnNext.addEventListener('mouseout', this.onAutoPlay.bind(this));
    this.btnPrev.addEventListener('mouseout', this.onAutoPlay.bind(this));
  }

  onAutoPlay() {
    this.timer = setInterval(() => {
      this.nextSlide()
    }, 3000);
  }

  pauseAutoPlay() {
    clearInterval(this.timer)
  }
}
