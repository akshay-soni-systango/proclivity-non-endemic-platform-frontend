import { Formik } from 'formik';
import React from 'react'
import Input from '../../../Common/Input';
import Label from '../../../Common/Label';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().email('Email not correct').required('Required'),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
})
const Form = () => {
  return (
    
    <Formik
    initialValues={{ email: "", firstName: "", lastName: "" }}
    validationSchema={schema}
    // validate={(values) => {
    //   const errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    //       values.email
    //     )
    //   ) {
    //     errors.email = "Invalid email address";
    //   }
    //   return errors;
    // }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <Label htmlFor="groupName" showStar value="Email Address" />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="testuser@gmail.com"
          error={errors.email && touched.email && errors.email}
        />
        <Label htmlFor="groupName" showStar value="First Name" />
        <Input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          placeholder="Enter first name"
          error={errors.firstName && touched.firstName && errors.firstName}
        />
        <Label htmlFor="groupName" showStar value="Last Name" />
        <Input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          placeholder="Enter last name"
          error={errors.lastName && touched.lastName && errors.lastName}
        />
      </form>
    )}
  </Formik>
  )
}

export default Form
