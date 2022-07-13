import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            productName: 'Mobile',
            price: 2000,
            rating: 4
        }
    }

    // in case of functional comp
    // const[productInfo, setProductInfo] = useState({
    //     productName: 'Mobile',
    //     price: 2000
    // })

    updatePrice = () => {
        // console.log(this.state);
        // this.state = {
        //     productName: 'Mobile',
        //     price: 4000
        // }
        // console.log(this.state);

        // console.log(this.state);

        // async call ----> WeB Apis

        // this.setState({
        //     ...this.state,
        //     price: this.state.price+1
        // }, () => {
        //     console.log('after updating the state');
        //     console.log(this.state);
        // })


        this.setState((value) => {
            return {
                ...value,
                price: value.price+1,
                rating: value.rating+1
            }
        }) 
        // {
        //     productName: 'Mobile',
        //     price: 2001,
        //     rating: 5
        // }

        this.setState((prevstate) => {
            return {
                ...prevstate,
                price: prevstate.price+1,
                rating: prevstate.rating+5
            }
        })
        // {
            //     productName: 'Mobile',
            //     price: 2002,
            //     rating: 10
            // }
        this.setState((anything) => {
            return {
                ...anything,
                price: anything.price+1,
                rating: anything.rating-2
            }
        })
            // {
            //     productName: 'Mobile',
            //     price: 2003,
            //     rating: 8
            // }



        // this.setState({
        //     ...this.state,
        //     price: this.state.price+10
        // })
        // this.setState({
        //     ...this.state,
        //     price: this.state.price+10
        // })
        // this.setState({
        //     ...this.state,
        //     price: this.state.price+2
        // })



        // count = 0
        // this.setState((prevcount) => prevcount+1) //1
        // this.setState((prevcount) => prevcount+1) //2
        // this.setState((prevcount) => prevcount+1) //3
        // this.setState((prevcount) => prevcount+1) //4


        // this.setState(count+1)
        // this.setState(count+1)
        // this.setState(count+1)
        // this.setState(count+2)

        setTimeout(() => {

        }, 1000)

        // same value
        // console.log(this.state);

        // setProductInfo({
        //     productName: 'Mobile',
        //     price: 4000
        // })
    }

    updatePrice1 = (val) => {
        this.setState({
            ...this.state,
            price: this.state.price+val
        })
    }

    render() {
        console.log('rendering');
        return (
        <>
            <h2>Product page</h2>
            <div>Title: {this.state.productName}</div>
            <div>Price: {this.state.price}</div>
            <div>Rating: {this.state.rating}</div>
            <button onClick={() =>this.updatePrice1(1)}>update Price by 1</button>
            <button onClick={() =>this.updatePrice1(2)}>update Price by 2</button>
        </>
        )
    }
}


// Web APis
// 1. updated state value 
// 2. callback function 
