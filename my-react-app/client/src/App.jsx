import React from 'react';  
import MediaPlayer from './components/mediaPlayer/mediaPlayer';
import CardExampleCard from './components/podcastCard/podcastCard';
import Icons from './components/nav/icons';
import Login from './components/signup/login';
import DevelopersCard from './components/carousel/developersCard';
import './index.css'
function App() {
  return (
    <>
    <div>
    <Icons/>
    </div>
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
     <MediaPlayer/> 
    </div>
    </>
      
    
  );
}

export default App;
