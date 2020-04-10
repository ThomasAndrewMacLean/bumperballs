import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Faq from '../components/Faq';
import Games from '../components/Games';
import Praktisch from '../components/Praktisch';
import Formules from '../components/Formules';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Reservation from '../components/Reservation';
import { useStore } from '../store';

const IndexPage = () => {
  const { showModal } = useStore();
  return (
    <Main>
      <Head>
        <link rel="stylesheet" href="style.css" />
      </Head>
      <Hero></Hero>
      {showModal && <Reservation></Reservation>}
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

const FaqWrap = styled.div`
  .faqTitel {
    padding-bottom: 1rem;
    padding-top: 2rem;
  }
  padding-bottom: 4rem;
`;
export default IndexPage;
