import React from "react";
import LoginImage from "../../assets/images/login.png";
import { Row, Col, Form } from "react-bootstrap";
import Label from "../../components/Common/Label";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import Logo from "../../assets/Icons/Logo.svg";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import "./style.scss";

const ResetPassword = () => {
  const history = useHistory();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    console.log("values", values);
    history.push("/home");
  };

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "password field cannot be empty";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
        values.password
      )
    ) {
      errors.password = "Invalid password";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "confirm password field cannot be empty";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
        values.confirmPassword
      )
    ) {
      errors.confirmPassword = "Invalid confirm password";
    }

    return errors;
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validate,
    });

  return (
    <>
      <div className="login-wrapper">
        <img className="login-logo" src={Logo} alt="Logo" />
        <Row>
          <Col lg={6} md={6} sm={12} className="d-none d-md-flex bg-image">
            <div className="login-image d-flex align-items-center justify-content-center w-100">
              <img src={LoginImage} alt="Login" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <Form onSubmit={handleSubmit}>
                      <h2 className="main-title mb-4">Reset Password</h2>
                      <div>
                        <Label value="Password"></Label>
                        <Input
                          type="password"
                          placeholder="Please enter password"
                          value={values.password}
                          id="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.password &&
                            touched.password &&
                            errors.password
                          }
                        />
                      </div>
                      <div className="mt-6">
                        <Label value="Confirm Password"></Label>
                        <Input
                          type="password"
                          placeholder="Please enter confirm password"
                          value={values.confirmPassword}
                          id="confirmPassword"
                          name="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.confirmPassword &&
                            touched.confirmPassword &&
                            errors.confirmPassword
                          }
                        />
                      </div>
                      <Button type="submit" className="px-5">Reset Password</Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ResetPassword;
