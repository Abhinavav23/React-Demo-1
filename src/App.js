import './App.css';
import Header from './components/HousingProcuct/Header/Header';
import Product from './components/HousingProcuct/Product';
import Title from './components/HousingProcuct/Title';

// import Abhinav from './components/Heading';

// import * as Heading from './components/Heading';

// import { Heading1, Heading2 } from './components/Heading';

export function App1() {
  let userInfo = {
    username: 'Abhinav', 
    role: 'Instaructor'
  }

  let address = {
    city: 'Delhi'
  }

  const caller = () => 10
  return (
    // <section className="App">
    //   {/* <Abhinav/> */}
    //   {/* <Heading.Heading1/>
    //   <Heading.Heading2/>
    //   <Heading1/>
    //   <Heading2/> */}
    //   {/* <Heading/> */}
    // </section>
    <>
      <Header/>
      <Title/>

      <Product name="Queen Panel Bed" type="HouseHold" rating={4} price={2500} image="https://image.js" available {...userInfo} {...address}/>
      <br/>
      <Product name="Dresser" type="FURNITURE" rating="3" price="3200" image="./prodcut1.jpg"/>
      <br/>
      <Product name="Queen Panel Bed" type="HouseHold" rating="4" price="2500" image="##"/>
    </>
  );
}
<div id="2" class="test"></div>

{/* <div>
  something
</div>---> paired tag -->opened and closed tag

<br/> --> self closing tag */}

// lifecycle of a component

// function multiplier(a,b){
//   return a*b
// }

// multiplier(2,3)
// multiplier();

// for boolean value 2 ways
// 1. available = {true} 
// 2. available 

let obj1 = {
  name: 'abhinav'
}

let obj2 = {
  name: 'abhinav'
}


let obj = {
  name: 'abhinav',
  add: 'dfvdfv',
  age: 324234,
  name:'Ram'
}
