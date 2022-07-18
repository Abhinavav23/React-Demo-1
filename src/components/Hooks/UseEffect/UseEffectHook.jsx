import React, { useEffect, useState } from 'react'

export const UseEffectHook = () => {

    const [count1, setCount1]  = useState(0);
    const [count2, setCount2]  = useState(10);
    const [count3, setCount3]  = useState(50);

    // const [role, setCount]  = useState(false);
    // const [userInfo, setCount]  = useState({
    //     name: '',
    //     role: ''
    // });


    // componentDidMount
    useEffect(() => {
        // fetch('')
        console.log('useEffect running only once');
    }, [])

    useEffect(() => {
        // fetch('')
        console.log('useEffect running on counter1 and counter 2');
    }, [count1, count2])

    useEffect(() => {
        // fetch('')
        console.log('useEffect running on counter3');
    }, [count3, count1])



  return (
   <>
    <h2>UseEffectHook</h2>
    
    <button onClick={() => setCount1(count1+1)}>+counter</button>

    <h2>Count: {count2}</h2>
    <button onClick={() => setCount2(count2+1)}>+counter</button>

    <h2>Count: {count3}</h2>
    <button onClick={() => setCount3(count3+1)}>+counter</button>

    {/* <h2>Count: {count1}</h2> */}
   </>
  )
}


// componentDidMount
// componentDidUpdate

// useEffect is a combination of mutiple lifecycle methods
// it takes 2 arguments 
// 1. callback
// 2. dependency array

// ----running Conditions ------
// only once ---> empty [] as dependency
// evwerytime ---> nothing / dont pass dependency array
// based on nsome varibale if we want to run we can pass that as a dependency


// a
// const a = 10