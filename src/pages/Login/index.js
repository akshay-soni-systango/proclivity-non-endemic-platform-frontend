import React from "react";
import './style.scss';
import { useHistory, Link } from "react-router-dom";
import LoginImage from "../../assets/images/login.png";
import { Row, Col, Form } from "react-bootstrap";
import Label from "../../components/Common/Label";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import Heading from "../../components/Common/Heading";
import { } from "react-router-dom";
import Logo from "../../assets/Icons/Logo.svg";
import { useFormik } from "formik";
import "./style.scss";

const LoginPage = () => {

  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };

  // const [ formValues, setFormVaules ]= useState(initialValues);

  const onSubmit = ({ email, password }) => {
    if (email !== "" && password !== "") {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      history.push("/admin");
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "email field cannot be empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "password field cannot be empty";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
        values.password
      )
    ) {
      errors.password = "Invalid password";
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
        <Row className="w-100">
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
                      <Heading level={1}>Login</Heading>
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
                      <div>
                        <Label value="Password"></Label>
                        <Input
                          type="password"
                          placeholder="Please enter password (Test@123)"
                          value={values.password}
                          id="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.password &&
                            touched.password                       
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <Link to="/forgot-password">Forgot password ?</Link>
                      </div>
                      <Button type="submit" className="px-5">
                        Login
                      </Button>
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

export default LoginPage;
