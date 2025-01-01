import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        required: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog', // Reference to Blog model
        required: true
    },
});

// Create a unique index to prevent a user from favoriting the same blog multiple times
favoriteSchema.index({ user: 1, blog: 1 }, { unique: true });

const Favorites = mongoose.models.Favorites || mongoose.model('Favorites', favoriteSchema);

export default Favorites;
