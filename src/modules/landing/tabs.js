export const tabs = () => {
  const tabBtns = document.querySelectorAll('.repair-types-nav__item');
  const tabSliders = document.querySelectorAll('.repair-types-slider > div');

  const toggleSlider = (num) => {
    tabSliders.forEach(slider => {
      slider.style.display = 'none';
    })

    tabSliders[num].style.display = 'block';
  }

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {

      tabBtns.forEach(tabBtn => {
        tabBtn.classList.remove('active');
        e.target.classList.add('active');
      })

      toggleSlider(index);
    })
  })
}