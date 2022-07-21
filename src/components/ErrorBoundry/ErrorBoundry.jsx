import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

    constructor(props){
        super(props)
        this.state = {
            errorOccured: false,
            errorMessage: ''
        }
    }

    static getDerivedStateFromError(error){
        console.log('running');
        return {
            errorOccured: true,
            errorMessage: error.message
        }
    }

    componentDidCatch(error, userInfo){
        // logging the error in the logging services
        console.log(error);
    }

  render() {
      if(this.state.errorOccured){
        return <div>{this.state.errorMessage}</div>
      }
    return this.props.children
  }
}


// fetch()
// .then((data) => {
//     setState(data)
// })
// .catch(() => {
//     setError(true)
// })


// {SetErrortrue ? <ErrroCompopnent/>}