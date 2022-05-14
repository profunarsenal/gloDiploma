export const modal = () => {
  const priceModal = document.querySelector('.popup-repair-types');
  const privacyModal = document.querySelector('.popup-privacy');
  const transparencyModal = document.querySelector('.popup-transparency');
  const consultationModal = document.querySelector('.popup-consultation');
  const portfolioModal = document.querySelector('.popup-portfolio');
  const popupForm = document.querySelector('.popup-thank ');

  let screenWidth = document.documentElement.clientWidth;

  const openModal = (modal) => {
    modal.style.visibility = 'visible';
  }

  const closeModal = (modal) => {
    modal.style.visibility = 'hidden';
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.link-list > a')) {
      openModal(priceModal)
    } else if (e.target.closest('.close-price')) {
      closeModal(priceModal)
    } else if (e.target.closest('.link-privacy')) {
      openModal(privacyModal)
    } else if (e.target.closest('.close-pri')) {
      closeModal(privacyModal)
    } else if (e.target.closest('.transparency-item__img')) {
      openModal(transparencyModal)
    } else if (e.target.closest('.close-t')) {
      closeModal(transparencyModal)
    } else if (e.target.closest('.button_wide')) {
      openModal(consultationModal)
    } else if (e.target.closest('.close-consultation')) {
      closeModal(consultationModal)
    } else if (e.target.closest('.close-thank')) {
      closeModal(popupForm)
    }
  })


  if (screenWidth > 576) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.portfolio-slider__slide-frame')) {
        openModal(portfolioModal)
      } else if (e.target.closest('.close-portfolio')) {
        closeModal(portfolioModal)
      }
    })
  }

  window.addEventListener('resize', () => {
    screenWidth = document.documentElement.clientWidth;
  })

}