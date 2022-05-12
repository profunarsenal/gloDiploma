export const modal = () => {
  const priceLinks = document.querySelectorAll('.link-list > a');
  const priceModal = document.querySelector('.popup-repair-types');
  const closePriceModalBtn = priceModal.querySelector('.close');
  const privacyLinks = document.querySelectorAll('.link-privacy');
  const privacyModal = document.querySelector('.popup-privacy');
  const closePrivacyModalBtn = privacyModal.querySelector('.close');
  const transparencyLinks = document.querySelectorAll('.transparency-item__img');
  const transparencyModal = document.querySelector('.popup-transparency');
  const closeTransparencyModalBtn = transparencyModal.querySelector('.close');
  const consultationLink = document.querySelectorAll('.button_wide');
  const consultationModal = document.querySelector('.popup-consultation');
  const closeconsultationModalBtn = consultationModal.querySelector('.close');

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

  closeTransparencyModalBtn.addEventListener('click', () => {
    closeModal(transparencyModal)
  })

  closeconsultationModalBtn.addEventListener('click', () => {
    closeModal(consultationModal)
  })
}