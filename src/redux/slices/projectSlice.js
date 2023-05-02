import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const projectSlice= createSlice({
    name:"projectsSlice",
    initialState:{
        allprojects:{}
    },

    reducers:{
        setAllProjects:(state,action)=>{
            state.allprojects= action.payload;
        }
    }

})