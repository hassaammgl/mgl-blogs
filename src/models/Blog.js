import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxLength: [100, 'Title cannot be more than 100 characters']
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        // maxLength: [500, 'Description cannot be more than 500 characters']
    },
    content: { 
        type: String,
        required: [true, 'Content is required']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true
    },
    image: {
        type: String ,
        required: [true, 'Featured image is required']
    },
    imageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to User model if you have one
        required: false
    },
    viewCount: {
        type: Number,
        default: 0
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Likes',
    }],
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favourites',
    }],
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    isPublished: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date
    },
}, {
    timestamps: true
});

blogSchema.pre('save', function (next) {
    if (this.isPublished && !this.publishedAt) {
        this.publishedAt = new Date();
    }
    next();
});


blogSchema.pre('save', function (next) {
    this.slug = this.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    next();
});

blogSchema.methods = {
    updateViewCount: function () {
        this.viewCount += 1;
        return this.save();
    }
};

blogSchema.statics = {
    findPublished: function () {
        return this.find({ isPublished: true });
    }
};

mongoose.models = {};

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
