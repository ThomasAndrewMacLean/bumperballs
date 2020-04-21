import React from 'react';
import styled from 'styled-components';
import T from './Translation';

const Footer = () => {
  return (
    <FooterWrap className="topBottomPadding">
      <div className="left">
        <T id="contactTitel"></T>
        <T id="site-titel"></T>
        <T id="btwNummer"></T>

        <T id="telefoonnummer"></T>
        <T id="mail"></T>
        <T id="adres"></T>
      </div>
      <div className="right">
        Made with ❤️ {new Date().getFullYear()} ©{' '}
        <a href="https://westerling-maclean.be" rel="noopener noreferrer nofollow" target="_blank">
          Westerling&nbsp;&amp;&nbsp;MacLean
        </a>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  font-size: 1rem;
  padding: 4rem 2rem;
  font-weight: 200;
  h2 {
    text-decoration: none;
  }
  a {
    color: inherit;
  }
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;

  .left,
  .right {
    max-width: 50%;
    min-width: 200px;
  }

  .right {
    padding-top: 2rem;
  }
  background: var(--background-modal);
`;

export default Footer;
