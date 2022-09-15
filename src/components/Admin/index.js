import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as AdminIcon } from '../../assets/Icons/admin.svg';
import userIcon from '../../assets/Icons/userIconDark.svg';
import Invite from '../../assets/Icons/plus.svg';
import Button from '../Common/Button';
import './style.scss'
import Tab from '../Common/Tab';
import { tabs } from './tabs';
import AdminSidebar from './Sidebar';
import { getAdminTableCheck } from '../../Features/Admin/adminSlice';

const AdminHomePage = () => {

    const openAdminSideBar = useSelector(getAdminTableCheck);
    console.log(openAdminSideBar, "openAdminSideBar");
    return (
        <div className='admin-page'>
            <div className='header-wrapper'>
                <div className='title-wrapper'>
                    <div className='title-logo'>
                        <AdminIcon />
                    </div>
                    <div className='title'>
                        Admin
                    </div>
                </div>
                <div className='header-button'>
                    <Button className="me-2" variant="secondary" src={userIcon} text='Create Team' />
                    <Button className="me-2" variant="primary" src={Invite} text='Invite' />
                </div>
            </div>
            <div>
                <Tab tabs={tabs} />
            </div>
            <div className={openAdminSideBar ? "open-side-bar" : "side-bar"}>
                <AdminSidebar />
            </div>

        </div>
    )
}

export default AdminHomePage
