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
        required: true,
        default: ''
    }
});

mongoose.models = {};

export const Image = mongoose.model('Image', imageSchema);