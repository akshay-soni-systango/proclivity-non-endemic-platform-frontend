import React from "react";
import Select, { components } from 'react-select';
import './style.scss';

const Dropdown = ({ preValue, placeholderName, options, ...props }) => {
  // const options = props.options || [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
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
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "#344054",
    }),
    singleValue: base => ({
      color: '#344054',
    })
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
    <div className={`select-wrapper ${props.className}`}>
      <Select
        options={options}
        styles={customStyles}
        components={componentList}
        placeholder={<div className="select-placeholder-text">{preValue} {placeholderName}</div>}
        {...props}
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
