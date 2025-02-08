import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog', // Reference to Blog model
        required: true
    },
});

// Create a unique index to prevent a user from liking the same blog multiple times
likeSchema.index({ user: 1, blog: 1 }, { unique: true });

const Like = mongoose.model('Likes', likeSchema);

export default Like;
