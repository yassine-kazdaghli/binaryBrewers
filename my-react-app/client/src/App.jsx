import React from 'react';  
import MediaPlayer from './components/mediaPlayer/mediaPlayer';
import CardExampleCard from './components/podcastCard/podcastCard';
import Icons from './components/nav/icons';
import Login from './components/signup/login';
import DevelopersCard from './components/carousel/developersCard';
import BlogPostList from './components/Blog/BlogPostList'; // Import your BlogPostList component
import { blogPosts } from './components/Blog/data'; // Import your blog post data
import './index.css'
function App() {
  return (
    <>
    <Icons/>
    {/* <CardExampleCard/> */}
    {/* <MediaPlayer/> */}
    <div className="developers">
    <DevelopersCard/>
    </div>
    <div className='body'>
    <div className='cards'>
    <CardExampleCard/>
    <CardExampleCard/>
    <CardExampleCard/>
    <CardExampleCard/>
    </div>
     <Login/> 
     {/* <MediaPlayer/>  */}
     <BlogPostList posts={blogPosts} />
    </div>
    </>
      
    
  );
}

export default App;
