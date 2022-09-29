import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import Button from '../Button';
import './style.scss'

const Modal = ({primaryBtnText, secondaryBtnText, show, onHide, closeButton, modalHeading, children, onPrimaryBtnClick, onSecondaryBtnClick}) => {

  return (
    <>
      <BootstrapModal show={show} onHide={onHide}>
        <BootstrapModal.Header closeButton={closeButton}>
          <BootstrapModal.Title>{modalHeading}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{children}</BootstrapModal.Body>
        <BootstrapModal.Footer>
          {primaryBtnText && <Button variant="secondary" onClick={onPrimaryBtnClick} text={primaryBtnText}/>}
          {secondaryBtnText && <Button variant="danger" onClick={onSecondaryBtnClick} text={secondaryBtnText}/>}
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>

  )
}

export default Modal;
