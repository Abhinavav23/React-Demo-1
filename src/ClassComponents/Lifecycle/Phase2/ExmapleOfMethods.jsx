import React, { Component } from 'react'
import axios from 'axios';

export default class ExmapleOfMethods extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     fullName: this.props.firstName + ' title'
        // }

        this.state = {
            post: []
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('Props', props);
    //     console.log('state', state);
    //     return {
    //         fullName: props.firstName + ' Kumar'
    //     }
    // }

    shouldComponentUpdate(props, state){
        if(props.firstName.length < 10){
            return false
        } else{
            return true
        }
    }

    componentDidMount(){
        // convert into async await
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data);
            this.setState({
                post: res.data
            })
        })
    }

    componentDidUpdate(){

    }

  render() {
    return (
     <>
      <h2>ExmapleOfMethods</h2>
      <div>Name without title --- Props : {this.props.firstName}</div>
      <div>Name with title --- state: {this.state.fullName}</div>
      {[1,2,36,777]}
     </>
    )
  }
}


function printNameandTitle(name, title){
    console.log(`My Name is ${name}, title is ${title}`);
}

// printNameandTitle('')

let a = 10


a =20
