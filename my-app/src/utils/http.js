import axios from 'axios'
import { getAccessTokenFromLS } from './auth'

const access_token = getAccessTokenFromLS()

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5500/api/v1',
      timeout: 10000,
      headers: {
        authorization: access_token
      }
    })
  }
}

const http = new Http().instance
export default http
