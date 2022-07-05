import React from 'react'

export const ConditionalReturns = (props) => {
  let themeName;
  if(props.theme){
    themeName= 'theme1'
  } else{
    themeName= 'theme2'
  }
  console.log(themeName);
  if(props.theme){
    return (
      <>
        <h2 className={themeName}>Flipkart</h2>
        <div className='traditional'>Traditional section</div>
        <div>Type 1 Component</div>
        {/* <Older/> */}
      </>
    )
  } else{
    return (
      <>
      <h2 className={themeName}>Flipkart</h2>
      <div className=''>Grocery section</div>
      <div>Type 2 Component</div>
      {/* <Newer/> */}
    </>
    )
  }
}


// export default ConditionalReturns
// 'class1 '+name+' class2'


{/* <div class="theme1"></div> */}