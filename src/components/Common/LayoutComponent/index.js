import React from 'react'
// import { Link } from 'react-router-dom';
import SidebarComponent from '../SideBar/SidebarComponent';
import './style.scss'


const Layout = ({ children }) => {
    return (
        <div className='wrapper'>
            <SidebarComponent />
            <div className='main-container'>
                <main>{children}</main>                
            </div>
        </div>
    )
}

export default Layout