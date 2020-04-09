import React from 'react';
import styled from 'styled-components';
import T from './Translation';

const Praktisch = () => {
  return (
    <PraktischDiv className="topBottomPadding">
      <div className="content">
        <T id={'praktischeInfo'}></T>
        <T id={'veiligheid'}></T>
        <T id={'waarborg'}></T>
      </div>
    </PraktischDiv>
  );
};

const PraktischDiv = styled.div`
  font-weight: 200;
  background: var(--background-dark);
  color: white;
  h2 {
    font-weight: 400;
  }
`;

export default Praktisch;
