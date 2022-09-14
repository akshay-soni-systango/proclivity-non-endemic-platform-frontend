import React from 'react';
import { ReactComponent as AdminIcon } from '../../assets/Icons/admin.svg';
import userIcon from '../../assets/Icons/userIconDark.svg';
import Invite from '../../assets/Icons/plus.svg';
import Button from '../Common/Button';
import './style.scss'
import Tab from '../Common/Tab';
import { tabs} from './tabs';

const AdminHomePage = () => {
    return (
        <div>
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
                    <Button className="me-2"  variant="secondary" src={userIcon} text='Create Team'/>
                    <Button className="me-2" variant="primary" src={Invite} text='Invite'/>
                </div>               
            </div>
            <div>
                    <Tab tabs={tabs}/>
                </div>

        </div>
    )
}

export default AdminHomePage
