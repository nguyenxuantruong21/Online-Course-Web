import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import studentApi from '../../apis/student'
import { formatDate } from '../../utils/utils'
import Skeletons from '../../components/Skeletons/Skeletons'

export default function Student() {
  const [students, setStudents, isFetching] = useState()
  const { data: allStudent } = useQuery({
    queryKey: ['student'],
    queryFn: () => studentApi.getAllUser()
  })

  useEffect(() => {
    setStudents(allStudent?.data.metadata)
  }, [allStudent, setStudents])

  console.log(students)
  return (
    <div>
      <div className=''>
        {/* add student */}
        <div>
          <div className=' bg-gray-600 w-40 h-18 p-3 mx-20 text-center rounded-xl'>
            <Link to='/student/add' className='text-white '>
              <i class='fa-solid fa-plus'></i> Add Student
            </Link>
          </div>
        </div>
        {/* show student */}
        <div className='mt-5'>
          <div className='mx-20 h-10 text-center flex items-center font-bold  bg-orange-100'>
            <span className='w-20'>Id</span>
            <span className='w-36'>Họ tên</span>
            <span className='w-48'>Email</span>
            <span className='w-36'>Quê quán</span>
            <span className='w-20'>Giới tính</span>
            <span className='w-36'>Ngày sinh</span>
            <span className='w-36'>Số điện thoại</span>
          </div>
          {isFetching && (
            <Fragment>
              <div className='mx-auto, my-auto flex justify-center items-center'>
                <Skeletons />
              </div>
            </Fragment>
          )}
          {students &&
            students.map((student) => (
              <div className='mx-20 h-10 text-center flex items-center font-bold bg-gray-300 mt-2 '>
                <span className='w-20'>{student.id}</span>
                <span className='w-36'>{student.name}</span>
                <span className='w-48'>{student.email}</span>
                <span className='w-36'>{student.country}</span>
                <span className='w-20'>{student.gender}</span>
                <span className='w-36'>{student.birthday && formatDate(student.birthday)}</span>
                <span className='w-36'>{student.phone}</span>
                <div className='flex'>
                  <Link to='/student/add' className='m-2'>
                    <i class='fa-solid fa-pen-to-square'></i> Edit
                  </Link>
                  <button className='m-2'>
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
