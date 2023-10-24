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
import { FaLinkedin, FaGithub, FaCodepen, FaGlobe } from "react-icons/fa"; // Import icons from react-icons


const carouselData = [
  {
    title: "Yassine",
    description:
      "Besides being able to sell you sand in Sahara, and speaking more langauges than your abacus can count to, Yassine can build you websites that meet the highest industy standards. You are welcome!", // Description for Card 1
    imageUrl: Yassine, // Replace with your image URL
    website: "https://yassine-kazdaghli.github.io/portfolio/",
    linkedin: "https://www.linkedin.com/in/yassine",
    github: "https://github.com/yassine",
    codepen: "https://codepen.io/yassine",
  },
  {
    title: "Riccardo",
    description: "", // Description for Card 2
    imageUrl: Ricci, // Replace with your image URL
    website: "https://yassine.website.com",
    linkedin: "https://www.linkedin.com/in/yassine",
    github: "https://github.com/yassine",
    codepen: "https://codepen.io/yassine",
  },
  {
    title: "Mads",
    description:
      "Art-school drop-out and hobby Psych-Rock musician Mads, has a DIY approach to Web-Development and life. He will make sure your website stands out!", // Description for Card 3
    imageUrl: Mads, // Replace with your image URL
    website: "https://yassine.website.com",
    linkedin: "https://www.linkedin.com/in/yassine",
    github: "https://github.com/yassine",
    codepen: "https://codepen.io/yassine",
  },
];

const DevelopersCard = () => {
  return (
    <div className="developers-section">
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
      centerSlidePercentage={55}
      centerMode={true}
      dynamicHeight={false}
      width="auto"
      useKeyboardArrows={true}
      autoFocus={true}
    >
      {carouselData.map((item, index) => (
        <div key={index} className="Devs" style={{backgroundColor: 'black'}}>
          <Grid columns={3} stackable>
            <Grid.Column>
              <Card >
                {" "}
                {/* Use "fluid" to make the card responsive */}
                <Image
                  src={item.imageUrl}
                  ui={true}
                  sx={{ backgroundColor: "white" }}
                />
                <CardContent sx={{ backgroundColor: "white" }}>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  
                  <Typography variant="body2" >
                    {item.description}
                  </Typography>
                  <div className="iconContainer">
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe className="icon" />
                      </a>
                    )}
                    {item.linkedin && (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="icon" />
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="icon" />
                      </a>
                    )}
                    {item.codepen && (
                      <a
                        href={item.codepen}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaCodepen className="icon" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
      ))}
    </Carousel>
    <div className="about-us-description">
    <h2>About Us</h2>
        <p>
          We are Yassine, Riccardo, and Mads - three passionate web developers hailing from DCI. Our journey began in the virtual halls of web development learning, where the synergy of our diverse backgrounds, interests, and skills sparked the idea for this podcast.
        </p>
        <p>
          From our distinct perspectives - Yassine with his unmatched ability to sell you sand in the Sahara and linguistic prowess; Riccardo, the connoisseur of minimalistic design with an insatiable thirst for the perfect espresso; to Mads, the art-school dropout with a DIY approach to web development and life, we realized that we had a unique voice.
        </p>
        <p>
          But this podcast isn't just about us. It's a reflection of our collective experiences, challenges, and growth in the realm of web development. As we delve deeper into the MERN stack, we wanted to share our journey, and thus, this podcast website was born. It's a convergence of our love for coding, craft beer, and candid conversations. We invite you to join us on this adventure. Listen, laugh, learn, and let's navigate the dynamic world of web development together.
        </p>
      </div>
    </div>
  );
};

export default DevelopersCard;


