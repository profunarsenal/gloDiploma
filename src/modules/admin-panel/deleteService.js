import { renderList } from "./renderList";
import { renderTypes } from "./renderTypes";

export const deleteService = () => {
  const removeService = (elem) => {
    const id = elem.querySelector('.table__id').textContent;

    databaseService.requestRemoveService(id).then(() => {
      databaseService.getServices().then(services => {
        renderTypes(services)
        renderList(services)
      })
    })
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-remove')) {
      removeService(e.target.closest('.table__row'));
    }
  })
}