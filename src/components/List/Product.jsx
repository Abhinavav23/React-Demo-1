import React from 'react'

// destruturing the props in component parameters
export const Product = ({name,price, id, quantity, available}) => {
  // console.log(props);

  //   {name,price, id, quantity, available} = {
  //   name: 'Queen Panel bed',
  //   price: '',
  //   quantity: ''
  // }

  // let buttonEl=''
  // if(props.available){
  //   buttonEl=<button onClick={buyProduct}>buy</button>
  // }

  // console.log(props);
  // destruturing the props
  // const {name,price, id, quantity, available} = props.element

  // let content = ''
  // if(props.number  ===1){
  //   content="one"
  // }else if(props.number  ===2){
  //   content="two"
  // }else{
  //   content=""
  // }

  // switch(props.number){
  //   case 1:
      
  //     break;
  //     ca
  // }
  return (
    <>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
        <div>Qunatity: {quantity}</div>
        {/* ternary operator */}
        {/* if else cant be used in JSX */}
        {/* <div>{available ? 'In stock' : 'out of stock'}</div> */}
        {/* {props.available ? <button onClick={buyProduct}>buy</button> : null} */}
        {/* short shircuit operator */}
        {/* {props.available && <button>buy</button>} */}
        {/* {buttonEl} */}
        {/* {content} */}
    </>
  )
}


// props.element.name
// props.element.price
// props.element.quantity
// props.element.id





// const a = 10
// a = 20

// const a = [1,2,3]
// a.push(2)


// const [a,e,t] = [1,2,3]

// const obj = {
//   a: '1',
//   b: '2'
// }

// console.log(obj);