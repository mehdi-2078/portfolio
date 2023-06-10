import { ContactForm, ContactInfo } from '../../../components';

export const Contact = () => {
  return (
    <div className="flex-col w-[80%] md:w-[80%] mx-auto flex md:flex-row pt-[80px]">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
