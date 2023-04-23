import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container/Container';
import { ListButton } from './ListButton.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = name => {
    const getKeys = Object.keys(this.state);
    if (getKeys.includes(name)) {
      this.setState(prevState => {
        return { [name]: prevState[name] + 1 };
      });
    }
  };

  render = () => (
    <Container>
      <GlobalStyle />
      <h1>Please leave feedback</h1>
      <ListButton>
        <Feedback items={this.state} leaveFeedback={this.leaveFeedback} />
      </ListButton>
      {this.state.good + this.state.neutral + this.state.bad !== 0 && (
        <Statistics items={this.state} />
      )}
    </Container>
  );
}
