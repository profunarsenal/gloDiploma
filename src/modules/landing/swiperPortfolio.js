import Swiper, { Navigation } from 'swiper';

export const swiperPortfolio = () => {
  const portfolioBtnNext = document.querySelector('#portfolio-arrow_right');
  const portfolioBtnPrev = document.querySelector('#portfolio-arrow_left');
  let portfolioCounter = 0;

  const showButton = () => {
    console.log(portfolioCounter)
    if (portfolioCounter > 0) {
      portfolioBtnPrev.style.display = 'flex';
    } else if (portfolioCounter <= 0) {
      portfolioBtnPrev.style.display = 'none';
    }

    if (portfolioCounter >= 2) {
      portfolioBtnNext.style.display = 'none';
    } else {
      portfolioBtnNext.style.display = 'flex';
    }
  }

  portfolioBtnNext.addEventListener('click', () => {
    portfolioCounter++
    showButton()
  })

  portfolioBtnPrev.addEventListener('click', () => {
    portfolioCounter--
    showButton()
  })


  const portfolioSlider = new Swiper('.portfolio-slider', {
    modules: [Navigation],
    slidesPerView: 3,
    navigation: {
      nextEl: "#portfolio-arrow_right",
      prevEl: "#portfolio-arrow_left",
    },
  });
}
