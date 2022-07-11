import React, {useRef, useState} from 'react'

import Style from './FormValidationV2.module.css'

export const FormValidationV2 = () => {
    const initialErrorValue = {
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    }

    const [signUpValidationerror, setSignUpValidationerror] = useState(initialErrorValue)

    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const userNameValidator = () => {
        if(userNameRef.current.value === ''){
            setSignUpValidationerror({...signUpValidationerror, usernameError: `username can't be empty`})
        } else if(userNameRef.current.value.length < 6){
            setSignUpValidationerror({...signUpValidationerror, usernameError: `username can't less than 6 characters`})
        } else{
            setSignUpValidationerror(initialErrorValue)
        }
    }

    // e.target is same as ref.current --> both gives you the element
    const submitHandler = (e) => {
        e.preventDefault()
        userNameValidator()
    }

  return (
    <form className={Style.container} onSubmit={submitHandler}>
        <label htmlFor="username">User Name:</label>
        <input type="text" 
        id="username"
        placeholder='username'
        onBlur={userNameValidator}
        ref={userNameRef}/>

       <div className={Style.error}>{signUpValidationerror.usernameError}</div>

        <label htmlFor="email">Email: </label>
        <input type="text" 
        id="email"
        placeholder='email'
        ref={emailRef}
       />

        <div className={Style.error}>{signUpValidationerror.emailError}</div>

        <label htmlFor="password">Password: </label>
        <input type="password" 
        id="password"
        placeholder='password'
        ref={passwordRef}
        />

        <div className={Style.error}>{signUpValidationerror.passwordError}</div>

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="password" 
        id="confirmPassword"
        placeholder='confirm password'
        ref={confirmPasswordRef}
        />

        <div className={Style.error}>{signUpValidationerror.confirmPasswordError}</div>
        <br/>
        <button>sign up</button>
    </form>
  )
}
