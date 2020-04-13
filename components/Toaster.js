import React, { useEffect } from 'react';
import T from './Translation';
import styled from 'styled-components';
import { useStore } from '../store';

const Toaster = () => {
  const { setShowToast } = useStore();
  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  }, []);
  return (
    <Toast>
      <T id="bevestigingstekst"></T>
    </Toast>
  );
};

const Toast = styled.div`
  background: var(--background-dark);
  color: var(--background-white);
  font-size: 1.5rem;
  padding: 2rem;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`;
export default Toaster;
