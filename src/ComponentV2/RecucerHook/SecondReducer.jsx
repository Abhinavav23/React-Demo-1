import React, { useReducer } from 'react'

export const SecondReducer = () => {
    const initialCount = {
        count1: 0,
        count2: 100
    }

    const counterReducer = (state, action) => {
        if(action.count === 'count1'){
            return {...state,
                 count1: state.count1+action.updatedValue}
        } else if(action.count === 'count2'){
            return {...state, count2: state.count2+1}
        }
    }
    const[counters, dispatchCounter] = useReducer(counterReducer, initialCount)

  return (
    <>
    <h2>SecondReducer</h2>
    <div>Count 1: {counters.count1}</div>
    <button onClick={() => dispatchCounter({count: 'count1', updatedValue: 1})}>count 1 + 1</button>
    <button onClick={() => dispatchCounter({count: 'count1', updatedValue: 2})}>count 1 + 2</button>
    <button onClick={() => dispatchCounter({count: 'count1', updatedValue: 3})}>count 1 + 3</button>
    <button onClick={() => dispatchCounter({count: 'count1', updatedValue: 4})}>count 1 + 4</button>
    <button onClick={() => dispatchCounter({count: 'count1', updatedValue: 5})}>count 1 + 5</button>
    <div>Count 2: {counters.count2}</div>
    <button onClick={() => dispatchCounter('count2')}>count 2 + 2</button>
    <button onClick={() => dispatchCounter('count2')}>count 2 + 5</button>
    </>
  )
}


// const test1 = () => {
//     call1()
// }

// call2()