import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "animate.css";
import checkeredImage from "../../assets/Racing-bg.png";
// Import custom components
import AnswerButtons from "../../components/custom/Game/AnswerButton";
import PowerUpControls from "../../components/base/PowerUps/index";
import CarAnimation from "../../components/custom/Game/CarAnimation";
import Question from "../../components/custom/Game/Question";

// Import custom hook for game logic
import { useGameLogic } from "../../containers/QuestionContainer";

const GameView: React.FC = () => {
  const navigate = useNavigate();

  const {
    car1Position,
    car2Position,
    showQuestion,
    message,
    score,
    currentQuestionIndex,
    questionsData,
    hideAnswerButtons,
    showNextButton,
    handleAnswer,
    handleNextQuestion,
    feedbackText
  } = useGameLogic();

  const currentQuestion = questionsData[currentQuestionIndex] || {
    question: "Loading...",
    answer: false,
  };


  useEffect(() => {
    if (currentQuestionIndex >= questionsData.length) {
      navigate("/gameover");
    }
  }, [currentQuestionIndex, questionsData.length, navigate]);

  return (
      <div className="relative flex flex-col items-center justify-center h-screen bg-common overflow-hidden ">

        <div className='w-[101%]' >
          <img src={checkeredImage} alt="Racing background" loading="lazy" className='translate-y-[30px] ' />
        </div>

      {/* Question Section */}
      <Question
        showQuestion={showQuestion}
        question={currentQuestion.question}
        feedbackText={feedbackText}
      />

      {/* Answer Buttons */}
      <AnswerButtons
            currentQuestion={questionsData[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            hideAnswerButtons={hideAnswerButtons}
          />

      {/* Power-Up Controls */}
      <PowerUpControls score={score} />

      {/* Car Animation Section */}
      <CarAnimation
  car1Position={car1Position}
  car2Position={car2Position}
  isAnswerCorrect={message.includes("Correct")}

/>


      {/* Message Section */}
      {message && (
        <p
          className="absolute top-4 text-2xl font-semibold text-white transition-opacity duration-500 ease-in-out"
          aria-live="polite"
        >
          {message}
        </p>
      )}
            {showNextButton && (
        <button
          onClick={handleNextQuestion}
          className="bg-[#E7EF05] text-white text-xl px-6 py-2 rounded-lg -translate-y-48 shadow-md shadow-gray-600 mt-4 Akshar-medium"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default GameView;
