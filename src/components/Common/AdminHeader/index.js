import React from 'react';
import Button from "../Button";
import Heading from '../Heading';
import './style.scss'

const AdminHeader = ({buttons, title, mainIcon, subTitle}) => {
  return (
    <div className="admin-header">
        <div className="title-wrapper d-flex align-items-center">
          <img className="admin-header-icon" src={mainIcon} alt="Loading..." />
          <div className='admin-title'>
            <Heading level={2}>{title} </Heading>
            <Heading level={5}>{subTitle} </Heading>
          </div>
        </div>
        <div className="btn-wrapper text-end">
          {buttons.map(({variant, icon, text}) => <Button className="ms-3" variant={variant} icon={icon} text={text} />)}
        </div>
      </div> 
  )
}

export default AdminHeader

