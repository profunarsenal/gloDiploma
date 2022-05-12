export const modal = () => {
  const priceLinks = document.querySelectorAll('.link-list > a');
  const price = document.querySelector('.popup-repair-types');
  const closeBtn = price.querySelector('.close ')

  priceLinks.forEach(link => {
    link.addEventListener('click', () => {
      price.style.visibility = 'visible';
    })
  })

  closeBtn.addEventListener('click', () => {
    price.style.visibility = 'hidden';
  })
}