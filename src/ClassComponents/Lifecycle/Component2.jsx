import React, { Component } from 'react'

export default class Component2 extends Component {
    constructor(props){
        super(props)
        console.log('rendering constructor 2'); //4
    }

    static getDerivedStateFromProps(){
        console.log('rendering getDerivedStateFromProps 2'); //5
        return null
    }

    componentDidMount(){
        console.log('rendering componentDidMount 2'); //7
    }

    componentDidUpdate(){
        console.log('rendering componentDidUpdate 2');
    }

    render() {
        console.log('rendering render 2'); //6
        return (
        <div>Component2</div>
        )
    }
}
