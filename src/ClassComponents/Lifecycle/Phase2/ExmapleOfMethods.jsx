import React, { Component } from 'react'
import axios from 'axios';

export default class ExmapleOfMethods extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     fullName: this.props.firstName + ' title'
        // }

        this.state = {
            mypost: []
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

    async getData(){
        // let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // let data = await res.json()
        try{
            let res = await axios.get('https://jsonplaceholder.typicode.com/postsfgfgf')
        } catch(e){
            console.log();
        } finally{

        }
    }

    componentDidMount(){
        // convert into async await
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((res) => {
        //     console.log(res.data);
        //     this.setState({
        //         post: res.data
        //     })
        // })

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((res) => {
        //     console.log(res);
        //     return res.json()
        // })
        // .then((data) => {
        //     console.log(data);
        //     this.setState({
        //         mypost: data
        //     })
        // })

        this.getData()
        .then((data) => {
            this.setState({
                mypost: data
            })
        })

    }

    componentDidUpdate(){

    }

    arr = [2,5,8,3,7]


  render() {
    return (
     <>
      <h2>ExmapleOfMethods</h2>
      <div>Name without title --- Props : {this.props.firstName}</div>
      <div>Name with title --- state: {this.state.fullName}</div>
      {/* {[1,2,36,777]} */}

      {
          this.arr.filter((el) => el>5)
      }
      
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
