import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BallSelector = ({ max, min, step, start, price, seize }) => {
  const [numberOfBalls, setNumberOfBalls] = useState(start);

  const removeBalls = () => {
    if (numberOfBalls === min) {
      setNumberOfBalls(0);
    } else {
      setNumberOfBalls(numberOfBalls - step);
    }
  };
  const addBalls = () => {
    if (numberOfBalls === 0) {
      setNumberOfBalls(min);
    } else {
      setNumberOfBalls(numberOfBalls + step);
    }
  };
  return (
    <Wrap>
      <SelectBalls>
        <button disabled={numberOfBalls === 0} onClick={removeBalls}>
          -
        </button>
        <NumberOfBalls>{numberOfBalls}</NumberOfBalls>
        <button disabled={numberOfBalls === max} onClick={addBalls}>
          +
        </button>
      </SelectBalls>

      <div>
        {numberOfBalls} bumperballen {seize}: {numberOfBalls * price}€
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 2rem 1rem;
  display: inline-flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
const SelectBalls = styled.div`
  height: 40px;
  width: 150px;
  /* outline: 1px solid; */
  border: 3px solid black;
  border-radius: 50px;
  background: white;
  overflow: hidden;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    background: green;
    width: 30%;
    cursor: pointer;
    outline: none;
    border: none;
    height: 100%;
    font-size: inherit;
    font-family: inherit;
  }
`;
const NumberOfBalls = styled.span``;
BallSelector.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  seize: PropTypes.string.isRequired,
};
export default BallSelector;
