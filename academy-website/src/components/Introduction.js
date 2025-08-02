import React, { useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styled from 'styled-components';

const IntroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 0;
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 2;
  
  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    text-shadow: 0 4px 15px rgba(0,0,0,0.4);
  }

  p {
    font-size: 1.5rem;
    color: var(--text-color-darker);
    margin: 1.5rem 0 2.5rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }
`;

function Introduction() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "var(--primary-color)",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <IntroSection id="home">
      <ParticleContainer>
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </ParticleContainer>
      <ContentContainer>
        <h1 className="gradient-text">Quantum Leap with Narnia</h1>
        <p>차세대 AI 교육의 표준, 나니아 아카데미와 함께 미래를 코딩하세요.</p>
        <Button className="gradient-btn" size="lg" href="#camps">
          핵심 과정 둘러보기
        </Button>
      </ContentContainer>
    </IntroSection>
  );
}

export default Introduction;
