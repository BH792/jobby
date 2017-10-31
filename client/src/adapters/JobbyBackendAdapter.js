const baseURL = '';

export default class JobbyBackendAdapter {
  static get(route) {
    return fetch(baseURL + route).then(res => res.json())
  }

  static post(route, body) {
    return fetch(baseURL + route, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }
}
