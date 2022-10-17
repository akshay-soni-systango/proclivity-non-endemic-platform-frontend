import React from "react";
import SidebarMenuListItem from "../SidebarMenuListItemComponent";
import './style.scss';

const SidebarMenuList = ({ list }) => {
    const listData = ({ title, Icon, link }) => {
        return (
            <SidebarMenuListItem title={title} Icon={Icon} link={link} key={title} />          
        )
    }
    const listItems = list.map(listData);
    return (
        <nav className="nav-wrapper">
            <ul>{listItems}</ul>
        </nav>
    )
}

export default SidebarMenuList;