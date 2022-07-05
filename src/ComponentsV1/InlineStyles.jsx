import React from 'react'

export const InlineStyles = () => {
    let style2 = {
        background: 'green', 
        color: 'white',
    }
    let buttonStyle
    if(1){
        buttonStyle = {
        margin: '20px',
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: '#fff',
        border: '1px solid #333',
        borderRadius: '5px',
        fontWeight: '800',
        }
    } else {
        buttonStyle = {
            margin: '20px',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: '800',
        }
    }
    // in case of inline styles you cant take the privilages of external sheets
     
  return (
    <>
    <div style={{background: 'red', color: 'white', margin: '20px'}}>Style type 1</div>
    <div className='theme2'>Style type 2</div>
    <button style={buttonStyle}>click me</button>
    </>
  )
}

// let obj = {
//     name: 'av',
//     add: 'del'
// }
