import React from 'react'

export const Product = (props) => {
  let buttonEl=''
  if(props.available){
    buttonEl=<button>buy</button>
  }
  let content = ''
  if(props.number  ===1){
    content="one"
  }else if(props.number  ===2){
    content="two"
  }else{
    content="generic"
  }

  // switch(props.number){
  //   case 1:
      
  //     break;
  //     ca
  // }
  return (
    <>
        <div>Name: {props.name}</div>
        <div>Price: {props.price}</div>
        <div>Qunatity: {props.quantity}</div>
        {/* ternary operator */}
        {/* if else cant be used in JSX */}
        <div>{props.available ? 'In stock' : 'out of stock'}</div>
        {/* {props.available ? <button>buy</button> : null} */}
        {/* short shircuit operator */}
        {/* {props.available && <button>buy</button>} */}
        {buttonEl}
        {content}
    </>
  )
}


