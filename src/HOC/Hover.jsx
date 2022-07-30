import React, { useState } from 'react'
import HigherOrderComp from './HigherOrderComp';
const Hover = ({hocCounter, increment, decrement}) => {
  //   const[count, setCount] = useState(0);
  // return (
  //   <>
  //   <div>Hover Counter : {count}</div>
  //   <button onMouseOver={() => setCount(count+1)}>+</button>
  //   <br/>
  //   <br/>
  //   <button onMouseOver={() => setCount(count-1)}>-</button>
  //   </>
  // )

  return (
    <>
   <div>Hover Counter : {hocCounter}</div>
    <button onMouseOver={() => increment(5)}>+</button>
    <br/>
    <br/>
    <button onMouseOver={() => decrement(5)}>-</button>
    </>
  )
}

export default HigherOrderComp(Hover)

