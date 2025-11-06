import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [formdata, setFormdata] = useState({})
  const [record, setRecord] = useState([])
  const Navigate = useNavigate()

  useEffect(() => {
    fetchRecord()
  }, [])

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/users", formdata).then((res) => {
      setFormdata({
        name: "",
        email: "",
        password: "",
      })
    })
  }

  const fetchRecord = async () => {
    await axios.get("http://localhost:5000/users").then((res) => {
      setRecord(res.data)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-90 max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={formdata.name}
            name="name"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter your email"
            value={formdata.email}
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter your password"
            value={formdata.password}
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            onClick={()=>Navigate('/login')}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
