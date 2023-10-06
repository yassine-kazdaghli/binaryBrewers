// BlogPost.js
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList'; // You need to import CommentList here
import './Styles/BlogPost.css';

const BlogPost = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []);

  const addComment = (newComment) => {
    // Create a copy of the existing comments array and add the new comment
    const updatedComments = [...comments, newComment];
    
    // Update the state with the new comments
    setComments(updatedComments);
  };

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <CommentList comments={comments} /> {/* Render the list of comments */}
      <CommentForm addComment={addComment} />
    </div>
  );
};

export default BlogPost;
