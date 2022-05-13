export const modal = () => {
  const priceLinks = document.querySelectorAll('.link-list > a');
  const priceModal = document.querySelector('.popup-repair-types');
  const closePriceModalBtn = priceModal.querySelector('.close');

  const privacyLinks = document.querySelectorAll('.link-privacy');
  const privacyModal = document.querySelector('.popup-privacy');
  const closePrivacyModalBtn = privacyModal.querySelector('.close');

  const transparencyLinks = document.querySelectorAll('.transparency-item__img');
  const transparencyModal = document.querySelector('.popup-transparency');
  const closeTransparencyModalBtns = transparencyModal.querySelectorAll('.close-t');

  const consultationLink = document.querySelectorAll('.button_wide');
  const consultationModal = document.querySelector('.popup-consultation');
  const closeconsultationModalBtn = consultationModal.querySelector('.close');

  const portfolioLinks = document.querySelectorAll('.portfolio-slider__slide-frame');
  const portfolioModal = document.querySelector('.popup-portfolio');
  const closePortfolioModalBtn = portfolioModal.querySelector('.close');


  let screenWidth = document.documentElement.clientWidth;

  const openModal = (modal) => {
    modal.style.visibility = 'visible';
  }

  const closeModal = (modal) => {
    modal.style.visibility = 'hidden';
  }

  privacyLinks.forEach(link => {
    link.addEventListener('click', () => {
      openModal(privacyModal)
    })
  })

  priceLinks.forEach(link => {
    link.addEventListener('click', () => {
      openModal(priceModal)
    })
  })

  transparencyLinks.forEach(link => {
    link.addEventListener('click', () => {
      openModal(transparencyModal)
    })
  })

  consultationLink.forEach(link => {
    link.addEventListener('click', () => {
      openModal(consultationModal)
    })
  })


  closePriceModalBtn.addEventListener('click', () => {
    closeModal(priceModal)
  })

  closePrivacyModalBtn.addEventListener('click', () => {
    closeModal(privacyModal)
  })

  closeconsultationModalBtn.addEventListener('click', () => {
    closeModal(consultationModal)
  })

  closeTransparencyModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(transparencyModal)
    })
  })

  if (screenWidth > 576) {
    portfolioLinks.forEach(link => {
      link.addEventListener('click', () => {
        openModal(portfolioModal)
      })
    })

    closePortfolioModalBtn.addEventListener('click', () => {
      closeModal(portfolioModal)
    })
  }

  window.addEventListener('resize', () => {
    screenWidth = document.documentElement.clientWidth;
  })

}