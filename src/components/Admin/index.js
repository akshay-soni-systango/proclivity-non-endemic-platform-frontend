import React from "react";
import { Add, Admin } from "../../assets/Icons";
import "./style.scss";
import { useDispatch } from "react-redux";
import Tab from "../Common/Tab";
import { tabs } from "./tabs";
import AdminHeader from "../Common/AdminHeader";
import { createMember } from "../../Features/Admin/adminSlice";

const AdminHomePage = ({ title, MainIcon }) => {  
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(createMember(true));
        console.log("ok");
    }
    
    const buttons = [
        {
          variant: 'primary',
          Icon: Add,
          text: 'New Member',
          onClick: handleClick
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
                <Tab tabs={tabs} handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default AdminHomePage;
