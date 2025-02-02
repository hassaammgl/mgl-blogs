import { NextResponse } from "next/server";
import { getFromAi } from "@/actions/ai.action";


export async function POST(req) {
    const { content } = await req.json();
    console.log("content:", content);
    const prompt = `
    {
        "content": "${content}"
    }
    Convert the entire content into an SEO-friendly markdown format **without modifying, truncating, or removing any part of the content**. Ensure all text, images, and code remain intact and properly structured for SEO. Also, generate a summary of the article. The response must be in JSON format with no plain text output.
    `;

    console.log("prompt:", prompt);


    const result = await getFromAi(prompt);
    console.log("result:", JSON.parse(result.replace(/(```|json)/g, "")));

    return NextResponse.json({ result: JSON.parse(result.replace(/(```|json)/g, "")) });
}