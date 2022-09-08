import { useState } from "react";
import Form from "react-bootstrap/Form";
import './style.scss'

const Switch = ({ ...props }) => {

  const [switchButton, setSwitchButton] = useState(false);
  const handleClick = () => {
    setSwitchButton(!switchButton)
  }
  return (
    <Form.Check onClick={handleClick} type="switch" id={props.id} className={`switch ${props.className}`} label={switchButton ? "On" : "Off"} />
  );
};

export default Switch;
