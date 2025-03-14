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

export const handleGenrateImg = async ({ setAiLoading, prompt, model, seed, setBase64Img, setImage, setImageId }) => {
    setAiLoading(true);
    console.log(setAiLoading, prompt, model, seed, setBase64Img, setImage, setImageId)
    const res = await fetch(`/api/img-gen`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, model, seed, setImage }),
    });
    const data = await res.json();

    setBase64Img(data.base64);
    setImage(data.buffer);
    setImageId(data._id);
    console.log(data._id);
    setAiLoading(false);
    return data._id
};


export const genrateContent = async (e, prompt, setContent, setRes) => {
    e.preventDefault();
    setRes("")
    const res = await fetch(`/api/content-gen`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setRes(data.blog);
    setContent(data.blog)
}