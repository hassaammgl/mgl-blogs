import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export async function POST(req) {
    const { content } = await req.json();
    console.log("prompt:", content);
    const prompt = `{context: "${content}"}
    Transform this object context to  SEO - Friendly HTml with no plain text and response is in json`;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return NextResponse.json(result.response.text());
}