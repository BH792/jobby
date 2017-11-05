const baseURL = '';

export default class JobbyBackendAdapter {
  static signup(userInfo) {
    return JobbyBackendAdapter.post('/users/signup', userInfo)
  }

  static login(userInfo) {
    return JobbyBackendAdapter.post('/users/login', userInfo)
  }

  static loginFromToken() {
    return JobbyBackendAdapter.get('/users/login/reauthenticate')
  }

  static newJob(jobInfo) {
    return JobbyBackendAdapter.post('/jobs', jobInfo)
  }

  static updateJob(jobInfo) {
    return JobbyBackendAdapter.post(`/jobs/${jobInfo.id}`, jobInfo)
  }

  static newCompany(companyInfo) {
    return JobbyBackendAdapter.post('/companies', companyInfo)
  }

  static updateCompany(companyInfo) {
    return JobbyBackendAdapter.post(`/companies/${companyInfo.id}`, companyInfo)
  }

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
        return { type: 'ERROR' }
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
        return { type: 'ERROR' }
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
    return { token: `bearer ${token}`}
  } else {
    return {}
  }
}
