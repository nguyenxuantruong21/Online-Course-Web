import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import MarkdownEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import categoryApi from '../../../apis/category.api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom'
import lodash from 'lodash'

const initialState = {
  name: '',
  status: '',
  parent_id: ''
}

export default function AddCategory() {
  const [category, setCategory] = useState(initialState)
  const [currentCategory, setCurrentCategory] = useState(initialState)

  const { id } = useParams()

  // add category
  const { mutate: mutateAddCategory } = useMutation({
    mutationFn: (body) => categoryApi.createdCategory(body)
  })

  // update category
  let queryConfig = {} // Khai báo một object để lưu trữ cấu hình của useQuery
  if (id) {
    queryConfig = {
      queryKey: ['category'],
      queryFn: () => categoryApi.getCategoryDetail(id)
    }
  }
  const { data } = useQuery(queryConfig)

  const { mutate: mutateUpdateCategory } = useMutation({
    mutationFn: (body) => categoryApi.updateCategory(id, body)
  })

  useEffect(() => {
    if (data) {
      const categoryDetail = lodash.pick(data?.data.metadata, ['name'])
      setCurrentCategory(categoryDetail)
    }
  }, [data])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (currentCategory) {
      // update
      mutateUpdateCategory(currentCategory, {
        onSuccess: (data) => {
          toast.success(data.data.message, {
            autoClose: 1000
          })
          setCurrentCategory(null)
        },
        onError: (error) => {
          toast.error(error.message, {
            autoClose: 1000
          })
        }
      })
    } else {
      // edit
      if (category.parent_id === '') {
        category.parent_id = 0
      }
      mutateAddCategory(category, {
        onSuccess: (data) => {
          setCategory(initialState)
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
  }

  return (
    <div className=''>
      <div className='flex  w-full items-start'>
        <form>
          <div className=' my-1'>
            <div className='w-40'>Tên Danh Mục</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCategory && currentCategory
                    ? (event) => {
                        setCurrentCategory((prev) => ({ ...prev, name: event.text }))
                      }
                    : (event) => {
                        setCategory((prev) => ({ ...prev, name: event.text }))
                      }
                }
                value={currentCategory && currentCategory ? currentCategory.name : category.name}
                readOnly={false}
              />
            </div>
            <div>Danh Mục Cha</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCategory && currentCategory
                    ? (event) => {
                        setCurrentCategory((prev) => ({ ...prev, parent_id: event.text }))
                      }
                    : (event) => {
                        setCategory((prev) => ({ ...prev, parent_id: event.text }))
                      }
                }
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
