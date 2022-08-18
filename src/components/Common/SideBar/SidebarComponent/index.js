import React from "react";
import './style.scss';
import home from '../../../../assets/home.svg'; 
import audiences from '../../../../assets/users.svg'; 
import campaigns from '../../../../assets/3-layers.svg'; 
import analytics from '../../../../assets/bar-chart.svg'; 
import library from '../../../../assets/book.svg'; 
import admin from '../../../../assets/settings.svg'; 
import help from '../../../../assets/help-circle.svg'; 
import notifications from '../../../../assets/bell.svg'; 
import SidebarHeader from "../SidebarHeaderComponent";
import SidebarMenuList from "../SidebarMenuComponent";

const SidebarComponent = () => {
    const sidebarOptions = [
        {
            title: 'Home',
            icon:  home,
            link: '/home',
        },
        {
            title: 'Audiences',
            icon: audiences,
            link: '/audiences',
        },
        {
            title: 'Campaigns',
            icon: campaigns,
            link: '/campaigns',
        },
        {
            title: 'Analytics',
            icon: analytics,
            link: '/analytics',
        },
        {
            title: 'Library',
            icon: library,
            link: '/library',
        },
        {
            title: 'Admin',
            icon: admin,
            link: '/admin',
        },
    ]
    const sidebarFooterOptions = [
        {
            title: 'Help',
            icon:  help,
            link: '/help',
        },
        {
            title: 'Notifications',
            icon: notifications,
            link: '/notifications',
        },
    ]
    return (
        <div className="app-sidebar">
            <div className="top-header">
                <SidebarHeader />           
                <SidebarMenuList list={sidebarOptions} />
            </div>
            <SidebarMenuList list={sidebarFooterOptions} />
        </div>
    )
}

export default SidebarComponent