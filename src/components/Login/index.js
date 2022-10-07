import React, {useState} from 'react'
import LoginImage from "../../assets/images/login.png"
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import Label from '../Common/Label';
import Input from '../Common/Input';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Icons/Logo.svg"
import "./style.scss"

const Login = () => {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>
      <div className='login-wrapper'>
      <img className='login-logo' src={Logo} />
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className='login-image'>
                  <img src={LoginImage} alt="Login"/>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                {loggedIn ? 
                
                <div className='login-form'>
                <Form>
                  <h2 className='main-title mb-4'>Login</h2>
                  <div>
                    <Label value="Email"></Label>
                    <Input placeholder="Please enter email" />
                  </div>
                  <div>
                    <Label value="Password"></Label>
                    <Input placeholder="Please enter password" />
                  </div>
                  <div>
                    <p><span><questionMark /></span>  Session timed out, please login again</p>
                  </div>
                  <div className='mb-4'>
                    <Link to="" onClick={() => setLoggedIn(false)}>Forgot password</Link>
                  </div>
                  <Button type='submit'>Login</Button>
                </Form>
                </div> :

                <div className="login-form">
                <Form>
                  <h2 className='main-title mb-4'>Forgot Password</h2>
                  <div>
                    <Label value="Email Address"></Label>
                    <Input placeholder="Please enter email" />
                  </div>
                  <div className='mb-4'>
                    <Link to="" onClick={() => setLoggedIn(true)}>Back to Login</Link>
                  </div>
                  <Button type='submit'>Submit</Button>
                </Form>
                </div>
              }

                
              </Col>
            </Row>
      </div>
    </>
  )
}

export default Login;
