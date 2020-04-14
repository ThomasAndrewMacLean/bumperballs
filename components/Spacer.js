import React from 'react';
import styled from 'styled-components';

const Spacer = () => {
  return <Stripes></Stripes>;
};

const Stripes = styled.div`
  height: 10px;
  margin-top: -1px;
  background-image: var(--stripes);
  background-size: 500px 500px;
`;
export default Spacer;
