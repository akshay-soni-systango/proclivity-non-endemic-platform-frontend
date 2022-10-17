import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ReactComponent as Menu } from '../../../../assets/Icons/menu.svg';
import { ReactComponent as Edit } from '../../../../assets/Icons/editMember.svg';
import { ReactComponent as Deactivate } from '../../../../assets/Icons/deactivate.svg';
import { ReactComponent as Permission } from '../../../../assets/Icons/viewPermission.svg';
import { ReactComponent as UserAccess } from '../../../../assets/Icons/viewUserAccess.svg';
import { useHistory } from 'react-router-dom';
import { openStatusModal, setStatusModalState } from '../../../../Features/Admin/adminSlice';

const DropdownMenu = ({ row }) => {
    const dispatch = useDispatch()
    const status = row.values.memberStatus;
    const history = useHistory()
    const handleClick = (e, row) => {
        // console.log(row , "EDIT BUTTON CLICKED");
        history.push('/edit')
    }
    const manageStatus = (e, row) => {
        let cloneObject = {id:row.id , memberDetails:row.original}
        dispatch(openStatusModal(true))
        dispatch(setStatusModalState(cloneObject))
    }
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" className='view-more-btn' title={<Menu />}>
                <Dropdown.Item onClick={(e) => handleClick(e, row)}><p><span>{<Edit />}</span>Edit</p></Dropdown.Item>
                <Dropdown.Item onClick={(e) => manageStatus(e, row)}>
                    <p> {status === 'Active' ?
                        <>
                            <span>
                                {<Deactivate />}
                            </span>Inactive
                        </>
                        :
                        <>
                            <span>
                                {<Deactivate />}
                            </span>Active
                        </>}
                    </p>
                </Dropdown.Item>
                <Dropdown.Item ><p><span>{<Permission />}</span>View Permission History</p></Dropdown.Item>
                <Dropdown.Item ><p><span>{<UserAccess />}</span>View User Access Logs</p></Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default DropdownMenu
