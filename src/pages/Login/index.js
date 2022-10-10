import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  // console.log(user, "State");

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false)

  const fetchUser = async() => {
    const response = await axios.get('https://c478-59-91-139-193.in.ngrok.io/users/')
    console.log(response, "response");
        
      setUser(response.data)
  }
  console.log(user , "state of res");
  useEffect(() => {
    fetchUser();

    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues, 'formValues');
    }
  }, [formErrors, formValues, isSubmit])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // setFormErrors(validate(formValues))
  }

  const validate = (values) => {
    console.log(formErrors);
    const errors = {}
    // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    console.log(regex);

    if (!values.email) {
      errors.email = "email is required"
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format ..!'
    }

    if (!values.password) {
      errors.password = "password is required ..!"
    } else if (values.password.length < 4) {
      errors.password = 'password must be more than 4 characters ..!'
    } else if (values.password > 10) {
      errors.password = 'password must not be greater than 10 characters ..!'
    }
    return errors
  }
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
      history.push('/admin')

    }
  }
  return (
    <div>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <form onSubmit={handleSubmit} className='container'>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            name='email'
            type="email"
            className="form-control"
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.email}</p>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name='password'
            type="password"
            className="form-control"
            value={formValues.password}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.password}</p>

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
