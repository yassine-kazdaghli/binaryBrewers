// CommentList.js
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <>
      <h3 className="comment-text">Comments</h3>
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment._id} className="comment">
            {/* Uncomment the next line if you have the user's name in the comment object */}
           <strong>{comment.user.username}</strong>
            {comment.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
