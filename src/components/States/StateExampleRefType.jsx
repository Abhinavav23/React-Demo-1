import React, { useState } from 'react'

export const StateExampleRefType = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Abhinav',
        address: 'Delhi',
        role: 'Instructor',
    });

    const [numbers, setNumbers] = useState([1,2,3])

    // let obj = {
    //     ...userInfo, 
    //     name: 'abhinav'
    // }

    const handler = () => {
        console.log("before",numbers); //[1,2,3]
        numbers.push(numbers[numbers.length-1]+1) // numbers[2]
        console.log("after",numbers);//[1,2,3,4]
        // this wont work becoz newNum will have same ref as numbers
        // let newNum = numbers
        setNumbers([...numbers]);
    }

    // ref type

    // let arr = [1,2,3,4]
    // let arr2 = arr

    // console.log(arr===arr2); //true
    // [1,2,3,4]

    // let arr1 = [1,2,3,4]


  return (
   <>
    <div>StateExampleRefType</div>
    <div>Name: {userInfo.name}</div>
    <button onClick={() =>setUserInfo({...userInfo, name:'John'})}>change Name</button>
    <br/>

    <div>Address: {userInfo.address}</div>
    <button onClick={() =>setUserInfo({
        ...userInfo,
        address: 'Bangalore'
        })}>change address
    </button>

    <div>Role: {userInfo.role}</div>
    <button onClick={() =>setUserInfo({
        ...userInfo,
        role: 'Trainee'
        })}>change role
    </button>

    <div>numbers: {numbers}</div>
    <button onClick={handler}>add number</button>
   </>
  )
}

/*
previously = {
    name: 'Abhinav',
    address: 'Delhi'
}

after ={
    name: 'john',
}

*/
