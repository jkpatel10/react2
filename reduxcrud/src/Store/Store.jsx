import { configureStore } from "@reduxjs/toolkit";
import api from "../Features/Apislice";

export const Store = configureStore({
    reducer:{
        ApiKey : api
    }
})