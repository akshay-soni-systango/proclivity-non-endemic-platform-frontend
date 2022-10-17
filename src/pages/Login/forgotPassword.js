import React from "react";
import LoginImage from "../../assets/images/login.png";
import { Row, Col, Form } from "react-bootstrap";
import Label from "../../components/Common/Label";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/Logo.svg";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import "./style.scss";

const ForgotPassword = () => {
  const history = useHistory();

  const initialValues = {
    email: "",
  };

  const onSubmit = (values) => {
    history.push("/reset-password");
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "email field cannot be empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
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
                      <h2 className="main-title mb-4">
                        Please Enter Your Email
                      </h2>
                      <div>
                        <Label value="Email"></Label>
                        <Input
                          placeholder="Please enter email"
                          value={values.email}
                          id="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email && touched.email}
                        />
                      </div>
                      <div className="mb-4">
                        <Link to="/login">Back to Login</Link>
                      </div>
                      <Button type="submit" className="px-5">Submit</Button>
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

export default ForgotPassword;
