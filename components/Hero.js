import React, { useContext } from 'react';
import styled from 'styled-components';
import T from './Translation';
import CTA from './CTA';
import { PictureContext } from '../pages/_app';

const Hero = () => {
  const pics = useContext(PictureContext);
  const p = pics.find((p) => p.id === 'heroPic').pic[0].url;
  const logo = pics.find((p) => p.id === 'logo').pic[0].url;

  return (
    <HeroDiv pic={p} className="hero-padding">
      <Title>
        <img src={logo} alt="" />
        <h1>
          <T id="site-titel"></T>
        </h1>
      </Title>
      <div className="cta">
        <CTA inverse></CTA>
      </div>
    </HeroDiv>
  );
};

const HeroDiv = styled.div`
  background: ${(props) => `url(${props.pic}) no-repeat center center`};
  background-color: var(--background-image-blend);
  background-blend-mode: luminosity;

  background-size: cover;
  height: 75vh;
  position: relative;

  .hero-padding {
    width: 80vw;
    margin: auto;
    position: relative;
  }
  .cta {
    position: absolute;
    right: 10%;
    bottom: 25%;

    @media (max-width: 500px) {
      position: inherit;
      display: flex;
      justify-content: center;
      right: auto;
      bottom: auto;
      padding-top: 2rem;
    }
  }
`;

const Title = styled.div`
  padding: 2rem;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    padding-top: 7rem;
  }
  img {
    width: 250px;
    transition: transform 300ms ease;
  }
  img:hover {
    transform: scale(1.2) rotate(-10deg);
  }
  h1 {
    position: absolute;
    top: -100%;
  }
`;
export default Hero;
