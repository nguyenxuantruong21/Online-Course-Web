import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='flex pt-2 bg-gray-800 h-screen cursor-pointer'>
      <div className='container'>
        {/* auth */}
        <div className='flex items-center justify-star px-4'>
          <div className=''>
            <img
              className='h10 w-10 rounded-full'
              src='https://themewagon.github.io/corona-free-dark-bootstrap-admin-template/assets/images/faces/face15.jpg'
              alt=''
            />
          </div>
          <div className='flex ml-5 items-center justify-center '>
            <span className='text-gray-300'>Henry Kien</span>
          </div>
        </div>
        {/* line */}
        <div className='border border-b-1 border-gray-300 mt-2'></div>
        {/*side bar */}
        <div className='bg-gray-800 text-gray-300 '>
          <NavLink
            to='/'
            className={({ isActive }) => {
              return `mt-2 mx-2 flex justify-start pl-2 text-center  hover:bg-gray-600 hover:rounded-md`
            }}
          >
            <div className='py-2'>
              <link class='fa-solid fa-gauge text-white'></link>
            </div>
            <div className='py-2 px-3'>DashBoard</div>
          </NavLink>
          <NavLink
            to='/mail'
            className='mt-2 mx-2 flex justify-start  pl-2 text-center  hover:bg-gray-600 hover:rounded-md'
          >
            <div className='py-2'>
              <link class='fa-solid fa-envelope text-white'></link>
            </div>
            <div className='py-2 px-3'>Mail</div>
          </NavLink>
          <NavLink
            to='/student'
            className='mt-2 mx-2 flex justify-start pl-2 text-center  hover:bg-gray-600 hover:rounded-md'
          >
            <div className='py-2'>
              <link class='fa-solid fa-person text-white'></link>
            </div>
            <div className='py-2 px-3'>Student</div>
          </NavLink>
          <NavLink
            to='/course'
            className='mt-2 mx-2 flex justify-start pl-2 text-center  hover:bg-gray-600 hover:rounded-md'
          >
            <div className='py-2'>
              <link class='fa-solid fa-book  text-white'></link>
            </div>
            <div className='py-2 px-3'>Course</div>
          </NavLink>
          <NavLink
            to='/setting'
            className='mt-2 mx-2 flex justify-start pl-2 text-center  hover:bg-gray-600 hover:rounded-md'
          >
            <div className='py-2'>
              <link class='fa-solid fa-gear  text-white'></link>
            </div>
            <div className='py-2 px-3'>Setting</div>
          </NavLink>
          <NavLink
            to='/account'
            className='mt-2 mx-2 flex justify-start pl-2 text-center  hover:bg-gray-600 hover:rounded-md'
          >
            <div className='py-2'>
              <Link class='fa-solid fa-user text-white'></Link>
            </div>
            <div className='py-2 px-3'>Account</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}