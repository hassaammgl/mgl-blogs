import { NextResponse } from "next/server";
import { getFromAi } from "@/actions/ai.action"

function removeBackticks(str) {
    return str.replace(/^```json\s*/, '').slice(0, -4);
}

export const POST = async (req) => {

    const { prompt } = await req.json();
    const newPrompt = `
    {
        "prompt": "${prompt}"
    }
    Transform this JSON object into a **fully optimized, SEO-friendly** HTML document while ensuring the following:
    
    [VIP]: Do **NOT** include the \`<head>\` section or any \`<meta>\` tags.
    
    1. **Content Structure & Readability**  
       - Convert plain text into **rich HTML elements** (\`<p>\`, \`<ul>\`, \`<ol>\`, \`<blockquote>\`, etc.).  
       - Ensure proper use of **structured heading tags** (\`<h1>\`, \`<h2>\`, etc.) for better readability.  
       - If there are **sections or categories**, ensure they are **properly grouped**.  
    
    2. **Code Handling**  
       - **Preserve all code snippets** by wrapping them in \`<pre><code>\` blocks with syntax highlighting.  
    
    3. **Valid JSON Output**  
       - Return the formatted HTML inside a JSON response like this:
    \`\`\`json
    {
        "html": "<body>...</body>"
    }
    \`\`\`
    `;


    console.log(prompt);
    console.log(newPrompt);

    const res = await getFromAi(newPrompt);

    const newRes = removeBackticks(res)

    console.log(newRes)

    const html = JSON.parse(newRes).html;

    console.log("Html: ",html);

    return NextResponse.json(
        {
            message: "Success",
            blog: html
        },
        { status: 200, },
    );
}