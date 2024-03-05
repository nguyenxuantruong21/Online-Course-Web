import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='bg-gray-100 flex items-center justify-center h-screen'>
      <Outlet />
    </div>
  )
}
