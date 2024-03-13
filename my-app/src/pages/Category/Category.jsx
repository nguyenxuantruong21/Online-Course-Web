import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import categoryApi from '../../apis/category.api'
import { toast } from 'react-toastify'
import Skeletons from '../../components/Skeletons/Skeletons'

export default function Category() {
  // query all category
  const { data, isFetching } = useQuery({
    queryKey: ['category'],
    queryFn: () => categoryApi.getCategoryAll()
  })

  // delete category
  const { mutate } = useMutation({
    mutationFn: (id) => categoryApi.deleteCategory(id)
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
    <div className=''>
      <div className=''>
        {/* add student */}
        <div>
          <div className=' bg-gray-600 w-40 h-18 p-3 mx-20 text-center rounded-xl'>
            <Link to='/category/add' className='text-white '>
              <i class='fa-solid fa-plus'></i> Add Category
            </Link>
          </div>
        </div>
        {/* show student */}
        <div className='mt-5 cursor-pointer'>
          <div className='mx-20 h-10 text-center flex items-center font-bold  bg-orange-100'>
            <span className='w-20'>Id</span>
            <span className='w-36'>Tên danh muc</span>
            <span className='w-36'>Trạng thái</span>
            <span className='w-36'>Danh muc cha</span>
          </div>
          {isFetching && (
            <Fragment>
              <div className='mx-auto, my-auto flex justify-center items-center'>
                <Skeletons />
              </div>
            </Fragment>
          )}
          {!isFetching &&
            data &&
            data.data.metadata.map((category) => {
              return (
                <div className='mx-20 h-10 text-center flex items-center font-bold bg-gray-300 mt-2 ' key={category.id}>
                  <span className='w-20'>{category.id}</span>
                  <span className='w-36'> {category.name} </span>
                  <span className='w-36'>{category.status}</span>
                  <span className='w-36'>{category.parent_id ? category.parent_id : '0'}</span>

                  <div className='flex'>
                    <Link to={`/category/update/${category.id}`} className='m-2'>
                      <i class='fa-solid fa-pen-to-square'></i> Edit
                    </Link>
                    <button className='m-2' onClick={() => handleDeleteCategory(category.id)}>
                      <i class='fa-solid fa-trash'></i> Delete
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
