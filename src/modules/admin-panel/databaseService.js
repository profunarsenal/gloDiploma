export class DatabaseService {
  getData(url) {
    return fetch(url).then(res => res.json())
  }

  sendData(url, method, body) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  getServices() {
    return this.getData('http://localhost:4444/services')
  }

  getFilterServices(option, type) {
    return this.getData(`http://localhost:4444/services?${option}=${type}`)
  }
}