import React from 'react'
import { CompA } from './ComponentV2/ContextAPI/CompA'
import { CompB } from './ComponentV2/ContextAPI/CompB'
import { Post } from './ComponentV2/Loader/Post'
import { Form3 } from './ComponentV2/PostMethod/Form'
import { FirstReducer } from './ComponentV2/RecucerHook/firstReducer'
import { SecondReducer } from './ComponentV2/RecucerHook/SecondReducer'
import { ThirdReducer } from './ComponentV2/RecucerHook/ThirdReducer'

export const UserContext = React.createContext({name: 'Sachin', role: 'Player'});
export const AdminContext = React.createContext({name: 'Default VALUE'});

const user = {name: 'Abhinav', role: 'Instructor'}
const admin = {name: 'Admin', role: 'Admin'}
export const AppV2 = () => {
  return (
    <>
    <h1>AppV2</h1>
    {/* <Post/> */}
    {/* <Form3/> */}
    {/* <FirstReducer/>
    <SecondReducer/>
    <ThirdReducer/> */}
    <UserContext.Provider value={user}>
        {/* <CompA/> */}
        <CompB/>
    </UserContext.Provider>

    <AdminContext.Provider value={admin}>
    <CompB/>
    </AdminContext.Provider>
    </>
  )
}
