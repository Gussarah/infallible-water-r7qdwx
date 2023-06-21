import {
  Formik,
  Field,
  useFormikContext,
} from "formik";
import { useEffect } from "react";
import { apiPromise } from "./helpers";
import * as yup from "yup";

const scheme = yup.object().shape({
  phone: yup.string().required(),
});
type Success = {
  onSuccess: (value: string) => void
}
const AutoSubmit = ({onSuccess}: Success) => {
  const { values, submitForm }: any = useFormikContext();
  useEffect(() => {
    if (values.phone.length === 11) {
      submitForm();
      onSuccess(values.phone)
    }
  }, [values, submitForm]);
  return null;
};

const Phone = () => {
  const {setFieldValue} = useFormikContext();
  return (
    <Formik
      validationSchema={scheme}
      initialValues={{
        phone: "",
      }}
      onSubmit={apiPromise}
    >
      {() => (
          <label>
            <AutoSubmit onSuccess={(value: string) => {setFieldValue('phone', value)}} />
            Телефон <Field name="phone" />
          </label>
      )}
    </Formik>
  );
};
export default Phone;
