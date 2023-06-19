import {
  Formik,
  Field,
  Form,
  FormikProps,
  ErrorMessage,
  useFormikContext,
} from "formik";
import { useEffect } from "react";
import { apiPromise } from "./helpers";
import * as yup from "yup";

const scheme = yup.object().shape({
  phone: yup.string().required(),
});

const AutoSubmit = (onSuccess: any) => {
  const { values, submitForm }: any = useFormikContext();
  useEffect(() => {
    if (values.phone.length === 11) {
      submitForm();
      onSuccess('phone', values.phone)
    }
  }, [values, submitForm]);
  return null;
};

const Phone = () => {
  const as = useFormikContext();
  console.log(as)
  return (
    <Formik
      validationSchema={scheme}
      initialValues={{
        phone: "",
      }}
      onSubmit={apiPromise}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <label>
            <AutoSubmit onSuccess={()=>{}} />
            <Field name="phone" /> Телефон
          </label>
        </Form>
      )}
    </Formik>
  );
};
export default Phone;
