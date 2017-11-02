const baseURL = '';

export default class JobbyBackendAdapter {
  static login(userInfo) {
    return JobbyBackendAdapter.post('/users/login', userInfo)
  }

  static get(route) {
    return fetch(baseURL + route).then(res => res.json())
  }

  static post(route, body) {
    return fetch(baseURL + route, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }
}
