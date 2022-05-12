export const phoneList = () => {
  const btnArrowImg = document.querySelector('.header-contacts__arrow > img');
  const hideNumber = document.querySelector('.header-contacts__phone-number-accord');
  const hideNumberLink = document.querySelector('.header-contacts__phone-number-accord > a');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.header-contacts__arrow')) {
      hideNumber.style.position = 'relative';
      hideNumberLink.style.opacity = '1';
      btnArrowImg.style.cssText = 'transform: rotate(180deg);';
    } else if (!e.target.closest('.header-contacts')) {
      console.log(e.target)
      hideNumber.style.position = 'absolute';
      hideNumberLink.style.opacity = '0';
      btnArrowImg.style.cssText = 'transform: rotate(0deg);';
    }
  })
}