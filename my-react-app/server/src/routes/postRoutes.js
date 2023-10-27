import { getOnePost, getAllPosts } from "../controllers/postController.js";
import express from 'express';


const router = express.Router();

//router.get('/', getComments);
router.get('/', getAllPosts);
router.get('/:id', getOnePost);

export default router;