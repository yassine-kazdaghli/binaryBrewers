import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardExampleCard from "./podcastCard/podcastCard";
import "../../src/components/podcastPage.css";
import MusicPlayerSlider from "./mediaPlayer/mediaPlayer";

function PodcastPage() {
  return (
    <div className="podcasts">
      <Carousel
        className="carousel"
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        transitionTime={200}
        stopOnHover={true}
        emulateTouch={true}
        swipeable={true}
        centerSlidePercentage={35}
        centerMode={true}
        dynamicHeight={false}
        width="100%"
        useKeyboardArrows={true}
        autoFocus={true}
      >
        <CardExampleCard />
        <CardExampleCard />
        <CardExampleCard />
        {/* Add more CardExampleCard components here if needed */}
      </Carousel>
      <MusicPlayerSlider />
    </div>
  );
}
export default PodcastPage;
