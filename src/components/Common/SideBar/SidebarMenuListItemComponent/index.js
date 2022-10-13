import { Link, useLocation } from "react-router-dom";
import './style.scss';

const SidebarMenuListItem = ({Icon, link, title }) => {
const {pathname} = useLocation();
  return (
    <li className="list-wrapper">
      <Link to={link} className={pathname === link ? "active" : undefined}>
        {Icon && <Icon />}
        <span>{title} </span>
      </Link>
    </li>
  );
};
export default SidebarMenuListItem;