import { createSlice } from "@reduxjs/toolkit";


const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const productsSlice = createSlice({
    name: 'product',
    
    initialState: {
        data: [],
        status: '',
    },

    reducers: {
        add(state, action) {
            // Redux
            //return [...state, action.payload]
            state.push(action.payload)
        },


        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const {add, remove} = productsSlice.actions;
export default productsSlice.reducer;

