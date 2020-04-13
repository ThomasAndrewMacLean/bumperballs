import React, { useContext } from 'react';
import styled from 'styled-components';
import { useStore } from '../store';
import T from './Translation';
import { TranslationContext } from '../pages/_app';
import { calculateTotal } from '../utils';

const Summary = () => {
  const { showPricesFor, order } = useStore();
  const translationsFromContext = useContext(TranslationContext);

  return (
    <SummaryDiv>
      <ul>
        {/* <li>
          Klein * {order['120 cm']} : €
          {parseInt(
            translationsFromContext.find(
              (t) => t.id === 'prijs' + showPricesFor + 'Klein'
            ).NL
          ) * order['120 cm']}
        </li>
        <li>
          Groot * {order['150 cm']} : €
          {parseInt(
            translationsFromContext.find(
              (t) => t.id === 'prijs' + showPricesFor + 'Groot'
            ).NL
          ) * order['150 cm']}
        </li> */}
        <li>
          Waarborg : €
          {(order['120 cm'] + order['150 cm']) *
            parseInt(
              translationsFromContext.find((t) => t.id === 'prijsWaarborg').NL
            )}
        </li>

        <li>
          Totaal: €
          {calculateTotal(translationsFromContext, showPricesFor, order)}
        </li>
      </ul>
    </SummaryDiv>
  );
};

const SummaryDiv = styled.div`
  ul {
    list-style: none;

    @media (max-width: 700px) {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export default Summary;
