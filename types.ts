
export type ZodiacSign = 
  | 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' 
  | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' 
  | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';

export interface ZodiacInfo {
  name: ZodiacSign;
  dateRange: string;
  icon: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
}

export interface LuckyColorResult {
  colorName: string;
  hexCode: string;
  reason: string;
  horoscopeSummary: string[];
  luckyNumber: number;
}
