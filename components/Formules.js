import React, { useContext } from 'react';
import styled from 'styled-components';
import T from './Translation';
import BallSelector from './BallSelector';
import { TranslationContext } from '../pages/_app';

const Formules = () => {
  const translationsFromContext = useContext(TranslationContext);

  return (
    <FormulesDiv className="topBottomPadding">
      <div className="content">
        <T id={'formulesTitel'}></T>
        <T id={'formulesWoensdag'}></T>
        <BallSelector
          min={4}
          max={12}
          step={2}
          start={0}
          price={parseInt(
            translationsFromContext.find((t) => t.id === 'prijsWoensdagKlein')
              .NL
          )}
          seize="120 cm"
        ></BallSelector>

        <BallSelector
          min={4}
          max={14}
          step={2}
          start={4}
          price={parseInt(
            translationsFromContext.find((t) => t.id === 'prijsWoensdagGroot')
              .NL
          )}
          seize="150 cm"
        ></BallSelector>

        <T id={'formulesWeekend'}></T>
        <BallSelector
          min={4}
          max={12}
          step={2}
          start={4}
          price={parseInt(
            translationsFromContext.find((t) => t.id === 'prijsWeekendKlein').NL
          )}
          seize="120 cm"
        ></BallSelector>

        <BallSelector
          min={4}
          max={14}
          step={2}
          start={4}
          price={parseInt(
            translationsFromContext.find((t) => t.id === 'prijsWeekendGroot').NL
          )}
          seize="150 cm"
        ></BallSelector>
        <T id={'formulesAnders'}></T>
      </div>
    </FormulesDiv>
  );
};

const FormulesDiv = styled.div`
  background: var(--background-white);
`;

export default Formules;
