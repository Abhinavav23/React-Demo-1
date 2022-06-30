import React, { useState } from 'react'

export const ChildToParent = (props) => {
    const [userInfo, setUserInfo] = useState({
        name: 'Abhinav',
        address: 'Delhi',
        role: 'Instructor',
    });

  return (
    <>
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
    {/* by doing this we are achieving child to parent 
    communication or bottom to top or reverse communication */}
        <button onClick={() => props.print(userInfo)}>print details</button>


        {/* <OneMoreComp print={props.print}/> */}
    </>
  )
}
