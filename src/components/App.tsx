import Dice from '../assets/images/icon-dice.svg';

const App = () => {
  return (
    <div className="bg-secondary-200 px-6">
      <h1>ADVICE #117</h1>
      <p>
        &ldquo;It is easy to sit up and take notice, what's difficult is getting
        up and taking action.&rdquo;
      </p>
      <button type="button" className="rounded-full bg-primary-200 p-5">
        <img src={Dice} alt="dice" />
      </button>
    </div>
  );
};

export default App;
