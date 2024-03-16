import './App.css';
import Btn from './Btn';
import Btn2 from './Btn2';
import BtnNumber from './BtnNumber';
import ModeToggler from './ModeToggler';

function App() {
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
    </>
  );
}

export default App;
