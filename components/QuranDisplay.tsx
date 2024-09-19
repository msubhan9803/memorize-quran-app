"use client";
import React, { useState } from "react";
import { useQuran } from "@/hooks/useQuran";
import { useChapters } from "@/hooks/useChapters";
import DropdownChapter from "@/components/core/DropdownChapter";
import VerseDisplay from "@/components/core/VerseDisplay";
import NavigationButtons from "@/components/core/NavigationButtons";
import LoadingSpinner from "@/components/core/LoadingSpinner";
import AyatBadge from "@/components/core/AyatBadge"; // Import the new component

const QuranDisplay: React.FC = () => {
  const [chapter, setChapter] = useState(1);
  const [verse, setVerse] = useState(1);

  const { data: currentVerse, isLoading } = useQuran(chapter, verse);
  const { data: chapters } = useChapters();

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

  const handleChapterSelect = (chapterNumber: number) => {
    setChapter(chapterNumber);
    setVerse(1);
  };

  if (isLoading || !chapters)
    return (
      <div className="h-screen flex items-center justify-center text-center text-teal-400">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="relative flex flex-col items-center justify-center p-4 min-h-screen bg-darkBlue text-yellow-300">
      <DropdownChapter
        chapters={chapters}
        selectedChapter={chapter}
        onChapterSelect={handleChapterSelect}
      />
      <AyatBadge verse={verse} />
      <VerseDisplay verseText={currentVerse?.text_uthmani} />
      <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default QuranDisplay;
