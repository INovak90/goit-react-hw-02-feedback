import { ListStatistics } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ items: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  return (
    <div>
      <h2>Statistics</h2>
      <ListStatistics>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback:{' '}
          {total === 0 ? '0' : Math.round((good / total) * 100)}%
        </li>
      </ListStatistics>
    </div>
  );
};

Statistics.propTypes = {
  items: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
