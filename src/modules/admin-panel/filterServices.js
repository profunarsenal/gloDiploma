import { renderList } from "./renderList";

export const filterServices = () => {
  const selectType = document.getElementById('typeItem');

  selectType.addEventListener('change', (e) => {
    if (e.target.value === 'Все услуги') {
      databaseService.getServices().then((services => renderList(services)))
    } else {
      databaseService.getFilterServices('type', e.target.value)
        .then(services => renderList(services))
    }
  })
}