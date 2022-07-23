import React from 'react'
import { Post } from './ComponentV2/Loader/Post'
import { Form3 } from './ComponentV2/PostMethod/Form'
import { FirstReducer } from './ComponentV2/RecucerHook/firstReducer'
import { SecondReducer } from './ComponentV2/RecucerHook/SecondReducer'
import { ThirdReducer } from './ComponentV2/RecucerHook/ThirdReducer'

export const AppV2 = () => {
  return (
    <>
    <h1>AppV2</h1>
    {/* <Post/> */}
    {/* <Form3/> */}
    <FirstReducer/>
    <SecondReducer/>
    <ThirdReducer/>
    </>
  )
}
