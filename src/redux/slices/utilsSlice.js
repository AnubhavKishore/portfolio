import { createSlice } from "@reduxjs/toolkit";


const utilsSlice = createSlice({
    name: "utilsSlice",
    initialState: {
        subNavActive: null,
        darkTheme: localStorage.getItem('selected-dark-theme') === 'true' ? true : false,
        
    },

    reducers: {
        toggleSubNav: (state, action) => {

            const w = window.innerWidth < 430;
            state.subNavActive = w && action.payload

        },
        toggleTheme: (state, action) => {

            state.darkTheme = !state.darkTheme;



        }
    }

})

export const { toggleSubNav, toggleTheme } = utilsSlice.actions;
export default utilsSlice.reducer;