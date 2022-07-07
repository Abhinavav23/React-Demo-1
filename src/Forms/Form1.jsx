import React, { useState } from 'react'

export const Form1 = () => {
    let userInfo = {
        name: '',
        password: '',
        email: ''
    }

    let a = 'name'

    const [showDetails, setShowDetails] = useState(false)

    const [user, setUser] = useState({
        name: '',
        password: '',
        email: ''
    })

    console.log('rendering');

    // const handleName = (e) => {
    //     userInfo.name=e.target.value
    //     console.log(e.target.id);
    // }
    // const handlePassword = (e) => {
    //     userInfo.password=e.target.value
    // }
    // const handleEmail = (e) => {
    //     userInfo.email=e.target.value
    // }

    const handleUser = (e) => {
        // if(e.target.id === 'username'){
        //     userInfo.name=e.target.value
        // } else if(e.target.id === 'password') {
        //     userInfo.password=e.target.value
        // } else if(e.target.id === 'email') {
        //     userInfo.email=e.target.value
        // } 
        userInfo[e.target.id] = e.target.value;
    }

    const printResult = (e) => {
        e.preventDefault()
        if(userInfo.name !== 'abhinav'){
            setUser(userInfo);
            setShowDetails(true);
        }
    }

  return (
    <>
    <form onSubmit={(e) =>printResult(e)}>
        <label htmlFor='name'>Name:</label>
        <br/>
        <input id='name' type="text" onChange={(e) => handleUser(e)}/>
        <br/> <br/>
        <label htmlFor="password">Passoword:</label>
        <br/>
        <input id='password' type="password" onChange={(e) => handleUser(e)} />
        <br/> <br/>
        <label htmlFor="email">Email:</label>
        <br/>
        <input id='email' type="email" onChange={(e) => handleUser(e)}/>
        <br/> <br/>
        {/* <button>Submit</button> */}
        {/* <input type="submit" /> */}
        <button>submit</button>
    </form>
    <br/>
   {showDetails && (<section>
        <h3>User Details</h3>
        <div>Name: {user.name}</div>
        <div>password: {user.password}</div>
        <div>Email: {user.email}</div>
    </section>)}
    </>
  )
}



let obj = {
    name: 'abhinav',
    address: 'delhi',
    role: 'Instructor'
}

function getObjName(){
    console.log(obj.name);
}
function getObjAdd(){
    console.log(obj.address);
}
function getObjrole(){
    console.log(obj.role);
}

// getObjName()
// getObjAdd()
// getObjrole()
// console.log(obj.myname);


function getObjProperty(propertyName){
    console.log(obj[propertyName]);
}

// getObjProperty('name')
// getObjProperty('address')
// getObjProperty('myaddress') //obj.myaddress-->undefined




