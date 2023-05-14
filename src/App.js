import logo from './logo.svg';
import './App.css';
import Class from './Class';
import Funс from './Func';
import React, { useState } from 'react';
import StateClass from './StateClass';
import StateFunc from './StateFunc';

function Link() {

  let [stat, setStat] = useState(0)
  let tap = () => { setStat(() => stat + 1) }
  return (
    <>
      <p>Number of keystrokes {stat}</p>
      <button onClick={() => tap()}> Click me </button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>

  )
}

class LogoText extends React.Component {
  render() {
    const text = <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>

    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        {text}
      </div>
    )
  }
}
const obj = {
  name: "Miks",
  age: 28
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoText></LogoText>
        <Link></Link>
      </header>
      <div className='Componenta'>
        <Class name="Miks" visible={true}></Class>
        <Class last="Memak" visible></Class>
        <Class age={obj} visible={false}></Class>
        <Class age={28} ></Class>
        <Funс visible={true}></Funс>
        <Funс visible></Funс>
        <Funс visible={false}></Funс>
        <Funс></Funс>
        <StateClass></StateClass>
        <StateFunc> </StateFunc>

      </div>
    </div>
  );
}

export default App;
