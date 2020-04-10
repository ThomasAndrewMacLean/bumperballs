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
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="input-wrap">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="input-wrap">
            <label htmlFor="straat">Straat + nr</label>
            <input type="text" name="straat" id="straat" />
          </div>
          <div className="input-wrap">
            <label htmlFor="stad">Postcode + stad</label>
            <input type="text" name="stad" id="stad" />
          </div>

          <div className="input-wrap">
            <label htmlFor="telephone">Telefoon</label>
            <input type="tel" name="telephone" id="telephone" />
          </div>

          <div className="input-wrap">
            <label htmlFor="comments">Opmerkingen</label>
            <textarea type="text" name="comments" id="comments" />
          </div>

          <div className="input-wrap">
            <input
              className="button"
              type="submit"
              name="telephone"
              id="telephone"
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
  .form-titel {
    padding: 1rem 3rem;
    background: var(--background-dark);
    color: var(--background-white);
    border-bottom: var(--border);
  }
  .form-content {
    padding: 3rem;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
  }
`;

export default Reservation;
