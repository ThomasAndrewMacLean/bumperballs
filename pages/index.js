import React from 'react';
import styled from 'styled-components';
import T from '../components/Translation';

const IndexPage = () => {
  return (
    <div>
      <Title>My First Next.js Page</Title>
      <T id={'watZijnBumperballen'}></T>
    </div>
  );
};

const Title = styled.h1`
  color: red;
`;

export default IndexPage;
