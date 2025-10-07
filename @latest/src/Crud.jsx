import React, { useEffect, useState } from 'react'

export default function Crud() {

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
         id:Date.now(),
         [e.target.name] : e.target.value
      })
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (editIndex==null) {
      setRecord([...record, formdata])
      localStorage.setItem("record" , JSON.stringify([...record , formdata]))  
    }
    else{
    let singleData = record.find((item)=>item.id == editIndex)
singleData.name = record.find((e) => e.id === editIndex)
singleData.name = formdata.name
singleData.age = formdata.age
singleData.subject = formdata.subject
singleData.city = formdata.city
localStorage.setItem("record" , JSON.stringify([...record]))
    }
    setEditIndex(null)

    setFormdata({
      name: "",
      age: "",
      city : "",
      subject : ""
    })
  }
  
  const handleDelete = (id)=>{
    // console.log(id);
    let newdata = record.filter((item)=>item.id!=id)
    setRecord(newdata)
    localStorage.setItem("record" , JSON.stringify(newdata))
  }

  const handleEdit = (id) =>{

  let singleData = record.find((item)=>item.id == id)
  setFormdata({
    name : singleData.name,
    age : singleData.age,
    city : singleData.city,
    subject : singleData.subject
  })
   setEditIndex(id)
  }
  
  return (
    <div>
      <h1>LocalCrud</h1>
      <form onSubmit={HandleSubmit}>
        <input type="text" name="name" placeholder='Enter your name' onChange={handleform}/>
        <input type="text" name="subject" placeholder='Enter your subject'onChange={handleform} />
        <input type="text" name="age" placeholder='Enter your age' onChange={handleform} />
        <select name="city" onChange={handleform}>
          <option hidden>Choose Your City</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Gondal">Gondal</option>
          <option value="Amreli">Amreli</option>
          <option value="Surat">Surat</option>
        </select> 
        <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
      </form>
     <table style={{ borderCollapse: "collapse", width: "100%" }}>
  <thead>
    <tr style={{border: "1px solid black"}}>
      <th style={{ border: "1px solid black", padding: "8px" }}>Id</th>
      <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
      <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
      <th style={{ border: "1px solid black", padding: "8px" }}>Subject</th>
      <th style={{ border: "1px solid black", padding: "8px" }}>City</th>
      <th colSpan={"2"} style={{ border: "1px solid black", padding: "8px" }}>Action</th>
    </tr>
  </thead>
 <tbody>
  {record ? 
    record.map((e,i) => (
      <tr key={i}>
        <td style={{ border: "1px solid black", padding: "8px" }}>{e.id}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{e.name}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{e.age}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{e.subject}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{e.city}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          <button onClick={()=>handleEdit(e.id)}>Edit</button>
        </td>
        <td style={{ border: "1px solid black", padding: "8px" }}>
           <button onClick={()=> handleDelete(e.id)}>Delete</button>
        </td>
      </tr>
    )) :
   <p>...loading</p>}
</tbody>
</table>
</div>)}
