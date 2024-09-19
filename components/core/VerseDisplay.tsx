import React from "react";

interface VerseDisplayProps {
  verseText: string | null;
}

const VerseDisplay: React.FC<VerseDisplayProps> = ({ verseText }) => {
  return (
    <div dir="rtl" className="flex-1 flex items-center p-6">
      <p className="text-6xl lg:text-8xl text-center">
        {verseText || "No Data"}
      </p>
    </div>
  );
};

export default VerseDisplay;
