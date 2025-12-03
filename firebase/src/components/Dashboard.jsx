import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore/lite'

export default function Dashboard() {
  const [userId, setUserid] = useState(null)
  const [userData, setUserdata] = useState(null)
  const [task, setTask] = useState()
  const [priority, setPriority] = useState()
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserid(user.uid)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetchUser()
      fetchData()
    }
  }, [userId, record])

  const fetchUser = async () => {
    await getDoc(doc(db, "users", userId)).then((res) => {
      setUserdata(res.data())
    })
  }

  const fetchData = async () => {
    let allData = await getDocs(collection(db, "Todos"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data()
    }))
    setRecord(newData)
  }

  const handleLogout = async () => {
    await auth.signOut()
    navigate("/")
  }

  const handleTask = async () => {
    const obj = { uid: userId, task, priority };
    if (editIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((data) => {
        setRecord([...record, obj])
      });
    }
    else {
      await updateDoc(doc(db, "Todos", editIndex), {
        task,
        priority,
      });
      fetchData();
    }
    setTask("");
    setPriority("");
    setEditIndex(null);
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
    fetchData();
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.docId == id);
    setTask(singleData.task)
    setPriority(singleData.priority)
    setEditIndex(id);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='bg-white shadow-lg'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-indigo-600'>Task Dashboard</h1>
          <button onClick={handleLogout} className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition font-semibold'>Log Out</button>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-8'>
        <div className='bg-white rounded-xl shadow-md p-6 flex items-center gap-4 mb-8'>
          <img src={userData?.photo ? userData.photo : "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"} alt="photo" className='w-16 h-16 rounded-full border-4 border-indigo-200' />
          <div>
            <h2 className='text-2xl font-bold text-gray-800'>{userData?.name}</h2>
            <p className='text-gray-500'>Welcome back!</p>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-md p-6 mb-8'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>{editIndex == null ? "Add New Task" : "Edit Task"}</h3>
          <div className='flex gap-3 flex-col sm:flex-row'>
            <input
              type="text"
              placeholder='Enter your task'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className='flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition'
            />
            <input
              type="text"
              placeholder='Enter priority (High/Medium/Low)'
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className='flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition'
            />
            <button
              onClick={handleTask}
              className={`px-6 py-2 rounded-lg text-white font-semibold transition ${editIndex == null ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {editIndex == null ? "Add Task" : "Update Task"}
            </button>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Your Tasks ({record.length})</h3>
          {record.length == 0 ? (
            <div className='bg-white rounded-xl shadow-md p-8 text-center'>
              <p className='text-gray-500 text-lg'>No tasks yet. Create one to get started!</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {record &&
                record.map((e, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition">
                    <div className='flex justify-between items-start mb-2'>
                      <h3 className="text-lg font-bold text-gray-800 flex-1">{e.task}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${e.priority === 'High' ? 'bg-red-100 text-red-700' :
                          e.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                        }`}>
                        {e.priority}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleEdit(e.docId)}
                        className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg transition font-semibold"
                      >
                        ✎ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(e.docId)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition font-semibold"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </div>

  )
}