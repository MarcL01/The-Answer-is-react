import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue';

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      {/* display category */}
      <div className={'categoryTitle'} data-testid="categoryTitle">{props.title.toUpperCase()}</div>
      {/* display clues for each category */}
      {props.clues.map((clue, i) => {
        return (<Clue
          clueObject={clue}
          key={'clue_' + i}
          selectQuestion={props.selectQuestion}
          answered={props.answeredQuestions.includes(clue.id)}
        />);
      })}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
