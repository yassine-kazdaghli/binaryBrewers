// BlogPost.js
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList'; // You need to import CommentList here
import './Styles/BlogPost.css';
import { useAuth } from '../../AuthContext';


const BlogPost = ({ post }) => {

  const [comments, setComments] = useState(post.comments || []);
  const { currentUser } = useAuth();
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
      
      <CommentList comments={comments} /> {/* Render the list of comments */}
      <CommentForm addComment={addComment} />
      {currentUser ? <CommentForm addComment={addComment} /> : <p>Please login to comment.</p>}
    </div>
   
  );
};

export default BlogPost;
