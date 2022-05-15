import { errorRequest } from "./errorRequest"

export class DatabaseService {
  getData(url) {
    return fetch(url).then(res => res.json()).catch(() => errorRequest())
  }

  sendData(url, method, body) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .catch(() => errorRequest())
  }

  getServices() {
    return this.getData('http://localhost:4444/services')
  }

  getFilterServices(option, type) {
    return this.getData(`http://localhost:4444/services?${option}=${type}`)
  }

  sendNewService(service) {
    return this.sendData('http://localhost:4444/services', 'POST', service)
  }

  getService(id) {
    return this.getData(`http://localhost:4444/services/${id}`)
  }

  sendChangeService(id, service) {
    return this.sendData(`http://localhost:4444/services/${id}`, 'PUT', service)
  }

  requestRemoveService(id) {
    return this.sendData(`http://localhost:4444/services/${id}`, 'DELETE')
  }

  requestSortService(option) {
    return this.getData(`http://localhost:4444/services?_sort=${option.name}&_order=${option.value}`)
  }

  requestSearchService(str) {
    return this.getData(`http://localhost:4444/services?q=${str}`)
  }
}