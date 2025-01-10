import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";




const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            // Redux
            return [...state, action.payload]
            state.push(action.payload)
        },
        remove() {},
    }
})