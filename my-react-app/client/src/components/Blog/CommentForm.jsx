import React, { useState } from "react";
import "./Styles/BlogPost.css";
import { useAuth } from "../../AuthContext";

function CommentForm({ addComment }) {
  const [comment, setComment] = useState("");
  const { currentUser } = useAuth();

  const onClickHandler = () => {
    if (comment.trim() !== "") {
      addComment({
        text: comment,
        username: currentUser ? currentUser.username : "Anonymous",
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      setComment("");
    }
  };

  return (
    <div className="main-container">
      <div className="comment-flexbox">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="input-box"
          placeholder="comment here ..."
          style={{ padding: "1rem" }}
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
