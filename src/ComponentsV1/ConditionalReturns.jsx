import React from 'react'

export const ConditionalReturns = (props) => {
  if(props.theme){
    return (
      <>
        <h2>Flipkart</h2>
        <div>Traditional section</div>
        <div>Type 1 Component</div>
        {/* <Older/> */}
      </>
    )
  } else{
    return (
      <>
      <h2>Flipkart</h2>
      <div>Grocery section</div>
      <div>Type 2 Component</div>
      {/* <Newer/> */}
    </>
    )
  }
}


// export default ConditionalReturns