import Swiper, { Navigation } from 'swiper';

export const swiper = () => {
  const formulaSlider = document.querySelector('.formula-slider-wrap');
  const popupsFormula = formulaSlider.querySelectorAll('.popup-slide');
  const decrFormula = formulaSlider.querySelectorAll('.formula-item__descr');
  const iconFormula = formulaSlider.querySelectorAll('.formula-item__icon-inner');
  const formulaBtnNext = document.querySelector('#formula-arrow_right');
  const formulaBtnPrev = document.querySelector('#formula-arrow_left');

  const portfolioSLider = document.querySelector('.portfolio-slider');
  const portfolioSlides = portfolioSLider.querySelectorAll('.swiper-slide')
  const portfolioBtnNext = document.querySelector('#portfolio-arrow_right');
  const portfolioBtnPrev = document.querySelector('#portfolio-arrow_left');

  console.log(portfolioSlides)

  let portfolioCounter = 0;
  let formulaCounter = 0;

  const addStyleSlides = (elems, style, hide, show) => {
    elems.forEach(elem => {
      elem.style.cssText += `${style}: ${hide}`;
    })

    elems[formulaCounter].style.cssText += `${style}: ${show}`;
  }

  const showActiveSlide = () => {
    addStyleSlides(popupsFormula, 'opacity', 0, 1);
    addStyleSlides(decrFormula, 'opacity', 0.1, 1);
    addStyleSlides(iconFormula, 'opacity', 0.1, 1);
    addStyleSlides(iconFormula, 'background', 'none', '#FFB015');
    addStyleSlides(iconFormula, 'color', '#000', '#FFF');
  }

  const showButton = (counter, prev, next, step) => {
    if (counter > 0) {
      prev.style.display = 'flex';
    } else if (counter <= 0) {
      prev.style.display = 'none';
    }

    if (counter >= step) {
      next.style.display = 'none';
    } else {
      next.style.display = 'flex';
    }
  }

  portfolioBtnNext.addEventListener('click', () => {
    portfolioCounter++
    showButton(portfolioCounter, portfolioBtnPrev, portfolioBtnNext, 2)
  })

  portfolioBtnPrev.addEventListener('click', () => {
    portfolioCounter--
    showButton(portfolioCounter, portfolioBtnPrev, portfolioBtnNext, 2)
  })

  formulaBtnNext.addEventListener('click', () => {
    formulaCounter++

    console.log(formulaCounter)
    if (formulaCounter > popupsFormula.length - 1) {
      formulaCounter = 0;
    }

    showActiveSlide()
    showButton(formulaCounter, formulaBtnPrev, formulaBtnNext, popupsFormula.length - 1)
  })

  formulaBtnPrev.addEventListener('click', () => {
    formulaCounter--

    if (formulaCounter < 0) {
      formulaCounter = popupsFormula.length - 1;
    }

    showActiveSlide()
    showButton(formulaCounter, formulaBtnPrev, formulaBtnNext, popupsFormula.length - 1)
  })

  addStyleSlides(popupsFormula, 'opacity', 0, 1);
  addStyleSlides(decrFormula, 'opacity', 0.1, 1);
  addStyleSlides(iconFormula, 'opacity', 0.1, 1);
  addStyleSlides(iconFormula, 'background', 'none', '#FFB015');
  addStyleSlides(iconFormula, 'color', 'innerit', '#FFF');


  const portfolioSwiper = new Swiper('.portfolio-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    navigation: {
      nextEl: "#portfolio-arrow_right",
      prevEl: "#portfolio-arrow_left",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  const formulaSwiper = new Swiper('.formula-slider-wrap', {
    modules: [Navigation],
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: "#formula-arrow_right",
      prevEl: "#formula-arrow_left",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 3,
      },
    },
  });

}
