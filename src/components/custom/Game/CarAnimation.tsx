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
  showBubble: boolean;
}

const CarAnimation: React.FC<CarAnimationProps> = ({
  car1Position,
  car2Position,
  isAnswerCorrect,
  showBubble,
}) => {
  return (
    <div className="relative w-full h-40 flex items-center justify-between gap-2">
      {/* Green Car */}
      <div
        className="absolute transition-transform duration-1000 ease-in-out"
        style={{ transform: car1Position }}
      >
        {showBubble && isAnswerCorrect===true && (
          <div className="absolute -top-20 h-[70px] w-[169px]">
            <img
              src={correctBubble}
              alt="Correct Answer"
              className="w-24 h-24"
            />
          </div>
        )}
        {showBubble && isAnswerCorrect === false && (
          <div className="absolute -top-20 h-[70px] w-[169px]">
            <img src={ohNoBubble} alt="Oh No" className="w-24 h-24" />
          </div>
        )}
        <img src={carImage1} alt="Green Car" className="w-20 h-12" />
      </div>

      {/* Red Car */}
      <div
        className="absolute transition-transform duration-1000 ease-in-out mt-48"
        style={{ transform: car2Position }}
      >
        {showBubble && isAnswerCorrect ===false && (
          <div className="absolute -top-20 h-[70px] w-[169px]">
            <img src={wrongBubble} alt="Wrong Answer" className="w-24 h-24" />
          </div>
        )}
        <img
          src={carImage2}
          alt="Red Car"
          className="w-20 h-12 scale-x-[-1]"
        />
      </div>

      {/* Finishing Line */}
      <div className="absolute right-[10px] h-[250px] flex items-center">
        <img
          src={finishLineImage}
          alt="Finishing Line"
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default CarAnimation;
