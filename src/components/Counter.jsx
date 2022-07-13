import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementby1 = () => {
        setCount(count+1)
    }

    const incrementby5 = () => {

        //async func
        // (val) => val+1
        // updating the state based on previous state

        setCount((previousState) => previousState+10);  //10
        setCount((previousState) => previousState+2);  //12
        setCount((previousState) => previousState+3);  //15
        setCount((previousState) => previousState+4);  //19
        setCount((previousState) => previousState+5);  //24


        // setCount(count+1);
        // setCount(count+2); //3
        // setCount(count+3); //6
        // setCount(count+4); //10
        // setCount(count+5); //15


        // setCount(count+1);
        // setCount(count+1); //3
        // setCount(count+1); //6
        // setCount(count+1); //10
        // setCount(count+1); //15


        // for(let i=0;i<5;i++){

        // }

        console.log(count);

        // react combines multiple set state calls and renders the comp once
    }

    console.log('rendering');



  return (
    <>
    <h3>Counter: {count}</h3>
    <button onClick={incrementby1}>+</button>
    <button onClick={incrementby5}>+5</button>
    </>

  )
}
