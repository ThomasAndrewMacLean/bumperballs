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
  background: #95f080bf;
`;

export default Praktisch;
