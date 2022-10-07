import { useState } from "react";
import Form from "react-bootstrap/Form";
import './style.scss'

const Switch = ({ onClick, label, ...props }) => {

  return (
    <Form.Check onClick={onClick} type="switch" id={props.id} className={`switch ${props.className}`} label={label} />
  );
};

export default Switch;
