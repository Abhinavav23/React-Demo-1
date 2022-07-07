import React, { useRef } from 'react'

// uncontrolled way | component
export const Form3 = () => {
    // a hook to create refrences
    const nameRef = useRef();
    const emailRef = useRef();

    const printVlaue = (e) => {
        e.preventDefault()
        console.log('nameref value--->', nameRef.current.value);
        console.log('emailref value--->', emailRef.current.value);
    }

  return (
   <form onSubmit={(e) =>printVlaue(e)}>
       <label htmlFor="">
        Name:
        <input type="text" id='name' ref={nameRef}/>
       </label>

       <label htmlFor="">
        Email:
        <input type="email" id='email' ref={emailRef}/>
       </label>
       
       <button>submit</button>
   </form>
  )
}


{/* <div>Total Value: <span class="cart" id="cartvalue">0</span></div>

document.getElementById('cartvalue').innerText = 100;
document.querySelector('.cart').innerText = 100; */}
