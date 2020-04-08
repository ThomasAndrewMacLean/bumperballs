import React from 'react';
import styled from 'styled-components';
import T from './Translation';

const Games = () => {
  return (
    <GameDiv className="topBottomPadding">
      <div className="content">
        <T id={'welkeSpelletjes'}></T>
        <ul>
          <li>
            <T id={'voetbalTornooi'}></T>
          </li>
          <li>
            <T id={'lastManStanding'}></T>
          </li>
          <li>
            <T id={'veroverDeVlag'}></T>
          </li>
        </ul>
      </div>
    </GameDiv>
  );
};

const GameDiv = styled.div`
  background: var(--background-light);

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 30%;
    background-color: #fff;
    box-shadow: 3px 3px 6px 0px #531bad1a;
    text-align: center;
    padding: 1rem;
  }
  h2 {
    text-align: center;
    padding-bottom: 2rem;
  }
  h3 {
    font-size: 1rem;

    word-break: break-word;
  }
  p {
    line-height: 1.3rem;
    font-size: 0.8rem;
    padding-top: 1rem;
  }
`;
export default Games;
