// import React from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';
// import './Styles/BlogPost.css'; // Import the CSS file

// const BlogPost = ({ post }) => {
//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <h3>Comments</h3>
//       <CommentList comments={post.comments} />
//       <CommentForm postId={post.id} />
//     </div>
//   );
// };

// export default BlogPost;

import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

import { useState } from 'react';
import CommentForm from './CommentForm';
import './Styles/BlogPost.css';

const BlogPost = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []);

  const addComment = (newComment) => {
    // Create a copy of the existing comments array and add the new comment
    const updatedComments = [...comments, newComment];
    
    // Update the state with the new comments
    setComments(updatedComments);
  };

//   return (
//     <div className="blog-post">
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <h3>Comments</h3>
//       <div className="comment-list">
//         {comments.map((comment) => (
//           <div key={comment.id} className="comment">
//             {comment.text}
//           </div>
//         ))}
//       </div>
//       <CommentForm addComment={addComment} />
//     </div>
//   );
// };

// return (
// <Card variant="outlined" sx={{ width: 520 }}>
// <CardOverflow>
//   <AspectRatio ratio="2">
//     <img
//       src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
//       srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
//       loading="lazy"
//       alt=""
//     />
//   </AspectRatio>
// </CardOverflow>
// <CardContent>
//   <Typography level="title-md">Yosemite National Park</Typography>
//   <Typography level="body-sm">California</Typography>
// </CardContent>
// <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
//   <Divider inset="context" />
//   <CardContent orientation="horizontal">
//     <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
//       6.3k views
//     </Typography>
//     <Divider orientation="vertical" />
//     <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
//       1 hour ago
//     </Typography>
//   </CardContent>
// </CardOverflow>
// </Card>
// );
// };

return (
  <div className="center-container">
  <Card variant="outlined" sx={{ width: 700 }}>
    <CardOverflow>
    <AspectRatio ratio="2">
      <img
        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
        loading="lazy"
        alt=""
      />
      </AspectRatio>
    </CardOverflow>
    <CardContent>
      <Typography variant="h5" component="div">
        {post.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {post.content}
      </Typography>
    </CardContent>
    <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
      <Divider inset="context" />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" fontWeight="medium" color="text.secondary">
          {comments.length} Comments
        </Typography>
        <Typography variant="body2" fontWeight="medium" color="text.secondary">
          1 hour ago
        </Typography>
      </CardContent>
    </CardOverflow>
  </Card>
  </div>
);
};


export default BlogPost;