import React, { useState } from 'react'
import { ConditionalReturns } from './ComponentsV1/ConditionalReturns'
import './AppV1.css'
import { InlineStyles } from './ComponentsV1/InlineStyles';
import { ModuleCssComp } from './ComponentsV1/ModuleCssComp';
import { ModuleCssCompOne } from './ComponentsV1/ModuleCssComp1';
import { Form1 } from './Forms/Form1';

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
        {/* <h2>Rendering AppV1</h2>
        <div>Theme: {theme ? '1': '2'}</div> */}
        {/* <ConditionalReturns theme={theme}/> */}
        
        <br/>
        {/* <button onClick={toggle}>Switch to older version</button> */}

        {/* <InlineStyles/> */}

        {/* <ModuleCssComp/>
        <ModuleCssCompOne/> */}
        <Form1/>
      </>
  )
}

export default AppV1