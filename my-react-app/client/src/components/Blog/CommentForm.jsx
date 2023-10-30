// CommentForm.js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import api from "../../services/api";

const CommentForm = ({ addComment, postId }) => {
  const [content, setContent] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const data = { content:content, postId: postId };
    console.log(data)
    try {
      const response = await api.post(
        "/api/comments",
        { data },
        { withCredentials: true }
      );
      addComment(response.data);
      setContent("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment here..."
      ></textarea>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        startIcon={<SendIcon />}
      >
        Post Comment
      </Button>
    </form>
  );
};

export default CommentForm;
