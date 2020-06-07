import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from 'office-ui-fabric-react';

function App() {

  const refContainer = useRef(null);
  const [el, setEl] = useState(null);

  useEffect(()=> {
    setTimeout(()=>{
      setEl(refContainer.current.contentWindow.document.body.querySelector("#hello"));
    },1000)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrimaryButton text="Primary" />
        <iframe src={process.env.PUBLIC_URL + '/iframe_window.html'} title="test" ref={refContainer}></iframe>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>{el?.innerHTML}</div>
      {el ? ReactDOM.createPortal(<PrimaryButton text="I'm Fluent" />,el) : null}
    </div>
  );
}

export default App;
