import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    imageUrl: {
        type: String,
        default: ''
    },
    interests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interests"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.models = {};

export const User = mongoose.model('User', userSchema);

