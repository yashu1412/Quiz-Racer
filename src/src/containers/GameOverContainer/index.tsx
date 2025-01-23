import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GameOverView from "../../view/GameOverView";

const GameOverContainer: React.FC = () => {
  const [isScoreVisible, setIsScoreVisible] = useState(false);


  const finalScore = useSelector((state: any) => state.game.score);
  const correctAnswers = useSelector((state: any) => state.game.correctAnswers);
  const wrongAnswers = useSelector((state: any) => state.game.wrongAnswers);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScoreVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    console.log("Game Over! Total Score:", finalScore);
    console.log("Correct Answers:", correctAnswers);
    console.log("Wrong Answers:", wrongAnswers);
  }, [finalScore, correctAnswers, wrongAnswers]);

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
