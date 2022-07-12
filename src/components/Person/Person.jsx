import React from 'react'
import { Player } from './Player'

export const Person = (props) => {
  return (
    <>
        <div>Person details</div>
        <div>Name: {props.name}</div>
        <div>Address: {props.add}</div>
        <div>Gender: {props.gen}</div>
        <br/>
        <Player name={props.name} game="cricket"/>
    </>
  )
}

// function calculator(a,b){
//     console.log('running calculator');
// }

// calculator()
// calculator()
// calculator()
// calculator()
// calculator() 