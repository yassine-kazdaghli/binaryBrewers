import React from 'react';
import CardExampleCard from './podcastCard/podcastCard';
import '../../src/components/podcastPage.css'


function PodcastPage() {
  return <div className='podcasts'>
    <CardExampleCard/>
    <CardExampleCard/>
    <CardExampleCard/>
    
  </div>;
}

export default PodcastPage;
