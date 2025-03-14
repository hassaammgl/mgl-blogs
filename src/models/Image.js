import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        required: true,
        default: ''
    },
    data: {
        type: Buffer,
        required: true,
    },
    url: {
        type: String,
        default: ''
    },
    contentType: {
        type: String,
        required: true
    }
});

mongoose.models = {};

export const Image = mongoose.model('Image', imageSchema);