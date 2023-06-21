import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from "yup";

const scheme = yup.object().shape({
    firstName: yup.string().required(),
});
const Basic = () => (
        <Formik
            validationSchema={scheme}
            initialValues={{
                firstName: '',
                lastName: '',
            }}
            onSubmit={(data) => console.log(data)}
        >
            <Form>
                <Field id="firstName" name="firstName" placeholder="Jane" />
                <ErrorMessage name='firstName'/>
                <Field id="lastName" name="lastName" placeholder="Doe" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
);

export default Basic;
