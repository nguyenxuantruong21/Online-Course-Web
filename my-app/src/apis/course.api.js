import http from '../utils/http'
const courseApi = {
  getCourseAll() {
    return http.get(`/course/all`)
  },
  getCourseDetail(id) {
    return http.get(`/course/${id}`)
  },
  createdCourse(body) {
    return http.post(`/course/created`, body)
  },
  deleteCourse(id) {
    return http.delete(`/course/delete/${id}`)
  },
  updateCourse(id, body) {
    return http.patch(`/course/update/${id}`, body)
  }
}

export default courseApi
