import { Route } from 'react-router-dom'
import DashboardLayout from '../layouts/DashBoard'
import Student from '../pages/Students/Student'
import AddStudent from '../pages/Students/AddStudent'
import Mails from '../pages/Mails'
import Courses from '../pages/Courses'
import Account from '../pages/Account'
import AddCourse from '../pages/Courses/AddCourse/AddCourse'
import Home from '../pages/Home/Home'
import AuthLayout from '../layouts/Auth'
import Login from '../pages/Auth/Login'
import ResetPassword from '../pages/Auth/ResetPassword'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import Category from '../pages/Category/Category'
import AddCategory from '../pages/Category/AddCategory/AddCategory'

export const publicRoutes = (
  <>
    <Route element={<DashboardLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/student' element={<Student />} />
      <Route path='/student/add' element={<AddStudent />} />
      <Route path='/mail' element={<Mails />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/course/add' element={<AddCourse />} />
      <Route path='/course/update/:id' element={<AddCourse />} />
      <Route path='/account' element={<Account />} />
      <Route path='/category' element={<Category />} />
      <Route path='/category/add' element={<AddCategory />} />
      <Route path='/category/update/:id' element={<AddCategory />} />
    </Route>
    <Route path='/auth' element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='reset-password' element={<ResetPassword />} />
    </Route>
  </>
)
