// models/Blog.js
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
        maxLength: [500, 'Description cannot be more than 500 characters']
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
        type: String, // This will store the base64 string
        required: [true, 'Featured image is required']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to User model if you have one
        required: false
    },
    tags: [{
        type: String,
        trim: true
    }],
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    viewCount: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Create slug from title before saving
blogSchema.pre('save', function (next) {
    this.slug = this.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/-+/g, '-');     // Replace multiple - with single -
    next();
});

// Add any instance methods if needed
blogSchema.methods = {
    // Example method to update view count
    updateViewCount: function () {
        this.viewCount += 1;
        return this.save();
    }
};

// Add any static methods if needed
blogSchema.statics = {
    // Example method to find published blogs
    findPublished: function () {
        return this.find({ isPublished: true });
    }
};

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
