import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"

export default configureStore({
    reducer:{
        //counter key名字对应了最终状态树中的名key   state.counter
        counter:counterReducer
    }
})