import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, KEY, FORECAST, DAY } from '../const/const'

//API exam
// http://api.weatherapi.com/v1/forecast.json?key=6ad1ef537d5c4da59cb123306221607&q=Kryvyy Rih&days=7&aqi=no&alerts=no

const initialState = {
    weatherData: null,
    isLoading: false,
    error: null
}

export const fetchData = createAsyncThunk(
    'weather/fetch', async( city, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_URL}${FORECAST}?${KEY}&q=${city}&${DAY}&aqi=no&alerts=no`)
            const data = await res.json()
            if(data.error) {
                throw new Error(data.error.message)
            }
            return data
        }   
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: {
        [fetchData.fulfilled]: (state, action) => { state.weatherData = action.payload; state.isLoading = false; state.error = null },
        [fetchData.pending]: (state) => { state.weatherData = null; state.isLoading = true; state.error = null },
        [fetchData.rejected]: (state, action) => { state.isLoading = false; state.error = action.payload },
    }
})

export const { setWeatherFetch } = weatherSlice.actions
export default weatherSlice.reducer