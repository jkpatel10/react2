import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore/lite'
import { auth, db } from '../../Firebaseconfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

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
            navigate("/login")
        })
    }

    return (
     <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg border">
  <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Account</h1>

  <input
    type="text"
    placeholder="Enter your full name"
    name="name"
    value={formdata.name}
    onChange={handleChange}
    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ffb400] mb-4"
  />

  <input
    type="email"
    placeholder="Enter your email"
    name="email"
    value={formdata.email}
    onChange={handleChange}
    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ffb400] mb-4"
  />

  <input
    type="password"
    placeholder="Enter your password"
    name="password"
    value={formdata.password}
    onChange={handleChange}
    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ffb400] mb-6"
  />

  <button
    onClick={handleRegister}
    className="w-full bg-[#ffb400] hover:bg-[#e6a200] text-black py-3 rounded-xl font-semibold mb-4">
    Create Account
  </button>

  <p className="text-center text-gray-500">
    Already have an account?{" "}
    <Link to={"/login"} className="text-[#ffb400] font-semibold hover:underline">
      Login
    </Link>
  </p>
</div>
    )
}