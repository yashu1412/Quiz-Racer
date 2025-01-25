import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useGameLogic = () => {
  const [car1Position, setCar1Position] = useState("translateX(-100%)");
  const [car2Position, setCar2Position] = useState("translateX(-100%)");
  const [message, setMessage] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [hideAnswerButtons, setHideAnswerButtons] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [isAnswerWrong, setIsAnswerWrong] = useState<boolean | null>(null);
  const [feedbackText, setFeedbackText] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);

  const navigate = useNavigate();

  const questionsData = [
    { question: "Mount Fuji is the highest mountain.", answer: false },
    { question: "China is the most populated country.", answer: true },
    { question: "The Amazon is the longest river in the world.", answer: false },
    { question: "Africa is the second largest continent.", answer: true },
    { question: "Venus is the closest planet to the Sun.", answer: false },
    { question: "Australia is both a country and a continent.", answer: true },
  ];

  useEffect(() => {
    resetGame();

    const carTimer = setTimeout(() => {
      setCar1Position("translateX(50%)");
      setCar2Position("translateX(50%)");
    }, 2000);

    const questionTimer = setTimeout(() => {
      setShowQuestion(true);
    }, 3500);

    return () => {
      clearTimeout(carTimer);
      clearTimeout(questionTimer);
    };
  }, [currentQuestionIndex]);

  const resetGame = () => {
    setCar1Position("translateX(-100%)");
    setCar2Position("translateX(-100%)");
    setMessage("");
    setShowQuestion(false);
    setHideAnswerButtons(false);
    setShowNextButton(false);
    setIsAnswerCorrect(null);
    setFeedbackText(null);
    setShowBubble(false);
  };

  const handleAnswer = (isCorrect: boolean) => {
    setHideAnswerButtons(true);
    setIsAnswerCorrect(isCorrect);
    setFeedbackText(isCorrect ? "Correct" : "Wrong");
    setShowBubble(true);
  
    if (isCorrect) {
      // Correct answer logic
      setScore((prev) => prev + 50);
      setCorrectAnswers((prev) => prev + 1);
      setCar1Position("translateX(450%)");
    } else {
      // Wrong answer logic
      setScore((prev) => Math.max(0, prev - 10));
      setWrongAnswers((prev) => prev + 1);
      setCar2Position("translateX(450%)");
    }
  
    // Bubble and next button logic
    setTimeout(() => {
      setShowBubble(false); 
      setShowNextButton(true); 
    }, 3000); 
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 >= questionsData.length) {
      navigate("/gameover", {
        state: { 
          score, 
          correctAnswers, 
          wrongAnswers,
          isScoreVisible: true 
        }
      });
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetGame();
    }
  };

  return {
    car1Position,
    car2Position,
    isAnswerCorrect,
    isAnswerWrong, 
    showBubble,
    showQuestion,
    feedbackText,
    score,
    message,
    currentQuestionIndex,
    questionsData,
    hideAnswerButtons,
    showNextButton,
    handleAnswer,
    handleNextQuestion,
  };
  
};
