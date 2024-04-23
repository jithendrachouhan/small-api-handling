import { configureStore } from "@reduxjs/toolkit";
import apiReducer from './apiSlice'

const appStore = configureStore({
    reducer: {
        api: apiReducer
    }
})

export default appStore;