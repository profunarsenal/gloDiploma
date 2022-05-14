export const scroll = () => {
  const footerBtn = document.querySelector('.button-footer > a');
  const menuLink = document.querySelectorAll('.popup-menu-nav__item > .menu-link');
  const links = [footerBtn, ...menuLink];

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const id = link.getAttribute('href');
      const section = document.querySelector(id);

      if (section) {
        section.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    })
  })
}