import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name:"config",
    initialState:{
        langKey:"en"
    },
    reducers:{
        changelang:(state,actions) => {
            state.langKey = actions.payload;
        }
    }
});
 
export const {changelang} = ConfigSlice.actions;

export default ConfigSlice.reducer;