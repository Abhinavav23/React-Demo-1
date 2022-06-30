import React from 'react'
import { ChildOne } from './Childone'
import { ChildTwo } from './ChildTwo'

export const Parent = (props) => {
    
  return (
    <>
    <div>Parent</div>
    <ChildOne name={props.name}/>
    <ChildTwo name={props.name}/>
    </>
  )
}
