import React from 'react';
import T from './Translation';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Faq = ({ q, open }) => {
  return (
    <Wrapper className="content">
      <details open={open}>
        <summary>
          <T id={q + 'Titel'} />
        </summary>
        <T id={q} />
      </details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  details > summary::-webkit-details-marker {
    display: block;
    position: absolute;
    left: 0;
    top: 40%;
  }

  summary {
    position: relative;
    cursor: pointer;
    outline: none;
  }
  p {
    line-height: 1.6rem;
    padding-bottom: 1rem;
  }
  h2 {
    display: inline-block;
    font-size: 1.2rem;
    margin-left: 25px;
    text-decoration: none;
  }
`;

Faq.propTypes = {
  q: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default Faq;
