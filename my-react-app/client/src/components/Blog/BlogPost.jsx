// import React from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';
// import './Styles/BlogPost.css'; // Import the CSS file

// const BlogPost = ({ post }) => {
//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <h3>Comments</h3>
//       <CommentList comments={post.comments} />
//       <CommentForm postId={post.id} />
//     </div>
//   );
// };

// export default BlogPost;

import React, { useState } from 'react';
import CommentForm from './CommentForm';
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
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            {comment.text}
          </div>
        ))}
      </div>
      <CommentForm addComment={addComment} />
    </div>
  );
};

export default BlogPost;