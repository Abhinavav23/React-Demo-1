import React, { Component } from 'react'

export default class Team extends Component {
    constructor(props){
        super(props)
    }
    
  render() {
    if(this.props.name === "Australia"){
      throw new Error('Australia is not my country')
    }
    return (
      <div>Team : {this.props.name}</div>
    )
  }
}


