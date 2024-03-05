import React from 'react'

export default function ForgotPassword() {
  return (
    <div className='bg-gray-200 p-8 rounded shadow-md w-[500px] h-[350px]'>
      <h2 className='text-3xl font-semibold mb-6 text-center text-gray-600'>Lấy lại mật khẩu </h2>
      <p className='text-center text-gray-500 mb-4'>Vui lòng nhập mật khẩu vào ô bên dưới</p>
      <form>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <div className='bg-gray-300 px-5 py-4 rounded-md w-full mt-2'>
            <input type='password' placeholder='email' className='w-full  bg-gray-300 outline-none' />
          </div>
        </div>
        <div className='mt-8'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white rounded-md py-4 font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}
