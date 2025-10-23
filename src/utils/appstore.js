import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import GptsearchReducer from "./GptSlice";
import ConfigReducer from "./ConfigSlice";
import QueryReducer from "./QuerySlice";
import DataReducer from "./DataSlice";
const appstore = configureStore({
    reducer:{
        user:UserReducer,
        gpt:GptsearchReducer,
        config:ConfigReducer,
        query:QueryReducer,
        data:DataReducer,
    },
})
export default appstore;