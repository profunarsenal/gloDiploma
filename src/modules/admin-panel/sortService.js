import { renderList } from "./renderList";

export const sortService = () => {
  let isSort = false;

  const renderSortService = (name) => {
    databaseService.requestSortService({
      name: name,
      value: isSort ? 'asc' : 'desc'
    }).then(services => {
      renderList(services)
    })

    isSort = !isSort;
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.th-id')) {
      renderSortService('id')
    } else if (e.target.closest('.th-type')) {
      renderSortService('type')
    } else if (e.target.closest('.th-name')) {
      renderSortService('name')
    } else if (e.target.closest('.th-units')) {
      renderSortService('units')
    }
  })

}