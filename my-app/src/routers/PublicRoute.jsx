import { Route } from 'react-router-dom'
import DashboardLayout from '../layouts/DashBoard'
import LoginLayout from '../layouts/Login'
import Student from '../pages/Students/Student'
import AddStudent from '../pages/Students/AddStudent'
import Mails from '../pages/Mails'
import Courses from '../pages/Courses'
import Account from '../pages/Account'
import AddCourse from '../pages/Courses/AddCourse/AddCourse'
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'

export const publicRoutes = (
  <>
    <Route element={<DashboardLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/student' element={<Student />} />
      <Route path='/student/add' element={<AddStudent />} />
      <Route path='/mail' element={<Mails />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/course/add' element={<AddCourse />} />
      <Route path='/account' element={<Account />} />
    </Route>
    <Route path='/auth' element={<LoginLayout />}>
      <Route path='login' element={<Login />} />
    </Route>
  </>
)
