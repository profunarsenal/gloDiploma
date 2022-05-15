import { renderList } from "./renderList";
import { renderTypes } from "./renderTypes";

export const addService = () => {
  const modal = document.getElementById('modal');
  const modalHeader = document.querySelector('.modal__header');
  const form = document.getElementById('service');
  const inputType = document.getElementById('type');
  const inputName = document.getElementById('name');
  const inputUnits = document.getElementById('units');
  const inputCost = document.getElementById('cost');

  const addNewService = () => {
    const newService = {
      type: inputType.value,
      name: inputName.value,
      units: inputUnits.value,
      cost: inputCost.value
    }

    databaseService.sendNewService(newService).then(() => {
      databaseService.getServices().then(services => {
        renderTypes(services)
        renderList(services)
        form.reset()
        modal.style.display = 'none';
      })
    })
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.dataset.service) {
      addNewService();
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-addItem')) {
      modalHeader.textContent = 'Добавление новой услуги';
      modal.style.display = 'flex';
    } else if (e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
      modal.style.display = 'none';
    }
  })
}