import mongoose from 'mongoose';

const commentReplySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        required: true
    },
    reply: {
        type: String,
        required: [true, 'reply is required'],
        trim: true,
        maxLength: [500, 'Comment cannot be more than 500 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const Reply = mongoose.model('CommentsReply', commentReplySchema);

export default Reply;
