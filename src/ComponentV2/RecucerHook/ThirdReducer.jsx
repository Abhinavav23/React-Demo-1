import React, { useReducer, useState } from 'react'

export const ThirdReducer = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if(action === 'add'){
            return state+1
        }
    }
    const [count1, dispatch] = useReducer(reducer,initialState)
    const [count2, setCount2] = useState(0);

    const updateuseStateCountby5 = () => {
        // setCount2(count2+1)
        // setCount2(count2+1)
        // setCount2(count2+1)
        // setCount2(count2+1)
        // setCount2(count2+1)

        setCount2((prev) => prev+1)
        setCount2((prev) => prev+1)
        setCount2((prev) => prev+1)
        setCount2((prev) => prev+1)
        setCount2((prev) => prev+1)
    }

    const updateuseDispatchCountby5 = () => {
        dispatch('add')
        dispatch('add')
        dispatch('add')
        dispatch('add')
        dispatch('add')
    }

  return (
    <>
    <h2>ThirdReducer</h2>
    <div>useReducer Count: {count1}</div>
    <button onClick={updateuseDispatchCountby5}>+</button>


    <div>useState Count: {count2}</div>
    <button onClick={updateuseStateCountby5}>+</button>
    </>
  )
}
