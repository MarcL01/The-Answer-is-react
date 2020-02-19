import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import Response from './Response';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  onSelectQuestion(clue) {
    this.setState({
      currentQuestion: clue
    });
  }
  checkAnswer(answer) {
    if (answer.toLowerCase() === this.state.currentQuestion.answer.toLowerCase()) {
      this.setState((state, props) => ({
        score: state.score + state.currentQuestion.value,
        answeredQuestions: [...state.answeredQuestions, state.currentQuestion.id],
        currentQuestion: {},
      }));
      //correct
    }else {
      this.setState((state, props) => ({
        score: state.score - state.currentQuestion.value,
        answeredQuestions: [...state.answeredQuestions, state.currentQuestion.id],
        currentQuestion: {},
      }));
      //incorrect
    }
  }
  render() {
    return (
      <div id={'app'}>
        What is Reactor 2?
        <Gameboard categories={this.state.results} currentQuestion={this.state.currentQuestion} answeredQuestions={this.state.answeredQuestions} selectQuestion={this.onSelectQuestion.bind(this)}></Gameboard>
        <Scoreboard score={this.state.score}></Scoreboard>
        <Response submitResponse={this.checkAnswer.bind(this)}></Response>
      </div>
    );
  }
}
