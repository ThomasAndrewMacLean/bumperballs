import React from 'react';
import styled from 'styled-components';
import T from './Translation';

const Footer = () => {
  return (
    <FooterWrap className="topBottomPadding">
      <div className="left">
        <T id="contactTitel"></T>
        <T id="telefoonnummer"></T>
        <T id="mail"></T>
      </div>
      <div className="right">Made with ❤️ 2020 ©</div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  font-size: 1rem;
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

  background: #8080806e;
`;

export default Footer;
