import React from 'react'

export const Product = (props) => {
  return (
    <>
        <div>Product</div>
        <div>Name: {props.name}</div>
        <div>Price: {props.price}</div>
        <div>Qunatity: {props.quantity}</div>
    </>
  )
}
