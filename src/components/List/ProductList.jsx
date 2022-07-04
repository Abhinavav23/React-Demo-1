import React, { useState } from 'react'
import { Product } from './Product'

export const ProductList = () => {
    let productList = [
    {
        id: "1",
        name: 'Queen Panel bed',
        price: 2000,
        quantity: 10,
        instock: true
    },
    {
        id: "2",
        name: 'King Panel bed',
        price: 2500,
        quantity: 14,
        instock: false
    },
    {
        id: "3",
        name: 'Single bed',
        price: 200,
        quantity: 7,
        instock: false
    },
    {
        id: "4",
        name: 'Dresser',
        price: 200,
        quantity: 15,
        instock: true
    },
    {
        id: "5",
        name: 'Double Panel bed',
        price: 205,
        quantity: 4,
        instock: true
    }
]

let [product, setProduct] = useState(productList)

function renderList(){
    let arr = []
    // productList.forEach(el => {
    //     arr.push(<Product name={el.name} price={el.price} quantity={el.quantity}/>)
    // });
    for(let i=0; i<productList.length;i++){
        arr.push(<Product name={productList[i].name} price={productList[i].price} quantity={productList[i].quantity}/>)
    }
    return arr
}

function deleteItem(e){
    console.log(e.target.id);
    let updatedList = product.filter((el)=> e.target.id!==el.id)
    // updating the same array and passing to setProduct wont work 
    console.log('deleted');
    console.log(updatedList);
    setProduct(updatedList);
}

function BuyProduct(e){
    console.log('buying');
    // first find the elemnt using the id
    // update the quantity of that element
    // create a copy of the list with updated quanity
    // rerender by updating the state 
}

function AddItem(){
    product.push({id: product[product.length-1].id+1+'',
    name: 'new item',
    price: 205,
    quantity: 4,
    instock: true})
    console.log(product);

    setProduct([...product])
}

  return (
    <>
    <div>ProductList</div>
    <br/>
    <section>
       { product.map((el) => 
            (
               <div className='wrapper' key={el.id}>
               <Product name={el.name} price={el.price} quantity={el.quantity} available={el.instock} id={el.id}/>
               <Product {...el}/>
               <Product element={el}/>
               <button onClick={(e) => deleteItem(e)} id={el.id}>Delete</button>
               <button onClick={(e) => BuyProduct(e)} id={el.id}>Buy</button>
                <br/>
                <br/>
               </div>
           )
       )}

       {/* {renderList()} */}

       {/* {
           (function(){
            let arr = []
            // productList.forEach(el => {
            //     arr.push(<Product name={el.name} price={el.price} quantity={el.quantity}/>)
            // });
            for(let i=0; i<productList.length;i++){
                arr.push(<Product name={productList[i].name} price={productList[i].price} quantity={productList[i].quantity}/>)
            }
            return arr
            })()
       } */}

       {/* {[val,val,val]} */}
       <br/>
       <input type="text" />
       <input type="text" />
       <button onClick={AddItem}>Add Item</button>
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

// [
// <Product name="Queen Panel bed"/>
// <Product name="Queen Panel bed"/>
// <Product name="Queen Panel bed"/>
// <Product name="Queen Panel bed"/>
// ]


// [1,2,3,4,5]




// let a = a+b+c


// convention
// private---> _varName
// global ---> __varName

// function printName(){
//     let _name = 'Abhinav'
//     console.log(`My name is ${name}`);
// }
// printName()



// function test(){

// }