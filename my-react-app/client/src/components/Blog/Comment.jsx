// Comment.js
import React from 'react';
const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <strong>{comment.username}</strong>  {/* Display the username */}
      <div>{comment.text}</div>
      <small>{new Date(comment.timestamp).toLocaleString()}</small>  {/* Convert the timestamp to a readable format */}
    </div>
  );
};

export default Comment;

