import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCorrectAnswers,
  incrementWrongAnswers,
} from "../../../slices/GameSlice";
import { RootState } from "../../../Store";

interface Question {
  question: string;
  answer: boolean;
}

interface AnswerButtonsProps {
  currentQuestion: Question;
  handleAnswer: (isCorrect: boolean) => void;
  hideAnswerButtons: boolean; // Control visibility
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({
  currentQuestion,
  handleAnswer,
  hideAnswerButtons,
}) => {
  const dispatch = useDispatch();
  const { correctAnswers, wrongAnswers } = useSelector(
    (state: RootState) => state.game
  );

  const handleButtonClick = (selectedValue: boolean) => {
    const isCorrect = selectedValue === currentQuestion.answer;

    if (isCorrect) {
      dispatch(incrementCorrectAnswers());
    } else {
      dispatch(incrementWrongAnswers());
    }

    handleAnswer(isCorrect);
  };

  if (hideAnswerButtons) return null;

  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={() => handleButtonClick(true)}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        True
      </button>
      <button
        onClick={() => handleButtonClick(false)}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700"
      >
        False
      </button>
    </div>
  );
};

export default AnswerButtons;
