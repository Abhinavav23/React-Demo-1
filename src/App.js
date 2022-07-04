import './App.css';
import Header from './components/HousingProcuct/Header/Header';
import Product from './components/HousingProcuct/Product';
import Title from './components/HousingProcuct/Title';
import { Wraper } from './components/HousingProcuct/Wraper';
import { MainArea, Wrapper1 } from './components/HousingProcuct/MainArea';
import ChildrenProps from './components/HousingProcuct/ChildrenProps';
import { Person } from './components/Person/Person';
import { StateExample } from './components/States/StateExample';
import { StateExampleRefType } from './components/States/StateExampleRefType';
import { ChildToParent } from './components/ChildToParent';
import { Counter } from './components/Counter';
import { Parent } from './components/LiftingTheStates/Parent/Parent';
import { ParentAgain } from './components/LiftingTheStates/Parent2/ParentAgain';
import { ProductList } from './components/List/ProductList';


// import Abhinav from './components/Heading';

// import * as Heading from './components/Heading';

// import { Heading1, Heading2 } from './components/Heading';

export default function App1() {
  let userInfo = {
    username: 'Abhinav', 
    role: 'Instaructor'
  }

  let address = {
    city: 'Delhi'
  }

  const caller = () => {
    console.log('fun called');
  }

  const print = (userInfo) => {
    console.log(`My name is ${userInfo.name}, and address is ${userInfo.address}, and role is ${userInfo.role}`);
  }

  let name="Abhinav"

  const arr = [25,56]
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

      {/* <Product name="Queen Panel Bed" type="HouseHold" rating={4} price={2500} image="https://image.js" available/>
      <br/>
      <Product name="Dresser" type="FURNITURE" rating="3" price="3200" image="./prodcut1.jpg"/>
      <br/>
      <Product name="Queen Panel Bed" type="HouseHold" rating="4" price="2500" image="##"/> */}

    {/* <Wraper userinfo={userInfo} nums={arr} fun={caller}/> */}
      <br/>
    {/* <Wraper obj={{username: "sonu", role: "learner"}} nums={[1,2,3,45]} fun={()=>console.log('pasing fun')}/> */}

    {/* <MainArea name='Something' {...userInfo}/> */}

      {/* <ChildrenProps name="Sahbaz">
        <div>
        <p>This is a pargraph 1</p>
        </div>

        <div>
        <p>This is a pargraph 2</p>
        </div>

        <p>test</p>

      </ChildrenProps>

      <ChildrenProps name="abhinav">
        <p>This is a pargraph 3</p>
      </ChildrenProps>

      <ChildrenProps name="abhinav">
        <MainArea username="user" name="anything"/>
      </ChildrenProps> */}

      {/* <Person name="Abhinav" add="Delhi" gen="Male"/>
      <br/>
      <Person name="Sonu" add="Gaya" gen="Male"/> */}

      {/* <StateExample/> */}
      <br/>
      {/* <StateExample/> */}
      {/* <StateExample/>
      <StateExample/>
      <StateExample/> */}

      {/* <StateExampleRefType/> */}

      {/* <ChildToParent name="Abhinav" print={print}/> */}

      {/* <Counter/> */}
      {/* <Parent name={name}/>
      <ParentAgain name={name}/> */}

      <ProductList/>

    </>
  );
}


















{/* <div id="2" class="test"></div> */}

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

// let obj1 = {
//   name: 'abhinav'
// }

// let obj2 = {
//   name: 'abhinav'
// }


// let obj = {
//   name: 'abhinav',
//   add: 'dfvdfv',
//   age: 324234,
//   name:'Ram'
// }
// let arr= [1,4,5,7]

// console.log(...arr);̀



// function calculator(a,b){

// }

// calculator(200,6565)



