import React from 'react'

export default function AddStudent() {
  return (
    <div className=''>
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
            <div className='bg-gray-500 w-20 p-2 rounded-sm cursor-pointer text-gray-100 text-center'>
              <button>Thêm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
