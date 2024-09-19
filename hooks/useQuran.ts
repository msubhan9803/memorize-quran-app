import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAyah = async (chapter: number, verse: number) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_QURAN_API}/quran/verses/uthmani?chapter_number=${chapter}`
  );
  return response.data.verses[verse - 1];
};

export const useQuran = (chapter: number, verse: number) => {
  return useQuery({
    queryKey: ["ayah", chapter, verse],
    queryFn: () => fetchAyah(chapter, verse),
  });
};
