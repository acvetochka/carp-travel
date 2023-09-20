// const { default: Link } = require("next/link");
import Link from 'next/link';

const ContactLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      target="_parent"
      className="text-[14px] leading-6 hover:underline md:text-[16px] xl:text-[18px]"
    >
      {text}
    </Link>
  );
};

export default ContactLink;
