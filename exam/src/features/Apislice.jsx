import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api",async()=>{
    let response =await axios.get("http://localhost:5000/users")
    return response.data
})
export const postData = createAsyncThunk("api/post", async (newItem) => {
  let response = await axios.post("http://localhost:5000/users", newItem);
  return response.data;
});
  export const deleteData = createAsyncThunk("api/delete", async(id)=>{
  await axios.delete(`http://localhost:5000/users/${id}`)
  return id;
})    

export const updateData = createAsyncThunk("api/update", async (updateItem) => {
  const response = await axios.put(`http://localhost:5000/users/${updateItem.id}`,updateItem);
  return response.data;
});

export const api = createSlice ({
    name : "api",
    initialState : {record : [],loading : true},
    reducers:{},

   extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state,action) => {  
        state.record = [];
        state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.record = action.payload;
        state.loading = false;
    });
     builder.addCase(postData.pending, (state,action) => {
      state.loading = true;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.record.push(action.payload);
      state.loading = false;
    });
      builder.addCase(deleteData.pending, (state,action) => {
      state.loading = true;
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
         state.record = state.record.filter((item) => item.id != action.payload);
        state.loading = false;
    });
builder.addCase(updateData.fulfilled, (state, action) => {
  let singleData = state.record.find((item) => item.id == action.payload.id);
  if (singleData) {
    singleData.name = action.payload.name;
    singleData.time = action.payload.time;
    singleData.things = action.payload.things;
  }
});}
})
export default api.reducer