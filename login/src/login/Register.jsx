import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore/lite'

export default function Register() {
    const [formdata,setformData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setformData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async () => {
        await createUserWithEmailAndPassword(
            auth,
            formdata.email,
            formdata.password
        ).then((res) => {
            console.log(res);
            setDoc(doc(db,"users",res.user.uid),{formdata})
            navigate("/")
        })
    }
  return (
    <div className='m-10'>
        <h2>Register</h2><br /><br />
        <input type="text" placeholder='Enter your name' className='border px-2' name='name' onChange={handleChange}/>
        <input type="text" placeholder='Enter your email' className='border mx-8 px-2' name='email' onChange={handleChange}/>
        <input type="text" placeholder='Enter your password' className='border px-2' name='password' onChange={handleChange}/>
        <button onClick={handleRegister} className='border mx-8 p-2'>login</button>
    </div>
  )
}