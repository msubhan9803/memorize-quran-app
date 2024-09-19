import { Chapter } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ChaptersResponse {
  chapters: Chapter[];
}

const fetchChapters = async (): Promise<Chapter[]> => {
  const response = await axios.get<ChaptersResponse>(
    `${process.env.NEXT_PUBLIC_QURAN_API}/chapters`
  );
  return response.data.chapters;
};

export const useChapters = () => {
  return useQuery({
    queryKey: ["chapters"],
    queryFn: fetchChapters,
  });
};
