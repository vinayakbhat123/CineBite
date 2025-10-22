import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import  PixelsReducer from "./PixelsSlice"
const appstore = configureStore({
    reducer:{
        user:UserReducer,
        Pixels:PixelsReducer,
    },
})
export default appstore;