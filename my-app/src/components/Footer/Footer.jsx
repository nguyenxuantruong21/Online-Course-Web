import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-800 text-gray-300 h-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-6 ml-5'>
          <span>Admin Dashboard</span>
        </div>
        <div className='col-span-6 flex justify-end mr-10 my-auto'>
          <span>@unicode: 2024 - online course</span>
        </div>
      </div>
    </div>
  )
}
