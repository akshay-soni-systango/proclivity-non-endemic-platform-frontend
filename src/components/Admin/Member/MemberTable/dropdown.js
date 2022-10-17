import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useHistory } from 'react-router-dom';
import { openStatusModal, setStatusModalState } from '../../../../Features/Admin/adminSlice';
import { Menu, Edit, Deactivate, Permission, Active, UserAccess  } from '../../../../assets/Icons';

// import ContextList from '../../../Common/Dropdown/ContextList';


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
    // const menus = [
    //     {
    //         onClick: (e)=>handleClick(e,row),
    //         icon: <Edit />,
    //         text: 'Edit',
    //     },
    //     status === 'Active' && {
    //         icon: <Deactivate />,
    //         text: 'Inactive',
    //     },
    //     status !== 'Active' && {
    //         icon: <Active />,
    //         text: 'Active',
    //     },
    //     {
    //         icon: <Permission />,
    //         text: 'View Permission History',
    //     },
    //     {
    //         icon: <UserAccess />,
    //         text: 'View User Access Logs',
    //     },
    // ].filter(Boolean)
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
        // <ContextList 
        //     items={menus}
        //     id="dropdown-basic-button"
        //     className='view-more-btn'
        //     title={<Menu />}
        // />
    )
}

export default DropdownMenu
