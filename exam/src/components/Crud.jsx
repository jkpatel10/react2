import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchData, postData, updateData } from '../features/Apislice';
const imgs = {
  "salad": "https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-1-580x803.jpg",
  "pizza": "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  "momos": "https://www.mygingergarlickitchen.com/wp-content/uploads/2024/02/veg-momos-recipe-5.jpg",
  "dessert": "https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-scaled.jpeg",
  "pasta": "https://media.istockphoto.com/id/857927726/photo/pasta-with-meat-tomato-sauce-and-vegetables.jpg?s=612x612&w=0&k=20&c=1bcoXcBKM7Hb1ASweDx-vcwXEgy-WrCGM71dVP2Cp0w="
};
export default function ApiData() {
const [formData,setFormData] = useState({})
const [editIndex, setEditIndex] = useState(null);
const [search, setSearch] = useState('');
const [cat, setCat] = useState('all');
const [sort, setSort] = useState('');
const dispatch = useDispatch()

useEffect(()=>{ 
   dispatch(fetchData())
},[])

const response = useSelector((state)=>{
  return state.Apikey
})

if (response.loading == true) {
    return <p>Loading...</p>
}
     const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (editIndex == null) {
    dispatch(postData(formData));
  } else {
    dispatch(updateData(
        { 
        id: editIndex, ...formData 
      }));
  }
  setFormData(
    { 
    name: "",
    time: "",
    things: ""
    });
  setEditIndex(null);
};
const handleDelete =(id)=>{
    dispatch(deleteData(id));   
}

const handleEdit = (id) => {
  const singleData = response.record.find((item) => item.id == id);
  setFormData({
    name: singleData.name,
    time: singleData.time,
    things: singleData.things
  });
  setEditIndex(id);
};

const searchedData = response.record && response.record.filter(
  (item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
);

const filteredData = [...(searchedData || [])].filter((item) => {
  if (cat == "all") {
    return item;
  } else {
    return item.name.includes(cat);
  }
});

const sortedData = [...filteredData].sort((a, b) => {
  if (sort == "asc") {
    return a.time - b.time ;
  } else if (sort == "desc") {
    return b.time - a.time ;
  }
  return 0;
});

   return(<div className="min-h-screen bg-[#fffdf7]">

  <nav className="w-full bg-white shadow-sm py-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#ffb400] tracking-wide">RECIPEBOOK</h1>

      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Recipes</li>
        <li className="hover:text-black cursor-pointer">Add Recipe</li>
      </ul>
    </div>
  </nav>

  <section
    className="w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white bg-[url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=60)]"
    
  >
    <h2 className="text-4xl font-bold drop-shadow-lg">You don't know what to cook today?</h2>
    <p className="mt-2 text-lg drop-shadow-md">Try a surprise recipe!</p>

    <button className="mt-4 bg-[#ffb400] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#e6a200]">
      Surprise Recipe
    </button>
  </section>

  <div className="flex justify-center items-center gap-10 m-15">
    <input
      type="text"
      placeholder="Search recipes..."
      className="w-120 p-4 rounded-xl border shadow-sm focus:outline-none focus:ring-2 ring-[#ffb400]"
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      value={cat}
      onChange={(e) => setCat(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
    >
      <option hidden>Select Category</option>
      <option value="all">All</option>
      <option value="salad">salad</option>
      <option value="pizza">pizza</option>
      <option value="momos">momos</option>
      <option value="dessert">dessert</option>
      <option value="pasta">pasta</option>
    </select>

    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
    >
      <option hidden>Time</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  </div>
<div className="max-w-5xl mx-auto mt-10 px-6">
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-5" data-aos="zoom-in-up" data-aos-duration="1500">
      {[
        "salad",
        "pizza",
        "momos",
        "dessert",
        "pasta"
      ].map((cat, i) => (
        <div
          key={i} 
          className="bg-white rounded-xl p-4 shadow hover:shadow-xl hover:bg-yellow-400 transition border text-center"
        >
          <p className="text-sm font-semibold">{cat}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="max-w-xl mx-auto mt-12 px-6">
    <div className="bg-white shadow-lg rounded-2xl p-8 border">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Add New Recipe</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Recipe name"
          className="w-full p-3 rounded-xl border focus:ring-2 ring-[#ffb400]"
        />

        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Cooking time"
          className="w-full p-3 rounded-xl border focus:ring-2 ring-[#ffb400]"
        />

        <input
          type="text"
          name="things"
          value={formData.things}
          onChange={handleChange}
          placeholder="Ingredients"
          className="w-full p-3 rounded-xl border focus:ring-2 ring-[#ffb400]"
        />

        <button className="w-full bg-[#ffb400] hover:bg-[#e6a200] text-white py-3 rounded-xl font-semibold">
          Add Recipe
        </button>
      </form>
    </div>
  </div>

 <div className="max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {sortedData &&
    sortedData.map((e, i) => {
      const imageUrl = imgs[e.name]

      return (
        <div data-aos="fade-up-right" data-aos-duration="1000"
          key={i}
          className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={imageUrl}
            className="w-full h-70 object-cover"
            alt={e.name}
          />

          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800">{e.name}</h2>
            <p className="text-gray-500 text-sm mt-1">⏱ {e.time}</p>
            <p className="mt-3 text-gray-700">
              <strong>Ingredients:</strong> {e.things}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleDelete(e.id)}
                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg"
              >
                Delete
              </button>

              <button
                onClick={() => handleEdit(e.id)}
                className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      );
    })}
</div>

  <footer className="text-center py-12 mt-20 text-gray-600">
    <p>© 2025 RecipeBook • All Rights Reserved</p>
  </footer>
</div>

)
}