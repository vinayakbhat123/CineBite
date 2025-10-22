import { createSlice } from "@reduxjs/toolkit";

const PixelsSlice = createSlice({
    name:" Pixels",
    initialState:{
        Queries:"car",
       
    },
    reducers:{
        addqueries:(state,action) =>{
            state.Queries = action.payload;
        },
    },
});

export const {addqueries} = PixelsSlice.actions

export default PixelsSlice.reducer;