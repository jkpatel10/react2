import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db, provider } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore/lite'

export default function Register() {
    const [formdata, setformData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setformData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async () => {
        await createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
            console.log(res);
            setDoc(doc(db, "users", res.user.uid), formdata)
            navigate("/")
        })
    }

    const handleSignIn = async () => {
        await signInWithPopup(auth, provider).then((res) => {
            console.log(res);
            setDoc(doc(db, "users", res.user.uid), { name: res.user.displayName, email: res.user.email, photo: res.user.photoURL })
            navigate("/dashboard")
        })
    }
    return (
        <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='bg-white rounded-2xl shadow-2xl p-8'>
                    <div className='text-center mb-8'>
                        <h1 className='text-4xl font-bold text-gray-800 mb-2'>Create Account</h1>
                        <p className='text-gray-500'>Join us and get started</p>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
                            <input
                                type="text"
                                placeholder='Enter your full name'
                                name='name'
                                onChange={handleChange}
                                className='w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                            <input 
                                type="email" 
                                placeholder='Enter your email' 
                                name='email' 
                                onChange={handleChange}
                                className='w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
                            <input 
                                type="password" 
                                placeholder='Enter your password' 
                                name='password' 
                                onChange={handleChange}
                                className='w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-400 transition'
                            />
                        </div>

                        <button 
                            onClick={handleRegister} 
                            className='w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 mt-6'
                        >
                            Create Account
                        </button>
                    </div>

                    <div className='flex items-center my-6'>
                        <div className='flex-1 border-t-2 border-gray-300'></div>
                        <span className='px-3 text-gray-500 text-sm'>Or continue with</span>
                        <div className='flex-1 border-t-2 border-gray-300'></div>
                    </div>

                    <button 
                        onClick={handleSignIn}
                        className='w-full flex items-center justify-center gap-3 bg-white border-2 border-amber-200 hover:border-amber-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition'
                    >
                        <svg className='w-5 h-5' viewBox='0 0 24 24'>
                            <path fill='#EA4335' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
                            <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
                            <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
                            <path fill='#4285F4' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' />
                        </svg>
                        Sign up with Google
                    </button>

                    <p className='text-center text-gray-500 text-xs mt-6'>
                        By creating an account, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    )
}