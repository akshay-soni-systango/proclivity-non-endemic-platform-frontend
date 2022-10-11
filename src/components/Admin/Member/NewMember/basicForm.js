import React from "react";
import Input from "../../../Common/Input";
import Label from "../../../Common/Label";

const BasicForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  /* and other goodies */
}) => (
  <>
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
  </>
);

export default BasicForm;
