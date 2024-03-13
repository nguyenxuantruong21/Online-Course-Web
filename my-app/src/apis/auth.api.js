import http from '../utils/http'
const authApi = {
  login(body) {
    return http.post(`/auth/login`, body)
  },
  logout() {
    return http.post(`/auth/logout`)
  }
}

export default authApi
