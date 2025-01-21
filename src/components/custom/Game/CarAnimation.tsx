import React from "react";
import carImage1 from "../../../assets/green-car.png";
import carImage2 from "../../../assets/red-car.png";
import bubbleImage from "../../../assets/bubble.png";

interface CarAnimationProps {
  car1Position: string; // Dynamic transform for green car
  car2Position: string; // Dynamic transform for red car
  isAnswerCorrect: boolean | null; // Determines if the answer is correct or wrong
}

const CarAnimation: React.FC<CarAnimationProps> = ({
  car1Position,
  car2Position,
  isAnswerCorrect,
}) => {
  return (
    <div className="relative w-full h-40 top-[-10px] left-[-25px] flex items-center justify-between mt-10 gap-2 space-y-44">
      {/* Green Car */}
      <div
        className="absolute transition-transform duration-1000 ease-in-out"
        style={{
          transform: car1Position, // Dynamic movement
        }}
      >
        {isAnswerCorrect && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img src={bubbleImage} alt="Correct Answer Bubble" className="w-12 h-12" />
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
        {!isAnswerCorrect && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img src={bubbleImage} alt="Wrong Answer Bubble" className="w-12 h-12" />
          </div>
        )}
        <img src={carImage2} alt="Red Car" className="w-20 h-12 scale-x-[-1]" />
      </div>
    </div>
  );
};

export default CarAnimation;
