import React from "react";

import { Card, Image, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"; // Import Semantic UI CSS
import { CardContent, Typography } from "@mui/material";
import "./developersCards.css";
import Yassine from "./images/Yassine.jpg";
import Ricci from "./images/Ricci.png";
import Mads from "./images/Mads.jpg";
import { FaLinkedin, FaGithub, FaCodepen, FaGlobe } from "react-icons/fa"; // Import icons from react-icons

const DevelopersCard = () => {
const developersData = [
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

return (
<div>  
<div className="box-with-shadow">
  <h1 className="header-about">About</h1>
  <div className="container">
        {developersData.map((developer, index) => (
          <Card key={index} className="card">
            <Image src={developer.imageUrl} wrapped ui={false} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {developer.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {developer.description}
              </Typography>
            </CardContent>
            <div className="iconContainer">
              <a href={developer.website} target="_blank" rel="noopener noreferrer" className="icon">
                <FaGlobe />
              </a>
              <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="icon">
                <FaLinkedin />
              </a>
              <a href={developer.github} target="_blank" rel="noopener noreferrer" className="icon">
                <FaGithub />
              </a>
              <a href={developer.codepen} target="_blank" rel="noopener noreferrer" className="icon">
                <FaCodepen />
              </a>
            </div>
          </Card>
        ))}
      </div> 
     
    {/* <div className="about-us-description">
 
      <p>
        We are Yassine, Riccardo, and Mads - three passionate web developers hailing from DCI. Our journey began in the virtual halls of web development learning, where the synergy of our diverse backgrounds, interests, and skills sparked the idea for this podcast.
      </p>
      <p>
        From our distinct perspectives - Yassine with his unmatched ability to sell you sand in the Sahara and linguistic prowess; Riccardo, the connoisseur of minimalistic design with an insatiable thirst for the perfect espresso; to Mads, the art-school dropout with a DIY approach to web development and life, we realized that we had a unique voice.
      </p>
      <p>
        But this podcast isn't just about us. It's a reflection of our collective experiences, challenges, and growth in the realm of web development. As we delve deeper into the MERN stack, we wanted to share our journey, and thus, this podcast website was born. It's a convergence of our love for coding, craft beer, and candid conversations. We invite you to join us on this adventure. Listen, laugh, learn, and let's navigate the dynamic world of web development together.
      </p>
    </div>  */}
  </div>
  </div>
  );
  };

export default DevelopersCard;