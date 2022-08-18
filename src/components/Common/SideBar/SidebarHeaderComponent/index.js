import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/Logo.svg'; 
import logoMark from '../../../../assets/Logomark.svg'; 
import icon from '../../../../assets/Icon.svg'; 

const SidebarHeader = () => {
    return (
        <div className="logo-header">
            <Link to='/'>
                <img className="on-hover" src={logo} alt={logo} />
                <img className="without-hover" src={logoMark} alt={logo} />
            </Link>
            <Link to='/'><img className="sidebar-icon" src={icon} alt={icon} /></Link>
        </div>
    )
}

export default SidebarHeader