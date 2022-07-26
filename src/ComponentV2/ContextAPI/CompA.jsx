import React, { useContext } from 'react'
import { AdminContext, UserContext } from '../../AppV2'
import { CompC } from './CompC'

export const CompA = (props) => {
  const user = useContext(UserContext)
  const admin = useContext(AdminContext)
  return (
    <>
        <div>CompA</div>
        <div>Name User : {user.name}</div>
        <div>Name Admin : {admin.name}</div>
        <br/>
        {/* <CompC/> */}
    </>
  )
}
