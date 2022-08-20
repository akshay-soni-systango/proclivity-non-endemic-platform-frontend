import React from 'react'
import { Link } from 'react-router-dom'
import proclivityLogo from '../../../../assets/Icons/Logo.svg'; 
import logoMark from '../../../../assets/Logomark.svg'; 
import icon from '../../../../assets/Icons/Icon.svg'; 

const SidebarHeader = () => {
    return (
        <div className="logo-header">
            <Link to='/'>
                <img className="on-hover" src={proclivityLogo} alt={proclivityLogo} />
                <img className="without-hover" src={logoMark} alt={logoMark} />
            </Link>
            <Link to='/'><img className="sidebar-icon" src={icon} alt={icon} /></Link>
        </div>
    )
}

export default SidebarHeader