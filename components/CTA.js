import React from 'react';
import { useStore } from '../store';
import T from './Translation';

const CTA = ({ inverse }) => {
  const { setShowModal } = useStore();

  return (
    <button
      className={inverse ? 'inverse button' : 'button'}
      onClick={() => setShowModal(true)}
    >
      <T id="site-cta"></T>
    </button>
  );
};

export default CTA;
