// import Title from '../components/Title';
// import Form from '../components/Contacts/Form';
// import Section from '../components/Section';
// import ContactBlock from '../components/Contacts/ContactBlock';

import { ContactBlock, Form, Section, Title } from "@/components";
// import { Form } from "react-hook-form";


export const Contacts = () => {
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

