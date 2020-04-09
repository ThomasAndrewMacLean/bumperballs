import React from 'react';
import styled from 'styled-components';
import Faq from '../components/Faq';
import Games from '../components/Games';
import Praktisch from '../components/Praktisch';
import Formules from '../components/Formules';
import Footer from '../components/Footer';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <Main>
      <Head>
        <link rel="stylesheet" href="style.css" />
      </Head>
      <Hero>
        <Title>BMS Rent</Title>
        <div className="cta">
          <button>Huur Bumberballen</button>
        </div>
      </Hero>

      <FaqWrap>
        <h2 className="content faqTitel">Wat, waar, hoe?</h2>
        <Faq q="watZijnBumperballen"></Faq>
        <Faq q="waarGebruiken"></Faq>
        <Faq q="voorWelkeGelegenheden"></Faq>
      </FaqWrap>

      <Games></Games>

      <Formules></Formules>
      <Praktisch></Praktisch>

      <Footer></Footer>
    </Main>
  );
};

const Main = styled.main`
  /* background: lightblue; */
`;
const Hero = styled.div`
  h1 {
    padding: 2rem;
  }
  background: url('hero.jpg');
  height: 60vh;

  .cta {
    position: absolute;
    right: 10%;
    padding-top: 10rem;
  }
  button {
    border: 3px solid black;
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

const FaqWrap = styled.div`
  .faqTitel {
    padding-bottom: 1rem;
    padding-top: 2rem;
  }
  padding-bottom: 4rem;
`;
export default IndexPage;
