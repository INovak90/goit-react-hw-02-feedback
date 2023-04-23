import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './Container.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = name => {
    const getKeys = Object.keys(this.state);
    if (getKeys.includes(name)) {
      this.setState(prevState => {
        return { [name]: prevState[name] + 1 };
      });
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };
  countPositiveFeedbackPercentage = (callback, el) => {
    return callback() ? Math.round((el / callback()) * 100) : '0';
  };

  render = () => (
    <div className={css.container}>
      <Section>
        <ul className={css['list-button']}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </ul>
        {this.state.good + this.state.neutral + this.state.bad !== 0 ? (
          <Statistics
            options={this.state}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
}
