// BlogPost.js
import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './Styles/BlogPost.css';
import { useAuth } from '../../AuthContext';


const BlogPost = ({ post }) => {
  const [comments, setComments] = useState([]);
  const { currentUser } = useAuth();

  

  const addComment = newComment => setComments(prevComments => [...prevComments, newComment]);

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentList comments={comments} />
      {currentUser ? <CommentForm addComment={addComment} postId={post._id} /> : <div><p>Please login to comment.</p></div>}
    </div>
  );
};

export default BlogPost;
