import React from 'react';
import './App.css';
import Btn from './Btn';
import Btn2 from './Btn2';
import BtnNumber from './BtnNumber';
import Heading from './Heading';
import InputComponent from './InputComponent';
import ModeToggler from './ModeToggler';
import RegisterForm from './RegisterForm';

function App() {
  const [word, setWord] = React.useState('topics')
  function handleClick() {
    setWord('Mock Data')
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
    </>
  );
}

export default App;
