const Comment = require("../../models/comment")

module.exports = async (req, res) => {
const comments = await Comment.find({});

    res.render('menu', {
        comments: comments
    });
};