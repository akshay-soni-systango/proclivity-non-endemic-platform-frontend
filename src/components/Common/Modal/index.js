import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import Button from '../Button';
import './style.scss'

const Modal = ({ primaryBtnText, secondaryBtnText, show, variant, onHide, modalHeading, children, onPrimaryBtnClick, onSecondaryBtnClick }) => {

  return (
    <>
      <BootstrapModal show={show} onHide={onHide}>
        <BootstrapModal.Header closeButton={onHide}>
          <BootstrapModal.Title>{modalHeading}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          {children}
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          {primaryBtnText && <Button variant="secondary" onClick={onPrimaryBtnClick} text={primaryBtnText} />}
          {secondaryBtnText && <Button variant={variant} onClick={onSecondaryBtnClick} text={secondaryBtnText} />}
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>

  )
}

export default Modal;
