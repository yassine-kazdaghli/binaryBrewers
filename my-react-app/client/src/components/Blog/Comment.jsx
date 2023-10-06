// Comment.js
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      {comment.text}
    </div>
  );
};

export default Comment;
