import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name:"data",
    initialState:{
        datas:""
    },
    reducers:{
        addData:(state,actions) => {
            state.datas = actions.payload
        }
     }
});
export const {addData} = DataSlice.actions;

export default DataSlice.reducer;