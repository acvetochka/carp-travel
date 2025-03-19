import Link from 'next/link';
import PropTypes from 'prop-types';

export const ContactLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      target="_parent"
      className="text-[14px] leading-6 md:text-[16px] xl:text-[18px] link"
    >
      {text}
    </Link>
  );
};

ContactLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

