import React from 'react';
import styled from 'styled-components';
import T from './Translation';
import { useStore } from '../store';

const Hero = () => {
  const { setShowModal } = useStore();
  return (
    <HeroDiv className="hero-padding">
      <Title>
        <T id="site-titel"></T>
      </Title>
      <div className="cta">
        <button onClick={() => setShowModal(true)}>
          <T id="site-cta"></T>
        </button>
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
  button {
    border: var(--border);
    background: var(--background-dark);
    color: var(--background-white);
    font-size: inherit;
    font-family: inherit;
    padding: 1rem 2rem;
    cursor: pointer;
    outline: none;

    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 300ms ease;
  }
  button:hover {
    background: var(--background-white);
    color: var(--background-dark);
  }
`;

const Title = styled.h1`
  /* color: red; */
`;
export default Hero;
