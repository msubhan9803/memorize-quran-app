"use client";
import React, { useState } from "react";
import { useQuran } from "../hooks/useQuran";

const QuranDisplay: React.FC = () => {
  const [chapter, setChapter] = useState(1);
  const [verse, setVerse] = useState(1);

  const { data: currentVerse, isLoading } = useQuran(chapter, verse);

  const handleNext = () => {
    if (verse < 7) {
      setVerse((prev) => prev + 1);
    } else if (chapter < 114) {
      setChapter((prev) => prev + 1);
      setVerse(1);
    }
  };

  const handlePrev = () => {
    if (verse > 1) {
      setVerse((prev) => prev - 1);
    } else if (chapter > 1) {
      setChapter((prev) => prev - 1);
      setVerse(1);
    }
  };

  if (isLoading)
    return <div className="h-screen flex items-center justify-center text-center text-teal-400">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue text-yellow-300">
      <div dir="rtl" className="text-6xl lg:text-8xl p-6 text-center">{currentVerse?.text_uthmani || "No Data"}</div>

      <div className="absolute bottom-10 space-x-4 pt-12">
        <button
          onClick={handlePrev}
          className="bg-teal-400 text-darkBlue py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-teal-400 text-darkBlue py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuranDisplay;
