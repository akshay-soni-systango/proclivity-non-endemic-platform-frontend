import classNames from "classnames";
import Form from "react-bootstrap/Form";
import './style.scss'

const Switch = ({ onClick, label, ...props }) => {

  return (
    <Form.Check onClick={onClick} type="switch" id={props.id} className={classNames("switch", props.className)} label={label} />
  );
};

export default Switch;
