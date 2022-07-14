import React, { Component } from 'react'

export default class Lifecycle extends Component {
    
    // 2
    // when state is dependent upon the props then we will use this
    // any [side-effect] is not allowed
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps getting called');
        return null
    }

    // 1
    // runs when copmpoennt gets created
    // initialize the state
    // using super(props) getting access to props passed
    // binding of methods or handlers
    // any [side-effect] is not allowed

    // this.props.name --->Manish
    // this.state.name --->abhinav some title
    constructor(props){
        super(props)
        console.log('constructor getting called');
        this.state={
            name: this.props.name+' some title'
        }
    }

    updateNAme = () => {

    }

    anyother = () => {

    }

    // show content in the ui
    // any [side-effect] is not allowed
    render() {
        console.log('render getting called' );
        return (
            <div>Lifecycle</div>
        )
    }

    // 4
    // all side efects are allowed
    componentDidMount(){
        console.log('componentDidMount getting called');
    }

    // 3
   
}


// Creation / phase one lifecycle methods ---
// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount


