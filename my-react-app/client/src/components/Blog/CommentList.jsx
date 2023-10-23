// CommentList.js
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <>
    <h3 className="comment-text">Comments</h3>
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          {comment.text}
        </div>
      ))}
    </div>
    </>
  );
};

export default CommentList;
