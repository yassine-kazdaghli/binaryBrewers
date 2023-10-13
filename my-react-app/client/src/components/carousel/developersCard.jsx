import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"; // Import Semantic UI CSS
import { CardContent, Typography } from "@mui/material";
import "./developersCards.css";
import Yassine from "./images/Yassine.jpg";
import Ricci from "./images/Ricci.png";
import Mads from "./images/Mads.jpg";

const carouselData = [
  {
    title: "Yassine",
    description: "Besides being able to sell you sand in Sahara, and speaking more langauges than your abacus can count to, Yassine can build you websites that meet the highest industy standards. You are welcome!", // Description for Card 1
    imageUrl: Yassine, // Replace with your image URL
  },
  {
    title: "Riccardo",
    description: "", // Description for Card 2
    imageUrl: Ricci, // Replace with your image URL
  },
  {
    title: "Mads",
    description: "Art-school drop-out and hobby Psych-Rock musician Mads, has a DIY approach to Web-Development and life. He will make sure your website stands out!", // Description for Card 3
    imageUrl: Mads, // Replace with your image URL
  },
];

const DevelopersCard = () => {
  return (
    <Carousel
      className="carousel"
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
      centerSlidePercentage={35}
      centerMode={true}
      dynamicHeight={false}
      width="100%"
      useKeyboardArrows={true}
      autoFocus={true}
    >
      {carouselData.map((item, index) => (
        <div key={index} className="Devs">
          <Card>
            <Image src={item.imageUrl} ui={true} />
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
