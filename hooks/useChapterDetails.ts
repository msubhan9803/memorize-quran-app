"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ChapterDetailResponse {
  chapter: {
    id: number;
    verses_count: number;
  };
}

const fetchChapterDetails = async (chapterId: number): Promise<number> => {
  const response = await axios.get<ChapterDetailResponse>(
    `${process.env.NEXT_PUBLIC_QURAN_API}/chapters/${chapterId}`
  );
  return response.data.chapter.verses_count;
};

export const useChapterDetails = (chapterId: number) => {
  return useQuery({
    queryKey: ["chapterDetails", chapterId],
    queryFn: () => fetchChapterDetails(chapterId),
  });
};
