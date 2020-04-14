import React, { useContext } from 'react';
import styled from 'styled-components';
import T from './Translation';
import CTA from './CTA';
import { PictureContext } from '../pages/_app';

const Hero = () => {
  const pics = useContext(PictureContext);
  const p = pics.find((p) => p.id === 'heroPic').pic[0].url;

  return (
    <HeroDiv pic={p} className="hero-padding">
      <Title>
        <T id="site-titel"></T>
      </Title>
      <div className="cta">
        <CTA inverse></CTA>
      </div>
    </HeroDiv>
  );
};

const HeroDiv = styled.div`
  h1 {
    padding: 2rem;
    color: white;
    font-size: 3rem;
    text-shadow: 0 0 2px #8e6464;
  }
  background: ${(props) => `url(${props.pic}) no-repeat center center`};
  background-color: var(--background-dark);
  background-blend-mode: luminosity;

  background-size: cover;
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
  text-shadow: 0 0 2px var(--background-dark);
`;
export default Hero;
