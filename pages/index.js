import React from 'react';
import styled from 'styled-components';
import T from '../components/Translation';

const IndexPage = () => {
  return (
    <Main>
      <Hero>
        <Title>BMS Rent</Title>
        <T id={'watZijnBumperballen'}></T>
      </Hero>
      <Div>
        <T id={'waarGebruiken'}></T>
      </Div>
      <Div>
        <T id={'voorWelkeGelegenheden'}></T>
      </Div>
      <Div>
        <T id={'welkeSpelletjes'}></T>
      </Div>
      <Div>
        <T id={'veiligheid'}></T>
      </Div>
      <Div>
        <T id={'praktischeInfo'}></T>
      </Div>
      <Div>
        <T id={'waarborg'}></T>
      </Div>
      <Div>
        <T id={'formules'}></T>
      </Div>
    </Main>
  );
};

const Main = styled.main`
  margin: auto;
  max-width: 800px;
  background: lightblue;
`;
const Hero = styled.div`
  padding: 2rem 4rem;
  background: green;
`;
const Title = styled.h1`
  /* color: red; */
`;

const Div = styled.div`
  padding: 0 4rem;
`;

export default IndexPage;
