import Title from '../Title';
import Form from './Form';
import Section from '../Section';
import ContactBlock from './ContactBlock';

const Contacts = () => {
  return (
    <Section id="contacts" className="contact-bg ">
      <div className="container">
        <Title title="Contact" accent="Us" />
        <div className="xl:flex xl:mt-[71px]">
          <ContactBlock />
          <Form />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
