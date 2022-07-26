import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, KEY, FORECAST, DAY } from '../const/const'

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
        [fetchData.fulfilled]: (state, action) => { 
            state.weatherData = action.payload; 
            state.isLoading = false; 
            state.error = null; 
        },
        [fetchData.pending]: (state) => { 
            state.weatherData = null; 
            state.isLoading = true; 
            state.error = null;
        },
        [fetchData.rejected]: (state, action) => { 
            state.weatherData = null; 
            state.isLoading = false; 
            state.error = action.payload; 
        },
    }
})

export const { setWeatherFetch } = weatherSlice.actions
export default weatherSlice.reducer