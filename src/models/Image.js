import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        required: true,
        default: ''
    },
    base64: {
        type: String,
        required: true,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    prompt: {  
        type: String,
    },
    seed: {
        type: Number,
        default: 0
    },
    model: {
        type: String,
        default: ''
    },
    buffer: {
        type: Buffer,
        default: null
    }
});

// Only need this if you're using Next.js with hot reloading
if (mongoose.models.Image) {
    delete mongoose.models.Image;
}

export const Image = mongoose.model('Image', imageSchema);