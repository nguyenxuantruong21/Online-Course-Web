import React, { useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { NavLink, useNavigate } from 'react-router-dom'
import authApi from '../../apis/auth.api'
import { setAccessTokenToLS, setRefreshTokenToLS } from '../../utils/auth'
import { AppContext } from '../../contexts/app.context'

const loginForm = {
  email: '',
  password: ''
}

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const [formState, setFormState] = useState(loginForm)
  const { mutate } = useMutation({
    mutationFn: (body) => authApi.login(body)
  })
  const navigate = useNavigate()
  const onSubmit = (event) => {
    event.preventDefault()
    mutate(formState, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setAccessTokenToLS(data.data.metadata.tokens.access_token)
        setRefreshTokenToLS(data.data.metadata.tokens.refresh_token)
        navigate('/')
      }
    })
  }

  return (
    <div className='bg-gray-200 p-8 rounded shadow-md w-[500px] h-[450px]'>
      <h2 className='text-3xl font-semibold mb-6 text-center text-gray-600'>Login</h2>
      <form onSubmit={onSubmit}>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <div className='bg-gray-300 px-5 py-4 rounded-md w-full mt-2'>
            <input
              type='email'
              placeholder='email'
              className=' bg-gray-300 outline-none w-full'
              // value={loginForm.email}s
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
            />
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700 w-full'>
            Password
          </label>
          <div className='bg-gray-300 px-5 py-4 rounded-md w-full mt-2'>
            <input
              type='password'
              placeholder='password'
              className='w-full  bg-gray-300 outline-none'
              // value={loginForm.password}
              onChange={(event) => setFormState((prev) => ({ ...prev, password: event.target.value }))}
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='remember-me'
              name='remember-me'
              className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
            />
            <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
              Remember me
            </label>
          </div>
          <div className='text-sm'>
            <NavLink to='/auth/forgot-password' className='font-medium text-blue-600 hover:text-blue-500'>
              Forgot your password?
            </NavLink>
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
