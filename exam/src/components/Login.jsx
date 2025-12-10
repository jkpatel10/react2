
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebaseconfig'

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
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg border">
  {/* Header */}
  <div className="mb-6 text-center">
    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
    <p className="text-gray-500 mt-2">Sign in to your account</p>
  </div>

  {/* Form */}
  <div className="space-y-4">
    <input
      type="email"
      placeholder="Enter your email"
      name="email"
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ffb400]"
    />
    <input
      type="password"
      placeholder="Enter your password"
      name="password"
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ffb400]"
    />
    <button
      onClick={handleLogin}
      className="w-full bg-[#ffb400] hover:bg-[#e6a200] text-black py-3 rounded-xl font-semibold"
    >
      Sign In
    </button>
  </div>

  {/* Link to Register */}
  <p className="text-center text-gray-500 mt-6">
    Don’t have an account?{" "}
    <Link to={"/"} className="text-[#ffb400] font-semibold hover:underline">
      Create an Account
    </Link>
  </p>
</div>

  )
}