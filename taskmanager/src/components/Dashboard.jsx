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
    newData = newData.filter((item) => item.uid == userId)
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
    <div className="relative">
      <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-50 min-h-screen pb-10">

        <div className="backdrop-blur-md bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-100 border-b border-white/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center fade-slide" data-delay="1">
            <h1 className="text-3xl font-bold text-slate-800 drop-shadow-sm">Task Dashboard</h1>
            <div className="flex items-center gap-4">
              <button onClick={handleLogout} className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 text-white font-semibold shadow-md hover:scale-105 transition-transform">Log Out</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="mb-15">
            <div className="rb-inner backdrop-blur-md bg-white/40 border border-white/25 p-6 rounded-2xl flex items-center gap-4 shadow-md hover:shadow-lg transition">
              <img
          src={
            userData?.photo
              ? userData.photo
              : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
          }
          alt="photo"
          className='w-16 h-16 rounded-full border-4 border-indigo-200 shadow-md'
        />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{userData?.name}</h2>
                <p className="text-gray-700">Welcome back — let's get stuff done ✨</p>
              </div>
            </div>
          </div>

        <div className="fade-slide" data-delay="3">
          <div className="backdrop-blur-md bg-white/40 border border-white/25 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">{editIndex == null ? "Add New Task" : "Edit Task"}</h3>

           <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} className="flex-1 px-4 py-2 rounded-lg bg-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-200"/>

            <input type="text" placeholder="Enter priority (High/Medium/Low)" value={priority} onChange={(e) => setPriority(e.target.value)} className="flex-1 px-4 py-2 rounded-lg bg-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-200"/>

            <button onClick={handleTask} className={`px-6 py-2 rounded-lg text-white font-semibold transition ${editIndex == null ? "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 hover:scale-105" : "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 hover:scale-105"}`}>
                {editIndex == null ? "Add Task" : "Update Task"}
            </button>
           </div>
          </div>
        </div>

        <div className="mt-8 fade-slide" data-delay="4">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Your Tasks ({record.length})</h3>

          {record.length == 0 ? (
            <div className="backdrop-blur-md bg-white/40 border border-white/25 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
              <p className="text-gray-700 text-lg">No tasks yet — add one and watch it glow 🌈</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {record.map((e, i) => (
                <div key={i} className="relative">  
                  <div className="backdrop-blur-md bg-white/40 border border-white/25 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-slate-900 flex-1">{e.task}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 
                          ${e.priority == "high" ? "bg-green-200 text-green-700" : e.priority == "medium"
                            ? "bg-yellow-200 text-yellow-700" : "bg-red-200 text-red-700"}`}>{e.priority}
                      </span>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button onClick={() => handleEdit(e.docId)} className="flex-1 px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-sky-300 to-indigo-300 text-slate-900 hover:scale-105 transition-transform">✎ Edit</button>

                      <button onClick={() => handleDelete(e.docId)} className="flex-1 px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-rose-300 to-pink-300 text-slate-900 hover:scale-105 transition-transform">🗑 Delete</button>
                    </div>
                   </div>
                </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}