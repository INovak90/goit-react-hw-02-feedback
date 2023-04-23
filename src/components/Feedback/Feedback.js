import { Button } from './Feedback.styled';
import PropTypes from 'prop-types';
export const Feedback = ({ items, leaveFeedback }) => {
  const getKeys = Object.keys(items);

  return getKeys.map(name => (
    <li key={name}>
      <Button
        onClick={() => {
          leaveFeedback(name);
        }}
        type="button"
      >
        {name}
      </Button>
    </li>
  ));
};

Feedback.propTypes = {
  items: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  leaveFeedback: PropTypes.func.isRequired,
};
