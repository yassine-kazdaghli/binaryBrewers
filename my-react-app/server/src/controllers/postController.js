//postController.js
import Post from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
    try {
       const posts= await Post.find();

      
        res.status(201).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const getOnePost = async (req, res) => {
    try {
       const posts= await Post.findById(req.params.id);

      
        res.status(201).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};