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
        ).then(() => {
            navigate("/dashboard")
        })
    }
    
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4'>

      <div className='w-full max-w-md'>
        <div className='bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8'>

          <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold text-slate-900 mb-2'>Welcome Back</h1>
            <p className='text-slate-700'>Sign in to your account</p>
          </div>

          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-semibold text-slate-800 mb-2'>Email Address</label>
              <input
                type="email"
                placeholder='Enter your email'
                name='email'
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-lg border border-white/30 bg-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-slate-800 mb-2'>Password</label>
              <input 
                type="password" 
                placeholder='Enter your password' 
                name='password' 
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-lg border border-white/30 bg-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition'
              />
            </div>

            <button 
              onClick={handleLogin} 
              className='w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 text-white font-bold hover:scale-105 transform transition mt-6 shadow-md hover:shadow-lg'
            >
              Sign In
            </button>
          </div>

          <div className='flex items-center my-6'>
            <div className='flex-1 border-t border-white/40'></div>
            <span className='px-3 text-slate-700 text-sm'>New user?</span>
            <div className='flex-1 border-t border-white/40'></div>
          </div>

          <Link 
            to={"/register"} 
            className='block w-full text-center py-3 px-4 rounded-lg bg-white/20 backdrop-blur-md border border-white/25 text-slate-900 font-semibold hover:scale-105 transform transition shadow-sm hover:shadow-md'
          >
            Create an Account
          </Link>

          <p className='text-center text-slate-500 text-xs mt-6'>
            By signing in, you agree to our Terms of Service
          </p>

        </div>
      </div>
    </div>
  )
}
