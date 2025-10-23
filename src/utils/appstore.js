import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import GptsearchReducer from "./GptSlice";
import ConfigReducer from "./ConfigSlice"
const appstore = configureStore({
    reducer:{
        user:UserReducer,
        gpt:GptsearchReducer,
        config:ConfigReducer,
    },
})
export default appstore;