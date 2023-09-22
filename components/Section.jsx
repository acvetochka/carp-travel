import PropTypes from 'prop-types';

const Section = ({ id = 'null', children, className }) => {
  return (
    <section
      className={`py-14 md:py-16 xl:py-20 ${className}`}
      data-section-id={id}
      id={id}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
