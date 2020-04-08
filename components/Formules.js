import React from 'react';
import styled from 'styled-components';
import T from './Translation';

const Formules = () => {
  return (
    <FormulesDiv className="topBottomPadding">
      <div className="content">
        <T id={'formules'}></T>{' '}
      </div>
    </FormulesDiv>
  );
};

const FormulesDiv = styled.div`
  background: #22f080bf;
`;

export default Formules;
