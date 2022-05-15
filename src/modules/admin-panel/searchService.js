import { renderList } from "./renderList";

export const searchService = () => {
  const inputSearch = document.getElementById('search');

  const debounce = (fn, ms = 300) => {
    let timer;

    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { fn.apply(this, args) }, ms)
    }
  }

  const debounceSearch = debounce(() => {
    databaseService.requestSearchService(inputSearch.value).then(services => {
      renderList(services)
    })

  })

  inputSearch.addEventListener('input', debounceSearch)
}