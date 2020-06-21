import React, { useContext, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import T from './Translation';
import CTA from './CTA';
import SocialMedia from './SocialMedia';
import { PictureContext } from '../pages/_app';
import { useStore } from '../store';

const Hero = () => {
  const pics = useContext(PictureContext);
  const heroPic = pics.find((p) => p.id === 'heroPic').pic[0].url;
  const logo = pics.find((p) => p.id === 'logo').pic[0].url;
  const [showSmallLogo, setShowSmallLogo] = useState(false);
  const { lightHeader } = useStore();

  const ref = useRef();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowSmallLogo(true);
        }
        if (entry.isIntersecting) {
          setShowSmallLogo(false);
        }
      },
      {
        root: null,
        rootMargin: '25px',
        threshold: 0,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <HeroDiv pic={heroPic} className="hero-padding">
      <Title>
        <img src={logo} alt="BMS rent logo" ref={ref} />
        <h1>
          <T id="site-titel"></T>
        </h1>
      </Title>
      <div className="cta">
        <CTA inverse></CTA>
        <SocialMedia />
      </div>
      <SmallLogo showSmallLogo={showSmallLogo}>
        <img
          src={logo}
          alt="BMS rent logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <CtaWrapper>
          <CTA inHeader inverse={!lightHeader}></CTA>
        </CtaWrapper>
      </SmallLogo>
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
      flex-direction: column;
      max-width:90%;
      margin:auto;
      justify-content: center;
      right: auto;
      bottom: auto;
      padding-top: 2rem;
    }
  }
`;

const CtaWrapper = styled.div``;
const SmallLogo = styled.div`
  ${CtaWrapper} {
    display: none;
  }
  position: fixed;
  height: 75px;
  transition: transform 250ms ease-in;
  transform: ${(props) =>
    props.showSmallLogo ? 'translateY(0)' : 'translateY(-170%)'};
  margin: 2rem;
  top: 0;
  z-index: 1;
  img {
    height: 100%;
    transition: transform 250ms ease-in;
    &:hover {
      transform: ${(props) =>
        props.showSmallLogo
          ? 'translateY(0) scale(1.1) rotate(-10deg)'
          : 'translateY(-250%)'};
    }
  }
  @media (max-width: 1100px) {
    height: 50px;
  }
  @media (max-width: 910px) {
    ${CtaWrapper} {
      display: block;
      margin-left: auto;
    }
    transform: ${(props) =>
      props.showSmallLogo ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 350ms ease-in-out, background-color 250ms ease-in;
    height: 100px;
    margin: 0;
    padding: 1rem;
    background: var(--background-header);
    width: 100%;
    box-shadow: 0px 0px 35px 10px #70809080;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 50%; */

    /* If we want border radius we set this as after block TODO:also fix transition */
    /* &::after {
      content: '';
      display: block;
      background: var(--background-header);
      width: 100%;
      height: 50%;
      top: 0;
      position: absolute;
      z-index: -1;
    } */
  }
`;

const Title = styled.div`
  padding: 2rem;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    padding-top: 6rem;
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
