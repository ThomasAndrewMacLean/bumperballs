import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Faq from '../components/Faq';
import Games from '../components/Games';
import Map from '../components/Map';
import Praktisch from '../components/Praktisch';
import Toaster from '../components/Toaster';
import Formules from '../components/Formules';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import T from '../components/Translation';
import Reservation from '../components/Reservation';
import { useStore } from '../store';
import Spacer from '../components/Spacer';

const IndexPage = () => {
  useEffect(() => {
    if (document.location.search.includes('roboto')) {
      document.documentElement.style.setProperty('--font', 'Roboto');
    }
    if (document.location.search.includes('image')) {
      document.documentElement.style.setProperty(
        '--background-image-blend',
        '#008b8b'
      );
    }
  }, []);
  const { showModal, showToast } = useStore();
  return (
    <Main>
      <Head>
        <title>BMS Rent</title>
        <meta name="theme-color" content="#008b8b"></meta>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      {showToast && <Toaster />}
      <Hero></Hero>
      {showModal && <Reservation></Reservation>}
      <FaqWrap className="topBottomPadding">
        <h2 className="content faqTitel">
          <T id="faq-titel" />
        </h2>
        <Faq open q="watZijnBumperballen"></Faq>
        <Faq q="waarGebruiken"></Faq>
        <Faq q="voorWelkeGelegenheden"></Faq>
      </FaqWrap>
      <Games></Games>
      <Spacer />
      <Formules></Formules>
      <Spacer />
      <Praktisch></Praktisch>
      <Map></Map>
      <Footer></Footer>
      <Spacer />
    </Main>
  );
};

const Main = styled.main`
  /* background: lightblue; */
`;

const FaqWrap = styled.div`
  .faqTitel {
    padding-bottom: 1rem;
  }
  padding-bottom: 4rem;
`;
export default IndexPage;
