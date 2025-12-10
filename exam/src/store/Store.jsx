import { configureStore } from "@reduxjs/toolkit";
import api from "../features/Apislice";
export const store = configureStore({
  reducer: {
    Apikey : api
  }
})