import mongoose from "mongoose"
import dotenv from 'dotenv';
import { blogPosts } from "./blogData.js";
import Post from "./models/postModel.js";
dotenv.config();
const MONGODB_URI = process.env.MONGO_URI;


mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

    })
    .catch((err) => console.error('Error connecting to MongoDB:', err));



const seedPosts = async () => {
    await Post.deleteMany()
    for (const post of blogPosts) {

        const newPost = await Post.create(post)
        console.log(newPost)
    }
}

seedPosts()