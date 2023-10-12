import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Image, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"; // Import Semantic UI CSS
import { CardContent, Typography } from "@mui/material";
import "./developersCards.css";
import Yassine from "./images/Yassine.jpg";
import Ricci from "./images/Ricci.png";
import Mads from "./images/Mads.jpg";

const carouselData = [
  {
    title: "Yassine",
    content: "This is the content for Card 1.",
    description: "Matthew is a musician living in Nashville.", // Description for Card 1
    imageUrl: Yassine, // Replace with your image URL
  },
  {
    title: "Riccardo",
    content: "This is the content for Card 2.",
    description: "John is an artist based in New York City.", // Description for Card 2
    imageUrl: Ricci, // Replace with your image URL
  },
  {
    title: "Mads",
    content: "This is the content for Card 3.",
    description: "Sarah is a writer and editor in San Francisco.", // Description for Card 3
    imageUrl: Mads, // Replace with your image URL
  },
];

const DevelopersCard = () => {
  return (
    <Carousel
      className="carousel"
      showArrows={true}
      showStatus={true}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={2000}
      stopOnHover={true}
      emulateTouch={true}
      swipeable={true}
      centerSlidePercentage={100}
      centerMode={true}
      dynamicHeight={false}
      width="100%"
      useKeyboardArrows={true}
      autoFocus={true}
    >
      {carouselData.map((item, index) => (
        <div key={index} className="Devs">
          <Grid columns={3} stackable>
            <Grid.Column>
              <Card fluid> {/* Use "fluid" to make the card responsive */}
                <Image src={item.imageUrl} ui={true} sx={{ backgroundColor: "none" }} />
                <CardContent>
                  <Typography variant="h5" component="div" color="secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {item.content}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
      ))}
    </Carousel>
  );
};

export default DevelopersCard;
