const baseURL = '';

export default class JobbyBackendAdapter {
  static get(route) {
    const authHeader = getJWTToken()
    return fetch(baseURL + route, {
      headers: {
        ...authHeader
      }
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return { status: 'ERROR' }
      }
    })
  }

  static post(route, body) {
    const authHeader = getJWTToken()
    return fetch(baseURL + route, {
      method: 'POST',
      headers: {
        ...authHeader,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return { status: 'ERROR' }
      }
    })
  }

  static
}

function getJWTToken() {
  let token

  try {
    token = localStorage.getItem('token');
  } catch (e) {
    token = null;
  }

  if (token) {
    return { Authorization: `bearer ${token}`}
  } else {
    return {}
  }
}
