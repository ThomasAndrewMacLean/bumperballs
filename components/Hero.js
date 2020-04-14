import React, { useContext } from 'react';
import styled from 'styled-components';
// import T from './Translation';
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
        {/* <T id="site-titel"></T> */}
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
    font-weight: 700;
    @media (max-width: 500px) {
      display: flex;
      justify-content: center;

      padding-top: 7rem;
    }
  }
  background: ${(props) => `url(${props.pic}) no-repeat center center`};
  background-color: var(--background-dark);
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

const Title = styled.h1`
  img {
    width: 250px;
  }
  text-shadow: 0 0 2px var(--background-dark);
`;
export default Hero;