import React from 'react';
import './style.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ReactComponent as Menu } from '../../../../assets/Icons/menu.svg';
import { ReactComponent as Edit } from '../../../../assets/Icons/editMember.svg';
import { ReactComponent as Deactivate } from '../../../../assets/Icons/deactivate.svg';
import { ReactComponent as Permission } from '../../../../assets/Icons/viewPermission.svg';
import { ReactComponent as UserAccess } from '../../../../assets/Icons/viewUserAccess.svg';
import { useHistory } from 'react-router-dom';

const DropdownMenu = ({row}) => {
    const status = row.values.memberStatus;
    const history = useHistory()
    const handleClick = (e,row) =>{
       history.push('/edit')
    }
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" className='view-more-btn' title={<Menu />}>
                <Dropdown.Item onClick={(e)=>handleClick(e,row)}><p><span>{<Edit />}</span>Edit</p></Dropdown.Item>
                <Dropdown.Item ><p> {status === 'Active'? <><span>{<Deactivate />}</span>Inactive </> : <><span>{<Deactivate />}</span>Active </> }</p></Dropdown.Item>
                <Dropdown.Item ><p><span>{<Permission />}</span>View Permission History</p></Dropdown.Item>
                <Dropdown.Item ><p><span>{<UserAccess />}</span>View User Access Logs</p></Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default DropdownMenu
