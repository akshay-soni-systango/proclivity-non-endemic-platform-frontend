import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/Logo.svg'; 
import icon from '../../../../assets/Icon.svg'; 

const SidebarHeader = () => {
    return (
        <div className="logo-header">
            <Link to='/'><img src={logo} alt={logo} /></Link>
            <Link to='/'><img src={icon} alt={icon} /></Link>
        </div>
    )
}

export default SidebarHeader