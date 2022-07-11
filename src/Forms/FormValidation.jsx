import React, { useState } from 'react'
import Style from './FormValidation.module.css'

export const FormValidation = () => {

    const initialValue = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const initialErrorValue = {
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    }

    const [signUpValidation, setSignupValidation] = useState(initialValue)

    const [signUpValidationerror, setSignupValidationError] = useState(initialErrorValue)

    const userNameValidator = () => {
        if(signUpValidation.username === ""){
            setSignupValidationError({...signUpValidationerror, usernameError: "Please enter username"})
        } else if(signUpValidation.username.length < 6){
            setSignupValidationError({...signUpValidationerror, usernameError: "username must be atleast 6 characters"})
        } else{
            setSignupValidationError(initialErrorValue)
        }
    }

    const emailValidator = () => {
        // should not be empty
        // min lemgth 
        // should have @ symbol ---> searching

        if(signUpValidation.username === ""){
            setSignupValidationError({...signUpValidationerror, usernameError: "Please enter username"})
        } else if(signUpValidation.username.length < 6){
            setSignupValidationError({...signUpValidationerror, usernameError: "username must be atleast 6 characters"})
        } else{
            setSignupValidationError(initialErrorValue)
        }
    }

    // Password validator
    // should not be empty
    // min lemgth & max length
    // should be same as password --> confirm password
    

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e);
        userNameValidator()
    }

    const handleUserInputChange = (e) => {
        setSignupValidation({...signUpValidation, [e.target.id]: e.target.value })
    }

  return (
    <form className={Style.container} onSubmit={submitHandler}>
        <label htmlFor="username">User Name:</label>
        <input type="text" 
        id="username"
        placeholder='username'
        value={signUpValidation.username}
        onChange={(e) => handleUserInputChange(e)}/>

       <div className={Style.error}>{signUpValidationerror.usernameError}</div>

        <label htmlFor="email">Email: </label>
        <input type="text" 
        id="email"
        placeholder='email'
        value={signUpValidation.email}
        onChange={(e) => handleUserInputChange(e)}/>

        <div className={Style.error}>{signUpValidationerror.emailError}</div>

        <label htmlFor="password">Password: </label>
        <input type="password" 
        id="password"
        value={signUpValidation.password}
        placeholder='password'
        onChange={(e) => handleUserInputChange(e)}/>

        <div className={Style.error}>{signUpValidationerror.passwordError}</div>

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="password" 
        id="confirmPassword"
        value={signUpValidation.confirmPassword}
        placeholder='confirm password'
        onChange={(e) => handleUserInputChange(e)}/>

        <div className={Style.error}>{signUpValidationerror.confirmPasswordError}</div>
        <br/>
        <button>sign up</button>
    </form>
  )
}


