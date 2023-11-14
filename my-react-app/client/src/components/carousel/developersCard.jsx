import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Typography } from "@mui/material";
import "./developersCards.css";
import Yassine from "./images/Yassine.jpg";
import Ricci from "./images/Ricci.png";
import Mads from "./images/Mads.jpg";
import { FaLinkedin, FaGithub, FaCodepen, FaGlobe } from "react-icons/fa";


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
    description: "English and Journalism graduate still interested in bylines and hashtags, looking to exspand my skillset into Tech. Abit of frontend, abit of backend, a jack of all trades. The latest Hull ambassador stationed in Hamburg, has been described as the `archbishop of st pauli´.", // Description for Card 2
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
<h1 className="header-about">The Brewers</h1> 
<div className="box-with-shadow">
  
  <div className="container">
        {developersData.map((developer, index) => (
          <div key={index} className="card">
            <img src={developer.imageUrl} alt={developer.title} />
            <div>
              <h2>{developer.title}</h2>
              <p>{developer.description}</p>
            </div>
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
          </div>
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