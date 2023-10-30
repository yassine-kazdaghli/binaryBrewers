// BlogPostList.js
// For example, in your BlogPostList.js file:
import {useState,useEffect} from 'react';
import React from 'react';
import BlogPost from './BlogPost';
import api from '../../services/api.js'
const BlogPostList = () => {

  const [post, setPost]= useState([])

  useEffect(() => {
    // Fetch comments for this post on component mount
    api.get(`/api/posts`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error("Error fetching comments:", error);
      });
  }, []);
  return (
    <div>
      {post.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};
export default BlogPostList;