import React, { Component } from 'react'

export default class ComponentOne extends Component {
    constructor(props){
        super(props)
        // this.printName = this.printName.bind(this)
        this.state = {
            name: this.props.name + 'Sometitle',
            addRess: '',
            numbers: [],
            instaructor: true
        }
        console.log(this.state);
    }

    // this.state.name = 'Abhinav sometitile'

    // this.setState()

    // const [name, abhinav] = useState()

    // printName(){
    //     console.log('priting');
    //     console.log('Name: ', this.props.name);
    // } 

    // 1.
    printName = () => {
        console.log('priting');
        console.log('Name: ', this.props.name);
    } 

  render() {
    return (
      <>
        <h2>ComponentOne</h2>
        <div>Name: {this.props.name}</div>
        <div>Address: {this.props.address}</div>
        {/* 2nd approach */}
        {/* <button onClick={() => this.printName()}>printMyName</button> */}
        {/* 3rd approach */}
        {/* <button onClick={this.printName.bind(this)}>printMyName</button> */}
        <button onClick={this.printName}>printMyName</button>
      </>
    )
  }
}

// to make normal function work in class comp
// 1. turn normal function into arrow function
// 2. while passing the function wrap it with arrow func
// 3. while passing bind it with this keyword
// 4. bind it inside the constructor itself


// class Person {
//     constructor(name, add){
//         this.myname = name
//         this.add = add
//     }
// }

// class Player extends {
//     constructor(name, add, game){
//         super(name, add)
//         this.game = game

//     }
// this.myname
// }

// new Person("Abhinav", "Delhi")

// <Person name="abhinav"/>


// function test(){
//     function test1(){
//         console.log(this);
//     }
// }
// test();

// const test = () =>{
//     function test1(){
//         console.log(this);
//     }
// }


// test();


// onClick ---> () => {
//     this.printName()
// }


// var employee = {
//     name: '',
//     adress: ''
// }

// delete employee.name

// var emp = Object.create()

// Object.defineProperties(employee, "name", {configurable: false})
// delete employee.name