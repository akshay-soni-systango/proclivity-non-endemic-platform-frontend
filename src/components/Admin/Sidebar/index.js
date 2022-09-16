import React from 'react';
import { ReactComponent as Cross } from '../../../assets/Icons/cross.svg';
import { useDispatch } from 'react-redux';
import './style.scss'
import { authenticateAdminTable } from '../../../Features/Admin/adminSlice';

const AdminSidebar = () => {

    const dispatch = useDispatch();
    const handleClick = () => {
        console.log('CLICKED');
        dispatch(authenticateAdminTable(false))
    }
    return (
        <div className='sidebar-member-details'>
            <div className='sidebar-header'>
                <div className='siderbar-header-title'>
                    <h3>Olivia Rhyea</h3>
                    <p>orhye@proclity.com</p>
                </div>
                <Cross className='close-sidebar' onClick={handleClick} />
            </div>
        </div>
    )
}
export default AdminSidebar
