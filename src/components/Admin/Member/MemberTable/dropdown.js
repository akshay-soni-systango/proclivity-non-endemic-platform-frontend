import React from 'react';
import './style.scss';
import { Menu, Edit, Deactivate, Permission, Active, UserAccess  } from '../../../../assets/Icons';
import { useHistory } from 'react-router-dom';
import ContextList from '../../../Common/Dropdown/ContextList';


const DropdownMenu = ({row}) => {
    const status = row.values.memberStatus;
    const history = useHistory()
    const handleClick = (e,row) =>{
       history.push('/edit')
    }
    const menus = [
        {
            onClick: (e)=>handleClick(e,row),
            icon: <Edit />,
            text: 'Edit',
        },
        status === 'Active' && {
            icon: <Deactivate />,
            text: 'Inactive',
        },
        status !== 'Active' && {
            icon: <Active />,
            text: 'Active',
        },
        {
            icon: <Permission />,
            text: 'View Permission History',
        },
        {
            icon: <UserAccess />,
            text: 'View User Access Logs',
        },
    ].filter(Boolean)
    return (
        <ContextList 
            items={menus}
            id="dropdown-basic-button"
            className='view-more-btn'
            title={<Menu />}
        />
    )
}

export default DropdownMenu
