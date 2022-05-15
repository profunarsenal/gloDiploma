import { renderTypes } from "./modules/admin-panel/renderTypes"
import { renderList } from "./modules/admin-panel/renderList"
import { login } from "./modules/admin-panel/login"
import { DatabaseService } from "./modules/admin-panel/databaseService"
import { filterServices } from "./modules/admin-panel/filterServices";
import { addService } from "./modules/admin-panel/addService";
import { checkAuth } from "./modules/admin-panel/checkAuth";
import { changeService } from "./modules/admin-panel/changeService";
import { deleteService } from "./modules/admin-panel/deleteService";
import { sortService } from "./modules/admin-panel/sortService";
import { searchService } from "./modules/admin-panel/searchService";

window.databaseService = new DatabaseService;

if (window.location.pathname === '/index.html') {
  checkAuth()
  login()
}

if (window.location.pathname === '/table.html') {
  checkAuth()

  databaseService.getServices()
    .then(services => {
      renderTypes(services)
      renderList(services)
    })

  filterServices()
  addService()
  changeService()
  deleteService()
  sortService()
  searchService()
}



