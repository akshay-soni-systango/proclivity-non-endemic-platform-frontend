import React from 'react';
import './style.scss';
import { ReactComponent as AdminIcon } from '../../assets/Icons/admin.svg';
import userIcon from '../../assets/Icons/userIconDark.svg';
import Invite from '../../assets/Icons/plus.svg';
import Button from '../Common/Button';
import Tab from '../Common/Tab';
import { tabs } from './tabs';
import { useHistory } from 'react-router-dom';

const AdminHomePage = () => {
    const history = useHistory()
    const handleClick = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className='admin-page'>
            <div className='header-wrapper'>
                <div className='title-wrapper'>
                    <div className='title-logo'>
                        <AdminIcon />
                    </div>
                    <div className='title'>
                        Admin
                    </div>
                </div>
                <div className='header-button'>
                    <Button className="me-2" variant="secondary" src={userIcon} text='Create Team' />
                    <Button className="me-2" variant="primary" src={Invite} text='Invite' />
                    <Button onClick={handleClick} className="me-2" variant="primary" text='Log Out' />
                </div>
            </div>
            <div>
                <Tab tabs={tabs} />
            </div>
        </div>
    )
}

export default AdminHomePage
