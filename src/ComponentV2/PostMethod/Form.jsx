import React, { useRef } from 'react';
import axios from 'axios';

// uncontrolled way | component
export const Form3 = () => {
    // a hook to create refrences
    const nameRef = useRef();
    const emailRef = useRef();

    const printVlaue = (e) => {
        e.preventDefault()
        // console.log('nameref value--->', nameRef.current.value);
        // console.log('emailref value--->', emailRef.current.value);

        let userInfo = {
            name: nameRef.current.value,
            email: emailRef.current.value
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', userInfo)
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        })

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'Post',
        //     body: JSON.stringify(userInfo)
        //     content
        // })
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
