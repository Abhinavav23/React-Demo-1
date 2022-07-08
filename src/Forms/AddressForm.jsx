import React, { useState } from 'react'

export const Form2 = () => {
    // controlled way | component
    let initialAdd = {
        street: '',
        city:'',
        pin: ''
    }
    
    const[presentAdd, setPresentAddress] = useState({
        street: '',
        city:'',
        pin: ''
    })

    const[permanentAdd, setPermanentAdd] = useState({
        street: '',
        city:'',
        pin: ''
    })

    const copyValues = (e) => {
       if(e.target.checked){
           setPermanentAdd(presentAdd)
       } else{
        setPermanentAdd(initialAdd)
       }
    }

    console.log('rendering');

  return (
      <>
      <h2>Present Address</h2>
        <form>
            Stret No:
            <input type="text" 
            value={presentAdd.street} 
            onChange={(e) => 
            setPresentAddress({...presentAdd, street: e.target.value})}/>
            <br/><br/>
            city:
            <input type="text" 
            value={presentAdd.city} 
            onChange={(e) => 
            setPresentAddress({...presentAdd, city: e.target.value})}/><br/><br/>
            Pin:
            <input type="text" 
            value={presentAdd.pin} 
            onChange={(e) => 
            setPresentAddress({...presentAdd, pin: e.target.value})}/><br/><br/>
            <br/> <br/>
        </form>

        <div>Street: {presentAdd.street}</div>
        <div>City: {presentAdd.city}</div>
        <div>Pin: {presentAdd.pin}</div>

    <input type="checkbox" onChange={(e) => copyValues(e)}/>
    <span>Is Present Address Same as permanent address</span>

    <h2>Permanent Address</h2>
        <form>
            Stret No:
            <input type="text" 
            value={permanentAdd.street} 
            onChange={(e) => 
            setPermanentAdd({...permanentAdd, street: e.target.value})}/>
            <br/><br/>

            city:
            <input type="text" 
            value={permanentAdd.city} 
            onChange={(e) => 
            setPermanentAdd({...permanentAdd, city: e.target.value})}/>
            <br/><br/>

            Pin:
            <input type="text" 
            value={permanentAdd.pin} 
            onChange={(e) => 
            setPermanentAdd({...permanentAdd, pin: e.target.value})}/><br/><br/>
            <br/> <br/>

        </form>
      </>
    
  )
}
