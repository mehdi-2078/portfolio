import { Formik, Form, Field } from 'formik';

// export const getStyles = (errors: any, fieldName: string, touched: any) => {
//   if (getIn(errors, fieldName) && getIn(touched, fieldName)) {
//     return {
//       border: '1px solid red',
//     };
//   }
//   return null;
// };
export const Contact = () => {
  // const ContactSchema = Yup.object().shape({
  //   name: Yup.string().min(3).max(10),
  //   last_name: Yup.string().min(3).max(30),
  //   phone_number: Yup.number().min(11).max(11).required('require'),
  //   email: Yup.string().email(),
  //   message: Yup.string().required('required'),
  // });

  return (
    <div className="flex-col w-[80%] md:w-[80%] mx-auto flex md:flex-row ">
      <div className="w-full md:w-[50%] mb-20 md:mb-0">
        <div className="mb-10 text-center md:text-start">
          <span className="text-yellow-400 text-3xl text-center pb-2 border-b-gray-200 border-b-2 ">
            contact me
          </span>
        </div>
        <p>jhgbhjbhbhjbhj</p>
      </div>
      <Formik
        initialValues={{
          name: '',
          last_name: '',
          email: '',
          phone_number: null,
          message: '',
        }}
        // validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values, resetForm);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="w-full">
                <div className="md:flex md:justify-between md:mb-4 w-full">
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="name"
                      placeholder="Name"
                      id="name"
                      className="mb-4 md:mb-0 w-full py-[14px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl "
                      // style={getStyles(errors, 'name', touched)}
                    />
                    {errors.name && touched.name ? (
                      <div className="block text-red-700 mt-2 font-[700]">{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="last_name"
                      placeholder="LastName"
                      id="last_name"
                      className="mb-4 md:mb-0 w-full py-[14px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl "
                      // style={getStyles(errors, 'last_name', touched)}
                    />
                    {errors.last_name && touched.last_name ? (
                      <div className="text-red-700 mt-2 font-[700]">{errors.last_name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="md:flex md:justify-between md:mb-4">
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="phone_number"
                      placeholder="PhoneNumber"
                      id="phone_number"
                      className="mb-4 md:mb-0 w-full py-[14px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl "
                      // style={getStyles(errors, 'phone_number', touched)}
                    />
                    {errors.phone_number && touched.phone_number ? (
                      <div className="block text-red-700 mt-2 font-[700]">
                        {errors.phone_number}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full md:w-[49%]">
                    <Field
                      name="email"
                      placeholder="Email"
                      id="email"
                      className="mb-4 md:mb-0 w-full py-[14px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl "
                      // style={getStyles(errors, 'email', touched)}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-700 mt-2 font-[700]">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  id="message"
                  className="pt-2 w-full rounded-md h-[150px] pl-4 text-white outline-none bg-[#643A6B] text-xl"
                  // style={getStyles(errors, 'message', touched)}
                />
                {errors.message && touched.message ? (
                  <div className="text-red-700 mt-2 font-[700]">{errors.message}</div>
                ) : null}
                <div className="">
                  <button
                    type="button"
                    // onClick={handleSubmit}
                    className="py-2 px-6 mt-2 rounded-md bg-[#E5BEEC] hover:bg-[#917FB3] hover:text-white text-black"
                  >
                    Submit
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
