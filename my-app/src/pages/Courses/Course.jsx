import React from 'react'
import { Link } from 'react-router-dom'

export default function Course() {
  return (
    <div className=''>
      <div className=''>
        {/* add student */}
        <div>
          <div className=' bg-gray-600 w-40 h-18 p-3 mx-20 text-center rounded-xl'>
            <Link to='/course/add' className='text-white '>
              <i class='fa-solid fa-plus'></i> Add Courses
            </Link>
          </div>
        </div>
        {/* show student */}
        <div className='mt-5 cursor-pointer'>
          <div className='mx-20 h-10 text-center flex items-center font-bold  bg-orange-100'>
            <span className='w-20'>Id</span>
            <span className='w-36'>Tên khoá học</span>
            <span className='w-48'>Tác giả</span>
            <span className='w-36'>Giá Gốc</span>
            <span className='w-48'>Giá Sau khuyến mãi</span>
            <span className='w-36'>Trạng thái</span>
          </div>
          <div className='mx-20 h-10 text-center flex items-center font-bold bg-gray-300 mt-2 '>
            <span className='w-20'>1</span>
            <span className='w-36'>ReactJs supper </span>
            <span className='w-48'>Unicode</span>
            <span className='w-36'>1.000.000</span>
            <span className='w-48'>900.000</span>
            <span className='w-36'>active</span>
            <div className='flex'>
              <Link to='/course/add' className='m-2'>
                <li class='fa-solid fa-pen-to-square'></li> Edit
              </Link>
              <button className='m-2'>
                <i class='fa-solid fa-trash'></i> Delete
              </button>
            </div>
          </div>
          <div className='mx-20 h-10 text-center flex items-center font-bold bg-gray-300 mt-2 '>
            <span className='w-20'>2</span>
            <span className='w-36'>Laravel supper </span>
            <span className='w-48'>Unicode</span>
            <span className='w-36'>1.000.000</span>
            <span className='w-48'>900.000</span>
            <span className='w-36'>active</span>
            <div className='flex'>
              <button className='m-2'>
                <i class='fa-solid fa-pen-to-square'></i> Edit
              </button>
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
