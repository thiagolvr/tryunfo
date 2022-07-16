import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      previewCard,
      deleteCard,
    } = this.props;

    return (
      <div className="card-content">
        <p data-testid="name-card">{cardName}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo && (
          <p data-testid="trunfo-card">Super Trunfo</p>
        )}
        { !previewCard && (
          <button
            data-testid="delete-button"
            type="button"
            name={ cardName }
            onClick={ (e) => deleteCard(e) }
          >
            Deletar

          </button>
        )}
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  previewCard: PropTypes.bool,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  deleteCard: () => {},
  previewCard: true,
};
