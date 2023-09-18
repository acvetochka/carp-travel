const { default: Link } = require('next/link');

import contacts from '../../data/contacts';
import ContactLabel from './ContactLabel';
import ContactLink from './ContactLink';
import social from '../../data/social';

const ContactBlock = () => {
  const { tel, mail } = contacts;

  return (
    <div className="flex flex-col items-start gap-x-5 gap-y-6 my-9 md:flex-row xl:flex-col xl:w-1/2 xl:justify-center xl:gap-[124px] xl:my-0">
      <div className="flex flex-col w-full gap-y-6 md:w-1/2 xl:w-full xl:gap-y-16">
        <div className="flex gap-5 w-full justify-end">
          <ul className="text-[14px] leading-6 flex-1 text-right flex flex-col">
            {tel.map(({ id, href, text }) => (
              <ContactLink key={id} href={href} text={text} />
            ))}
          </ul>
          <ContactLabel text="Phone number" className="w-[32%]" />
        </div>
        <div className="flex gap-5 w-full flex-1 justify-end md:col-start-1 md:col-end-3 md:row-start-2">
          <ContactLink href={mail.href} text={mail.text} />
          <ContactLabel text="E-mail" className="w-[32%]" />
        </div>
      </div>
      <div className="flex gap-5 w-full flex-1 justify-end md:w-1/2 md:justify-center xl:flex-row-reverse xl:w-full xl:justify-start">
        <ContactLabel text="Follow us" className="xl:w-[32%]" />
        <ul className="w-[32%] xl:text-right">
          {social.map(({ id, name, src }) => (
            <li key={id}>
              <Link
                href={src}
                target="_blank"
                className="text-[14px] leading-6 hover:underline md:text-[16px] xl:text-[18px]"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactBlock;
