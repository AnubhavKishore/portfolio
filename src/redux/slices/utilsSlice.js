import { createSlice } from "@reduxjs/toolkit";


const utilsSlice = createSlice({
    name: "utilsSlice",
    initialState: {
        subNavActive: null,
    },

    reducers: {
        toggleSubNav: (state, action) => {

            const w = window.innerWidth < 430;
            state.subNavActive = w && action.payload

        },
        toggleSkills: (state, action) => {
            state.subNavActive = action.payload

        }
    }

})

export const { toggleSubNav } = utilsSlice.actions;
export default utilsSlice.reducer;