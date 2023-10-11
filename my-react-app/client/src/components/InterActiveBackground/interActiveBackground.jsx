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
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 100,
            },
          },
        },
        particles: {
          links: {
            enable: true,
            distance: 200,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 10 },
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          size: {
            value: { min: 0.5, max: 3 },
          },
        },
      }}
    />
  );
};

export default InteractiveBackground;
