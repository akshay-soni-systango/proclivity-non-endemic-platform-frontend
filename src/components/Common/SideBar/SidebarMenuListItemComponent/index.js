import { Link } from "react-router-dom";
import './style.scss';

const SidebarMenuListItem = ({icon, link, title }) => {
  return (
    <li className="list-wrapper">
      <Link to={link}>
        {icon && <img src={icon} alt="Loading..." />}
        <span>{title} </span>
      </Link>
    </li>
  );
};
export default SidebarMenuListItem;