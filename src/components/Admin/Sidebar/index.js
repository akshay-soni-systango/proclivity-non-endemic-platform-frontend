import React from 'react';
import { ReactComponent as Cross } from '../../../assets/Icons/cross.svg';
import './style.scss'

const AdminSidebar = () => {
    return (
        <div className='sidebar-member-details'>
            <div className='sidebar-header'>
                <div className='siderbar-header-title'>
                    <h3>Olivia Rhyea</h3>
                    <p>orhye@proclity.com</p>
                </div>
                <Cross />
            </div>
        </div>
    )
}
export default AdminSidebar
