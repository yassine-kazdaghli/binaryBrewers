// CommentForm.js
import React, { useState } from "react";
import './Styles/BlogPost.css';

function CommentForm({ addComment }) {
  const [comment, setComment] = useState("");

  const onClickHandler = () => {
    if (comment.trim() !== "") {
      addComment({ text: comment, id: Date.now() }); // Create a comment object with a unique ID
      setComment(""); // Clear the input field after submission
    }
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="main-container">
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentForm;

