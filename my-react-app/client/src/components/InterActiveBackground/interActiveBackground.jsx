import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const InteractiveBackground = (props) => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const getRandomBrightColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
        color: props.currentTheme === "light" ? "#fff" : "#111",
      },
        fullScreen: {
          enable: true,
          zIndex: -10,
        },
        interactivity: {
          events: {
           
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            push: {
              quantity: 100,
              size:150,
            },
            bubble: {
              distance: 650,
              duration: 22,
              opacity: 0,
              size: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: ["#EDE1D5","#ffffff","#000000"]
          // 
           // animation: {
             // enable: true,
            //  speed: 20,
              //sync: true
            //}
          },
          lineLinked: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 600,
              },
            },
            bounce: true,
            direction: "none",
            enable: true,
            outMode: "out",
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 160,
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0.5,
              speed: 1,
              sync: true,
            },
            random: true,
            value: 1,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "800",
            },
            polygon: {
              nb_sides: 5,
            },
            stroke: {
              color: "#000000",
              width: 0,
            },
            type: "circle",
          },
          size: {
            anim: {
              enable: false,
              size_min: 6,
              speed: 4,
              sync: false,
            },
            random: true,
            value: 3,
          },
        },
        polygon: {
          draw: {
            enable: true,
            lineColor: "#000000",
            lineWidth: 0.2,
          },
          move: {
            radius: 25,
          },
          scale: 2,
          type: "none",
          url: "",
        },
        retina_detect: true,
        fn: {
          changeColor: function (particles) {
            particles.array.forEach((particle) => {
              if (particle.particles.bubble.clicking) {
                particle.color.value = getRandomBrightColor();
              }
            });
          },
        },
      }}
    />
  );
};

export default InteractiveBackground;
