import React, { useState } from 'react'
import HigherOrderComp from './HigherOrderComp';

const Counter = ({hocCounter, increment, decrement}) => {
//     const[count, setCount] = useState(0);
//   return (
//     <>
//     <div>Click Counter : {count}</div>
//     <button onClick={() => setCount(count+1)}>+</button>
//     <br/>
//     <br/>
//     <button onClick={() => setCount(count-1)}>-</button>
//     </>
// )

    return (
        <>
            <div>Click Counter : {hocCounter}</div>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => increment(5)}>+5</button>
            <br/>
            <br/>
            <button disabled={hocCounter<0} onClick={() => decrement(2)}>-</button>
        </>
    )
}

export default HigherOrderComp(Counter); // ----> EnhancedComp ----> Counter+123
{/* <HigherOrderComp/> */}