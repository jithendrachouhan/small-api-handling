import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: "api",
    initialState: {
        getApiData : null,
        postApiData: null,
        putApiData: null,
        patchApiData: null,
        deleteApiData: null,
        getStatusCodeData: null,
        getImageJpeg: null,
        getHTML: null

    },
    reducers: {
        setGetApiData: (state,action) => {
            state.getApiData = action.payload
        },
        clearGetApiData: (state) => {
            state.getApiData = null
        },
        setPostApiData: (state,action) => {
            state.postApiData = action.payload
        },
        clearPostApiData: (state) => {
            state.postApiData = null
        },
        setPutApiData: (state,action) => {
            state.putApiData = action.payload
        },
        clearPutApiData: (state) => {
            state.putApiData = null
        },
        setPatchApiData: (state,action) => {
            state.patchApiData = action.payload
        },
        clearPatchApiData: (state) => {
            state.patchApiData = null
        },
        setDeleteApiData: (state,action) => {
            state.deleteApiData = action.payload
        },
        clearDeleteApiData: (state) => {
            state.deleteApiData = null
        },
        setGetStatusCodeApiData: (state,action) => {
            state.getStatusCodeData = action.payload
        },
        clearGetStatusCodeApiData: (state) => {
            state.getStatusCodeData = null
        },
        setGetImageJpegData: (state,action) => {
            state.getImageJpeg = action.payload
        },
        clearGetImageJpegData: (state) => {
            state.getImageJpeg = null
        },
        setHTMLData: (state,action) => {
            state.getHTML = action.payload
        },
        clearHTMLData: (state) => {
            state.getHTML = null
        },
    }
})


export const { 
    setGetApiData, 
    clearGetApiData, 
    setPostApiData, 
    clearPostApiData, 
    setPutApiData, 
    clearPutApiData,
    setPatchApiData,
    clearPatchApiData,
    setDeleteApiData,
    clearDeleteApiData,
    setGetStatusCodeApiData,
    clearGetStatusCodeApiData,
    setGetImageJpegData,
    clearGetImageJpegData,
    setHTMLData,
    clearHTMLData
} = apiSlice.actions;

export default apiSlice.reducer