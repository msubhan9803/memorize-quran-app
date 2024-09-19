import React from "react";

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationProps> = ({ onPrev, onNext }) => {
  return (
    <div className="space-x-4 pt-12 mx-auto">
      <button
        onClick={onPrev}
        className="bg-teal-400 text-darkBlue font-bold py-2 px-4 rounded"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="bg-teal-400 text-darkBlue font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
