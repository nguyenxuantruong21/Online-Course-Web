import React from 'react'
import { Link } from 'react-router-dom'

export default function Student() {
  return (
    <div>
      <div className=''>
        {/* add student */}
        <div>
          <div className=' bg-gray-600 w-40 h-18 p-3 mx-20 text-center rounded-xl'>
            <Link to='/student/add' className='text-white '>
              <i class='fa-solid fa-plus'></i> Add Student
            </Link>
          </div>
        </div>
        {/* show student */}
        <div className='mt-5'>
          <div className='mx-20 h-10 text-center flex items-center font-bold  bg-orange-100'>
            <span className='w-20'>Id</span>
            <span className='w-36'>Họ tên</span>
            <span className='w-48'>Email</span>
            <span className='w-36'>Quê quán</span>
            <span className='w-20'>Giới tính</span>
            <span className='w-36'>Ngày sinh</span>
            <span className='w-36'>Số điện thoại</span>
          </div>
          <div className='mx-20 h-10 text-center flex items-center font-bold bg-gray-300 mt-2 '>
            <span className='w-20'>1</span>
            <span className='w-36'>Xuan Truong</span>
            <span className='w-48'>xuantruong2001@gmail.com</span>
            <span className='w-36'>Ba vi</span>
            <span className='w-20'>nam</span>
            <span className='w-36'>18-10-2001</span>
            <span className='w-36'>001201233</span>
            <div className='flex'>
              <Link to='/student/add' className='m-2'>
                <i class='fa-solid fa-pen-to-square'></i> Edit
              </Link>
              <button className='m-2'>
                <i class='fa-solid fa-trash'></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
