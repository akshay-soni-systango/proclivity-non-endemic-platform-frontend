import React from "react";
import "./style.scss";
import { Add, Admin } from "../../assets/Icons";
import Tab from "../Common/Tab";
import { tabs } from "./tabs";
import AdminHeader from "../Common/AdminHeader";

import { useHistory } from "react-router-dom";

const AdminHomePage = ({ title, MainIcon }) => { 
    const history = useHistory() 
    const handleclick = () => {
        history.push('/member/create')
    }
    
    const buttons = [
        {
          variant: 'primary',
          Icon: Add,
          text: 'New Member',
          onClick: handleclick
        }
      ]

    return (
        <div className="admin-page">
            <AdminHeader
                buttons={buttons}
                title="Admin"
                MainIcon={Admin}
            />
            <div>
                <Tab tabs={tabs} />
            </div>
        </div>
    );
};

export default AdminHomePage;
