import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    //name选项用在每个action type的第一部分 {type:"counter/increment"}
    name:'counter',
    //设置reducer初始状态的值
    initialState:{
        value:0
    },
    reducers:{
        increment: (state,action) =>{
            state.value += action.payload;
        },
        decrement: (state,action) =>{
            state.value -= action.payload;
        }
    }
})

// 解构赋值并且暴露
export const {increment,decrement} = counterSlice.actions;

//thunk 实现 异步逻辑
export const incrementAsync = amount => dispatch =>{
    setTimeout(()=>{
        dispatch(increment(amount))
    },1000)
}

//简化或者计算类似vuex中的getter
export const selectCount = state => state.counter.value
//暴露reducer

export default counterSlice.reducer;