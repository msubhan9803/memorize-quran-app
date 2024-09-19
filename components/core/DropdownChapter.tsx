// DropdownChapter.tsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Chapter } from "@/lib/types";

interface DropdownChapterProps {
  chapters: Chapter[];
  selectedChapter: number;
  onChapterSelect: (chapterNumber: number) => void;
}

const DropdownChapter: React.FC<DropdownChapterProps> = ({
  chapters,
  selectedChapter,
  onChapterSelect,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-teal-400 text-teal-300 text-3xl lg:text-3xl py-2 px-4 rounded">
        {chapters && chapters.length > 0
          ? `${chapters[selectedChapter].name_simple} (${chapters[selectedChapter].name_arabic}) - ${chapters[selectedChapter].translated_name.name}`
          : "Select Chapter"}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-96 overflow-y-scroll">
        {chapters?.map((chapter) => (
          <DropdownMenuItem
            key={chapter.id}
            onClick={() => onChapterSelect(chapter.id)}
          >
            {chapter.translated_name.name}&nbsp;
            <span className="text-3xl">({chapter.name_arabic})</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownChapter;
