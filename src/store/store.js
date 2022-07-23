import { configureStore } from "@reduxjs/toolkit"
import weatherSlice from "../slices/weatherFetch"

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
    },  
})

