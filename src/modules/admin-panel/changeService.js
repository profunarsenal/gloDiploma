import { renderList } from "./renderList";
import { renderTypes } from "./renderTypes";

export const changeService = () => {
  const modal = document.getElementById('modal');
  const modalHeader = document.querySelector('.modal__header');
  const form = document.getElementById('service');
  const inputType = document.getElementById('type');
  const inputName = document.getElementById('name');
  const inputUnits = document.getElementById('units');
  const inputCost = document.getElementById('cost');

  const editService = (elem) => {
    const id = elem.querySelector('.table__id').textContent;

    databaseService.getService(id).then(service => {
      inputType.value = service.type;
      inputName.value = service.name;
      inputUnits.value = service.units;
      inputCost.value = service.cost;

      form.dataset.service = id;
    })
  }

  const sendChangeService = (id) => {
    const service = {
      type: inputType.value,
      name: inputName.value,
      units: inputUnits.value,
      cost: inputCost.value
    }

    databaseService.sendChangeService(id, service).then(() => {
      databaseService.getServices().then(services => {
        renderTypes(services)
        renderList(services)
        form.reset();
        form.removeAttribute('data-service');
        modal.style.display = 'none';
      })
    })
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (form.dataset.service) {
      const id = form.dataset.service;
      sendChangeService(id);
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-change')) {
      modalHeader.textContent = 'Редактировать услугу';
      modal.style.display = 'flex';
      editService(e.target.closest('.table__row'));
    } else if (e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
      modal.style.display = 'none';
    }
  })
}