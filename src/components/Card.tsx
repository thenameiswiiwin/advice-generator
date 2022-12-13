import { useEffect, useState } from 'react';
import Dice from '../assets/images/icon-dice.svg';
import { MobileDivider } from '../assets/index';

type AdviceProps = {
  id: number;
  advice: string;
};

const Card = () => {
  const [advice, setAdvice] = useState({} as AdviceProps);

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice', {
      method: 'GET',
      cache: 'no-cache',
    });
    const data = await response.json();
    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="relative flex min-h-[18rem] max-w-lg flex-col items-center justify-center gap-6 rounded-card bg-secondary-200 py-10 px-6 pt-6 text-center lg:px-12">
      <h1>ADVICE #{advice.id} </h1>
      <p>{advice.advice}</p>
      <img src={MobileDivider} alt="divider" className="pb-8" />
      <button type="button" className="btn" onClick={fetchAdvice}>
        <img src={Dice} alt="dice" />
      </button>
    </div>
  );
};

export default Card;
