import React, { useEffect, useState } from 'react'

export default function Crudwd() {

  const [formdata , setFormdata] = useState({})
  const [record , setRecord] = useState([])
  const [editIndex , setEditIndex] = useState(null)

  useEffect(()=>{
    let allData = JSON.parse(localStorage.getItem("record")) || []
    setRecord(allData)
  },[])

  const handleform = (e) =>{
      setFormdata ({
         ...formdata,
         [e.target.name] : e.target.value
      })
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (editIndex==null) {
      const newData = { ...formdata , id: Date.now() }
      setRecord([...record, newData])
      localStorage.setItem("record" , JSON.stringify([...record , newData]))  
    }
    else{
      let updated = record.map((item) =>
        item.id === editIndex ? { ...item, ...formdata } : item
      )
      setRecord(updated)
      localStorage.setItem("record" , JSON.stringify(updated))
      setEditIndex(null)
    }

    setFormdata({
      name: "",
      age: "",
      city : "",
      subject : ""
    })
  }
  
  const handleDelete = (id)=>{
    let newdata = record.filter((item)=>item.id!=id)
    setRecord(newdata)
    localStorage.setItem("record" , JSON.stringify(newdata))
  }

  const handleEdit = (id) =>{
    let singleData = record.find((item)=>item.id == id)
    setFormdata({
      name : singleData.name,
      age : singleData.age,
      subject : singleData.subject,
      city : singleData.city
    })
    setEditIndex(id)
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">CRUD</h1>

      <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded-xl p-6 flex flex-wrap justify-center gap-4 w-11/12 md:w-3/4 lg:w-2/3 mx-auto">
        <input type="text" name="name" value={formdata.name || ""} placeholder='Name' onChange={handleform} 
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-[45%] focus:ring-2 focus:ring-purple-300 outline-none"/>
        <input type="text" name="subject" value={formdata.subject || ""} placeholder='Subject' onChange={handleform} 
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-[45%] focus:ring-2 focus:ring-purple-300 outline-none"/>
        <input type="text" name="age" value={formdata.age || ""} placeholder='Age' onChange={handleform} 
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-[45%] focus:ring-2 focus:ring-purple-300 outline-none"/>
        <select name="city" value={formdata.city || ""} onChange={handleform}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-[45%] focus:ring-2 focus:ring-purple-300 outline-none bg-white">
          <option hidden>Choose City</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Gondal">Gondal</option>
          <option value="Amreli">Amreli</option>
          <option value="Surat">Surat</option>
        </select>
        <button type='submit' 
          className={`px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${editIndex==null ? "bg-purple-500 hover:bg-purple-600" : "bg-green-500 hover:bg-green-600"}`}>
          {editIndex == null ? "Add Data" : "Update Data"}
        </button>
      </form>

      {/* Table */}
      <table className="table-auto border-collapse w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10 shadow-lg rounded-xl overflow-hidden bg-white">
        <thead className="bg-purple-100 text-gray-800">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">City</th>
            <th colSpan="2" className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {record.length > 0 ? record.map((e,i) => (
            <tr key={i} className="hover:bg-purple-50 transition-all">
              <td className="border px-4 py-2">{e.id}</td>
              <td className="border px-4 py-2">{e.name}</td>
              <td className="border px-4 py-2">{e.age}</td>
              <td className="border px-4 py-2">{e.subject}</td>
              <td className="border px-4 py-2">{e.city}</td>
              <td className="border px-4 py-2 text-center">
                <button onClick={()=>handleEdit(e.id)} className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm">Edit</button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button onClick={()=> handleDelete(e.id)} className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg text-sm">Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-500">No Data Found 😴</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
