import { createSlice } from "@reduxjs/toolkit";

export const weekForecast = createSlice({
    name: 'weekForecast',
    initialState: {
        indexOfDayInWeek: 0,
    },
    reducers: {
        installIndex(state, action) {
            state = action.payload
        }
    }
})

const { actions, reducer } = weekForecast;

export const {
    installIndex,
} = actions;

export default reducer;