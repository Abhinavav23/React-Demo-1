import React, { Component } from 'react'
import {UserContext, AdminContext} from '../../../AppV2'
export default class ClassA extends Component {

  render() {
    return (
      <>
      <UserContext.Consumer>
          {
              (myuser) => {
                return (
                   <>
                   <AdminContext.Consumer>
                       {
                           (myAdmin) => {
                                return (
                                    <>
                                    <div>ClassA</div>
                                    <div>Name user: {myuser.name}</div>
                                    <div>Role user: {myuser.role}</div>
                                    <div>Name: {myAdmin.name}</div>
                                    <div>Role: {myAdmin.role}</div>
                                    <br/>
                                    </>
                                )
                           }
                       }
                   </AdminContext.Consumer>
                   </>
                )
              }
          }
      </UserContext.Consumer>
      </>
    )
  }
}
