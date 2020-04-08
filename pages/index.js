import React from 'react';
import styled from 'styled-components';
import T from '../components/Translation';
import Faq from '../components/Faq';
import Games from '../components/Games';
import Praktisch from '../components/Praktisch';
import Formules from '../components/Formules';

const IndexPage = () => {
  return (
    <Main>
      <Hero>
        <Title>BMS Rent</Title>
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
    </Main>
  );
};

const Main = styled.main`
  background: lightblue;
`;
const Hero = styled.div`
  background: url('hero.jpg');
  height: 60vh;
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
