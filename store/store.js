import { configureStore } from "@reduxjs/toolkit"
import citySlice from "../slice/citySlice"

export const store = configureStore({
    reducer: {
        city: citySlice,
    },  
})