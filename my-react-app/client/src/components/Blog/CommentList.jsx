import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          {comment.text}
        </div>
      ))}
    </div>
  );
};

export default CommentList;