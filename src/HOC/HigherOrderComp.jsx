import { useState } from "react"

const HigherOrderComp = (Comp) => {

    let EnhancedComp = () => {
        const [count, setCount] = useState(0);
        const incrementCount = (number=1) => {
            // setCount(count+number)
            setCount(count+number)
        }
        const decrementCount = (number=1) => {
            setCount(count-number)
        }
        return (<Comp hocCounter={count} increment={incrementCount} decrement={decrementCount}/>)
    }

    return EnhancedComp
}

export default HigherOrderComp;

// if(number){
//     number = 5
// }else{
//     number = 1
// }


function high(){}