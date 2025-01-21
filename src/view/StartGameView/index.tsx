import React from 'react';
import { useNavigate } from 'react-router-dom';
import titleImage from '../../assets/Title-image.png';

const StartGameView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-common flex flex-col items-center justify-center">
      {/* Image Section */}
      <div style={{ marginBottom: '290px' }} className="flex justify-center">
        <img src={titleImage} alt="Game Title" className="w-3/4 md:w-1/2" />
      </div>

      {/* Button Section */}
      <div style={{ position: 'relative', bottom: '50px' }}>
        <button
          onClick={() => navigate('/gameintro')}
          className="bg-[#34841E] text-white px-20 py-3 rounded-2xl text-2xl hover:bg-[#34841E] w-[376px] h-[56px] font-akshar font-normal"
        >
          Press to continue
        </button>
      </div>
    </div>
  );
};

export default StartGameView;
