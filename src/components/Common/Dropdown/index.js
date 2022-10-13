import classNames from "classnames";
import React from "react";
import Select, { components } from 'react-select';
import './style.scss';

const Dropdown = ({ preValue, placeholderName, options, onChange, ...props }) => {
  const customStyles = {
    control: () => ({
      border: 'none',
      display: 'flex',
      padding: '4px 8px',
    }),
    indicatorSeparator: () => ({
      border: 'none',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? 'transparent'
        : isSelected
          ? 'transparent'
          : 'transparent',
      zIndex: 1,
      color: isSelected 
      ? '#2970FF'
      : '#344054',
      fontWeight: isSelected 
      ? '500'
      : 'normal',
      padding: '10px 16px',
      "&:hover": {
        color: "#2970FF",
        fontWeight: 500,
      }
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "#344054",
    }),
    singleValue: base => ({
      ...base,
      color: '#344054',
    }),
    menu: base => ({
      ...base,
      boxShadow: 'none',
      zIndex: 2,
    }),
    menuList: base => ({
      ...Dropdown,
      border: '1px solid #F2F4F7',
      boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
      borderRadius: '8px',
    }),
  }
  const ValueContainer = ({ children, ...props }) => {
    const { hasValue } = props;
    // const nbValues = getValue().length;
    if (!hasValue) {
      return (
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
      );
    }
    return (
      <components.ValueContainer {...props}>
        <div className="static-value">{preValue}&nbsp; {children}</div>
      </components.ValueContainer>
    );
  };
  const componentList = { ValueContainer };
  return (
    <div className={classNames("select-wrapper", props.className )}>
      <Select
        options={options}
        styles={customStyles}
        components={componentList}
        placeholder={<div className="select-placeholder-text">{preValue} {placeholderName}</div>}
        {...props}
        onChange={onChange}
        // menuIsOpen={true}
      />
    </div>
  );
};
Dropdown.defaultProps = {
  variant: "primary",
  options: []
};
export default Dropdown;
