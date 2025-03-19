import PropTypes from 'prop-types';

export const Title = ({ title, accent, className = '' }) => {
  return (
    <h2
      className={`text-title-m md:text-title-t xl:text-title-d font-thin uppercase ${className}`}
    >
      {title} <span className="font-medium">{accent}</span>
    </h2>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired,
  className: PropTypes.string,
};

