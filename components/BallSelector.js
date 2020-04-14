import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useStore } from '../store';

const BallSelector = ({ addToOrder, max, min, step, start, price, seize }) => {
  const { setOrder } = useStore();
  const [numberOfBalls, setNumberOfBalls] = useState(start);

  const removeBalls = () => {
    if (numberOfBalls === min) {
      if (addToOrder) setOrder(0, seize);
      setNumberOfBalls(0);
    } else {
      if (addToOrder) setOrder(numberOfBalls - step, seize);
      setNumberOfBalls(numberOfBalls - step);
    }
  };
  const addBalls = () => {
    if (numberOfBalls === 0) {
      if (addToOrder) setOrder(min, seize);
      setNumberOfBalls(min);
    } else {
      if (addToOrder) setOrder(numberOfBalls + step, seize);
      setNumberOfBalls(numberOfBalls + step);
    }
  };
  return (
    <Wrap>
      <SelectBalls>
        <button
          type="button"
          disabled={numberOfBalls === 0}
          onClick={removeBalls}
        >
          -
        </button>
        <NumberOfBalls>{numberOfBalls}</NumberOfBalls>
        <button
          className="bg-hack"
          type="button"
          disabled={numberOfBalls === max}
          onClick={addBalls}
        >
          +
        </button>
      </SelectBalls>

      <div>
        {numberOfBalls} bumperballen {seize}: €{numberOfBalls * price}
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
  height: 45px;
  width: 150px;
  /* outline: 1px solid; */
  border: var(--border);
  border-radius: 50px;
  background: white;
  overflow: hidden;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    background: var(--background-dark);
    width: 30%;
    outline: none;
    border: none;
    height: 100%;
    font-size: inherit;
    font-family: inherit;
  }
  button:not([disabled]) {
    cursor: pointer;
  }

  button:not([disabled]):hover {
    background: var(--background-modal);
  }
  .bg-hack {
    position: relative;
  }
  .bg-hack::after {
    content: '';
    display: block;
    background: var(--background-dark);
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0;
    right: -5px;
  }

  .bg-hack:hover::after {
    background: none;
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
  addToOrder: PropTypes.bool,
};
export default BallSelector;
