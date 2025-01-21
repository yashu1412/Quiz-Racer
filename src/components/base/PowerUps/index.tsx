import React, { ReactNode } from "react";
import Coin from "../../../assets/coin.png";
import Hint from "../../../assets/hint.png";
import PowerUpImage from "../../../assets/powerUp.png";

interface PowerUpControlsProps {
  score: number;
  children?: ReactNode; 
}

const PowerUpControls: React.FC<PowerUpControlsProps> = ({ score, children }) => {
  return (
    <div className="absolute top-4 right-5 flex flex-col items-center gap-2">
      <button
        className="w-20 h-9 bg-[#88F0C8] rounded-full shadow-md shadow-slate-800 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
      >
        <img src={Coin} alt="Coin" className="w-7 h-7 object-contain animate-spin-y" />
        <span className="text-black text-2xl">{score}</span>
      </button>
      <button
        className="transition-transform duration-300 ease-in-out rounded-full"
        onClick={() => alert("Hint clicked!")}
      >
        <img src={Hint} alt="Hint" className="w-12 h-12 object-contain" />
      </button>
      <button
        className="transition-transform duration-300 ease-in-out rounded-full"
        onClick={() => alert("Power-Up clicked!")}
      >
        <img src={PowerUpImage} alt="Power-Up" className="w-12 h-12 object-contain" />
      </button>
      {children}
    </div>
  );
};

export default PowerUpControls;
