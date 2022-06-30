import React, { useState } from 'react'

export const StateExample = () => {
    // let count= 10;
    // first variable(count) is the initial value
    // second is setter func of the first variable --> upodate the state
    const [count, setCount] = useState(0);

    const [name, setName] = useState('abhinav');

    // boolean, array, objects

    // const [address, setAddress] = useState();

    // console.log('count',count);
    // console.log(setCount);

    const increment=() => {
        console.log('count before',count);
        // count=count+1
        setCount(count+1) //web apis
        console.log('count after',count);
    }

    const decrement=() => {
        // count=count-1
        setCount(count-1)
        console.log(count);
    }

    console.log('rendering', count);

  return (
      <>
        <div>StateExample</div>
        <div>count: {count}</div>
        <button onClick={increment}>+</button>
        <br/>
        <br/>
        <button onClick={decrement}>-</button>

        <div>Name: {name}</div>
        <button onClick={() => setName('suleman')}>updateName</button>
      </>
  )
}


// before 16.8 version in react ---> 
// you cant maintaian a state in fun comp but can maintian in class comp
// stateless and stateful


// after 16.8 Hooks were introduced and we can use hooks to maintain states in fun comp



let arr = [10,20,40];

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]

let [a,b,c,d] = arr


function caller(){
    let count = 0
    setTimeout(() => {
        count=count+1
        console.log(count);
    })
    console.log(count);
}


// first time
// rendering 0

// flow 
// onclick + button 
// increment is called
// count before 0
// async call to setCount(1) ---> wont execute immediately/saved in Web Apis
// count after 0

// setCount does two things
// 1. updates the value  ---> 1
// 2. rerender the comp



// class Person{

// }

// let a= new Class()
// let b = new Class()




// three phases
// 1. 

function random(){
    var arr = []
    return 
}
