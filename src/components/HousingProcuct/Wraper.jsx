import React from 'react'

export const Wraper = (props) => {
    // console.log(props);
    // console.log(props.nums[0]);
    // console.log(props.fun);

    function MyFunction(){
      console.log('myfunction called');
    }

    const printName = (name) =>{
      console.log(`my function called by ${name}`);
    }

    // MyFunction()

  return (
    <>
        <div>Wraper</div>
        <div>userName: {props.userinfo.username}</div>
        <div>Role: {props.userinfo.role}</div>
        {/* will revisit in list rendering */}
        <div>Nums: {props.nums}</div> 
        <button onClick={MyFunction}>click me</button>
        <br/>
        <button onClick={() => printName(props.userinfo.username)}>print my name</button>
    </>
  )
}

function inner(){
  console.log('inner');
}

function outer(){
  inner()
}




