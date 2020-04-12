import React from 'react';
import styled from 'styled-components';
import T from './Translation';
import { useStore } from '../store';

const Reservation = () => {
  const { setShowModal } = useStore();

  const submitForm = (e) => {
    e.preventDefault();

    setShowModal(false);
  };
  return (
    <ReservationWrap className="topBottomPadding">
      <Form action="" onSubmit={submitForm}>
        <h2 className="form-titel">
          <T id="site-cta" />
        </h2>
        <div className="form-content">
          <div className="input-wrap">
            <input
              className="input"
              required
              type="text"
              name="name"
              id="name"
              placeholder=" "
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-wrap">
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

          <div className="input-wrap">
            <input
              className="input"
              type="text"
              name="straat"
              id="straat"
              placeholder=" "
            />
            <label htmlFor="straat">Straat + nr</label>
          </div>
          <div className="input-wrap">
            <input
              className="input"
              type="text"
              name="stad"
              id="stad"
              placeholder=" "
            />
            <label htmlFor="stad">Postcode + stad</label>
          </div>

          <div className="input-wrap">
            <input
              className="input"
              type="tel"
              name="telephone"
              id="telephone"
              placeholder=" "
            />
            <label htmlFor="telephone">Telefoon</label>
          </div>

          <div className="input-wrap">
            <textarea
              type="text"
              className="input"
              name="comments"
              id="comments"
              placeholder=" "
            />
            <label htmlFor="comments">Opmerkingen</label>
          </div>

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
  overflow: hidden;
  width: 90vw;
  max-width: 750px;

  #submit {
    margin-top: 2rem;
  }
  .form-titel {
    padding: 1rem 3rem;
    background: var(--background-dark);
    color: var(--background-white);
    border-bottom: var(--border);
  }
  .form-content {
    padding: 3rem;
    padding-top: 1.5rem;
  }
  .input-wrap {
    display: flex;
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

    .input:not(:placeholder-shown) + label,
    .input:focus + label {
      top: 3px;
      color: #222;
      left: 0px;
      font-size: 1rem;
    }
  }
`;

export default Reservation;
