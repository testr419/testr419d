
import { GoogleGenAI, Type } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const sign = searchParams.get('sign');

  if (!sign) {
    return new Response(JSON.stringify({ error: 'Zodiac sign is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured on server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const dateStr = new Date().toLocaleDateString();
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Predict the daily lucky color and horoscope for the zodiac sign ${sign} for today, ${dateStr}. 
                Provide a valid HEX code for the color, the common name of that color, 
                a compelling spiritual/astrological reason why this color is beneficial today, 
                and 3 brief lucky predictions or pieces of advice. Also provide a lucky number.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            colorName: { type: Type.STRING },
            hexCode: { type: Type.STRING, description: 'Hex code including the hash, e.g. #FF5733' },
            reason: { type: Type.STRING },
            horoscopeSummary: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Three short predictions or tips'
            },
            luckyNumber: { type: Type.NUMBER }
          },
          required: ["colorName", "hexCode", "reason", "horoscopeSummary", "luckyNumber"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI");
    }

    return new Response(text, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("Backend API Error:", error);
    return new Response(JSON.stringify({ error: 'The stars are currently misaligned. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
