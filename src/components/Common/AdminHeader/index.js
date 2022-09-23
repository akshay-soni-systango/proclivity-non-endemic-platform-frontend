import React from 'react';
import Button from "../Button";
import Heading from '../Heading';
import './style.scss'

const AdminHeader = ({buttons, title, MainIcon, subTitle}) => {
  return (
    <div className="admin-header">
        <div className="title-wrapper d-flex align-items-center">
          <MainIcon className="admin-header-icon" />
          <div className='admin-title'>
            <Heading level={2}>{title} </Heading>
            <Heading level={5}>{subTitle} </Heading>
          </div>
        </div>
        <div className="btn-wrapper text-end">
          {buttons.map(({...props}) => <Button className="ms-3" {...props} />)}
        </div>
      </div> 
  )
}

export default AdminHeader

