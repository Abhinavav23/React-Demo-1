import { Component } from "react";

export default class FirstClassComponent extends Component{
    render(){
        return <h2>My first class component</h2>
    }
}

// Lifecycle of a component
// three phases in lifecycle of a component
// 1. creation of a component --> mounting phase/creation phase
// 2. Updation of component ---> updating phase --> update, add, remove something
// 3. removal of a component ---> umnounting phase

// export default FirstClassComponent


// class Calculator{
//     multiplication(){
//         return 10
//     }
// }

// function multiplication(){
//     return 100
// }