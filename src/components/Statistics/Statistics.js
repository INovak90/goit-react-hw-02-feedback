import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ options, total, positivePercentage }) => {
  const { good, neutral, bad } = options;
  return (
    <div>
      <h2>Statistics</h2>
      <ul className={css.statistics}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>Positive feedback: {positivePercentage(total, good)}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
