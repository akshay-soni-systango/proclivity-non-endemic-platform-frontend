import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AdminIcon } from '../../assets/Icons/admin.svg';
import userIcon from '../../assets/Icons/userIconDark.svg';
import Invite from '../../assets/Icons/plus.svg';
import Button from '../Common/Button';
import './style.scss'
import Tab from '../Common/Tab';
import { tabs } from './tabs';
import AdminSidebar from './Sidebar';
import { authenticateAdminTable, getAdminTableCheck } from '../../Features/Admin/adminSlice';

const AdminHomePage = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    const openAdminSideBar = useSelector(getAdminTableCheck);
    // console.log(openAdminSideBar, "   OUR STATE TO TOGGLE");

    const handleClose = () => {
        // console.log("HANDLE CLOSE CALLED");
        dispatch(authenticateAdminTable(false))
    }
  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClose()
            }
        }

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [handleClose])

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
            <div ref={ref} className={`${openAdminSideBar ? "open-side-bar" : "close-side-bar"}`} onClick={handleClose}>
                <AdminSidebar handleClose={handleClose} />
            </div>
        </div>
    )
}

export default AdminHomePage;
