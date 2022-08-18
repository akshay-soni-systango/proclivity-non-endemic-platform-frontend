import React from "react";
import SidebarMenuListItem from "../SidebarMenuListItemComponent";
import './style.scss';

const SidebarMenuList = ({ list }) => {
    const listData = ({ title, icon, link }) => {
        return (
            <div key={title}>
                <SidebarMenuListItem title={title} icon={icon} link={link} />
            </div>
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