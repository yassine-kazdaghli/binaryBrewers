import React from 'react';  
import MediaPlayer from './components/mediaPlayer/mediaPlayer';
import CardExampleCard from './components/podcastCard/podcastCard';
import Icons from './components/nav/icons';
import Login from './components/signup/login';

import './index.css'

function App() {
  return (
    < >
    <div className='body'>
    <Icons/>
    <div className='cards'>
    <CardExampleCard/>
    <CardExampleCard/>
    <CardExampleCard/>
    <CardExampleCard/>
    </div>

    {/* <Login/> */}
     <MediaPlayer/> 
    </div>
    </>
      
    
  );
}

export default App;
