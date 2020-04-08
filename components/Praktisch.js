import React from 'react';
import styled from 'styled-components';
import T from './Translation';

const Praktisch = () => {
  return (
    <PraktischDiv>
      <T id={'praktischeInfo'}></T>
      <T id={'veiligheid'}></T>
      <T id={'waarborg'}></T>
    </PraktischDiv>
  );
};

const PraktischDiv = styled.div``;

export default Praktisch;
