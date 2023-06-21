import { Formik, Field, Form, FormikProps, ErrorMessage } from "formik";
import { useRef } from "react";
import * as yup from "yup";
import { apiPromise } from "./helpers";
import Phone from "./Phone";

const scheme = yup.object().shape({
  country: yup.string().required("Выберите страну"),
  name: yup.string().when("country", {
    is: (value: string) => value,
    then: (schema) => schema.required("Введите имя"),
  }),
  email: yup.string().email(),
  gender: yup.number().required(),
});

const FormikForm = () => {
  const form = useRef<any>(null);
  const handleSubmit = () => {
    if (form) {
      form.current?.handleSubmit();
      form.current?.setSubmitting(false);
    }
  };
  return (
    <>
      <Formik
        innerRef={form}
        validationSchema={scheme}
        initialValues={{
          country: "",
          name: "",
          phone: "",
          email: "",
          gender: "",
        }}
        onSubmit={apiPromise}
      >
        {() => (
          <Form>
            <div>
                <Field as="select" name="country">
                <option value="" disabled selected>
                  Страна
                </option>
                <option value="0">Russia</option>
                <option value="1">US</option>
              </Field>
              <ErrorMessage name="country" />
            </div>
            <div>
                Имя <Field name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <Phone />
            </div>
            <div>
              Email <Field name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label>
                <Field type="radio" name="gender" value={1} />M
              </label>
              <label>
                <Field type="radio" name="gender" value={0} />Ж
              </label>
              <ErrorMessage name="gender" />
            </div>
          </Form>
        )}
      </Formik>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </>
  );
};

export default FormikForm;
