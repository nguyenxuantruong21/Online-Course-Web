/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import MarkdownEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import courseApi from '../../../apis/course.api'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import lodash from 'lodash'

const initialState = {
  name: '',
  short_description: '',
  image: '',
  category_id: '',
  user_id: '',
  description: '',
  price: '',
  price_after_discount: '',
  status: ''
}

export default function AddCourse() {
  const [course, setCourse] = useState(initialState)
  const [currentCourse, setCurrentCourse] = useState(initialState)
  const { id } = useParams()

  // add course
  const { mutate: mutateAddCourse } = useMutation({
    mutationFn: (body) => courseApi.createdCourse(body)
  })

  // update course
  let queryConfig = {} // Khai báo một object để lưu trữ cấu hình của useQuery
  if (id) {
    queryConfig = {
      queryKey: ['course'],
      queryFn: () => courseApi.getCourseDetail(id)
    }
  }
  const { data } = useQuery(queryConfig)

  const { mutate: mutateUpdateCourese } = useMutation({
    mutationFn: (body) => courseApi.updateCourse(id, body)
  })

  useEffect(() => {
    if (data) {
      const courseDetail = lodash.pick(data?.data.metadata, [
        'name',
        'short_description',
        'image',
        'description',
        'category_id',
        'user_id',
        'price',
        'price_after_discount'
      ])
      setCurrentCourse(courseDetail)
    }
  }, [data])

  const handleSubmit = (event) => {
    event.preventDefault()
    // edit
    if (currentCourse) {
      Object.keys(currentCourse).forEach((key) => {
        if (['price', 'price_after_discount'].includes(key)) {
          currentCourse[key] = parseFloat(currentCourse[key])
        }
      })
      mutateUpdateCourese(currentCourse, {
        onSuccess: (data) => {
          toast.success(data.data.message, {
            autoClose: 1000
          })
          setCurrentCourse(null)
        },
        onError: (error) => {
          toast.error(error.message, {
            autoClose: 1000
          })
        }
      })
    } else {
      // add
      Object.keys(course).forEach((key) => {
        if (['category_id', 'user_id', 'price', 'price_after_discount'].includes(key)) {
          course[key] = parseFloat(course[key])
        }
      })
      mutateAddCourse(course, {
        onSuccess: (data) => {
          setCourse(initialState)
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
      <div className='flex  w-full items-start overflow-y-auto h-[calc(100vh-200px)]'>
        <form action=''>
          <div className='flex my-1'>
            <div className='w-40'>Tên khoá học</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCourse && currentCourse
                    ? (event) => {
                        setCurrentCourse((prev) => ({ ...prev, name: event.text }))
                      }
                    : (event) => {
                        setCourse((prev) => ({ ...prev, name: event.text }))
                      }
                }
                value={currentCourse ? currentCourse.name : course.name}
              />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>Mô tả ngắn</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md  '>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCourse && currentCourse
                    ? (event) => {
                        setCurrentCourse((prev) => ({ ...prev, short_description: event.text }))
                      }
                    : (event) => {
                        setCourse((prev) => ({ ...prev, short_description: event.text }))
                      }
                }
                value={currentCourse ? currentCourse.short_description : course.short_description}
              />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>Link ảnh</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md '>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCourse && currentCourse
                    ? (event) => {
                        setCurrentCourse((prev) => ({ ...prev, image: event.text }))
                      }
                    : (event) => {
                        setCourse((prev) => ({ ...prev, image: event.text }))
                      }
                }
                value={currentCourse ? currentCourse.image : course.image}
              />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>Mô tả chi tiết</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md'>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCourse && currentCourse
                    ? (event) => {
                        setCurrentCourse((prev) => ({ ...prev, description: event.text }))
                      }
                    : (event) => {
                        setCourse((prev) => ({ ...prev, description: event.text }))
                      }
                }
                value={currentCourse ? currentCourse.description : course.description}
              />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>Danh Mục Cha</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md'>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCourse && currentCourse
                    ? (event) => {
                        setCurrentCourse((prev) => ({ ...prev, category_id: event.text }))
                      }
                    : (event) => {
                        setCourse((prev) => ({ ...prev, category_id: event.text }))
                      }
                }
                value={currentCourse ? currentCourse.category_id : course.category_id}
              />
            </div>
          </div>
          <div className='flex my-1'>
            <div className='w-40'>User Id</div>
            <div className='bg-gray-300 px-5 py-2 rounded-md'>
              <MarkdownEditor
                style={{ height: '150px', width: '900px' }}
                onChange={
                  currentCourse && currentCourse
                    ? (event) => {
                        setCurrentCourse((prev) => ({ ...prev, user_id: event.text }))
                      }
                    : (event) => {
                        setCourse((prev) => ({ ...prev, user_id: event.text }))
                      }
                }
                value={currentCourse ? currentCourse.user_id : course.user_id}
              />
            </div>
          </div>
          <div className='flex'>
            <div>
              <div className='flex my-1'>
                <div className='w-40'>Giá Gốc</div>
                <div className='bg-gray-300 px-5 py-2 rounded-md'>
                  <MarkdownEditor
                    style={{ height: '150px', width: '900px' }}
                    onChange={
                      currentCourse && currentCourse
                        ? (event) => {
                            setCurrentCourse((prev) => ({ ...prev, price: event.text }))
                          }
                        : (event) => {
                            setCourse((prev) => ({ ...prev, price: event.text }))
                          }
                    }
                    value={currentCourse ? currentCourse.price : course.price}
                  />
                </div>
              </div>
              <div className='flex my-1'>
                <div className='w-40'>Giá sau khi giảm</div>
                <div className='bg-gray-300 px-5 py-2 rounded-md'>
                  <MarkdownEditor
                    style={{ height: '150px', width: '900px' }}
                    onChange={
                      currentCourse && currentCourse
                        ? (event) => {
                            setCurrentCourse((prev) => ({ ...prev, price_after_discount: event.text }))
                          }
                        : (event) => {
                            setCourse((prev) => ({ ...prev, price_after_discount: event.text }))
                          }
                    }
                    value={currentCourse ? currentCourse.price_after_discount : course.price_after_discount}
                  />
                </div>
              </div>
              <div className='flex my-1'>
                <div className='w-40'>Trạng thái</div>
                <div className=' px-5 py-2 rounded-md flex'>
                  <div className='mx-9 text-center flex items-center'>
                    <input
                      type='radio'
                      name='check'
                      placeholder='họ tên'
                      className='w-5 h-5'
                      onChange={
                        currentCourse && currentCourse
                          ? (event) => {
                              setCurrentCourse((prev) => ({ ...prev, status: 'active' }))
                            }
                          : (event) => {
                              setCourse((prev) => ({ ...prev, status: 'active' }))
                            }
                      }
                    />
                    <span className='ml-2'>active</span>
                  </div>
                  <div className='text-center flex items-center'>
                    <input
                      type='radio'
                      name='check'
                      placeholder='họ tên'
                      className='w-5 h-5'
                      onChange={
                        currentCourse && currentCourse
                          ? (event) => {
                              setCurrentCourse((prev) => ({ ...prev, status: 'inactive' }))
                            }
                          : (event) => {
                              setCourse((prev) => ({ ...prev, status: 'inactive' }))
                            }
                      }
                    />
                    <span className='ml-2'>Inactive</span>
                  </div>
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
        </form>
      </div>
    </div>
  )
}
