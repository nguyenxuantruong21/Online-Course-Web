import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import authApi from '../../apis/auth.api'

export default function Account() {
  return (
    <div className='flex'>
      {/* profile */}
      <div className='bg-gray-500 text-gray-950 p-3 hover:shadow-2xl hover:-translate-y-0.5'>
        <div className='m-3 '>
          <div className='w-20 h-20'>
            <img
              className='rounded-full object-cover'
              src='https://themewagon.github.io/corona-free-dark-bootstrap-admin-template/assets/images/faces/face15.jpg'
              alt=''
            />
          </div>
          <div className='text-xl text-gray-950'></div>
          <div>
            <span>18-10-2001</span>
          </div>
        </div>
        {/* menu */}
        <div>
          <div className='my-4'>
            <Link class='fa-solid fa-user'></Link>
            <span className='ml-2'>Thông tin tài khoản</span>
          </div>
          <div className='flex'>
            <span className='w-40'>Giới tính:</span>
            <span>Nam</span>
          </div>
          <div className='flex'>
            <span className='w-40'>Email:</span>
            <span>xuantruong@gmail.com</span>
          </div>
          <div className='flex'>
            <span className='w-40'>Số điện thoại:</span>
            <span>0335265010</span>
          </div>
          <div className='flex'>
            <span className='w-40'>Địa chỉ:</span>
            <span>Ba Vì Hà Nội</span>
          </div>
        </div>
      </div>
      {/* update */}
      <div className='flex justify-center w-full  items-center '>
        <div className=''>
          <div className='text-2xl font-bold my-10'>
            <span>Cập nhật thông tin</span>
          </div>
          <form action=''>
            <div className='flex my-1'>
              <div className='w-40'>Họ tên</div>
              <div className='bg-gray-300 px-5 py-2 rounded-md'>
                <input type='text' placeholder='họ tên' className='w-60  bg-gray-300 outline-none' />
              </div>
            </div>
            <div className='flex my-1'>
              <div className='w-40'>Email</div>
              <div className='bg-gray-300 px-5 py-2 rounded-md'>
                <input type='text' placeholder='email' className='w-60  bg-gray-300 outline-none' />
              </div>
            </div>
            <div className='flex my-1'>
              <div className='w-40'>Quê quán</div>
              <div className='bg-gray-300 px-5 py-2 rounded-md'>
                <input type='text' placeholder='quê quán' className='w-60  bg-gray-300 outline-none' />
              </div>
            </div>
            <div className='flex my-1'>
              <div className='w-40'>Giới tính</div>
              <div className='bg-gray-300 px-5 py-2 rounded-md'>
                <input type='text' placeholder='giới tính' className='w-60  bg-gray-300 outline-none' />
              </div>
            </div>
            <div className='flex my-1'>
              <div className='w-40'>Ngày sinh</div>
              <div className='bg-gray-300 px-5 py-2 rounded-md'>
                <input type='text' placeholder='ngày sinh' className='w-60  bg-gray-300 outline-none' />
              </div>
            </div>
            <div className='flex my-1'>
              <div className='w-40'>Số điện thoại</div>
              <div className='bg-gray-300 px-5 py-2 rounded-md'>
                <input type='text' placeholder='số điện thoại' className='w-60  bg-gray-300 outline-none' />
              </div>
            </div>
            <div className='bg-gray-500 w-20 p-2 rounded-sm cursor-pointer text-gray-100'>
              <button>Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
