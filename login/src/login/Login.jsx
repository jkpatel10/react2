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
            navigate("/home")
        })
    }
    
  return (
    <div className='m-10'>
        <h2 className='my-10'>Login</h2>
        <input type="text" placeholder='Enter your email' className='border px-2' name='email' onChange={handleChange}/>
        <input type="text" placeholder='Enter your password' className='border px-2 m-8' name='password' onChange={handleChange}/>
        <button onClick={handleLogin} className='border p-2 mx-8'>Login</button><br /><br />
        <span>Didn't register yet ?</span>
        <Link to={"/register"}>Register</Link>
    </div>
  )
}