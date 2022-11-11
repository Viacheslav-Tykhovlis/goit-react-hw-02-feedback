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

  render() {
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
          Good: <span className={css.value}>{this.state.good}</span>
        </p>
        <p className={css.stats}>
          Neutral: <span className={css.value}>{this.state.neutral}</span>
        </p>
        <p className={css.stats}>
          Bad: <span className={css.value}>{this.state.bad}</span>
        </p>
      </div>
    );
  }
}
