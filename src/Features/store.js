import { configureStore } from "@reduxjs/toolkit";
import adminPageReducer from './Admin/adminSlice';

export const store = configureStore({
    reducer: {
        adminTable: adminPageReducer
    },
})