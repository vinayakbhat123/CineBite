import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch :false,
    },
    reducers:{
        changegptsearch:(state) => {
         state.showGptSearch = !state.showGptSearch;
        }
    }
});
export const {changegptsearch} = GptSlice.actions;

export default GptSlice.reducer;