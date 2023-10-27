import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";

export const postComment = async (req, res) => {
    try {
        const { text, timestamp } = req.body;
        console.log(req.body);
        const comment = new Comment({
            user: req.user.userId,
            text: req.body.data.content,

        });

        await comment.save();
        const updatedPostWithComments = await Post.findByIdAndUpdate(req.body.data.postId, {
            $push: {
                comments: comment._id
            },
        }, {
            new: true
        },)
        console.log(updatedPostWithComments)
        res.status(201).json(comment);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal server error' });
    }
};