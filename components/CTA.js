import React from 'react';
import { useStore } from '../store';
import T from './Translation';

const CTA = () => {
  const { setShowModal } = useStore();

  return (
    <button className="button" onClick={() => setShowModal(true)}>
      <T id="site-cta"></T>
    </button>
  );
};

export default CTA;
