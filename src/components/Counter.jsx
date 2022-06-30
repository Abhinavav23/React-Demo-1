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

        setCount((previousState) => previousState+10);  //1
        setCount((previousState) => previousState+2);  //1
        setCount((previousState) => previousState+3);  //1
        setCount((previousState) => previousState+4);  //1
        setCount((previousState) => previousState+5);  //1


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
