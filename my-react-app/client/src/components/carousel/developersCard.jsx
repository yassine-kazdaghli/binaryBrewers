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
