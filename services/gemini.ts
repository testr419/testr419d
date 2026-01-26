
import { LuckyColorResult, ZodiacSign } from "../types";

export const getLuckyColor = async (sign: ZodiacSign): Promise<LuckyColorResult> => {
  try {
    const response = await fetch(`/api/lucky-color?sign=${encodeURIComponent(sign)}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch celestial insights.");
    }

    return await response.json();
  } catch (error: any) {
    console.error("Client Service Error:", error);
    throw new Error(error.message || "Could not connect to the celestial server.");
  }
};
