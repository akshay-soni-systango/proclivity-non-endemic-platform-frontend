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
    const history = useHistory()
    const handleClick = (e,row) =>{
       console.log(row)
       history.push('/edit')
    }
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" className='view-more-btn' title={<Menu />}>
                <Dropdown.Item onClick={(e)=>handleClick(e,row)}><span>{<Edit />}</span><span>Edit</span></Dropdown.Item>
                <Dropdown.Item ><span>{<Deactivate />}</span><span>Deactivate</span></Dropdown.Item>
                <Dropdown.Item ><span>{<Permission />}</span><span>View Permission History</span></Dropdown.Item>
                <Dropdown.Item ><span>{<UserAccess />}</span><span>View User Access Logs</span></Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default DropdownMenu
