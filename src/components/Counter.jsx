import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementby1 = () => {
        setCount(count+1)
    }

    const incrementby5 = () => {

        //async func
        setCount((val) => val+1);  //1
        setCount((val) => val+2); 
        setCount((val) => val+3); 
        setCount((val) => val+4); 
        setCount((val) => val+5); 


        // setCount(count+2); //3
        // setCount(count+3); //6
        // setCount(count+4); //10
        setCount(count+5); //15

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
