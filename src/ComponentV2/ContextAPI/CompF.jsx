import React, { useContext } from 'react'
import {UserContext} from '../../AppV2'

export const CompF = () => {
    const user2 = useContext(UserContext)
  return (
    <>
    <div>CompF : {user2.name}</div>
    <br/>
    </>
  )
}
