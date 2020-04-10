import React from 'react';
import styled from 'styled-components';
import T from './Translation';

const Games = () => {
  return (
    <Clip>
      <GameDiv className="topBottomPadding">
        <svg height="0" width="0">
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z" />
          </clipPath>
        </svg>
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
    </Clip>
  );
};

const Clip = styled.div`
  clip-path: url(#wave);
`;
const GameDiv = styled.div`
  background: var(--background-dark);

  ul {
    list-style: none;
    display: flex;
    margin-left: 0;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    width: 30%;
    background-color: #fff;
    border:  var(--border);
    /* box-shadow: 3px 3px 6px 0px #531bad1a; */
    text-align: center;
    padding: 1rem;
    @media (max-width: 700px) {
      width: 100%;

      margin-bottom: 1rem;
    }
  }
  h2 {
    text-align: center;
    padding-bottom: 2rem;
    color: white;
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
