
import { GoogleGenAI } from "@google/genai";

export const optimizeHeadline = async (originalHeadline: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `As a Local SEO expert, optimize this headline for a carpet cleaning business in Charlotte/Fort Mill. Keep it punchy and conversion-focused: "${originalHeadline}"`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      },
    });
    return response.text?.trim() || originalHeadline;
  } catch (error) {
    console.error("Gemini optimization error:", error);
    return originalHeadline;
  }
};
