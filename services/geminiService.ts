import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFitnessAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: "You are an expert fitness coach and nutritionist. Keep answers concise, motivating, and scientifically accurate. Limit responses to 3-4 sentences unless asked for a detailed plan.",
      }
    });
    return response.text || "Sorry, I couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};