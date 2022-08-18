import home from '../assets/Icons/home.svg';
import audiences from '../assets/Icons/users.svg'; 
import campaigns from '../assets/Icons/3-layers.svg'; 
import analytics from '../assets/Icons/bar-chart.svg'; 
import library from '../assets/Icons/book.svg'; 
import admin from '../assets/Icons/settings.svg'; 
import help from '../assets/Icons/help-circle.svg'; 
import notifications from '../assets/Icons/bell.svg'; 




export const sidebarMenuOptions = [
    {
        title: 'Home',
        icon: home,
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
export const sidebarFooterOptions = [
    {
        title: 'Help',
        icon: help,
        link: '/help',
    },
    {
        title: 'Notifications',
        icon: notifications,
        link: '/notifications',
    },
]