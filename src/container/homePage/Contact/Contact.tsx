import { ContactForm } from '../../../components/contact/contactForm';
import { ContactInfo } from '../../../components/contact/contactInfo';

export const Contact = () => {
  return (
    <div className="flex-col w-[80%] md:w-[80%] mx-auto flex md:flex-row pt-[80px]">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
