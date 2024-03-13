import http from '../utils/http'
const categoryApi = {
  getCategoryAll() {
    return http.get(`/category/all`)
  },
  createdCategory(body) {
    return http.post(`/category/created`, body)
  },
  deleteCategory(id) {
    return http.delete(`/category/delete/${id}`)
  },
  updateCategory(id) {
    return http.patch(`/category/update/${id}`)
  },
  getCategoryById(id) {
    return http.get(`/category/${id}`)
  }
}

export default categoryApi
