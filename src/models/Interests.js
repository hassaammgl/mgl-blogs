import mongoose from 'mongoose';

const interestsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.models = {};

export const Interests = mongoose.model('Interests', interestsSchema);