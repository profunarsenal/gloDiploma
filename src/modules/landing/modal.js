export const modal = () => {
  const priceModal = document.querySelector('.popup-repair-types');
  const privacyModal = document.querySelector('.popup-privacy');
  const transparencyModal = document.querySelector('.popup-transparency');
  const consultationModal = document.querySelector('.popup-consultation');
  const portfolioModal = document.querySelector('.popup-portfolio');
  const popupForm = document.querySelector('.popup-thank ');

  const addStyleModals = () => {
    const modals = [priceModal, priceModal, transparencyModal, consultationModal, portfolioModal, popupForm];

    modals.forEach(modal => {
      modal.style.cssText += `
        opacity: 0;
        transition: 0.5s ease;
      `;
    })
  }

  const openModal = (modal) => {
    modal.style.cssText += `
      visibility: visible;
      opacity: 1;
    `;
  }

  const closeModal = (modal) => {
    modal.style.cssText += `
      visibility: hidden;
      opacity: 0;
    `;
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
    } else if (e.target.closest('.portfolio-slider__slide-frame')) {
      openModal(portfolioModal)
    } else if (e.target.closest('.close-portfolio')) {
      closeModal(portfolioModal)
    } else if (e.target.closest('.close-thank')) {
      closeModal(popupForm)
    }
  })

  addStyleModals();
}