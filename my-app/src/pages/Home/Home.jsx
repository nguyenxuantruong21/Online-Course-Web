import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 cursor-pointer'>
        <div className='col-span-2 col-start-1 bg-gray-500 p-3 rounded-2xl hover:shadow-2xl hover:-translate-y-0.5'>
          <div className='font-bold text-center'>
            <div className=' text-lg text-white'>Học sinh</div>
            <div className=' text-5xl my-2'>246</div>
            <div className='text-green-400'>
              <span className='px-2'>2</span>
              <span>active</span>
            </div>
          </div>
        </div>
        <div className='col-span-2 col-start-4 bg-gray-500 p-3 rounded-2xl hover:shadow-2xl hover:-translate-y-0.5'>
          <div className='font-bold text-center'>
            <div className='text-white'>Khoá học</div>
            <div className='text-5xl my-2'>3</div>
            <div className='text-green-400'>
              <span className='px-2'>2</span>
              <span>active</span>
            </div>
          </div>
        </div>
        <div className='col-span-2 col-start-7 bg-gray-500 p-3 rounded-2xl hover:shadow-2xl hover:-translate-y-0.5'>
          <div className='font-bold text-center'>
            <div className='text-white'>Thông báo</div>
            <div className='text-5xl my-2'>366</div>
          </div>
        </div>
      </div>
    </div>
  )
}
