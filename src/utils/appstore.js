import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import moviesReducer from "./moviesSlice"
const appstore = configureStore({
    reducer:{
        user:UserReducer,
        movies:moviesReducer,
    },
})
export default appstore;