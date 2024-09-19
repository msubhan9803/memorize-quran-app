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
