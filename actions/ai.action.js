import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_SECRET_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getFromAi = async (prompt) => {
    const result = await model.generateContent(prompt);
    return result.response.text();
};