import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
const appstore = configureStore({
    reducer:{
        user:UserReducer,
    },
})
export default appstore;