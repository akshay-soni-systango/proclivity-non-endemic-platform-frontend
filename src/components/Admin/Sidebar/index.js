import React, { useEffect, useRef } from 'react';
import { ReactComponent as Cross } from '../../../assets/Icons/cross.svg';
// import { useDispatch } from 'react-redux';
import './style.scss'
// import { authenticateAdminTable } from '../../../Features/Admin/adminSlice';

const AdminSidebar = ({handleClose}) => {
    // const sidebarRef = useRef()
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     let handler = (e) => {
    //         if (!sidebarRef.current.contains(e.target)) {
    //             dispatch(authenticateAdminTable(false))
    //         }
    //     }
    //     document.addEventListener("mousedown", handler);

    //     return () => {
    //         document.removeEventListener("mousedown", handler )
    //     }
    // })

    // const handleClick = () => {
    //     console.log("called in sidebar");
    //     dispatch(authenticateAdminTable(false))
    // }

    return (      
            <div className='sidebar-member-details'>
                <div className='sidebar-header'>
                    <div className='siderbar-header-title'>
                        <h3>Olivia Rhyea</h3>
                        <p>orhye@proclity.com</p>
                    </div>
                    <Cross className='close-sidebar' onClick={handleClose} />
                </div>
                <hr/>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT_US</li>
                    <li>CONTACT_US</li>
                    <li>HOME</li>
                </ul>
            </div>
    )
}
export default AdminSidebar
