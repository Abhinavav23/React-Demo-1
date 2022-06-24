import React, {Fragment} from 'react';
export default function Product(){
    return(
    //     <React.Fragment>
    //         <h3>product 1</h3>
    //         <p>product description</p>
    //    </React.Fragment>
    //    <Fragment>
    //         <h3>product 1</h3>
    //         <p>product description</p>
    //     </Fragment>
        <>
            <h3 id="header" className='Product-Header'>product 1</h3>
            <p>product description</p>

            <div id='1'>
                1 2 3 <span>234</span>
                <div id='2'>
                    <div id='3'>3</div>
                </div>
            </div>
        </>
    )
}

// React.createElement('div', {id: '1'}, React.createElement('div', {id: '2'}, React.createElement('div', {id: '3'}, '3')))

// class Person{

// }

// Browser understnads three things
// 1. HTML
// 2. CSS
// 3. JS


// React.createElement('h3', {id: 'header', className: 'Product-Header'}, 'product 1')