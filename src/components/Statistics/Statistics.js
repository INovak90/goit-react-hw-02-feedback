import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ options, countTotalFeedback, positivePercentage }) => {
  const { good, neutral, bad } = options;
  const total = countTotalFeedback();
  const Percentage = positivePercentage(total, good);
  return (
    <div>
      <h2>Statistics</h2>
      <ul className={css.statistics}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {Percentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
