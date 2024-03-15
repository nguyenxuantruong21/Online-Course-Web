import http from '../utils/http'
const studentApi = {
  getAllUser() {
    return http.get(`/auth/get-all`)
  }
}

export default studentApi
