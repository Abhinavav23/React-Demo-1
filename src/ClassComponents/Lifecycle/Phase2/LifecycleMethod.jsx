import React, { Component } from 'react'

export default class LifecycleMethod extends Component {
    constructor(props){
        super(props)
        console.log('rendering constructor');
        this.state = {
            count: 0
        }
    }

    // 1.
    //  when state is dependent upon the props then we will use this
    static getDerivedStateFromProps(props, state){
        console.log('rendering getDerivedStateFromProps');
        return null
    }

    // salary = 1000
    // 2
    // used for performanace optimization
    // if return true it will go ahead and run further methods 
    // but if we return false it wont go ahead
    
    shouldComponentUpdate( props, state ){
        console.log('rendering shouldComponentUpdate');
        // if(this.props.name === 'Sonu'){
        //     return false
        // } else {
        //     return true
        // }
        return true
    }
    


    // 4.
    // before sending the chages found out by comparing the virtua doms to the real dom
    // capture a data or information
    getSnapshotBeforeUpdate(){
        console.log('rendering getSnapshotBeforeUpdate');
    }

    // 5
    // using side effects ---> fetch, setTimeout, setInterval ....
    componentDidUpdate(){
        console.log('rendering componentDidUpdate');
    }

    componentDidMount(){
        console.log('rendering componentDidMount');
    }

    increment = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    // 3.
    render() {
        console.log('rendering render');
        return (
        <>
        <h2>LifecycleMethod</h2>
        <div>count: {this.state.count}</div>
        <div>Name: {this.props.name}</div>
        <button onClick={this.increment}>+</button>
        </>
        )
    }

}


// updation phase ----> component gets updated/rerendered
// ----- Reasons ----- //
// 1. updating the states ---> setStates
// 2. changing of props/ updating of props
// 3. when parent component rerenders

// Methods
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate


// constructor(){
//     this.state = {
//         time: 0
//     }
// }

// componentDidMount(){
//     this.setState({
//         count: new Date()
//     })
// }

// componentDidUpdate(){
//     setInterval
// }