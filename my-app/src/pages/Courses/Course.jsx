import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import courseApi from '../../apis/course.api'
import { toast } from 'react-toastify'
import Skeletons from '../../components/Skeletons/Skeletons'

export default function Course() {
  // get all course
  const { data, isFetching } = useQuery({
    queryKey: ['course'],
    queryFn: () => courseApi.getCourseAll()
  })

  const courseAllData = data?.data.metadata.courseArray

  // delete course
  const { mutate } = useMutation({
    mutationFn: (id) => courseApi.deleteCourse(id)
  })

  const handleDeleteCategory = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message, {
          autoClose: 1000,
          onClose: () => {
            window.location.reload()
          }
        })
      }
    })
  }
  return (
    <div className='overflow-y-auto h-[calc(100vh-200px)]'>
      <div className=''>
        {/* add course */}
        <div>
          <div className=' bg-gray-600 w-40 h-18 p-3 mx-20 text-center rounded-xl'>
            <Link to='/course/add' className='text-white '>
              <i class='fa-solid fa-plus'></i> Add Courses
            </Link>
          </div>
        </div>
        {/* show course */}
        <div className='mt-5 cursor-pointer'>
          <div className='mx-20 h-10 text-center flex items-center font-bold  bg-orange-100'>
            <span className='w-20'>Id</span>
            <span className='w-36'>Tên khoá học</span>
            <span className='w-48'>Tác giả</span>
            <span className='w-36'>Giá Gốc</span>
            <span className='w-48'>Giá Sau khuyến mãi</span>
            <span className='w-36'>Trạng thái</span>
          </div>
          {isFetching && (
            <Fragment>
              <div className='mx-auto, my-auto flex justify-center items-center'>
                <Skeletons />
              </div>
            </Fragment>
          )}
          {!isFetching &&
            courseAllData &&
            courseAllData.map((course) => (
              <div className='mx-20 h-10 text-center flex items-center font-bold bg-gray-300 mt-2 ' key={course.id}>
                <span className='w-20'>{course.id}</span>
                <span className='w-36'>{course.name}</span>
                <span className='w-48'>{course.author_data.name}</span>
                <span className='w-36'>{course.price}</span>
                <span className='w-48'>{course.price_after_discount}</span>
                <span className='w-36'>{course.status}</span>
                <div className='flex'>
                  <Link to={`/course/update/${course.id}`} className='m-2'>
                    <li class='fa-solid fa-pen-to-square'></li> Edit
                  </Link>
                  <button className='m-2' onClick={() => handleDeleteCategory(course.id)}>
                    <i class='fa-solid fa-trash'></i> Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
