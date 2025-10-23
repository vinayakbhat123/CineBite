import { createSlice } from "@reduxjs/toolkit";

const QuerySlice = createSlice({
    name:"query",
    initialState:{
       queries:"bird",
    },
    reducers:{
        addquery:(state,actions ) =>{
         state.queries =actions.payload;
        }
    }
});
export const {addquery} = QuerySlice.actions;


export default QuerySlice.reducer;
