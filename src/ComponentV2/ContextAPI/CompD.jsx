import React, { useContext } from 'react'
import { AdminContext, UserContext } from '../../AppV2'
import { dataContext } from './ChildJ';

export const CompD = () => {
  const adminVal = useContext(AdminContext);
  const dataval = useContext(dataContext);
  const user = useContext(UserContext)
  console.log(AdminContext);
  return (
   <>
    {/* <div>CompD : {adminVal.name}</div>
    <div>dataval : {dataval}</div> */}

    <div>user Name: {user.name}</div>
    <div>admin Name: {adminVal.name}</div>
    <br/>
   </>
  )
}
