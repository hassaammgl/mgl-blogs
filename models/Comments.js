import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
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
    comment: {
        type: String,
        required: [true, 'Comment is required'],
        trim: true,
        maxLength: [500, 'Comment cannot be more than 500 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    reply: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommentsReply'
    }]
});


const Comments = mongoose.model('Comments', commentSchema);

export default Comments;
