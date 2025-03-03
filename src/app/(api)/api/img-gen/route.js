import fs from 'fs';
import fetch from 'node-fetch';


async function downloadImage(imageUrl) {
    // Fetching the image from the URL
    const response = await fetch(imageUrl);
    // Reading the response as a buffer
    const buffer = await response.buffer();
    // Writing the buffer to a file named 'image.png'
    fs.writeFileSync('', buffer);
    // Logging completion message
    console.log('Download Completed');
}

// Image details
const prompt = 'A beautiful landscape';
const width = 1024;
const height = 1024;
const seed = 42; // Each seed generates a new image variation
const model = 'flux'; // Using 'flux' as default if model is not provided

const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

downloadImage(imageUrl);

export const POST = async (req) => { 
    const { prompt, width, height, seed, model } = req.body;
    const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

    downloadImage(imageUrl);
    return imageUrl;
}