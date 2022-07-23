import { configureStore } from "@reduxjs/toolkit"
import weatherSlice from "../slices/weatherFetch"
import { weekForecast } from "../slices/appSlices"

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        indexOfDayInWeek: weekForecast,
    },  
})

