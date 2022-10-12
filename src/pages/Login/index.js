import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/Icons/Logo.svg";
import Heading from "../../components/Common/Heading";
import './style.scss'

const LoginPage = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  // console.log(user, "State");

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const fetchUser = async () => {
    const response = await axios.get(
      "https://afd1-117-212-237-221.in.ngrok.io/users/",
      { headers: { "ngrok-skip-browser-warning": "abc" } }
    );
    console.log(response, "response");

    setUser(response.data);
  };

  console.log(user, "state of res");
  useEffect(() => {
    fetchUser();

    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues, "formValues");
    }
  }, [formErrors, formValues, isSubmit]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // setFormErrors(validate(formValues))
  };

  const validate = (values) => {
    console.log(formErrors);
    const errors = {};
    // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
  // console.log(formValues);

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
      <Row>
        <Col lg={6} md={6} sm={12} className="d-none d-md-flex bg-image">
          <div className="login-image">
            {/* <img src={LoginImage} alt="Login"/> */}
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
                      <label className="form-label">Email address</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      <p style={{ color: "red" }}>{formErrors.email}</p>
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        value={formValues.password}
                        onChange={handleChange}
                      />
                      <p style={{ color: "red" }}>{formErrors.password}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
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
