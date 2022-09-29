import React, {useState} from "react";
import { Notification } from "../assets/Icons";
import Button from "../components/Common/Button";
import Modal from "../components/Common/Modal";

export default {
  title: "Component/Modal",
  component: Modal,
};



export const ModalElement = ({children, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return <>
<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
<Modal show={show} onHide={handleClose}  {...props}>{children}</Modal>
</> 
}
ModalElement.args = {
    primaryBtnText: "Cancel",
    secondaryBtnText: "Deactivate", 
    modalHeading: <Notification />,
    children: <>
    <h4>Confirm that Lana Steyer will be Deactivated</h4>
    <p className="light-para fw-normal">A deactivated user will no longer have access to the platform</p>
    </>,
    // onPrimaryBtnClick: {handleClose}, 
    // onSecondaryBtnClick: {handleClose}
}
