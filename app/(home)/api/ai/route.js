import { NextResponse } from "next/server";
import { getFromAi } from "@/actions/ai.action";


export async function POST(req) {
    const { content } = await req.json();
    console.log("content:", content);
    const prompt = `
    {
        "content": "${content}"
    }
        Transform this object context to SEO - Friendly html and if there is some code  so dont remove it and with no plain text and response is in json
    `;
    console.log("prompt:", prompt);


    const result = await getFromAi(prompt);
    console.log("result:", JSON.parse(result.replace(/(```|json)/g, "")));

    return NextResponse.json({ result: JSON.parse(result.replace(/(```|json)/g, "")) });
}