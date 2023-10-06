// BlogPostList.js
// For example, in your BlogPostList.js file:
import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from './data'; // Import the blogPosts array

const BlogPostList = () => {
  return (
    <div>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
