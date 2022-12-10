import Dice from '../assets/images/icon-dice.svg';
import { MobileDivider, DesktopDivider } from '../assets/index';

const App = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-8">
      <div className="relative flex flex-col items-center justify-center gap-6 rounded-card bg-secondary-200 py-10 pt-6 text-center">
        <h1>ADVICE #117</h1>
        <p>
          &ldquo;It is easy to sit up and take notice, what's difficult is
          getting up and taking action.&rdquo;
        </p>
        <img src={MobileDivider} alt="divider" className="pb-8" />
        <button type="button" className="btn">
          <img src={Dice} alt="dice" />
        </button>
      </div>
    </div>
  );
};

export default App;
