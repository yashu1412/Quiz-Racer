import React from "react";
import questionsBg from "../../../assets/Questions-bg.png";

interface QuestionProps {
  showQuestion: boolean;
  question: string;
}

const QuestionPart: React.FC<QuestionProps> = ({ showQuestion, question }) => {
  return (
    <div
      className="relative flex justify-center items-center h-[130px] w-[254px] rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${questionsBg})`,
      }}
    >
      {showQuestion && (
        <div
          className="animate-fadeIn font-akshar text-center w-[224px] h-[100px] bg-white rounded-lg shadow-[inset_0_0_10px_5px_gray,0_0_10px_5px_black,5px_5px_15px_rgba(0,0,0,0.2)]"
        >
          <p className="font-akshar font-normal text-[25px] text-black text-shadow mt-4 mx-2">
            {question}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionPart;
