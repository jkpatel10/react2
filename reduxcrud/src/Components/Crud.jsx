import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addData, updateData, deleteData } from "../Features/Apislice";

export default function Crud() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const { record, loading } = useSelector((state) => state.ApiKey);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex != null) {
      dispatch(updateData({ ...formdata, id: editIndex }));
      setEditIndex(null);
    } else {
      dispatch(addData(formdata));
    }

    setFormdata({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleEdit = (data) => {
    setEditIndex(data.id);
    setFormdata({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  if (loading == true) {
    return <p className="text-center mt-10 text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mb-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {editIndex ? "Update User" : "Sign Up"}
        </h2>

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
            type="password"
            placeholder="Enter your password"
            value={formdata.password}
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            {editIndex ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {
          record.map((data) => (
            <div
              key={data.id}
              className="bg-white shadow-lg rounded-xl p-4 flex justify-between items-center hover:shadow-2xl transition"
            >
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{data.name}</h3>
                <p className="text-gray-600 text-sm">{data.email}</p>
                <p className="text-gray-500 text-xs">{data.password}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(data)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(data.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}