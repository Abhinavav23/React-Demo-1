import React, { useState } from 'react'
import { ConditionalReturns } from './ComponentsV1/ConditionalReturns'
import './AppV1.css'
import { InlineStyles } from './ComponentsV1/InlineStyles';
import { ModuleCssComp } from './ComponentsV1/ModuleCssComp';
import { ModuleCssCompOne } from './ComponentsV1/ModuleCssComp1';
import { Form1 } from './Forms/Form1';
import { Form2 } from './Forms/AddressForm';
import { Form3 } from './Forms/Form3';
import { FormValidation } from './Forms/FormValidation';
import { FormValidationV2 } from './Forms/FormValidationV2';
import FirstClassComponent from './ClassComponents/FirstClassComponent';
import ComponentOne from './ClassComponents/Lifecycle/ComponentOne';
import StateExample from './ClassComponents/Lifecycle/States/StateExample';
import Lifecycle from './ClassComponents/Lifecycle/Phase1/Lifecycle';
import LifecycleMethod from './ClassComponents/Lifecycle/Phase2/LifecycleMethod';
import Component1 from './ClassComponents/Lifecycle/Component1';
import Component2 from './ClassComponents/Lifecycle/Component2';
import ExmapleOfMethods from './ClassComponents/Lifecycle/Phase2/ExmapleOfMethods';

const AppV1 = () => {
    const [theme, setTheme] = useState(true);
    // let theme = true
    function toggle(){
        setTheme(!theme);
        // theme= false
        console.log(theme);
    }

    const [myName, setName] = useState('Abhinav');

    const [show, setShow] = useState(true);


    // let name = 'Abhinav'

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
        {/* <Form1/> */}
        {/* <Form2/> */}
        {/* <Form3/> */}
        {/* <FormValidation/> */}
        {/* <FormValidationV2/> */}

        {/* <FirstClassComponent/> */}

        {/* <ComponentOne name="test" address="Delhi"/> */}
        {/* <ComponentOne name="Manish" address="Bangalore"/> */}


        {/* <StateExample/> */}

        {/* <Lifecycle/> */}

        {/* <LifecycleMethod name={myName}/>
        <button onClick={() =>setName('Sonu')}>update Name</button> */}
        {/* {show && <Component1/>} */}
        {/* <button onClick={() => setShow(!show)}>toggle</button> */}
        {/* <Component2/> */}


        <ExmapleOfMethods firstName={myName}/>
        <button onClick={() => setName('Sonu 111')}>update Name</button>
      </>
  )
}

export default AppV1