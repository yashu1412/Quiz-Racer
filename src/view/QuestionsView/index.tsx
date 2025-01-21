import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "animate.css";
import checkeredImage from "../../assets/racing.jpg";
import flagIcon from '../../assets/flag.png';
// Import custom components
import AnswerButtons from "../../components/custom/Game/AnswerButton";
import PowerUpControls from "../../components/base/PowerUps/index";
import CarAnimation from "../../components/custom/Game/CarAnimation";
import Question from "../../components/custom/Game/Question";

// Import custom hook for game logic
import { useGameLogic } from "../../containers/QuestionContainer";

const GameView: React.FC = () => {
  const navigate = useNavigate();

  // Custom hook for game logic
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
  } = useGameLogic();

  const currentQuestion = questionsData[currentQuestionIndex] || {
    question: "Loading...",
    answer: false,
  };

  // Navigate to the game over screen if all questions are completed
  useEffect(() => {
    if (currentQuestionIndex >= questionsData.length) {
      navigate("/gameover");
    }
  }, [currentQuestionIndex, questionsData.length, navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-common overflow-hidden ">
            <div className="text-center">
              <img src={flagIcon} alt="Flags" className="mx-auto w-40 " />
            </div>
      {/* Header Section */}
      <div
        className="relative w-full h-[180px] mt-[93px] flex flex-col items-center justify-center top-[-80px]"
        style={{
          backgroundImage: `url(${checkeredImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-[139px]"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z"
            style={{ stroke: "none", fill: "#D4F4FF" }}
          />
        </svg>
        <span className="relative text-white text-3xl font-bold z-10 coiny-regular">
          Race
        </span>
        <svg
          className="absolute bottom-0 left-0 w-[100%] h-[139px] rotate-180"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z"
            style={{ stroke: "none", fill: "#B9E9F5" }}
          />
        </svg>
      </div>

      {/* Question Section */}
      <Question
        showQuestion={showQuestion}
        question={currentQuestion.question}
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
  // // hideAnswerButtons={hideAnswerButtons}  // Pass hideAnswerButtons
  // showNextButton={showNextButton}        // Pass showNextButton
  // onNextQuestion={handleNextQuestion}    // Pass onNextQuestion
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
