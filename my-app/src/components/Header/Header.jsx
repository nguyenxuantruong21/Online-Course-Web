import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-gray-800 px-4 py-4 h-15'>
      <div className='container'>
        <div className='grid grid-cols-12 cursor-pointer'>
          {/* Logo */}
          <div className='text-4xl col-span-3 '>
            <span className='text-gray-300'>Unicode</span>
          </div>
          {/* search  */}
          <div className='col-span-5 flex items-center justify-center'>
            <div className=''>
              <form className='bg-gray-700 px-5 py-2 rounded-md'>
                <input
                  type='text'
                  placeholder='search text'
                  className='w-[400px] border border-none outline-none bg-gray-700 ml-1'
                />
              </form>
            </div>
          </div>
          {/*  notification */}
          <div className='col-span-2  flex items-center justify-end '>
            <div className='p-2 border-white-900'>
              <link class='fa-solid fa-envelope  text-white'></link>
            </div>
            <div className='p-2 ml-4'>
              <link class='fa-solid fa-bell  text-white'></link>
            </div>
          </div>
          {/* profile */}
          <NavLink className='col-span-2 flex justify-end cursor-pointer'>
            <div className=''>
              <img
                className='h10 w-10 rounded-full'
                src='https://themewagon.github.io/corona-free-dark-bootstrap-admin-template/assets/images/faces/face15.jpg'
                alt=''
              />
            </div>
            <div to='/student' className='flex ml-3 items-center justify-center  '>
              <span className='text-gray-300'>Henry Kien</span>
              <div className='p-2 pt-3'>
                <NavLink class='fa-solid fa-angle-down text-gray-400'></NavLink>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
