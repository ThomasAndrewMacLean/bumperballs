import React, { useContext } from 'react';
import styled from 'styled-components';
import T from './Translation';
import Calendar from './Calendar';
import BallSelector from './BallSelector';

import { useStore } from '../store';
import { TranslationContext } from '../pages/_app';
import { SAVE_RESERVATION_URL } from '../constants';

const Reservation = () => {
  const { showPricesFor, order } = useStore();
  const translationsFromContext = useContext(TranslationContext);

  const { setShowModal } = useStore();

  const getValue = (id) => {
    return document.getElementById(id).value;
  };
  const submitForm = (e) => {
    e.preventDefault();

    fetch(SAVE_RESERVATION_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Naam: getValue('name'),
        Email: getValue('email'),
        Straat: getValue('straat'),
        Postcode: getValue('postcode'),
        Stad: getValue('stad'),
        Telefoon: getValue('telephone'),
        Opmerkingen: getValue('comments'),
        Datum: getValue('picked-date'),
        Bestelling: JSON.stringify(order),
      }),
    })
      .then((x) => x.json())
      .then((y) => console.log(y));

    setShowModal(false);
  };
  return (
    <ReservationWrap
      className="topBottomPadding"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <Form
        action=""
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={submitForm}
      >
        <h2 className="form-titel">
          <T id="site-cta" />
          <span
            className="close-button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            x
          </span>
        </h2>

        <div className="form-content">
          <div className="input-line">
            <div className="input-wrap half">
              <input
                className="input"
                required
                type="text"
                name="name"
                id="name"
                placeholder=" "
              />
              <label htmlFor="name">Naam</label>
            </div>

            <div className="input-wrap half">
              <input
                className="input"
                required
                type="email"
                name="email"
                id="email"
                placeholder=" "
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="input-wrap">
            <input
              className="input"
              type="text"
              name="straat"
              id="straat"
              required
              placeholder=" "
            />
            <label htmlFor="straat">Straat + nr</label>
          </div>

          <div className="input-line">
            <div className="input-wrap kwart">
              <input
                className="input"
                type="text"
                required
                name="postcode"
                id="postcode"
                placeholder=" "
              />
              <label htmlFor="postcode">Postcode</label>
            </div>

            <div className="input-wrap driekwart">
              <input
                className="input"
                type="text"
                required
                name="stad"
                id="stad"
                placeholder=" "
              />
              <label htmlFor="stad">Stad</label>
            </div>
          </div>

          <div className="input-wrap">
            <input
              className="input"
              type="tel"
              name="telephone"
              id="telephone"
              required
              placeholder=" "
            />
            <label htmlFor="telephone">Telefoon</label>
          </div>

          <div className="input-wrap">
            <textarea
              type="text"
              className="input"
              name="comments"
              rows="5"
              id="comments"
              placeholder=" "
            />
            <label htmlFor="comments">Opmerkingen</label>
          </div>

          <Calendar />
          {showPricesFor && (
            <>
              <BallSelector
                min={4}
                addToOrder
                max={12}
                step={2}
                start={0}
                price={parseInt(
                  translationsFromContext.find(
                    (t) => t.id === 'prijs' + showPricesFor + 'Klein'
                  ).NL
                )}
                seize="120 cm"
              ></BallSelector>

              <BallSelector
                min={4}
                max={14}
                addToOrder
                step={2}
                start={4}
                price={parseInt(
                  translationsFromContext.find(
                    (t) => t.id === 'prijs' + showPricesFor + 'Groot'
                  ).NL
                )}
                seize="150 cm"
              ></BallSelector>
            </>
          )}
          <div className="input-wrap">
            <input
              className="button"
              type="submit"
              name="submit"
              id="submit"
              value="ok"
            />
          </div>
        </div>
      </Form>
    </ReservationWrap>
  );
};
const ReservationWrap = styled.div`
  position: fixed;
  background: var(--background-modal);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Form = styled.form`
  background: var(--background-white);
  border: var(--border);
  border-radius: 50px;
  overflow: scroll;
  width: 90vw;
  max-width: 750px;
  max-height: 80vh;

  #submit {
    margin-top: 2rem;
  }
  .form-titel {
    padding: 1rem 3rem;
    background: var(--background-dark);
    color: var(--background-white);
    border-bottom: var(--border);
    display: flex;
    justify-content: space-between;
    .close-button {
      cursor: pointer;
      transition: transform 300ms ease;
    }
    .close-button:hover {
      transform: scale(1.2);
    }
  }
  h2.form-titel {
    text-decoration: none;
  }
  .form-content {
    padding: 3rem;
    padding-top: 1.5rem;
    @media (max-width: 500px) {
      padding: 1rem;
    }
  }
  .input-wrap.half {
    width: calc(50% - 0.5rem);
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .input-wrap.kwart {
    width: calc(25% - 0.5rem);
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .input-wrap.driekwart {
    width: calc(75% - 0.5rem);
    @media (max-width: 700px) {
      width: 100%;
    }
  }

  .input-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .input-wrap {
    width: 100%;
    display: inline-flex;
    flex-direction: column-reverse;
    position: relative;

    .input {
      font-size: inherit;
      font-family: inherit;
      line-height: 1.6rem;
      margin-top: 1.6rem;
      background: var(--background-modal);
      outline: none;
      padding: 3px;
      border: none;
    }

    label {
      color: #777;
    }
    .input + label {
      position: absolute;
      left: 3px;
      top: 1.7rem;
      font-size: 1.3rem;
      transition: all 300ms ease;
    }

    .input[required] + label::after {
      content: '*';
    }

    .input:not(:placeholder-shown) + label,
    .input:focus + label {
      top: 3px;
      color: #222;
      left: 0px;
      font-size: 1rem;
    }
  }

  textarea {
    resize: none;
  }
  form:invalid {
    background: red;
  }
`;

export default Reservation;
