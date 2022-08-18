import React from "react";
import './style.scss';
import SidebarHeader from "../SidebarHeaderComponent";
import SidebarMenuList from "../SidebarMenuComponent";
import { sidebarFooterOptions, sidebarMenuOptions } from "../../../../util/sidebarOptions";

const SidebarComponent = () => {    
    return (
        <div className="app-sidebar">
            <div className="top-header">
                <SidebarHeader />           
                <SidebarMenuList list={sidebarMenuOptions} />
            </div>
            <SidebarMenuList list={sidebarFooterOptions} />
        </div>
    )
}

export default SidebarComponent