import PropTypes from 'prop-types';

export const ContactLabel = ({ text, className }) => {
  return <p className={`text-label font-extralight ${className}`}>{text}</p>;
};

ContactLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

