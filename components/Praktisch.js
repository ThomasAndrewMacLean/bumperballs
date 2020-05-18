import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import T from './Translation';
import { useStore } from '../store';

const Praktisch = () => {
  const ref = useRef();
  const { setLightHeader } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        if (entry.isIntersecting) {
          document.documentElement.style.setProperty(
            '--background-header',
            '#c2dde7'
          );
          setLightHeader(true);
        }
        if (!entry.isIntersecting && entry.boundingClientRect.y > 0) {
          document.documentElement.style.setProperty(
            '--background-header',
            '#308bae'
          );
          setLightHeader(false);
        }
      },
      {
        root: null,
        rootMargin: '10px',
        threshold: [0.5],
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);
  return (
    <PraktischDiv ref={ref} className="topBottomPadding">
      <div className="content">
        <T id={'praktischeInfo'}></T>
        <T id={'veiligheid'}></T>
        <T id={'waarborg'}></T>
        <T id={'openingsuren'}></T>
      </div>
    </PraktischDiv>
  );
};

const PraktischDiv = styled.div`
  font-weight: 200;
  background: var(--background-dark);

  p {
    padding-bottom: 1rem;
  }
  color: white;
  h2 {
    font-weight: 400;
  }
`;

export default Praktisch;
