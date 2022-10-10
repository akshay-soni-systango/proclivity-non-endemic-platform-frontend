import { useState } from "react";
import Form from "react-bootstrap/Form";
import './style.scss'

const Switch = ({ ...props }) => {

  const [switchButton, setSwitchButton] = useState(false);
 
  return (
    <Form.Check onClick={setSwitchButton(!switchButton)} type="switch" id={props.id} className={`switch ${props.className}`} label={switchButton ? "Active" : null} />
  );
};

export default Switch;
