import React from 'react'
import { Link } from 'react-router-dom'
// import proclivityLogo from '../../../../assets/Icons/Logo.svg'; 
import {ReactComponent as Logo} from '../../../../assets/Icons/Logomark.svg'; 
import {ReactComponent as LogoName} from '../../../../assets/Icons/Union.svg'; 
import icon from '../../../../assets/Icons/Icon.svg'; 

const SidebarHeader = () => {
    return (
        <div className="logo-header">
            <Link to='/' className="logo-wrapper">
                <Logo className='logo-icon' />
                <LogoName className="on-hover logo-text" />
            </Link>
            <Link to='/' className="icon-right"><img className="sidebar-icon" src={icon} alt={icon} /></Link>
        </div>
    )
}

export default SidebarHeader