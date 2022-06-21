
    //纯react实现

// import React ,{useState,useRef} from "react";

// export default function Counter(){
//     const myRef = useRef()
//     const [count,setCount] = useState(0)
//     const increment = ()=>{
//         // console.log(myRef.current);
//         const num = myRef.current.value*1;
//         setCount(count + num)
//     }
//     return(
//         <div>
//             <h3>count:{count}</h3>
//             <select ref={myRef}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//             </select>&nbsp;&nbsp;
//             <button onClick={increment}>increment</button>
//         </div>
//     )
// }


    //redux && react-redux 实现

import React,{useRef} from "react";
import {useSelector,useDispatch} from "react-redux"
import {
    decrement,
    increment,
    incrementAsync,
    selectCount
} from "./counterSlice"
export default function Counter() {
    const myRef = useRef()
    //利用useSelector让counter组件和store通信  提取store中的数据
    const count = useSelector(selectCount)
    //使用 useDispatch 来 dispatch action
    const dispatch = useDispatch()
    //处理加的逻辑
    const incre = ()=>{
        //获取select的值
        const num = myRef.current.value*1;
        dispatch(increment(num))
    }
    //处理减的逻辑
    const decre = ()=>{
        const num = myRef.current.value*1;
        dispatch(decrement(num))
    }
    //处理异步逻辑(这里是延迟定时器)
    const increAsync = ()=>{
        const num = myRef.current.value*1;
        dispatch(incrementAsync(num))
    }
    return (
        <div>
            <h3>count:{count}</h3>
            <select ref={myRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;&nbsp;
            <button onClick={incre}>increment</button>&nbsp;&nbsp;
            <button onClick={decre}>decrement</button>&nbsp;&nbsp;
            <button onClick={increAsync}>incrementAsync</button>
        </div>
    )
}