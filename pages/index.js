import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import {
  Faq,
  Games,
  Map,
  Praktisch,
  Toaster,
  Formules,
  Footer,
  Hero,
  T,
  Reservation,
  Spacer,
} from '../components';

import { useStore } from '../store';

const IndexPage = () => {
  const { showModal, showToast } = useStore();
  return (
    <Main>
      <Head>
        <title>BMS Rent</title>
        <meta name="theme-color" content="#80ace6"></meta>

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
