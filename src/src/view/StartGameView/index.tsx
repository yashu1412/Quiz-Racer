import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg-main.png';
import checkeredImage from '../../assets/Racing-bg.png';

const PageOne: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='w-[107%]' >
        <img src={checkeredImage} alt="Racing background" loading="lazy" className='translate-y-[-69px] ' />
      </div>
      <div className='font-akshar text-[21px] font-semibold space-y-1 translate-y-[-160px] flex flex-col items-center justify-center'>
          <p className="">Race to the Finish:</p>
          <p className="">The Ultimate Trivia Challenge</p>
        </div>
        {/* intro-text */}
        <div className="text-lg font-akshar font-semibold mx-auto p-2 flex flex-col items-center justify-center space-y-[-15px] translate-y-[-110px]">
          <p>Answer correctly, and the Green Car </p>
          <p className="text-lg font-akshar mx-auto p-4"> speeds ahead to victory! A wrong answer?</p>
          <p>The Red Car takes the lead.</p>
        </div>
        <button
  className="text-black font-akshar text-3xl font-bold px-12 py-3 rounded-lg shadow-lg shadow-zinc-900 hover:scale-105 "
  style={{
    background: "linear-gradient(0deg, #0C1E07 0%, #CEC6C6 68%, #0A1208 96.5%)",
  }}
  onClick={() => navigate('/game')}
>
  Start
</button>

      </div>
  );
};

export default PageOne;
