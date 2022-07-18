import React, { Component } from 'react'
import Component2 from './Component2';

export default class Component1 extends Component {
    constructor(props){
        super(props)
        console.log('rendering constructor 1'); //1
    }
    
    static getDerivedStateFromProps(){
        console.log('rendering getDerivedStateFromProps 1'); //2
        return null
    }

    componentDidMount(){
        console.log('rendering componentDidMount 1'); //8
        setTimeout(() => {
            this.setState({
                count: 1
            })
        }, 5000)
    }


    // 
    componentWillUnmount(){
        console.log('removing component');
    }

    componentDidUpdate(){
        console.log('rendering componentDidUpdate 1');
    }

    // 
    render() {
        console.log('rendering render 1'); //3
        return (
        <>
        <div>Component1 </div>
        {/* <Component2/> */}
        </>
        )
    }
}

// unmounting phase ---> the compoents gets removed from the DOM
// 1. componentWillUnmount