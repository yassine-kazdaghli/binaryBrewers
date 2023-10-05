import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import { CardContent, Typography } from '@mui/material';
import "./developersCards.css";
import Yassine from "./images/Yassine.jpg";
import Ricci from "./images/Ricci.png";
import Mads from "./images/Mads.jpg"

const carouselData = [
  {
    title: 'Yassine',
    content: 'This is the content for Card 1.',
    description: 'Matthew is a musician living in Nashville.', // Description for Card 1
    imageUrl: Yassine, // Replace with your image URL
  },
  {
    title: 'Riccardo',
    content: 'This is the content for Card 2.',
    description: 'John is an artist based in New York City.', // Description for Card 2
    imageUrl: Ricci // Replace with your image URL
  },
  {
    title: 'Mads',
    content: 'This is the content for Card 3.',
    description: 'Sarah is a writer and editor in San Francisco.', // Description for Card 3
    imageUrl: Mads, // Replace with your image URL
  },
];

const DevelopersCard = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      transitionTime={200}
      stopOnHover={true}
      emulateTouch={true}
      swipeable={true}
      centerSlidePercentage={60}
      centerMode={true}
      dynamicHeight={false}
      width="80%"
      useKeyboardArrows={true}
      autoFocus={true}
      
    >
      {carouselData.map((item, index) => (
        <div key={index}>
          <Card>
            <Image
              src={item.imageUrl}              wrapped
              ui={false}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.content}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description} {/* Display Description */}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default DevelopersCard;