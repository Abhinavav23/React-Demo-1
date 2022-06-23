import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Section from './components/Section';

export function App1() {
  return (
    <section className="App">
      <h1>React</h1>
      {/* <Header></Header> */}
      {/* self closing tag */}
      {/* opening and closing tag */}
      <Section></Section>
      {/* <Section/> */}

      <br/>
      <Cart/>
    </section>
  );
}


{/* <div>
  something
</div>---> paired tag -->opened and closed tag

<br/> --> self closing tag */}