import React, { useContext } from 'react'
import { CompD } from './CompD'

import {UserContext, AdminContext} from '../../AppV2'

export const CompB = () => {
  const user = useContext(UserContext) //
  const admin = useContext(AdminContext)
  return (
    <>
    <div>CompB : {user.name}</div>
    <div>AdminContext : {admin.name}</div>
    <br/>
    <CompD/>
    </>
  )
}


// for 1st time render
// usecontext ----> {name: 'Abhinav', role: 'Instructor'}
// admin context ----> {name: 'Default VALUE'} -->default


// for 2nd render
// useContext ---> {name: 'Sachin', role: 'Player'} ---> deafult value
// admin context   ----> {name: 'Admin', role: 'Admin'}