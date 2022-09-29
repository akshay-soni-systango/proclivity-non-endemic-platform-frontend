import React, { useEffect, useState } from 'react';
import './style.scss';
import MemberData from '../../../../util/CampaignData/ADMIN_MEMBER.json';

const UserName = () => {
    const [memberName , setMemberName] = useState([]);
    useEffect(()=>{
       setMemberName(MemberData)
    },[setMemberName])

    const userNameIcon = memberName?.map((name)=> name.Name.split(" ").map(name => name[0]).join("").substr(0, 2))

    // console.log(userNameIcon);

    // console.log(userNameIcon , "userNameIcon");
    // console.log(memberName , "state of names ");
  return (
    <div className="user-name-wrapper">
      <div className='username-icon'>
        {/* {
            userNameIcon.map((name)=>{
                return <p>{name}</p>
            })
        } */}
      </div>
      <div className='username-email'>
        AZEEM
      </div>
       </div>
  )
}

export default UserName
