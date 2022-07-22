import React, { useReducer, useState } from 'react'

export const FirstReducer = () => {

    const initialState = 150;
    const reducerFun = (state, action) => {
        if(action === 'add'){
            return state+1
        } else if(action === 'subs'){
            return state-1
        }
    }

    const gameDecider = (state, action) => {
        switch(action){
            case 1:
                return 'Cricket'
            case 2:
                return 'football'
            case 3:
                return 'vollyball'
            case 4:
                return 'badminton'
        }
    }

    // dispatch interacts with ReducerFun to change the val of redCount

    const [redCount, dispatch] = useReducer(reducerFun, initialState);
    // setCount updates tbhe value of count directly by recieving the updated value

    const initialGame = 'Cricket'
    const [game, dispatchGameNo] = useReducer(gameDecider, initialGame)

    const [count, setCount] = useState(10)

  return (
    <>
    <h2>firstReducer</h2>
    <div> Use Reducer Count: {redCount}</div>
    <button onClick={() => dispatch('add')}>Dispatch +</button>
    <button onClick={() => dispatch('subs')}>Dispatch -</button>

    <div>Use Stae Count: {count}</div>
    <button onClick={() => setCount(count+10)}>+</button>
    <button onClick={() => setCount(count-10)}>-</button>

    <div>Game choosed : {game}</div>
    <button onClick={() => dispatchGameNo(Math.ceil(Math.random()*4))}>changeGame</button>
    </>
  )
}

/*
// Reducer Method in Arrays
let arr = [3,4,7,8,3]; //25
let arr = ["I", "Am", "A", "Instructor" ]

let res = arr.reduce((prev, curr) => {
    console.log('prev', prev);
    console.log('curr', curr);
    console.log('');
    return prev+curr // 7 ---> 14 ---> 22 ---> 25
}, 19)

console.log(res);

// useReducer ---> works similar to reduce method in JS
// 1. hook
// 2. can be used as useState

useReducer(reducerFunction, initialValue)
const reducerFunction = (currValue, action) => {

}
// reducerFunction will return a new Value/new State


const [count1, setCount] = useState(IV);

const [count2, dispatch] = useReducer(Rf, IV)
*/