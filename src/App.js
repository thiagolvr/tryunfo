import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import validateForm from './helpers/validateForm';
import './style/style.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  hasTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
      savedCards: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  handleChange({ target }) {
    const { value, name, checked, type } = target;
    this.setState(
      {
        [name]: type === 'checkbox' ? checked : value,
      },
      () => this.setState((prevState) => ({
        isSaveButtonDisabled: !validateForm(prevState),
      })),
    );
  }

  onSaveButtonClick() {
    this.setState(({ savedCards, ...rest }) => ({
      savedCards: [...savedCards, { ...rest }],
      ...INITIAL_STATE,
    }));
    this.setState(({ savedCards }) => ({
      hasTrunfo: savedCards.some(({ cardTrunfo }) => cardTrunfo),
    }));
  }

  deleteCard({ target: { name } }) {
    const { savedCards } = this.state;
    this.setState({
      savedCards: savedCards.filter(({ cardName }) => cardName !== name),
    });
    this.setState({
      hasTrunfo: savedCards.some(({ hasTrunfo }) => hasTrunfo),
    });
  }

  render() {
    const {
      state: { isSaveButtonDisabled, savedCards },
      handleChange,
      onSaveButtonClick,
      // deleteCard,
    } = this;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />

        {savedCards.map((card, index) => (
          <div key={ index }>
            <Card
              { ...card }
              previewCard={ false }
              deleteCard={ this.deleteCard }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
