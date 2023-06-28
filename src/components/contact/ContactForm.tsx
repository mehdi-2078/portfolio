import { Formik, Form, Field } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';

import axiosInstance from '../../../axios.config';

// @ts-ignore
// export const getStyles = (errors, fieldName, touched) => {
//   if (getIn(errors, fieldName) && getIn(touched, fieldName)) {
//     return {
//       border: '1px solid red',
//     };
//   }
// };
export const ContactForm = () => {
  const phoneRegExp = /^(\+98?)?{?(0?9[0-9]{9}}?)$/;

  const ContactSchema = Yup.object().shape({
    firstName: Yup.string().min(3).max(10),
    lastName: Yup.string().min(3).max(30),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email(),
    message: Yup.string().required('required'),
  });
  // @ts-ignore
  const handleForm = (value, resetForm) => {
    console.log(value);
    axiosInstance
      .post('contactMe', value)
      .then(() => {
        alert('success');
        resetForm();
      })
      .catch((err) => console.log('error:', err));
  };
  return (
    <div className=" w-full py-14 md:w-[50%]">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          handleForm(values, resetForm);
        }}
      >
        {({ errors, touched, handleSubmit }) => {
          return (
            <Form>
              <div className="w-full">
                <div className="md:flex md:justify-between md:mb-4 w-full">
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      id="firstName"
                      className="mb-4 md:mb-0 w-full py-[10px] md:py-[14px] rounded-md pl-4 text-white outline-none bg-gray-700 text-xl "
                      // style={getStyles(errors, 'name', touched)}
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="block text-red-700 mt-0/5 font-[700]">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      id="lastName"
                      className="mb-4 md:mb-0 w-full py-[10px] md:py-[14px] rounded-md pl-4 text-white outline-none bg-gray-700 text-xl "
                      // style={getStyles(errors, 'last_name', touched)}
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="text-red-700 mt-0/5 font-[700]">{errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                <div className="md:flex md:justify-between md:mb-4">
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="phone"
                      placeholder="Mobile"
                      id="phone"
                      className="mb-4 md:mb-0 w-full py-[10px] md:py-[14px] rounded-md pl-4 text-white outline-none bg-gray-700 text-xl "
                      // style={getStyles(errors, 'phone_number', touched)}
                    />
                    {errors.phone && touched.phone ? (
                      <div className="block text-red-700 mt-0/5 font-[700]">{errors.phone}</div>
                    ) : null}
                  </div>
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="email"
                      placeholder="Email"
                      id="email"
                      className="mb-4 md:mb-0 w-full py-[5px] md:py-[14px] rounded-md pl-4
                      text-white outline-none bg-gray-700 text-xl "
                      // style={getStyles(errors, 'email', touched)}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-700 mt-0/5 font-[700]">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  id="message"
                  className="pt-2 w-full rounded-md h-[200px] pl-4 text-white outline-none bg-gray-700 text-xl"
                  // style={getStyles(errors, 'message', touched)}
                />
                {errors.message && touched.message ? (
                  <div className="text-red-700 mt-0/5 font-[700]">{errors.message}</div>
                ) : null}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="w-full cursor-pointer py-3 mt-4 rounded-md
                    bg-gray-500 hover:bg-[#917FB3] hover:text-white text-black"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
