import React, { useState } from 'react'
import { ConditionalReturns } from './ComponentsV1/ConditionalReturns'

const AppV1 = () => {
    const [theme, setTheme] = useState(true);
    // let theme = true
    function toggle(){
        setTheme(!theme);
        // theme= false
        console.log(theme);
    }

  return (
      <>
        <h2>Rendering AppV1</h2>
        <div>Theme: {theme ? '1': '2'}</div>
        <ConditionalReturns theme={theme}/>
        <br/>
        <button onClick={toggle}>Switch to older version</button>
      </>
  )
}

export default AppV1