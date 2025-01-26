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

  const finalScore = useSelector((state: RootState) => {
    console.log('Final Score from Redux:', state.game?.score ?? 'undefined');
    return state.game?.score ?? 0;
  });

  const correctAnswers = useSelector((state: RootState) => state.game.correctAnswers);
  const wrongAnswers = useSelector((state: RootState) => state.game.wrongAnswers);

  useEffect(() => {
    console.log('=== FINAL SCORE DETAILS ===');
    console.log('Score:', finalScore);
    console.log('isScoreVisible:', isScoreVisible);
  }, [finalScore, isScoreVisible]);

  useEffect(() => {
    console.log('Final Game Stats:', {
      finalScore,
      correctAnswers,
      wrongAnswers,
      isScoreVisible
    });

    const timer = setTimeout(() => {
      setIsScoreVisible(true);
      console.log('Score visibility changed to:', true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [finalScore, correctAnswers, wrongAnswers]);

  // Add another useEffect to log state changes
  useEffect(() => {
    console.log('Redux State Updated:', {
      score: finalScore,
      correct: correctAnswers,
      wrong: wrongAnswers
    });
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
