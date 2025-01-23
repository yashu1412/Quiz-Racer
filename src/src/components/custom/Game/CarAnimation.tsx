import React from "react";
import carImage1 from "../../../assets/green-car.png";
import carImage2 from "../../../assets/red-car.png";
import correctBubble from "../../../assets/correct.png";
import ohNoBubble from "../../../assets/oh-no.png";
import wrongBubble from "../../../assets/wrong.png";
import finishLineImage from "../../../assets/finish-line.png";

interface CarAnimationProps {
  car1Position: string; 
  car2Position: string; 
  isAnswerCorrect: boolean | null; 
}

const CarAnimation: React.FC<CarAnimationProps> = ({
  car1Position,
  car2Position,
  isAnswerCorrect,
}) => {
  return (
    <div className="relative w-full h-40 translate-y-1 left-[-25px] flex items-center justify-between mt-10 gap-2 space-y-44">
      {/* Green Car */}
      <div
        className="absolute transition-transform duration-1000 ease-in-out"
        style={{
          transform: car1Position, // Dynamic movement
        }}
      >
        {isAnswerCorrect === true && (
          <div
            className="absolute -top-10 animate-bubble" // Add animation class
          >
            <img src={correctBubble} alt="Correct Answer Bubble" />
          </div>
        )}
        {isAnswerCorrect === false && (
          <div
            className="absolute -top-10 animate-bubble" // Add animation class
          >
            <img src={ohNoBubble} alt="Oh-No Bubble" />
          </div>
        )}
        <img src={carImage1} alt="Green Car" className="w-20 h-12" />
      </div>

      {/* Red Car */}
      <div
        className="absolute transition-transform duration-1000 ease-in-out"
        style={{
          transform: car2Position, // Dynamic movement
        }}
      >
        {isAnswerCorrect === false && (
          <div
            className="absolute -top-10 animate-bubble" // Add animation class
          >
            <img src={wrongBubble} alt="Wrong Answer Bubble" />
          </div>
        )}
        <img src={carImage2} alt="Red Car" className="w-20 h-12 scale-x-[-1]" />
      </div>

      {/* Finishing Line */}
      <div className="absolute right-[10px] top-[-220px]">
        <img src={finishLineImage} alt="Finishing Line" className="w-20 h-60" />
      </div>
    </div>
  );
};

export default CarAnimation;
