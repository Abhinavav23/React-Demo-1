import React from 'react'
import { Wraper } from './Wraper';

export const MainArea = (props) => {
  console.log(props);
  return (
    <>
        <div>MainArea</div>
        <div>userName: {props.username}</div>
        <div>Name: {props.name}</div>
        {/* <Wraper userinfo={userInfo} nums={arr} fun={caller}/> */}
    </>
  )
}
