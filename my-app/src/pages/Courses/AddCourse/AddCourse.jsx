import React from 'react'
import MarkdownEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

export default function AddCourse() {
  return (
    <div className=''>
      <div className='flex  w-full items-start'>
        <form action=''>
          <div className='flex my-1'>
            <div className='w-40'>Tên khoá học</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor style={{ height: '150px', width: '900px' }} />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>Mô tả ngắn</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md  '>
              <MarkdownEditor style={{ height: '150px', width: '900px' }} />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>Link ảnh</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor style={{ height: '150px', width: '900px' }} />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>Mô tả chi tiết</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md'>
              <MarkdownEditor style={{ height: '150px', width: '900px' }} />
            </div>
          </div>
          <div className='flex'>
            <div>
              <div className='flex my-1'>
                <div className='w-40'>Giá Gốc</div>
                <div className='bg-gray-300 px-5 py-2 rounded-md'>
                  <input type='text' placeholder='Giá Gốc' className='w-60  bg-gray-300 outline-none' />
                </div>
              </div>
              <div className='flex my-1'>
                <div className='w-40'>Giá sau khi giảm</div>
                <div className='bg-gray-300 px-5 py-2 rounded-md'>
                  <input type='text' placeholder='Giá sau khi giảm' className='w-60  bg-gray-300 outline-none' />
                </div>
              </div>
              <div className='flex my-1'>
                <div className='w-40'>Trạng thái</div>
                <div className=' px-5 py-2 rounded-md flex'>
                  <div className='mx-9 text-center flex items-center'>
                    <input type='radio' name='check' placeholder='họ tên' className='w-5 h-5' />
                    <span className='ml-2'>active</span>
                  </div>
                  <div className='text-center flex items-center'>
                    <input type='radio' name='check' placeholder='họ tên' className='w-5 h-5' />
                    <span className='ml-2'>Inactive</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-32 h-20 bg-gray-500 mx-auto my-2 flex justify-center items-center rounded-md text-xl text-white cursor-pointer'>
              Submit
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
