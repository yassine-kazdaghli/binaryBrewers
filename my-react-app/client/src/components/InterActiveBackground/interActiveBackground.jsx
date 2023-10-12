import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const InteractiveBackground = (props) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        autoPlay: true,
        background: {
          color: "#111",
        },
        fullScreen: {
          enable: true,
          zIndex: -10,
        },
        interactivity: {
          events: {
            onClick: {
              enable:true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 50,
            },
          },
        },
        particles: {
          
          links: {
            enable:false,
            distance: 7,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 4 },
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 0.5, max: 15 },
          },
        },
      }}
    />
  );
};

export default InteractiveBackground;
