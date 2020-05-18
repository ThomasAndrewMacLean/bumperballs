import React from 'react';
import { useStore } from '../store';
import T from './Translation';
import styled from 'styled-components';

const CTA = ({ inverse, inHeader }) => {
  const { setShowModal } = useStore();

  return (
    <Button
      inHeader={inHeader}
      className={inverse ? 'inverse button' : 'button'}
      onClick={() => setShowModal(true)}
    >
      <T id="site-cta"></T>
    </Button>
  );
};

const Button = styled.button`
  @media (max-width: 400px) {
    font-size: ${(props) => props.inHeader && '0.7rem !important'};
  }
`;

export default CTA;
