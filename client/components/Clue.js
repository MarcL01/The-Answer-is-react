import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  // if (props.selected) {
  //   return (<div data-testid="clue" className={'clueValue'}>{props.clueObject.question}</div>);
  // }else {
  //   return (<div data-testid="clue" className={'clueValue'} onClick={(e) => props.selectQuestion(props.clueObject)}>{props.answered ? '' : '$' + props.clueObject.value}</div>);
  // }
  
  if (selected) {
    return question;
  }

  if (answer) {
    return "";
  }
  return value;
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
