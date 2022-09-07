import Form from "react-bootstrap/Form";
import './style.scss'

const Switch = ({ ...props }) => {
  return (
    <Form.Check type="switch" id={props.id} className={`switch ${props.className}`} label="On" />
  );
};

export default Switch;
