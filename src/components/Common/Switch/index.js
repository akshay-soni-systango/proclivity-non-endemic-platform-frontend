import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import './style.scss'

const Switch = ({ ...props }) => {
  const [ state, setState ] = useState(false)
  const handleClick = () => {
    setState(!state)
  }

  return (
    <Form.Check type="switch" onClick={handleClick} id={props.id} className={`switch ${props.className}`} label={state ? "on" : "off"} />
  );
};

export default Switch;
