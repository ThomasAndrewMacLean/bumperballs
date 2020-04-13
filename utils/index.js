export const calculateTotal = (
  translationsFromContext,
  showPricesFor,
  order
) => {
  return (
    parseInt(
      translationsFromContext.find(
        (t) => t.id === 'prijs' + showPricesFor + 'Klein'
      ).NL
    ) *
      order['120 cm'] +
    parseInt(
      translationsFromContext.find(
        (t) => t.id === 'prijs' + showPricesFor + 'Groot'
      ).NL
    ) *
      order['150 cm'] +
    (order['120 cm'] + order['150 cm']) *
      parseInt(translationsFromContext.find((t) => t.id === 'prijsWaarborg').NL)
  );
};
