import {Home} from '../assets/Icons';
import {User} from '../assets/Icons';
import {Stack} from '../assets/Icons';
import {BarChart} from '../assets/Icons';
import {Book} from '../assets/Icons';
import {Admin} from '../assets/Icons';
import {Help} from '../assets/Icons';
import {Bell} from '../assets/Icons';




export const sidebarMenuOptions = [
    {
        title: 'Home',
        Icon: Home,
        link: '/home',
    },
    {
        title: 'Audiences',
        Icon: User,
        link: '/audiences',
    },
    {
        title: 'Campaigns',
        Icon: Stack,
        link: '/campaign/home',
    },
    {
        title: 'Analytics',
        Icon: BarChart,
        link: '/analytics',
    },
    {
        title: 'Library',
        Icon: Book,
        link: '/library',
    },
    {
        title: 'Admin',
        Icon: Admin,
        link: '/admin',
    },
]
export const sidebarFooterOptions = [
    {
        title: 'Help',
        Icon: Help,
        link: '/help',
    },
    {
        title: 'Notifications',
        Icon: Bell,
        link: '/notifications',
    },
]