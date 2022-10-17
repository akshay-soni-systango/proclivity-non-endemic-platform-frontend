import { DropdownButton, Dropdown } from "react-bootstrap";

const ContextList = ({items, id, className, title}) => {
    return (
        <div>
            <DropdownButton id={id} className={className} title={title}>
                {
                    items?.map(({icon, text, ...props}) => <Dropdown.Item {...props} ><p><span>{icon}</span>{text}</p></Dropdown.Item>)
                }
            </DropdownButton>
        </div>
    )
}

export default ContextList;
