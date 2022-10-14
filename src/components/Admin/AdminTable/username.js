import React from 'react';
import Avatar from 'react-avatar';

const UserName = ({name, email}) => {
  return (
    <div className="username-wrapper d-flex">
         <Avatar size="40" round={true} name={name} className="me-1" ></Avatar>
         <div className="ms-2">
            <p className="mb-0">{name}</p>
            <p className="light-para fw-normal mb-0">{email}</p>
         </div>
    </div>
  )
}

export default UserName;
