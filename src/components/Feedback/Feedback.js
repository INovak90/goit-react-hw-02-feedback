import css from './Fedback.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(name => (
    <li key={name}>
      <button
        className={css['feedback-button']}
        onClick={() => {
          onLeaveFeedback(name);
        }}
        type="button"
      >
        {name}
      </button>
    </li>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
