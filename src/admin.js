import { renderTypes } from "./modules/admin-panel/renderTypes"
import { renderList } from "./modules/admin-panel/renderList"
import { login } from "./modules/admin-panel/login"
import { DatabaseService } from "./modules/admin-panel/databaseService"
import { filterServices } from "./modules/admin-panel/filterServices";
import { addService } from "./modules/admin-panel/addService";

window.databaseService = new DatabaseService;

login()

databaseService.getServices()
  .then(services => {
    renderTypes(services)
    renderList(services)
  })

filterServices()
addService()
