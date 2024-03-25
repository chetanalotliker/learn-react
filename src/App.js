import React, { useState } from 'react';
import './App.css';
import Btn from './Btn';
import Btn2 from './Btn2';
import BtnNumber from './BtnNumber';
import Heading from './Heading';
import InputComponent from './InputComponent';
import ModeToggler from './ModeToggler';
import RegisterForm from './RegisterForm';
import AssetLoad from './AssetLoad';
import Counters from './Counters';

function App() {
  const [word, setWord] = React.useState('topics');

  let [count, setCount] = useState(0);

  function handleClick() {
    setWord('Mock Data')
  }

  function handleClick1() {
    setCount(count++);
  }

  return (
    <>
      <h2>Events</h2>
      <Btn />
      <br /> <br />
      <Btn2 />
      <br />
      <ModeToggler />
      <br />
      <h2>Guess the Number Game</h2>
      <BtnNumber />
      <br />
      <h2>useState Hook</h2>
      <br />
      <InputComponent />
      <br />
      <h2>Form in React js</h2>
      <br />
      <RegisterForm />
      <Heading message={word + ''} />
      <button onClick={handleClick}>Click here</button>
      <br />
      <h2>Image</h2>
      <br />
      <AssetLoad />
      <br />
      <h2>Counter in React</h2>
      <br />
      <Counters count={count} onClick={handleClick1} />
      <Counters count={count} onClick={handleClick1} />
    </>
  );
}

export default App;
