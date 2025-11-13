import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api/fetch", async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response.data;
});

export const addData = createAsyncThunk("api/add", async (newData) => {
  const response = await axios.post("http://localhost:5000/users", newData);
  return response.data;
});

export const updateData = createAsyncThunk("api/update", async (updatedData) => {
  const response = await axios.put(`${"http://localhost:5000/users"}/${updatedData.id}`, updatedData);
  return response.data;
});

export const deleteData = createAsyncThunk("api/delete", async (id) => {
  await axios.delete(`${"http://localhost:5000/users"}/${id}`);
  return id;
});

export const api = createSlice({
  name: "api",
  initialState: { record: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.record = action.payload;
      state.loading = false;
    });

    builder.addCase(addData.fulfilled, (state, action) => {
      state.record.push(action.payload);
    });

    builder.addCase(updateData.fulfilled, (state, action) => {
      const index = state.record.findIndex((item) => item.id == action.payload.id);
      if (index != null) {
        state.record[index] = action.payload;
      }
    });

    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.record = state.record.filter((item) => item.id != action.payload);
    });
  },
});

export default api.reducer;