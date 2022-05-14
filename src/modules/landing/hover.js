export const hover = () => {
  const elements = document.querySelectorAll('.formula-item__icon');
  const popupElements = document.querySelectorAll('.formula-item__icon > .formula-item-popup');
  const elemInner = document.querySelectorAll('.formula-item__icon > .formula-item__icon-inner');

  let screenWidth = document.documentElement.clientWidth;

  const showPopup = (num) => {
    const position = popupElements[num].getBoundingClientRect();

    if (position.top > 0) {
      popupElements[num].classList.add('active');
      popupElements[num].style.cssText += `
      visibility: visible;
      opacity: 1;
      padding: 20px 40px 0;
    `;
      elemInner[num].style.opacity = 1;
    } else {
      popupElements[num].style.cssText += `
      visibility: visible;
      opacity: 1;
      bottom: -290%;
      padding: 40px 40px 0;
      `;
      elemInner[num].style.opacity = 1;
    }

  }

  const hidePopup = (num) => {
    popupElements[num].classList.remove('active');
    popupElements[num].style.cssText += `
    visibility: hidden;
    opacity: 0;
    bottom: 90px;
    padding: 20px 40px 0;
  `;
    elemInner[num].style.opacity = 0;
  }

  elements.forEach((elem, index) => {
    elem.addEventListener('mouseover', () => {
      if (screenWidth > 1024) {
        showPopup(index)
      }
    })

    elem.addEventListener('mouseout', () => {
      if (screenWidth > 1024) {
        hidePopup(index)
      }
    })
  })

  window.addEventListener('resize', () => {
    screenWidth = document.documentElement.clientWidth;
  })
}