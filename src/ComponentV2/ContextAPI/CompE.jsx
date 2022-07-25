import React, { useContext } from 'react'
import {UserContext} from '../../AppV2'
import { ChildJ } from './ChildJ'

export const CompE = () => {
    const user = useContext(UserContext)
  return (
   <>
   <div>CompE</div>
    <div>Name : {user.name}</div>
    <div>role : {user.role}</div>
    <ChildJ/>
    <br/>
   </>
  )
}
