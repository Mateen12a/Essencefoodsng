const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;