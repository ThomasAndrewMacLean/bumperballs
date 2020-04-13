import React from 'react';
import styled from 'styled-components';
import T from './Translation';
import CTA from './CTA';

const Hero = () => {
  return (
    <HeroDiv className="hero-padding">
      <Title>
        <T id="site-titel"></T>
      </Title>
      <div className="cta">
        <CTA></CTA>
      </div>
    </HeroDiv>
  );
};

const HeroDiv = styled.div`
  h1 {
    padding: 2rem;
  }
  background: url('hero.jpg');
  height: 60vh;

  .hero-padding {
    width: 80vw;
    margin: auto;
    position: relative;
  }
  .cta {
    position: absolute;
    right: 10%;
    padding-top: 10rem;
  }
  
`;

const Title = styled.h1`
  /* color: red; */
`;
export default Hero;
