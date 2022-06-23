import './App.css';

// import Abhinav from './components/Heading';

import * as Heading from './components/Heading';

import { Heading1, Heading2 } from './components/Heading';

export function App1() {
  return (
    <section className="App">
      {/* <Abhinav/> */}
      <Heading.Heading1/>
      <Heading.Heading2/>

      <Heading1/>
      <Heading2/>
      {/* <Heading/> */}
     
    </section>
  );
}


{/* <div>
  something
</div>---> paired tag -->opened and closed tag

<br/> --> self closing tag */}