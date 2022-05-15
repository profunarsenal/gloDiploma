export const errorRequest = () => {
  const tableWrapper = document.querySelector('.table__wrapper');
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Ошибка на сервере. Данные не получены!';
  tableWrapper.insertAdjacentElement('afterend', message);
}