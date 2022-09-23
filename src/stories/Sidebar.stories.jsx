import React from "react";
import SidebarComponent from "../components/Common/SideBar/SidebarComponent";
import SidebarHeader from "../components/Common/SideBar/SidebarHeaderComponent";
import SidebarMenuList from "../components/Common/SideBar/SidebarMenuComponent";
import {
  sidebarFooterOptions,
  sidebarMenuOptions,
} from "../util/sidebarOptions";

export default {
  title: "Component/SidebarComponent",
  component: SidebarComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const LeftSidebar = () => {    
    return (
        <div className="app-sidebar">
            <div className="top-header">
            <SidebarHeader />
            <SidebarMenuList list={sidebarMenuOptions} />
            </div> 
            <SidebarMenuList list={sidebarFooterOptions} /> 
        </div>
    )
};
