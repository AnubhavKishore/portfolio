import { createSlice } from "@reduxjs/toolkit";

export const scrollPage = (body,navh) => dispatch=>{
    body.preventDefault();

    const vh = (document.documentElement.clientHeight)+navh;
    const redvh = (document.documentElement.clientHeight) - (navh)/2;

    const query=body.target.innerText;
  
    if( query=== 'Home'){
        window.scroll(0,0);
    }
    else if(query==='About'){
        
        window.scroll(0,redvh);
    }
    else if(query === 'Skills'){
        window.scroll(0,3*redvh);
    }
    else if(query === 'Projects'){
        window.scroll(0,2*redvh);
    }
    else if(query === 'Contact me'){
        window.scroll(0,3.84*vh);
    }

    return;
    
}


export const SubScrollPage = (body) => dispatch=>{
    body.preventDefault();
    dispatch(toggleSubNav(false))

    const vh = (document.documentElement.clientHeight);

    const query=body.target.innerText;
  
    if( query=== 'Home'){
        window.scroll(0,0);
    }
    else if(query==='About'){
        
        window.scroll(0,.96*vh);
    }
    else if(query === 'Skills'){
        window.scroll(0,2.98*vh);
    }
    else if(query === 'Projects'){
        window.scroll(0,2*vh);
    }
    else if(query === 'Contact me'){
        window.scroll(0,5.11*vh);
    }


    return;
    
}



export const scrollToTop =()=> dispatch=>{

    dispatch(toggleSubNav(false))
    window.scroll(0,0)

}


const utilsSlice = createSlice({
    name: "utilsSlice",
    initialState: {
        subNavActive: false,
        darkTheme: localStorage.getItem('selected-dark-theme') === 'true' ? true : false,
        
    },

    reducers: {
        toggleSubNav: (state, action) => {

            const w = window.innerWidth < 530;
            state.subNavActive = w && action.payload

        },
        toggleTheme: (state, action) => {

            state.darkTheme = !state.darkTheme;



        }
    }

})

export const { toggleSubNav, toggleTheme } = utilsSlice.actions;
export default utilsSlice.reducer;