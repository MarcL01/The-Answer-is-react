import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue';
import Categories from './Categories';

const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      {props.currentQuestion.question ? 
      <Clue 
        selected={true} 
        clueObject={props.currentQuestion}
      /> : 
      <Categories
        categories={props.categories}
        selectQuestion={props.selectQuestion}
        answeredQuestions={props.answeredQuestions}
      /> }
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
