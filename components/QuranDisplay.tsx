"use client";
import React, { useState } from "react";
import { useQuran } from "../hooks/useQuran";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useChapters } from "@/hooks/useChapters";

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

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center text-center text-teal-400">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-darkBlue text-yellow-300">
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-teal-400 text-teal-300 text-3xl lg:text-3xl py-2 px-4 rounded">
          {chapters && chapters?.length > 0
            ? `${chapters[chapter].name_simple} (${chapters[chapter].name_arabic}) - ${chapters[chapter].translated_name.name}`
            : "Select Chapter"}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-96 overflow-y-scroll">
          {chapters?.map((chapter) => (
            <DropdownMenuItem
              key={chapter.id}
              onClick={() => handleChapterSelect(chapter.id)}
            >
              {chapter.translated_name.name}&nbsp;
              <span className="text-3xl">({chapter.name_arabic})</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div dir="rtl" className="flex-1 flex items-center p-6">
        <p className="text-6xl lg:text-8xl text-center">
          {currentVerse?.text_uthmani || "No Data"}
        </p>
      </div>

      <div className="space-x-4 pt-12">
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
