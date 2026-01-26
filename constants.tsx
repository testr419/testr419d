
import React from 'react';
import { ZodiacInfo } from './types';

export const ZODIAC_SIGNS: ZodiacInfo[] = [
  { name: 'Aries', dateRange: 'Mar 21 - Apr 19', icon: '♈', element: 'Fire' },
  { name: 'Taurus', dateRange: 'Apr 20 - May 20', icon: '♉', element: 'Earth' },
  { name: 'Gemini', dateRange: 'May 21 - Jun 20', icon: '♊', element: 'Air' },
  { name: 'Cancer', dateRange: 'Jun 21 - Jul 22', icon: '♋', element: 'Water' },
  { name: 'Leo', dateRange: 'Jul 23 - Aug 22', icon: '♌', element: 'Fire' },
  { name: 'Virgo', dateRange: 'Aug 23 - Sep 22', icon: '♍', element: 'Earth' },
  { name: 'Libra', dateRange: 'Sep 23 - Oct 22', icon: '♎', element: 'Air' },
  { name: 'Scorpio', dateRange: 'Oct 23 - Nov 21', icon: '♏', element: 'Water' },
  { name: 'Sagittarius', dateRange: 'Nov 22 - Dec 21', icon: '♐', element: 'Fire' },
  { name: 'Capricorn', dateRange: 'Dec 22 - Jan 19', icon: '♑', element: 'Earth' },
  { name: 'Aquarius', dateRange: 'Jan 20 - Feb 18', icon: '♒', element: 'Air' },
  { name: 'Pisces', dateRange: 'Feb 19 - Mar 20', icon: '♓', element: 'Water' },
];

export const ELEMENT_COLORS = {
  Fire: 'text-orange-500',
  Earth: 'text-emerald-500',
  Air: 'text-sky-500',
  Water: 'text-blue-500',
};
