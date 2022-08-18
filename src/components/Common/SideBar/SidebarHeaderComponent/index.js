import React from 'react'
import { Link } from 'react-router-dom'
import proclivityLogo from '../../../../assets/Icons/Logo.svg'; 
import icon from '../../../../assets/Icons/Icon.svg'; 

const SidebarHeader = () => {
    return (
        <div className="logo-header">
            <Link to='/'><img src={proclivityLogo} alt={proclivityLogo} /></Link>
            <Link to='/'><img src={icon} alt={icon} /></Link>
        </div>
    )
}

export default SidebarHeader