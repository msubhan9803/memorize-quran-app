"use client"
import React from "react";
import { useQuran } from "@/hooks/useQuran";
import { useChapters } from "@/hooks/useChapters";
import { useChapterDetails } from "@/hooks/useChapterDetails"; 
import DropdownChapter from "@/components/core/DropdownChapter";
import VerseDisplay from "@/components/core/VerseDisplay";
import NavigationButtons from "@/components/core/NavigationButtons";
import LoadingSpinner from "@/components/core/LoadingSpinner";
import AyatBadge from "@/components/core/AyatBadge"; 
import { Chapter } from "@/lib/types";
import { usePersistedState } from "@/hooks/usePersistedState"; // Import the custom hook

const QuranDisplay: React.FC = () => {
  const [chapter, setChapter] = usePersistedState("chapter", "1");
  const [verse, setVerse] = usePersistedState("verse", "1");

  const { data: currentVerse, isLoading: isLoadingVerse } = useQuran(
    parseInt(chapter, 10),
    parseInt(verse, 10)
  );
  const { data: chapters, isLoading: isLoadingChapters } = useChapters();
  const { data: totalVerses, isLoading: isLoadingChapterDetails } =
    useChapterDetails(parseInt(chapter, 10));

  const handleNext = () => {
    if (parseInt(verse, 10) < (totalVerses || 1)) {
      setVerse((prev) => (parseInt(prev, 10) + 1).toString());
    } else if (parseInt(chapter, 10) < 114) {
      setChapter((prev) => (parseInt(prev, 10) + 1).toString());
      setVerse("1");
    }
  };

  const handlePrev = () => {
    if (parseInt(verse, 10) > 1) {
      setVerse((prev) => (parseInt(prev, 10) - 1).toString());
    } else if (parseInt(chapter, 10) > 1) {
      setChapter((prev) => (parseInt(prev, 10) - 1).toString());
      setVerse("1");
    }
  };

  const handleChapterSelect = (chapterNumber: number) => {
    setChapter(chapterNumber.toString());
    setVerse("1");
  };

  if (isLoadingVerse || isLoadingChapters || isLoadingChapterDetails)
    return (
      <div className="h-screen flex items-center justify-center text-center text-teal-400">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="relative flex flex-col items-center justify-center p-4 min-h-screen bg-darkBlue text-yellow-300">
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
        <DropdownChapter
          chapters={chapters as Chapter[]}
          selectedChapter={parseInt(chapter, 10)}
          onChapterSelect={handleChapterSelect}
        />
        <AyatBadge verse={parseInt(verse, 10)} totalVerse={totalVerses as number} />
      </div>
      <VerseDisplay verseText={currentVerse?.text_uthmani} />
      <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default QuranDisplay;
