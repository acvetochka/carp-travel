import Title from './Title';
import Link from 'next/link';
import Form from './Form';

const social = [
  {
    id: 1,
    name: 'facebook',
    src: 'https://www.facebook.com',
  },
  { id: 2, name: 'instagram', src: 'https://www.instagram.com/' },
  { id: 3, name: 'youtube', src: 'https://www.youtube.com/' },
  { id: 4, name: 'tiktok', src: 'https://tiktok.com/' },
];

const Contacts = () => {
  return (
    <section
      className="contact-bg min-h-screen bg-opacity-75 py-14 md:py-16 xl:py-20"
      data-section-id="contacts"
      id="contacts"
    >
      <div className="container">
        <Title title="Contact" accent="Us" />
        <div className="xl:flex xl:mt-[71px]">
          <div className="flex flex-col items-start gap-x-5 gap-y-6 my-9 md:flex-row xl:flex-col xl:w-1/2 xl:justify-center xl:gap-[124px] xl:my-0">
            <div className="flex flex-col w-full gap-y-6 md:w-1/2 xl:w-full xl:gap-y-16">
              <div className="flex gap-5 w-full justify-end">
                <ul className="text-[14px] leading-6 flex-1 text-right ">
                  <li className="block">
                    <Link
                      href="tel:+380981234567"
                      className="text-[14px] leading-6 hover:underline md:text-[16px] xl:text-[18px]"
                    >
                      +38 (098) 12 34 567
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+380731234567"
                      className="text-[14px] leading-6 hover:underline md:text-[16px] xl:text-[18px]"
                    >
                      +38 (073) 12 34 567
                    </Link>
                  </li>
                </ul>
                <p className="text-label font-extralight w-[32%]">
                  Phone number
                </p>
              </div>
              <div className="flex gap-5 w-full flex-1 justify-end md:col-start-1 md:col-end-3 md:row-start-2">
                <Link
                  href="mailto:support@carptravel.com"
                  className="text-[14px] leading-6 hover:underline md:text-[16px] xl:text-[18px]"
                >
                  support@carptravel.com
                </Link>
                <p className="text-label font-extralight w-[32%]">E-mail</p>
              </div>
            </div>
            <div className="flex gap-5 w-full flex-1 justify-end md:w-1/2 md:justify-center xl:flex-row-reverse xl:w-full xl:justify-start">
              <p className="text-label font-extralight xl:w-[32%]">Follow us</p>
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

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
