import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import MarkdownEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import categoryApi from '../../../apis/category.api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom'

const categoryInitial = {
  name: '',
  status: '',
  parent_id: ''
}

export default function AddCategory() {
  const [category, setCategory] = useState(categoryInitial)

  const { id } = useParams()

  // add category
  const { mutate } = useMutation({
    mutationFn: (body) => categoryApi.createdCategory(body)
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (category.parent_id === '') {
      category.parent_id = 0
    }
    mutate(category, {
      onSuccess: (data) => {
        setCategory(categoryInitial)
        toast.success(data.data.message, {
          autoClose: 1000
        })
      },
      onError: (error) => {
        toast.error(error.message, {
          autoClose: 1000
        })
      }
    })
  }

  // edit category
  const { data } = useQuery({
    queryKey: ['category'],
    queryFn: () => categoryApi.getCategoryById(id)
  })

  const currentCategory = data?.data.metadata

  return (
    <div className=''>
      <div className='flex  w-full items-start'>
        <form>
          <div className=' my-1'>
            <div className='w-40'>Tên Danh Mục</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={(event) => {
                  setCategory((prev) => ({ ...prev, name: event.text }))
                }}
                value={currentCategory && currentCategory ? currentCategory.name : category.name}
                readOnly={false}
              />
            </div>
            <div>Danh Mục Cha</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={(event) => {
                  setCategory((prev) => ({ ...prev, parent_id: event.text }))
                }}
                value={currentCategory && currentCategory ? currentCategory.parent_id : category.parent_id}
                readOnly={false}
              />
            </div>
          </div>
          <div className='flex'>
            <div>
              <div className='flex my-1'>
                <div className='w-40'>Trạng thái</div>
                <div className=' px-5 py-2 rounded-md flex'>
                  <div className='mx-9 text-center flex items-center'>
                    <input
                      type='radio'
                      name='check'
                      placeholder='họ tên'
                      className='w-5 h-5'
                      onChange={() => {
                        setCategory((prev) => ({ ...prev, status: 'active' }))
                      }}
                    />
                    <span className='ml-2'>active</span>
                  </div>
                  <div className='text-center flex items-center'>
                    <input
                      type='radio'
                      name='check'
                      placeholder='họ tên'
                      className='w-5 h-5'
                      onChange={() => {
                        setCategory((prev) => ({ ...prev, status: 'inactive' }))
                      }}
                    />
                    <span className='ml-2'>Inactive</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='w-32 h-20 bg-gray-500 mx-auto my-2 flex justify-center items-center rounded-md text-xl text-white cursor-pointer'
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
