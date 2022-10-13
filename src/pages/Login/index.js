// import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.scss';
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginImage from "../../assets/images/login.png";
import Logo from "../../assets/Icons/Logo.svg";
import Heading from "../../components/Common/Heading";
import Label from '../../components/Common/Label';
import Input from '../../components/Common/Input';
import Button from "../../components/Common/Button";

const LoginPage = () => {
  
  const history = useHistory();

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  // const fetchUser = async () => {
  //   const response = await axios.get(
  //     "https://afd1-117-212-237-221.in.ngrok.io/users/",
  //     { headers: { "ngrok-skip-browser-warning": "abc" } }
  //   );
  //   console.log(response, "response");

  //   setUser(response.data);
  // };
  // console.log(user, "state of res");

  useEffect(() => {
    // fetchUser();
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues, "formValues");
    }
  }, [formErrors, formValues, isSubmit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    console.log(formErrors);
    const errors = {};
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    console.log(regex);

    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format ..!";
    }

    if (!values.password) {
      errors.password = "password is required ..!";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 characters ..!";
    } else if (values.password > 10) {
      errors.password = "password must not be greater than 10 characters ..!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setSubmit(true);

    const { password, email } = e.target.elements;
    const userEmail = email.value;
    const userPassword = password.value;
    console.log(userEmail, userPassword);
    if (userEmail !== "" && userPassword !== "") {
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userPassword", userPassword);
      history.push("/admin");
    }
  };
  return (
    <div className="login-wrapper">
      <img className="login-logo" src={Logo} />
      <Row className="w-100">
        <Col lg={6} md={6} sm={12} className="d-none d-md-flex bg-image">
          <div className="login-image d-flex align-items-center justify-content-center w-100">
            <img className="img-fluid" src={LoginImage} alt="Login" />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">

                  <Heading level={1}>Login</Heading>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <Label className="form-label">Email address</Label>
                      <Input
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                      />
                      <p style={{ color: "red" }}>{formErrors.email}</p>
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Password</Label>
                      <Input
                        name="password"
                        type="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                      <p style={{ color: "red" }}>{formErrors.password}</p>
                    </div>
                    <Button type="submit" className="px-5">Submit</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
