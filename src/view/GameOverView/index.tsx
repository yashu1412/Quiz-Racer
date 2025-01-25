import React from "react";
import { useLocation } from "react-router-dom";
import GameOverImage from "../../assets/GameOver.png";
import PowerUp from "../../components/base/PowerUps";

interface GameOverViewProps {
  isScoreVisible: boolean;
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

const GameOverView: React.FC<GameOverViewProps> = ({ isScoreVisible, score, correctAnswers, wrongAnswers }) => {
  const location = useLocation();
  const { score: locationScore = 0, correctAnswers: locationCorrectAnswers = 0, wrongAnswers: locationWrongAnswers = 0 } = location.state || {};

  return (
    <div>
     <PowerUp score={score} />
      <div className="flex flex-col items-center justify-center flex-grow h-screen bg-common">
        {/* Game Over Image */}
        <img
          src={GameOverImage}
          alt="Game Over"
          className="w-3/4 max-w-sm animate-bounce"
        />

        {/* Score Visibility Section */}
        <div className="flex justify-center items-center space-x-6 w-full py-4 mt-6">
          {/* Correct Answers Section */}
          <div className="flex flex-col items-center px-6 pt-6 bg-[#34841E] text-white font-bold w-1/3 rounded-md">
            <p className="text-2xl font-normal bg-[#303050] p-4 rounded-t-md">Right</p>
            <div className="py-10">
              <span className="text-6xl font-normal">{correctAnswers}</span>
            </div>
          </div>

          {/* Wrong Answers Section */}
          <div className="flex flex-col items-center px-6 pt-6 bg-[#FF0900] text-white font-bold w-1/3 rounded-md">
            <p className="text-2xl font-normal bg-[#303050] p-4 rounded-t-md">Wrong</p>
            <div className="py-10">
              <span className="text-6xl font-normal">{wrongAnswers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverView;
