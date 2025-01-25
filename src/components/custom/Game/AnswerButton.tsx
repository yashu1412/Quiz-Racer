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
  hideAnswerButtons: boolean; 
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
  console.log("Correct Answers:", correctAnswers);
console.log("Wrong Answers:", wrongAnswers);


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
        className="bg-[#34841E] text-2xl font-akshar font-medium text-white px-9 py-1 rounded-full shadow-lg shadow-gray-800 animate-slide-in-left"
      >
        True
      </button>
      <button
        onClick={() => handleButtonClick(false)}
        className="bg-[#FF0900] text-2xl font-akshar font-medium text-white px-9 py-1 rounded-full shadow-lg shadow-gray-800 animate-slide-in-right"
      >
        False
      </button>
    </div>
  );
};

export default AnswerButtons;
