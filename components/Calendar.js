import React, { useState, useRef } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { useStore } from '../store';

const Calender = () => {
  const { setShowPricesFor } = useStore();
  const inputRef = useRef(null);
  const [days, setDays] = useState(
    new Array(
      dayjs().date(dayjs().daysInMonth()).day() === 6
        ? dayjs().daysInMonth() + 1
        : dayjs().daysInMonth()
    )
      .fill('test')
      .map((_, i) => {
        return dayjs().date(i + 1);
      })
  );
  const [year, setYear] = useState(dayjs().year());
  const [offSetDate, setOffsetDate] = useState(dayjs().month() + 1);
  const maanden = [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december',
  ];
  const [month, setMonth] = useState(dayjs().month());
  // plus min gebruiken we om te zien in welke richting we gaan
  // als we switchen moeten we eentje overslaan
  const [plus, setPlus] = useState(true);
  const [min, setMin] = useState(false);

  const [addedDays, setAddedDays] = useState([]);
  const boekbareDagen = [3, 6, 0];
  const addDate = (dayInWeek, index) => {
    if (!boekbareDagen.includes(dayInWeek)) return;
    if (dayInWeek === 6) {
      setShowPricesFor('Weekend');
      inputRef.current.value =
        parseInt(index + 1) +
        ', ' +
        parseInt(index + 2) +
        ' ' +
        maanden[month] +
        ' ' +
        year;
      setAddedDays([index, index + 1]);
      return;
    }
    if (dayInWeek === 0) {
      setShowPricesFor('Weekend');

      inputRef.current.value =
        parseInt(index) +
        ', ' +
        parseInt(index + 1) +
        ' ' +
        maanden[month] +
        ' ' +
        year;
      setAddedDays([index, index - 1]);
      return;
    }
    setShowPricesFor('Woensdag');

    inputRef.current.value =
      parseInt(index + 1) + ' ' + maanden[month] + ' ' + year;
    setAddedDays([index]);
  };

  const previousMonth = () => {
    setAddedDays([]);
    setShowPricesFor('');

    inputRef.current.value = '';
    setMin(true);
    let tempOff;
    if (plus) {
      setPlus(false);
      tempOff = offSetDate - 2;
      setOffsetDate(offSetDate - 2);
    } else {
      tempOff = offSetDate - 1;
      setOffsetDate(offSetDate - 1);
    }

    setMonth(dayjs().set('month', tempOff).month());

    setDays(
      new Array(
        dayjs()
          .set('month', tempOff)
          .date(dayjs().set('month', tempOff).daysInMonth())
          .day() === 6
          ? dayjs().set('month', tempOff).daysInMonth() + 1
          : dayjs().set('month', tempOff).daysInMonth()
      )
        .fill('test')
        .map((_, i) => {
          // let days = [...Array(monthDate.daysInMonth())].map((_, i) => {
          return dayjs()
            .set('month', tempOff)
            .date(i + 1);
        })
    );

    setYear(dayjs().set('month', tempOff).year());
  };

  const nextMonth = () => {
    setAddedDays([]);
    setShowPricesFor('');
    inputRef.current.value = '';

    let tempOff;
    setPlus(true);
    if (min) {
      tempOff = offSetDate + 1;
      setOffsetDate(offSetDate + 2);
      setMin(false);
    } else {
      tempOff = offSetDate;
      setOffsetDate(offSetDate + 1);
    }
    setMonth(dayjs().set('month', tempOff).month());

    setDays(
      new Array(
        dayjs()
          .set('month', tempOff)
          .date(dayjs().set('month', tempOff).daysInMonth())
          .day() === 6
          ? dayjs().set('month', tempOff).daysInMonth() + 1
          : dayjs().set('month', tempOff).daysInMonth()
      )
        .fill('test')
        .map((_, i) => {
          // let days = [...Array(monthDate.daysInMonth())].map((_, i) => {
          return dayjs()
            .set('month', tempOff)
            .date(i + 1);
        })
    );
    setYear(dayjs().set('month', tempOff).year());
  };
  return (
    <Calendar>
      <h3>
        <span className="click" onClick={previousMonth}>
          -
        </span>
        <span className="title">
          {maanden[month]} {year}
        </span>
        <span className="click" onClick={nextMonth}>
          +
        </span>
      </h3>
      <input ref={inputRef} type="text" required id="picked-date" />
      <div id="calendar">
        {['M', 'D', 'W', 'D', 'V', 'Z', 'Z'].map((dayName, index) => (
          <div key={index}>{dayName}</div>
        ))}
        {days.map((day, index) => (
          <div
            onClick={() => addDate(day.day(), index)}
            key={index}
            className={
              boekbareDagen.includes(day.day())
                ? addedDays.includes(index)
                  ? 'geboekt boekbaar'
                  : 'boekbaar'
                : ''
            }
            style={{ gridColumn: day.day() || 7 }}
          >
            {day.format('D')}
          </div>
        ))}
      </div>
    </Calendar>
  );
};

const Calendar = styled.div`
  max-width: 400px;
  margin: 2rem auto;

  h3 {
    display: flex;
    justify-content: center;
    padding: 1rem 0;

    .title {
      width: 75%;
      display: flex;
      justify-content: center;
    }
    .click {
      position: relative;
      cursor: pointer;
      transition: transform 300ms ease;
    }
    .click::after {
      content: '';
      position: absolute;
      display: block;
      padding: 2rem;
      top: -1rem;
      left: -1rem;
    }
    .click:hover {
      transform: scale(1.2);
    }
  }

  #calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 30px;
    width: 100%;
  }

  #calendar > * {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  #calendar > *:hover {
    /* color: green; */
    user-select: none;
  }

  #calendar > *::before {
    content: '';
    display: inline-block;
    height: 0;
    padding-bottom: 100%;
    width: 1px;
  }

  #calendar > *.today {
    border: 0.1em solid red;
    color: white;
    border-radius: 100%;
  }

  .boekbaar {
    background: var(--background-modal);
    border-radius: 100px;
    cursor: pointer;
    margin: 4px;
  }
  .boekbaar:hover {
    color: var(--background-dark);
  }
  .boekbaar.geboekt {
    background: var(--background-dark);
    color: var(--background-white);
  }

  #picked-date {
    height: 0;
    opacity: 0;
    border: none;
    pointer-events: none;
  }
`;
export default Calender;
