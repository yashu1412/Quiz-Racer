import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GameOverView from "../../view/GameOverView";

interface RootState {
  game: {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
  }
}

const GameOverContainer: React.FC = () => {
  const [isScoreVisible, setIsScoreVisible] = useState(false);

  const finalScore = useSelector((state: RootState) => state.game.score);
  const correctAnswers = useSelector((state: RootState) => state.game.correctAnswers);
  const wrongAnswers = useSelector((state: RootState) => state.game.wrongAnswers);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScoreVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GameOverView
      isScoreVisible={isScoreVisible}
      score={finalScore}
      correctAnswers={correctAnswers}
      wrongAnswers={wrongAnswers}
    />
  );
};

export default GameOverContainer;
