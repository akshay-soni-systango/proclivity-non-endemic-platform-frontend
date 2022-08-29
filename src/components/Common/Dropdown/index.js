import React from "react";
import Select from 'react-select'

// import { DropdownButton } from "react-bootstrap";
import './style.scss';

const Dropdown = ({ ...props }) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      const customStyles = {
        // container: () => ({
        //   padding: '5px 16px',
        // }),
        control: () => ({
            border: 'none',
            display: 'flex',
            padding: '4px 8px',
        }),
        indicatorSeparator: () => ({
            border: 'none',
        }),
        option: (styles, {isFocused, isSelected}) => ({
          ...styles,
          background: isFocused
              ? '#F2F4F7'
              : isSelected
                  ? '#F2F4F7'
                  : undefined,
          zIndex: 1,
          color: '#344054',
      }),
      }
  return (
    <div className={`select-wrapper ${props.className}`} >
        <Select 
        options={options}  
        styles={customStyles} 
        menuIsOpen={false} 
      />
    </div>
  );
};
Dropdown.defaultProps = {
  variant: "primary",
};
export default Dropdown;
