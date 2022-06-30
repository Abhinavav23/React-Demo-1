import React from 'react'
import { Product } from './Product'

export const ProductList = () => {
    let productList = [
    {
        name: 'Queen Panel bed',
        price: 2000,
        quantity: 10
    },
    {
        name: 'King Panel bed',
        price: 2500,
        quantity: 14
    },
    {
        name: 'Single bed',
        price: 200,
        quantity: 7
    },
    {
        name: 'Dresser',
        price: 200,
        quantity: 15
    },
    {
        name: 'Double Panel bed',
        price: 205,
        quantity: 4
    }
]


  return (
    <>
    <div>ProductList</div>
    <br/>
    <section>
       { productList.map((el,index) => {
           return (
               <>
               <Product name={el.name} price={el.price} quantity={el.quantity}/>
                <br/>
               </>
           )
       })}

       {/* {[val,val,val]} */}
    </section>
    </>
  )
}

// [
// <>
{/* <div>Product</div>
<div>Name: {props.name}</div>
<div>Price: {props.price}</div>
<div>Qunatity: {props.quantity}</div>
</>,

<div>Product</div>
<div>Name: {props.name}</div>
<div>Price: {props.price}</div>
<div>Qunatity: {props.quantity}</div>
</>,

<div>Product</div>
<div>Name: {props.name}</div>
<div>Price: {props.price}</div>
<div>Qunatity: {props.quantity}</div>
</>, */}


// <Product name="Queen Panel bed"/>
// <Product name="Queen Panel bed"/>
// <Product name="Queen Panel bed"/>
// <Product name="Queen Panel bed"/>
// ]


// [1,2,3,4,5]




// let a = a+b+c
