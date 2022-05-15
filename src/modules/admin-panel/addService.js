export const addService = () => {
  const modal = document.getElementById('modal');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-addItem')) {
      modal.style.display = 'flex';
    }
  })
}