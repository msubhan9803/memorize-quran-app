import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Chapter {
  id: number;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  translated_name: {
    language_name: string;
    name: string;
  };
}

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
