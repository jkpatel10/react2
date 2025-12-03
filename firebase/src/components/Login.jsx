import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [formdata,setformData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setformData({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleLogin = async () => {
        await signInWithEmailAndPassword(
            auth,
            formdata.email,
            formdata.password
        ).then((res) => {
            navigate("/dashboard")
        })
    }
    
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='bg-white rounded-2xl shadow-2xl p-8'>

          <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold text-gray-800 mb-2'>Welcome Back</h1>
            <p className='text-gray-500'>Sign in to your account</p>
          </div>

          <div className='space-y-4'>
            <div>
              <div className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</div>
              <input 
                type="email" 
                placeholder='Enter your email' 
                name='email' 
                onChange={handleChange}
                className='w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition'
              />
            </div>

            <div>
              <div className='block text-sm font-semibold text-gray-700 mb-2'>Password</div>
              <input 
                type="password" 
                placeholder='Enter your password' 
                name='password' 
                onChange={handleChange}
                className='w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition'
              />
            </div>

            <button 
              onClick={handleLogin} 
              className='w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 mt-6'
            >
              Sign In
            </button>
          </div>

          <div className='flex items-center my-6'>
            <div className='flex-1 border-t-2 border-gray-300'></div>
            <span className='px-3 text-gray-500 text-sm'>New user?</span>
            <div className='flex-1 border-t-2 border-gray-300'></div>
          </div>

          <Link 
            to={"/register"} 
            className='block w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-700 font-semibold py-3 px-4 rounded-lg transition'
          >
            Create an Account
          </Link>

          <p className='text-center text-gray-500 text-xs mt-6'>
            By signing in, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  )
}