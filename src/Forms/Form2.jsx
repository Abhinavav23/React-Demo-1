import React, { useState } from 'react'

export const Form2 = () => {
    // controlled way | component
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    let nameCopy;
    let emailCopy;

    const copyValue = () => {
        console.log('Chaeckbox ');
        nameCopy = name;
        emailCopy = email
    }

    console.log('rendering');

  return (
      <>
      <h2>Present Address</h2>
      <form>
        Name:
        <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
        email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/> <br/>
    </form>

    <input type="checkbox" onChange={copyValue}/>

    <h2>Permanent Address</h2>
    <form>
        Name:
        <input type="text" value={nameCopy} onChange={(e) => setName(e.target.value)}/>
        email:
        <input type="text" value={emailCopy} onChange={(e) => setEmail(e.target.value)}/>
        <br/> <br/>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
    </form>
      </>
    
  )
}
