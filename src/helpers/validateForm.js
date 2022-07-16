export default function itsValid(state) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
  } = state;

  const MAX_ATTR = 90;
  const MIN_ATTR = 0;
  const MAX_SUM_ATTR = 210;
  const SUM_VAR = +cardAttr1 + +cardAttr2 + +cardAttr3;

  if (
    cardName
    && cardDescription
    && cardImage
    && cardAttr1 <= MAX_ATTR && cardAttr1 >= MIN_ATTR
    && cardAttr2 <= MAX_ATTR && cardAttr2 >= MIN_ATTR
    && cardAttr3 <= MAX_ATTR && cardAttr3 >= MIN_ATTR
    && SUM_VAR <= MAX_SUM_ATTR
  ) {
    return true;
  }
  return false;
}
