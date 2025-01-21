import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg-main.png';
import flagIcon from '../../assets/flag.png';
import checkeredImage from '../../assets/racing.jpg';

const PageOne: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center">
        <img src={flagIcon} alt="Flags" className="mx-auto w-40 mb-4 translate-y-[-69px]" />
      </div>
{/* Race Banner */}
<div
  className="relative w-full h-[180px] mt-[93px] flex flex-col items-center justify-center top-[-180px]"
  style={{
    backgroundImage: `url(${checkeredImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Wave Shape (Top) */}
  <svg
    className="absolute top-0 left-0 w-full h-[139px]"
    viewBox="0 0 500 150"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z"
      style={{ stroke: 'none', fill: ' #D4F4FF' }}
    />
  </svg>

  {/* Banner Text */}
  <span className="relative text-white text-3xl font-bold z-10 coiny-regular">Quize Racer</span>

{/* Wave Shape (Bottom) */}
<svg
  className="absolute bottom-0 left-0 w-[100%] h-[139px] rotate-180"
  viewBox="0 0 500 150"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z"
    style={{ stroke: "none", fill: "#D4F4FF" }}
  />
</svg>

</div>
        <div className='font-akshar text-[21px] font-semibold space-y-1 translate-y-[-160px] flex flex-col items-center justify-center'>
          <p className="">Race to the Finish:</p>
          <p className="">The Ultimate Trivia Challenge</p>
        </div>
        {/* intro-text */}
        <div className="text-lg font-akshar font-semibold mx-auto p-2 flex flex-col items-center justify-center space-y-[-15px] translate-y-[-110px]">
          <p >Answer correctly, and the Green Car </p>
          <p className="text-lg font-akshar mx-auto p-4"> speeds ahead to victory! A wrong answer?</p>
          <p>The Red Car takes the lead.</p>
        </div>
        <button
  className="text-black text-3xl font-bold px-12 py-3 rounded-lg shadow-lg shadow-zinc-900 hover:scale-105"
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