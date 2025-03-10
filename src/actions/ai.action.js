import { GoogleGenerativeAI } from "@google/generative-ai";
import { HfInference } from "@huggingface/inference";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_SECRET_KEY);
const clientHF = new HfInference(process.env.HF_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getFromAi = async (prompt) => {
    const result = await model.generateContent(`genrate a blog post on the topic: ${prompt} and write post in html  and make it more readable and extensibe and follow strict rules and also response is in pure json format and thats it `);
    // console.log("result:", result.response.text());
    return result.response.text();
};

export const imgGenrator = async (prompt) => {

    const image = await clientHF.textToImage({
        model: "black-forest-labs/FLUX.1-dev",
        inputs: prompt,
        parameters: { num_inference_steps: 5 },
        provider: "replicate",
    });
    // Use the generated image (it's a Blob)
    console.log(image);
}