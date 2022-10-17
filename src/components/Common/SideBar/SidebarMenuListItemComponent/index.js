import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import ContextList from "../../Dropdown/ContextList";
import './style.scss';

const SidebarMenuListItem = ({Icon, link,
  title, image, contextOptions,
  contextId
 }) => {
const {pathname} = useLocation();
    const content = <>
      {Icon && <Icon />}
      {image && <img className="rounded-circle menu-item-image" src={image} alt={title} />}
      <span>{title} </span>
    </>
    const linkClassName = classNames('list-wrapper__link',{
      "active" : pathname === link,
      'has-image': image,
    })
  return (
    <>
      <li className="list-wrapper">
       {contextOptions && contextOptions.length > 0 ? 
        <ContextList className={linkClassName} items={contextOptions} id={contextId} title={content} /> :
        <Link to={link} className={linkClassName}>
          {content}
        </Link>}
      </li>
    </>
  );
};
export default SidebarMenuListItem;