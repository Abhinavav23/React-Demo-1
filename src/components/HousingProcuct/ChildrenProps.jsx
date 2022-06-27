import React from 'react'

const ChildrenProps = (props) => {
  return (
    <>
    <div>ChildrenProps</div>
    <div>Name: {props.name}</div>
    <div>{props.children}</div>
    </>
  )
}

export default ChildrenProps