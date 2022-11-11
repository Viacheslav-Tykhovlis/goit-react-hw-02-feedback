import React from 'react';
import css from './App.module.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getNewFeedback = evt => {
    const { textContent } = evt.target;
    this.setState(prevState => ({
      [textContent]: this.state[textContent] + 1,
    }));
  };

  countTotalFeedback = evt => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = evt => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = isNaN(good / totalFeedback)
      ? 0
      : (good / totalFeedback) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.mainDiv}>
        <h1 className={css.titleH1}>Please leave feedback</h1>
        <div className={css.btnBlock}>
          <button
            type="button"
            className={css.buttonFeedback}
            onClick={this.getNewFeedback}
          >
            good
          </button>
          <button
            type="button"
            className={css.buttonFeedback}
            onClick={this.getNewFeedback}
          >
            neutral
          </button>
          <button
            type="button"
            className={css.buttonFeedback}
            onClick={this.getNewFeedback}
          >
            bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p className={css.stats}>
          Good: <span className={css.value}>{good}</span>
        </p>
        <p className={css.stats}>
          Neutral: <span className={css.value}>{neutral}</span>
        </p>
        <p className={css.stats}>
          Bad: <span className={css.value}>{bad}</span>
        </p>
        <p className={css.stats}>
          Total: <span className={css.value}>{this.countTotalFeedback()}</span>
        </p>
        <p className={css.stats}>
          Positive feedback:{' '}
          <span className={css.value}>
            {this.countPositiveFeedbackPercentage()} %
          </span>
        </p>
      </div>
    );
  }
}
