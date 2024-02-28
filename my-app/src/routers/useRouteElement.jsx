import React from 'react'
import { useRoutes } from 'react-router-dom'
import Student from '../pages/Students/Student'
import Mail from '../pages/Mails/Mail'
import Course from '../pages/Courses'
import Setting from '../pages/Setting/Setting'
import Account from '../pages/Account'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: 'student',
      element: <Student />
    },
    {
      path: 'mail',
      element: <Mail />
    },
    {
      path: 'course',
      element: <Course />
    },
    {
      path: 'setting',
      element: <Setting />
    },
    {
      path: 'account',
      element: <Account />
    }
  ])
  return routeElements
}
